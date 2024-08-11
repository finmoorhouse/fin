# Fin's personal website

## URL

https://finmoorhouse.com

## About

This is the current version of my personal website and blog, [finmoorhouse.com](https://finmoorhouse.com/).

This is a static site built on [Eleventy](https://www.11ty.dev/) (11ty) and hosted on [Netlify](https://www.netlify.com/), with [Tailwind CSS](https://tailwindcss.com/) and a small number of additional plugins. The [previous version](https://github.com/finmoorhouse/finmoorhouse.com) of the site was built using [Gatsby JS](https://www.gatsbyjs.com/).

The `/writing` page has a Nunjucks shortcode for sidenotes, heavily inspired by Gwern's post on ['Sidenotes In Web Design'](https://gwern.net/sidenote).

Images are served remotely from [an image CDN](https://cloudinary.com/) (so only links are generated at build, and no images are processed).[^1]

[^1]: Previously images were downloaded from a [separate](https://github.com/finmoorhouse/fm-images) [LFS](https://git-lfs.com/) repo to be processed by `eleventy-img`, but changing to remote images reduced build time from around 5 minutes to 2 seconds (!)

## Installation

You're welcome to use this site as a starter for your own site or blog, but note that it's incomplete, poorly documented, and not built for legibility.

Still, to run the site locally:

- Clone this repo
- Run `npm install`
- Run `npm run dev`

Comments, questions, and pull requests are welcome!

🦥
