## Code Style & Conventions
- TypeScript is enabled with `strict: true`; React components are functional and live under `src/components` with one CSS Module per component.
- CSS Modules (`*.module.css`) control component styling; global background overlay defined in `src/app/globals.css`.
- Import alias `@/*` resolves to `src/*`; Next.js conventions (metadata export, font via globals) are followed.
- ESLint extends `next/core-web-vitals` and `next/typescript`; format preferences rely on default Next.js setup (no custom Prettier config present).