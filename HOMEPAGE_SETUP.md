# Shuai Luo Academic Homepage

This repository contains the personal academic homepage of Shuai Luo.

## Local Preview

```powershell
npm install --legacy-peer-deps
npm run dev
```

Open <http://localhost:3000>.

## Build

```powershell
npm run build
```

The static site is exported to `out/`.

## Publish to GitHub Pages

Create a GitHub repository named either:

- `shuailuo.github.io` for this homepage repository, published by GitHub Pages
- any repository name, for example `homepage`, published at `https://934123193.github.io/homepage/`

Then push:

```powershell
git remote remove origin
git remote add origin https://github.com/934123193/shuailuo.github.io.git
git branch -M main
git push -u origin main
```

In GitHub, open repository **Settings -> Pages**, then set **Build and deployment** to **GitHub Actions**.

## Replace Placeholders

Update `content/config.toml`:

- `google_scholar`
- `orcid`

Replace `public/bio.jpg` with a personal academic photo when ready.
