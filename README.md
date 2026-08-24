# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Frameticstudio

  Frameticstudio is a creative portfolio website for presenting selected projects, capabilities, pricing, and client-focused FAQs in one polished experience. It is built as a responsive single-page React application with a visual, motion-led interface.

  ## Highlights

  - Responsive portfolio landing page
  - Hero section with studio positioning and calls to action
  - Project showcase with interactive project details and video modals
  - Pricing and FAQ sections for prospective clients
  - Reusable React components and UI primitives
  - Motion effects for a more expressive browsing experience

  ## Tech Stack

  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS 4
  - Motion
  - Lucide React and Tabler Icons

  ## Getting Started

  ### Prerequisites

  - Node.js 18 or newer
  - npm

  ### Installation

  ```bash
  npm install
  ```

  ### Start the development server

  ```bash
  npm run dev
  ```

  Vite will print the local URL in the terminal, usually `http://localhost:5173`.

  ## Available Scripts

  | Command | Description |
  | --- | --- |
  | `npm run dev` | Start the Vite development server |
  | `npm run build` | Type-check and create a production build |
  | `npm run lint` | Run ESLint across the project |
  | `npm run preview` | Preview the production build locally |

  ## Project Structure

  ```text
  src/
  ├── App.tsx                     # Main page composition
  ├── App.css                     # Application-level styles
  ├── index.css                   # Global styles and Tailwind layers
  ├── assets/                     # Images and video assets
  └── components/
      ├── HeroSection.tsx         # Studio introduction
      ├── Projectsection.tsx       # Portfolio project listing
      ├── Pricing.tsx              # Service packages
      ├── FAQ.tsx                  # Common client questions
      ├── Footer.tsx               # Closing navigation and contact area
      └── ui/                      # Reusable interface components
  ```

  ## Customization

  - Update project content in `src/components/Projectsection.tsx` and related project components.
  - Adjust contact and social details in `src/components/contactDetails.ts`.
  - Replace media in `src/assets/images` and `src/assets/videoes`.
  - Update colors, typography, and global layout rules in `src/App.css` and `src/index.css`.

  ## Production Build

  Create an optimized build with:

  ```bash
  npm run build
  ```

  The generated files are placed in `dist/` and can be deployed to any static hosting provider that supports single-page applications.
