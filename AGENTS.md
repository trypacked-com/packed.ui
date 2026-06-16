# Packed — design rules

This repo holds the Packed design system. Full brand narrative lives in the
`packed-design` skill (`skills/packed-design/references/README.md`). Tokens:
`handoff/tokens/*.css` (web) and `theme.ts` (React Native); `STYLE_GUIDE.md` is
the decision-level brief. The rules below are non-negotiable — do not reintroduce
framework defaults (shadcn/MUI ship cool-grey ramps, hard-black shadows, and
sharp corners; we use warm sand, soft warm-tinted shadows, and rounded corners).

## The one rule
**Tokens are the contract.** Never hard-code a hex, px, font, or shadow. Reference
**semantic** tokens (`--brand`, `--text-muted`, `--grad-cta`), not raw scale steps
(`--orange-500`). One token edit must reskin dashboard + marketing + app.

## Color
- Warm, sunset-led. Brand orange **`#FF6B2C`** (`--brand`) is the single anchor:
  actions, logo, active states. Sky blue **`#2B8CD9`** (`--accent`) is the only
  accent, reserved for **weather / sky / flight-status**.
- Neutrals are warm **sand** (cream `--bg-app #FBF7F2`, white cards
  `--surface-card`). **No cool grey, no pure black** — never introduce `gray-*`.
- **Proportion 70/20/10:** lead with cream + white, then one orange for action,
  then blue sparingly. If a screen looks orange-heavy, it is overused.
- Utility hues are **functional only**: status green / amber / red, always used as
  documented fg/bg pairs (`--status-*-fg` / `--status-*-bg`).
- Small white text on solid orange fails AA — use `--brand-press` as background
  (`--pair-on-brand-safe`) or keep white text ≥18px semibold.
- Gradients are the signature, always 135° (`--grad-sunset`, `--grad-cta`,
  `--grad-ember`, `--grad-journey`) — on heroes/CTAs, not in resting surfaces.
- Dark mode is a **warm charcoal** foundation (`[data-theme="dark"]`), never pure
  black; brand lightens one step. Cream/light is the primary target.

## Type
- **Lora** (serif) — display and headlines. Weight **600**, tracking `-0.02em`.
  Never set body or UI in the serif.
- **Figtree** (geometric sans) — all UI, body, labels. Weights **300–800**;
  body 400, labels 500, emphasis 600. Body line-height 1.65.
- **DM Mono** — numbers, times, flight codes, gates (`TP1234`, `08:45`, `Gate B7`).
- Sentence case everywhere; ALL-CAPS only for the small tracked eyebrow
  (`.pk-eyebrow`).
- Fonts are bundled via `@fontsource` (Lora, Figtree, DM Mono) — no runtime CDN.

## Spacing · radius · borders
- Spacing: **4px base unit**. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- Radius: **rounded and soft — nothing sharp.** Inputs/buttons `12`
  (`--radius-md`), cards `16` (`--radius-lg`), hero `20–28` (`--radius-xl`/`2xl`),
  chips/avatars/pills full (`--radius-pill`).
- Borders: hairlines. `1px` `--border-subtle`/`--border-default` (warm sand);
  form controls use `1.5px` turning `--border-brand` on focus.

## Tailwind · tokens · utilities
- Prefer **theme tokens and named utilities** over arbitrary values. Do not use
  `property-[value]` / `property-[var(--x)]` unless genuinely one-off.
- Design tokens live in `handoff/tokens/*.css` (and `app/globals.css`). Add missing
  tokens there first, then use the generated class
  (`bg-app`, `text-muted`, `border-subtle`, `rounded-lg`, `shadow-card`, …).
- Reuse shared surface/elevation helpers (role aliases `--elev-card` /
  `--elev-popover` / `--elev-modal`) — do not restyle each component.
- Do not reintroduce framework defaults: cool-grey neutrals (`gray-*`), hard-black
  shadows, sharp corners, or serif body copy.

## Elevation
- Shadows are **warm-tinted, soft, never hard black** (brown undertone
  `rgba(56,50,43,…)`). Use role aliases, not raw scale: `--elev-card` (resting),
  `--elev-card-hover` (interactive, lift `-2px`), `--elev-popover`, `--elev-modal`,
  `--elev-cta` (orange glow, primary CTA only), `--elev-nav` (hairline).
- Glass/blur is allowed only for floating chrome over content (`--glass-bar-*`,
  `--glass-on-photo`, `--glass-tile-*`) — never decorative.

## Motion
- Gentle and brief. `--dur-fast 120ms` (hover/press), `--dur-base 200ms` (toggles),
  `--dur-slow 320ms`.
- `--ease-out` to settle, `--ease-in-out` for symmetric moves, `--ease-soft`
  (slight overshoot) for **one** moment only — the switch thumb.
- No harsh bounces, no long loops on chrome. Respect `prefers-reduced-motion`.

## States
- Hover: darken one step (`--brand` → `--brand-hover`) and lift `-1px`; ghost/soft
  fill `--brand-subtle`; nav/list rows wash to `--state-row-hover`.
- Press: settles back down. **No colour inversion.**
- Focus: `--ring-focus` halo at `--ring-width 3px`.
- **Touch has no hover** — on native, collapse hover + press into pressed and drop
  hover-only affordances (tooltips, row washes).

## Forms
- Stack: `react-hook-form` + `zod` + `@hookform/resolvers/zod`.
- `Form` is `FormProvider`; wire `FormField` → `FormItem` → `FormLabel` /
  `FormControl` / `FormDescription` / `FormMessage`.
- Controls: `1.5px` border turning `--border-brand` on focus with the
  `--ring-focus` halo. **Hints** — `text-sm text-muted` on `FormDescription`.
  **Errors** — `text-sm` in the cancel/error pair on `FormMessage`; warm, direct
  copy, no blame.
- Do not restyle controls inside `FormControl`; validation surfaces through
  `aria-invalid` on the slotted control.

## Voice (for any UI copy)
- Warm, calm, quietly capable. Speak to the user as **"you"**; Packed is **"we"**.
- Sentence case. **No emoji.** Lead with the helpful fact, then the detail.
- Numbers, times, codes in DM Mono.
- ✅ "Heads up — your gate just moved to B7." / "All set. We'll watch the flights from here."
- ❌ "ALERT: Gate reassignment event detected." / "Configuration successfully submitted."

## Iconography
- Lucide only, stroke width **2** (`2.4` for active/emphasis), currentColor.
  Sizes 16/20/24, 8px gap to label.
- `--text-muted` at rest, `--brand` when active, white on imagery/gradients.
- No emoji or unicode as icons; never mix in a second/filled set.

## Logo
- Packed suitcase mark in `public/` — on light → `--brand` fill; on dark/photo →
  white version. **Never below 24px.** Clear space = 50% of mark height.
- Agency logos always sit inside the white **brand chip** (`--chip-*`).

## Registry
- Base URL: `https://ui.trypacked.com/` *(placeholder — confirm host)*
- Manifest: `https://ui.trypacked.com/registry.json`
- Namespace: `"@packed": "https://ui.trypacked.com/r/{name}.json"` in consumer `components.json`
- Theme: `bunx shadcn@latest add @packed/theme`
- Components: `bunx shadcn@latest add @packed/<name>`

## Agent skills

All skills live in the repo-root `skills/` directory. Install with `bunx skills add` — see that folder's README.

| Skill | When |
|-------|------|
| **packed-ui-maintainer** | Editing this design system / registry |
| **packed-ui** | Consuming `@packed` in other apps |
| **packed-design** | Brand / visual rules |
| **packed-writing** | Copy and voice |

Rules always applied in this workspace: `AGENTS.md` + `handoff/tokens/*.css`.
