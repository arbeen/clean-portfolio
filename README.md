# Clean Portfolio

Personal portfolio site for Arbin Shrestha, built with [Next.js](https://nextjs.org) and [Once UI](https://once-ui.com). It showcases my work, writing, and projects in a clean, content-driven layout.

## Getting started

This project requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) after the dev server starts.

## Customize the site

Most of the personal content lives in [src/resources/content.js](src/resources/content.js). That file controls the home page copy, about page details, blog metadata, social links, and featured projects.

Key content areas:

- [src/app/about/page.tsx](src/app/about/page.tsx)
- [src/app/blog/posts](src/app/blog/posts)
- [src/app/work/projects](src/app/work/projects)
- [src/resources/content.js](src/resources/content.js)

## Project structure

- `src/app` contains the routes and app shell.
- `src/components` contains shared UI pieces.
- `src/resources` contains site content, theme settings, and shared config.
- `public/images` contains the portfolio images and social preview assets.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` runs the production server.
- `npm run lint` checks the codebase with Next.js linting.

## License

See [LICENSE](LICENSE) for the project license.
