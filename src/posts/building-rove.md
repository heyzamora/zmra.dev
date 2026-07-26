---
title: 'Building Rove: a mileage tracker that keeps your data on your phone'
description: 'Why Rove is local-first, how the GPS tracking avoids drifting miles, and what is still on the roadmap.'
date: '2026-07-25'
published: true
project: 'Rove'
tags: ['Expo', 'React', 'TypeScript', 'SQLite']
---

Most mileage trackers for gig work are subscriptions wrapped around a database
you never see. Rove started from one annoyance: why does tracking miles I
already drove require a monthly fee and an account?

## Local-first, on purpose

Every trip in Rove lives in an on-device SQLite database. There's no sign-up
step and no server round-trip before a trip is saved — the app works the same
with the phone in airplane mode as it does anywhere else. Backups and restores
are just JSON export/import, which also means the data is portable if I ever
want to move it somewhere else.

## Keeping the miles honest

GPS tracking runs in the foreground, sums the actual driven path, and
reverse-geocodes the From/To addresses so a trip reads like "Home → Downtown"
instead of a pair of coordinates. The tricky part was accuracy: raw GPS fixes
jitter enough that a parked car can rack up phantom miles. Filtering out noisy
fixes before summing distance was the difference between numbers that match
the odometer and numbers that don't.

## What's next

The current build is Expo Go-friendly on purpose, so testing doesn't require
an Apple developer account. The next milestones are a proper development
build to unlock background tracking (recording a trip with the screen off),
Android maps once a Google Maps key is wired up, and eventually motion
auto-detect so starting a trip doesn't require opening the app at all.

Cloud sync is deliberately not on that list yet. The `synced` flag already
exists in the schema as a seam for later, but local-first stays the default —
accounts and servers are opt-in, not required.
