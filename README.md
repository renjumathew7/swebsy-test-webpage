# Morrow Landscape Studio

Built with [Swebsy](https://studio.swebsy.com/create?template=morrow&ref=export). This folder is a **build
output** — a complete, self-contained static site you can upload to any host.

## Run it

Open `index.html` in a browser, or upload the whole folder to any static
host (Netlify, Cloudflare Pages, GitHub Pages, or plain FTP to a web root).
No build step, no dependencies, no server required.

```
index.html              your home page
<page>.html             one file per page
css/styles.<hash>.css   every style, in one file
js/                     scripts, only when a page needs them
assets/  fonts/         images and fonts
sitemap.xml robots.txt  search engine files
```

The `<hash>` in file names changes whenever the contents change, so browsers
never serve a stale copy. It is regenerated on every export.

## Editing

We do not recommend editing these files by hand.

Swebsy edits its own project file, not this folder. There is no import path
that reads a ZIP back, so **changes made here can never return to the
editor** — and the next export overwrites this folder completely. Class names
and file names are generated too, so hand-written selectors tend not to
survive a rebuild.

Edit the design in Swebsy and export again.

  https://studio.swebsy.com/create?template=morrow&ref=export

If you want a copy you can reopen and edit later, use **Project → Export
Project** in Swebsy. That produces a `.json` backup, which is the editable
artifact — this ZIP is not.
