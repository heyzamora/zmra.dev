import { Buffer } from 'node:buffer';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { allPosts } from '@/data/posts';
import { projects } from '@/data/projects';

const WIDTH = 1200;
const HEIGHT = 630;

// Component-based project icons (Svelte components, not plain SVG files) can't be
// rasterized on the fly — they're pre-rendered once into static/og/*.png instead.
const COMPONENT_ICON_FALLBACKS: Record<string, string> = {
  Rove: '/og/rove.png',
  CIESER: '/og/cieser.png'
};

let fontsPromise: Promise<{ regular: ArrayBuffer; bold: ArrayBuffer }> | null = null;

function loadFonts(origin: string) {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      fetch(new URL('/fonts/og/Inter-Regular.ttf', origin)).then((r) => r.arrayBuffer()),
      fetch(new URL('/fonts/og/Inter-Bold.ttf', origin)).then((r) => r.arrayBuffer())
    ]).then(([regular, bold]) => ({ regular, bold }));
  }
  return fontsPromise;
}

async function loadProjectIconPng(projectTitle: string, origin: string): Promise<string | null> {
  const project = projects.find((p) => p.title === projectTitle);
  if (!project?.icon) return null;

  try {
    const iconPath =
      typeof project.icon === 'string' ? project.icon : COMPONENT_ICON_FALLBACKS[projectTitle];
    if (!iconPath) return null;

    if (iconPath.endsWith('.png') || iconPath.endsWith('.jpg') || iconPath.endsWith('.jpeg')) {
      const res = await fetch(new URL(iconPath, origin));
      const buffer = Buffer.from(await res.arrayBuffer());
      return `data:image/png;base64,${buffer.toString('base64')}`;
    }

    // SVG source (local or remote) — rasterize it to PNG so satori/resvg can embed it.
    const res = await fetch(new URL(iconPath, origin));
    const svgText = await res.text();
    const png = new Resvg(svgText, { fitTo: { mode: 'width', value: 160 } }).render().asPng();
    return `data:image/png;base64,${png.toString('base64')}`;
  } catch {
    return null;
  }
}

export const GET: RequestHandler = async ({ params, url }) => {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) error(404, 'Post not found');

  const [{ regular, bold }, iconDataUri] = await Promise.all([
    loadFonts(url.origin),
    post.project ? loadProjectIconPng(post.project, url.origin) : Promise.resolve(null)
  ]);

  const accent = projects.find((p) => p.title === post.project)?.color ?? '#a1a1aa';

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0a',
          color: 'white',
          padding: '64px',
          fontFamily: 'Inter'
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '16px' },
              children: [
                post.project
                  ? {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          padding: '10px 20px',
                          borderRadius: '999px',
                          border: `2px solid ${accent}`
                        },
                        children: [
                          iconDataUri
                            ? {
                                type: 'img',
                                props: { src: iconDataUri, width: 36, height: 36 }
                              }
                            : null,
                          {
                            type: 'span',
                            props: { style: { fontSize: '24px', opacity: 0.9 }, children: `Building ${post.project}` }
                          }
                        ].filter(Boolean)
                      }
                    }
                  : null
              ].filter(Boolean)
            }
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { fontSize: '60px', fontWeight: 700, lineHeight: 1.15 },
                    children: post.title
                  }
                },
                {
                  type: 'div',
                  props: {
                    style: { fontSize: '28px', opacity: 0.7, lineHeight: 1.4 },
                    children: post.description
                  }
                }
              ]
            }
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '24px',
                opacity: 0.6
              },
              children: [
                { type: 'span', props: { children: 'César Zamora · zmra.dev' } },
                {
                  type: 'span',
                  props: {
                    children: new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      timeZone: 'UTC'
                    })
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        { name: 'Inter', data: regular, weight: 400, style: 'normal' },
        { name: 'Inter', data: bold, weight: 700, style: 'normal' }
      ]
    }
  );

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
};
