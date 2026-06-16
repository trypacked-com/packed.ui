# packed.ui

The Packed design system as a standalone [shadcn](https://ui.shadcn.com)
registry — warm, sunset-led React components (cream + orange, Lora / Figtree /
DM Mono). Docs and previews: **[ui.trypacked.com](https://ui.trypacked.com/)**.

## Use a component

```bash
bunx shadcn@latest add https://ui.trypacked.com/r/button.json
```

Components land in `components/ui/` and resolve their dependencies (including
the `cn()` helper) automatically. Available: `button`, `card`, `input`.

## Add a new component

Drop the source in `registry/ui/<name>.tsx` (use `cn` from
`@/registry/lib/utils`, CVA for variants, semantic tokens only — never arbitrary
Tailwind values), add a `stories/<name>.stories.tsx`, then register it in
`registry.json`. Run `bun run storybook` to iterate, `bun run test:visual:update`
to capture baselines, and `bun run build:registry` to emit `public/r/<name>.json`.
Push to `main` and GitHub Actions publishes the docs + registry.

## Scripts

`bun run dev` · `bun run storybook` · `bun run build` · `bun run test:visual` ·
`bun run lint`
