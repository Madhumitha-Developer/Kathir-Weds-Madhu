# Kathir & Madhu — Wedding Website

Static site (no build step). Deploy the whole folder to Vercel.

## 1. Edit `config.js`
- `siteUrl` — your final Vercel URL (also update the `og:image` / `og:url` lines at the top of `index.html` so WhatsApp shows the preview card).
- `events` — dates and time labels (English + Tamil).
- `contacts` — add names and phone numbers; a Call button appears only when a number is filled in.
- `uploads.alwaysOpen: true` while testing the photo upload; set back to `false` before sharing.

## 2. Turn on live Wishes + Photo Gallery (Supabase, free)
1. Create a project at supabase.com.
2. SQL Editor → paste `supabase-setup.sql` → Run.
3. Project Settings → API → copy the Project URL and the `anon` public key into `config.js → supabase`.
Without these, the site runs in preview mode (wishes/photos stay on each visitor's device).

## 3. Deploy
`npx vercel --prod` inside this folder, or drag the folder into vercel.com/new.

## Features
Wax-seal intro with gate animation and music ("Tere Bina" — assets/song.mp3, fades in, pause button bottom-right) · falling bougainvillea petals ·
English / தமிழ் switch · live countdown to the muhurtham ("They are married!" afterwards) ·
event cards with Google Calendar + .ics download · venue directions + Google Maps + copy address ·
guest wishes (live) · guest photo uploads (3 per device, only on 15–16 Nov, auto-compressed) with lightbox gallery ·
download invitation card · WhatsApp share + copy link · family contacts with Call buttons.
