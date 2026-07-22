<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/packed-mark-white.svg">
    <img src="public/packed-mark.svg" alt="Packed" height="56">
  </picture>
</p>

<h1 align="center">packed.ui</h1>

<p align="center">
  shadcn-compatible component registry.<br>
  Warm sand, sunset orange, soft shadows.
</p>

<p align="center">
  <a href="https://ui.trypacked.dev/">Docs</a>
  ·
  <a href="https://ui.trypacked.dev/registry.json">registry.json</a>
  ·
  <a href="https://github.com/trypacked-com/skills">Design system (skills)</a>
</p>

---

## What this is

We ship UI as static JSON. Install components with the shadcn CLI — same workflow, different defaults.

50 components. Lora headlines, Figtree UI, DM Mono for codes and times. Warm-tinted elevation, rounded corners, no cool grey. Tokens live in `registry/styles/packed-theme-tokens.css`; rules in `AGENTS.md`.

## Install

Add the registry to `components.json`:

```json
"registries": {
  "@packed": "https://ui.trypacked.dev/r/{name}.json"
}
```

Pull **@packed/theme first**, then components. Use the `@packed/<name>` namespace on the CLI — registry manifests declare namespaced `registryDependencies` (e.g. `@packed/button`, not bare `button`), so the resolver stays on `ui.trypacked.dev` instead of `ui.shadcn.com`.

```bash
bunx shadcn@latest add @packed/theme
bunx shadcn@latest add @packed/button
bunx shadcn@latest add @packed/theme-provider
```

Theme ships Lora, Figtree, and DM Mono via `@fontsource` imports in CSS (not `registry:font` / Google provider — that breaks Tailwind v4 consumers on `shadcn add`). The CLI adds `@fontsource/lora`, `@fontsource-variable/figtree`, and `@fontsource/dm-mono` with the theme. **Vite (and other non-Next) apps** must keep those packages in `package.json` if you merge theme CSS into `src/index.css`; Next apps same unless you wire fonts another way.

Full catalog: [ui.trypacked.dev](https://ui.trypacked.dev/)

## Development

```bash
bun install
bun run dev          # docs site
bun run storybook    # component stories
bun run build        # registry + next build
bun run test:visual  # playwright snapshots
```

## Add a component

1. Source in `registry/ui`
2. Register in `registry.json`
3. `bun run build:registry`
4. Stories in `stories/`
5. Docs route in `app/(docs)/components/[slug]/page.tsx`
6. Visual + build checks

Match Storybook stories and the rules in `AGENTS.md`.

## Agent skills

All skills: [packed.skills](https://github.com/trypacked-com/skills)

```bash
# this repo
bunx skills add trypacked-com/skills --skill packed-ui-maintainer --skill packed-design -a cursor -a claude-code -y

# consumer app
bunx skills add trypacked-com/skills --skill packed-ui --skill packed-design -a cursor -a claude-code -y
```
