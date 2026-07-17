# For My Love 💌

A premium, animated love-story website — pure HTML, CSS, and JavaScript, no frameworks or build step required.

## Files

```
index.html   → structure / all sections
style.css    → all styling, animations, dark & light mode
script.js    → all behavior + the CONFIG object (edit this first!)
assets/
  images/    → put your photos + album cover here
  music/     → put your song file here
  fonts/     → (optional) self-hosted fonts if you don't want Google Fonts
```

## 1. Customize — edit `CONFIG` at the top of `script.js`

```js
const CONFIG = {
  loverName: "My Love",
  yourName: "Your Love",
  relationshipStart: "2023-02-14T00:00:00", // powers the live "Together Since" timer
  galleryImages: [ { src: "assets/images/photo1.jpg", caption: "The day we met" }, ... ],
  music: { src: "assets/music/our-song.mp3", title: "Our Song", artist: "for you, from me", cover: "assets/images/album-cover.jpg" },
  password: "141223", // the Secret Surprise password — hint shown is "our special date"
  loveLetter: "…",
  openWhen: { happy: "…", miss: "…", sad: "…" },
  memories: [ { date: "...", title: "...", text: "..." }, ... ],
  reasons: [ "I love your smile.", ... ],  // 90+ included, add as many as you like
  quotes: [ "…", ... ],
};
```

Everything on the page — the hero name, the letter, the timer, the gallery, the timeline, the password, the reasons — is generated from this object. You don't need to touch the HTML.

- **Photos**: drop image files into `assets/images/` and reference them in `galleryImages`. If an image is missing, the card gracefully shows a placeholder icon instead of breaking.
- **Music**: drop an mp3 into `assets/music/` and point `music.src` at it. The player never autoplays — it waits for a click.
- **Password**: stored in plain text in the JS, so anyone who opens dev tools could find it. That's fine for a private gift, just don't use anything sensitive.

## 2. Preview locally

Because the page uses `fetch`-free relative paths, you can just open `index.html` in a browser. For the smoothest experience (and to avoid any browser file:// quirks), serve it locally:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## 3. Deploy

Drag-and-drop the whole folder onto **Netlify** or **Vercel**, or push it to a GitHub repo and enable **GitHub Pages** — no build step needed.

## Notes

- Respects `prefers-reduced-motion`.
- Dark/light toggle in the nav bar.
- Cursor sparkle/heart trail only runs on devices with a fine pointer (skipped on touch).
- All copy is placeholder — make it yours!
