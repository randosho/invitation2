# Invitation site: session notes

## Request
Build a new wedding invitation site like the one in the earlier "Run code" session
(repo `sdivye92/invitation`, Shweta & Sagar), using a reference video
(`reference_vid.mp4`, an invitestory.in template: "Ananya weds Rohit") for design.
Later clarification: the old site is context for **how it should behave** only.
The **design** follows the new video: cream paper, wine and gold, marigold toran, falling petals,
wine envelope with a gold seal, peach countdown. Do not merge the two designs.

## What was done
1. Found the "Run code" session and cloned its repo. Read its HTML, CSS and JS.
   It had an envelope-open reveal, a countdown, a schedule and a WhatsApp RSVP.
2. Split the video into frames with ffmpeg and studied the look.
3. Built a static site, all art generated in SVG by code (no image files):
   - `index.html`: sections: hero, invitation (envelope), bride and groom, countdown, events, venue, footer
   - `styles.css`: tokens, paper texture, envelope, petals, tiles
   - `art.js`: toran, kalash, lamps, banana leaves, mandala, ornaments
   - `script.js`: `CONFIG`, countdown, petals, envelope open, generated music loop
4. Published a private preview as an artifact and checked it in headless Chromium at 390px.

## Details supplied by the user
- People: Deepak and Laxmi (assumed Laxmi = bride, Deepak = groom).
- Haladi: 24/11/2026. Lagna: 25/11/2026, dupari (afternoon) 3:05 PM.
- Map: https://maps.app.goo.gl/xzAiPQ1xLEn72Y3u9?g_st=aw

## Changes requested
- Remove the RSVP section (done, including the form and its code).
- Envelope should look like a real envelope (done: front flaps, pointed flap, gold seal,
  the card slides out and the envelope stays).
- Petals should be small (done: small, soft, slow, marigold and pink).

## Notes and limits
- The reference site https://shubha-vivaham.invitestory.in/ could not be fetched from the
  cloud sandbox (proxy 403). The design comes from video frames only. Not seen: anything after
  "The Auspicious Moment" in the video.
- The cartoon couple art is not copied. A kalash and two lamps are drawn instead.
  Put `assets/couple.png` next to `index.html` to replace the kalash.
- Parents' names and the venue name and address were not given, so they are left out.
- Not tested: music, desktop width.
- No GitHub push was possible from the session.

## Run locally
Open `index.html`, or run `python3 -m http.server 8123` in the folder.
Edit names, dates and the map link in the `CONFIG` block at the top of `script.js`.
