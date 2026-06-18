<h1>
  <img src="public/packed-mark.svg" alt="Packed" width="40" height="40" valign="middle" />
  packed.ui
</h1>

The Packed design system as a standalone [shadcn](https://ui.shadcn.com)
registry — warm, sunset-led React components (cream + orange, Lora / Figtree /
DM Mono). Docs and previews: **[ui.trypacked.dev](https://ui.trypacked.dev/)**.

## Use a component

```bash
bunx shadcn@latest add https://ui.trypacked.dev/r/button.json
```

Components land in `components/ui/` and resolve their dependencies (including
the `cn()` helper) automatically. **48 components** are available — browse the
full list at [ui.trypacked.dev](https://ui.trypacked.dev/) or in
`registry.json` (`accordion`, `alert`, `button`, `card`, `dialog`, `form`,
`sidebar`, `table`, …).

## Add a new component

Drop the source in `registry/ui/<name>.tsx` (use `cn` from
`@/registry/lib/utils`, CVA for variants, semantic tokens only — never arbitrary
Tailwind values), add `app/(docs)/demos/<name>.tsx` and
`stories/<name>.stories.tsx`, then add a manifest in `registry/items/<name>.json`
(or register directly in `registry.json`). Run `bun run storybook` to iterate,
`bun run test:visual:update` to capture baselines, and `bun run build:registry`
to emit `public/r/<name>.json`. Push to `main` and GitHub Actions publishes the
docs + registry.

## Scripts

`bun run dev` · `bun run storybook` · `bun run build` · `bun run test:visual` ·
`bun run lint`
