# For My Begam ❤️ — GitHub Pages Ready

A premium romantic birthday website for **Noor Darkhashan**, made by **Md Mojahid**.

## What is included

- Beautiful dark rose / luxury romantic design
- Home page with the birthday note
- Large circular bouquet with song button
- 20-memory gallery
- Full birthday letter
- "Our Forever" section
- Responsive mobile design
- No backend required — works directly on GitHub Pages

## Add your 20 photos

Put your photos in:

`assets/memories/`

Rename them:

`memory-01.jpg` through `memory-20.jpg`

JPG, PNG and WEBP are fine. If you use another extension, update the filenames in `script.js`.

## Add your song

Put your song here:

`assets/song.mp3`

The song starts when Noor clicks the bouquet. Browser autoplay restrictions are avoided because playback is triggered by her click.

## Run locally

You can simply open `index.html`, or use VS Code Live Server.

For a local Python server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`

## Host on GitHub Pages

1. Create a GitHub repository, for example `begam-birthday`.
2. Upload all files and folders from this project.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.
7. GitHub will publish the site.

Important: GitHub Pages is static hosting, so this version intentionally does not need Node.js or an Express backend.

## Recommended repository structure

```text
begam-birthday/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── song.mp3
    └── memories/
        ├── memory-01.jpg
        ├── memory-02.jpg
        ├── ...
        └── memory-20.jpg
```

## Personalization

The website already contains:

- Md Mojahid
- Noor Darkhashan
- Second birthday together
- The birthday note about being unable to celebrate as planned
- InshaAllah message about starting a new chapter together
- Thank-you message for her care, morning wake-ups, sleep, food and timings

You can edit all wording directly in `index.html`.
