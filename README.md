<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/packed-mark-white.svg">
    <img src="public/packed-mark.svg" alt="Packed" height="56">
  </picture>
</p>

<h1 align="center">Packed.ui</h1>

<p align="center">
  shadcn-compatible component registry.<br>
  warm sand, sunset orange, soft shadows.
</p>

<p align="center">
  <a href="https://ui.trypacked.dev/">docs</a>
  ·
  <a href="https://ui.trypacked.dev/registry.json">registry.json</a>
  ·
  <a href="https://github.com/trypacked-com/skills">design system (skills)</a>
</p>

---

## what this is

we ship UI as static JSON. install components with the shadcn CLI — same workflow, different defaults.

50 components. Lora headlines, Figtree UI, DM Mono for codes and times. warm-tinted elevation, rounded corners, no cool grey. tokens live in `registry/styles/packed-theme-tokens.css`; rules in `AGENTS.md`.

## install

add the registry to `components.json`:

```json
"registries": {
  "@packed": "https://ui.trypacked.dev/r/{name}.json"
}
```

pull **@packed/theme first**, then components. use the `@packed/<name>` namespace on the CLI — registry manifests declare namespaced `registryDependencies` (e.g. `@packed/button`, not bare `button`), so the resolver stays on `ui.trypacked.dev` instead of `ui.shadcn.com`.

```bash
bunx shadcn@latest add @packed/theme
bunx shadcn@latest add @packed/button
bunx shadcn@latest add @packed/theme-provider
```

theme ships Lora, Figtree, and DM Mono via `@fontsource` imports in CSS (not `registry:font` / Google provider — that breaks Tailwind v4 consumers on `shadcn add`). the CLI adds `@fontsource/lora`, `@fontsource-variable/figtree`, and `@fontsource/dm-mono` with the theme. **Vite (and other non-Next) apps** must keep those packages in `package.json` if you merge theme CSS into `src/index.css`; Next apps same unless you wire fonts another way.

full catalog: [ui.trypacked.dev](https://ui.trypacked.dev/)

## development

```bash
bun install
bun run dev          # docs site
bun run storybook    # component stories
bun run build        # registry + next build
bun run test:visual  # playwright snapshots
```

## add a component

1. source in `registry/ui`
2. register in `registry.json`
3. `bun run build:registry`
4. stories in `stories/`
5. docs route in `app/(docs)/components/[slug]/page.tsx`
6. visual + build checks

match Storybook stories and the rules in `AGENTS.md`.

## agent skills

All skills: [packed.skills](https://github.com/trypacked-com/skills)

```bash
# this repo
bunx skills add trypacked-com/skills --skill packed-ui-maintainer --skill packed-design -a cursor -a claude-code -y

# consumer app
bunx skills add trypacked-com/skills --skill packed-ui --skill packed-design -a cursor -a claude-code -y
```
