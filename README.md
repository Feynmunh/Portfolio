# MyPortfolio

A personal portfolio website showcasing projects, skills, and contact information. Built with Next.js, Tailwind CSS and Framer Motion.

## Features

- Landing page with hero, skills, and projects sections
- Responsive layout and smooth scroll
- Lightweight animations with Framer Motion

## Tech stack

- Next.js (React)
- Tailwind CSS
- Framer Motion
- TypeScript

## Local development

Prerequisites: Node.js (18+ recommended) and npm or yarn.

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm start
```

## Project structure (important files)

- `app/page.tsx` — main landing page
- `components/AboutSection.tsx` — About / Tools & Technologies section
- `components/HeroSection.tsx` — Hero / landing header
- `components/ProjectsSection.tsx` — Projects preview
- `app/about/page.tsx` — full skills page
- `app/projects/page.tsx` — projects listing

## Project structure (full)

```
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
app/
	globals.css
	layout.tsx
	page.tsx
	about/
		page.tsx
	feed/
		page.tsx
	projects/
		page.tsx
components/
	AboutSection.tsx
	CustomCursor.tsx
	Footer.tsx
	HeroSection.tsx
	MenuOverlay.tsx
	Navbar.tsx
	ProjectsSection.tsx
	SmoothScroll.tsx
data/
	feed.ts
	projects.ts
public/
	fonts/
		bitcount-pop-double/
```

## Notes

- Fonts are self-hosted and configured in the project.
- Styling utilities live in `app/globals.css` and `tailwind.config.ts`.

If you want the README expanded (development tips, deployment steps, or contributor guidelines), tell me what to include and I will update it.