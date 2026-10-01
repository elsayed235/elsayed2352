# Elsayed Abdelmoneem — portfolio

Static site. No build step, no dependencies. Works on GitHub Pages as-is.

## Publish on GitHub Pages

1. Create a repo named `elsayed235.github.io` (your username + `.github.io`).
2. Upload everything in this folder to the repo root (keep the folder structure).
3. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
4. After a minute the site is live at `https://elsayed235.github.io`.

Any other repo name also works; the address becomes `https://elsayed235.github.io/<repo-name>/`.

## After it's live

- In `index.html`, replace both `SITE_URL` placeholders with your live address so LinkedIn/WhatsApp link previews show `assets/og-image.png`.
- Add your photo: put it in `assets/` and set `photo: "assets/profile.jpg"` in `js/data.js`.
- Add store links: fill the `android` / `ios` fields for each app in `js/data.js`. Empty links show as plain labels.

## Where things live

| File | What to edit |
|---|---|
| `js/data.js` | All text: projects, case studies, experience, skills, contact links |
| `js/screens.js` | The drawn phone screens (or swap any of them for a real screenshot) |
| `css/style.css` | Colours (top of file), type, layout |
| `assets/` | CV PDF, favicon, social preview image, your photo |

## Using real screenshots instead of drawn screens

Save a 280×604 (or same ratio, e.g. 1170×2532) PNG to `assets/screens/sakan.png`, then in `js/screens.js` replace the `sakan` entry with:

```js
sakan: () => '<img class="ui-shot" src="assets/screens/sakan.png" alt="">',
```
