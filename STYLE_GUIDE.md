# Packed — Style Guide & Design Decisions

> **Purpose of this file.** A complete, decision-level brief an AI (or engineer)
> can build from without guessing. It states *what* every choice is, the *exact
> token* that encodes it, and the *why* behind it. Pair it with the machine
> source of truth: `registry/styles/packed-theme-tokens.css` (web). When this prose and a token disagree, **the token wins** — update this
> file to match.

---

## 0 · Product & audience

Packed helps travel **agents** deliver a great client experience *after* booking.
Agents build itineraries in a **web dashboard**; their clients use a **React
Native app** for live flight alerts (delays, gate changes, cancellations) and
destination weather. There is also a **marketing website**.

- **Three surfaces, one language:** agent-dashboard (web), marketing-site (web),
  client app (React Native). Same tokens, same voice, same components.
- **Audience:** travellers of **all ages** — legibility and warmth beat trend.
- **Emotional job:** reassurance. Packed is "the friend who already checked the
  departures board for you."

### The single non-negotiable rule
**Tokens are the contract.** Never hard-code a hex, px, font name, or shadow.
Reference **semantic** tokens (`--brand`, `--text-muted`, `--grad-cta`), not raw
scale steps (`--orange-500`). One token edit must reskin all three surfaces.

---

## 1 · Brand personality

| Trait | Means in practice |
|---|---|
| **Warm** | Cream surfaces, sunset orange, warm-tinted shadows — never cool grey or hard black. |
| **Friendly** | Generous rounded corners, soft geometric sans, no sharp edges. |
| **Calm & capable** | Quiet confidence. Lead with the helpful fact; no alarm, no jargon. |
| **All-ages** | High legibility, comfortable sizes, plain words. |

Warmth comes from **colour, type and copy** — never from emoji or decoration.

---

## 2 · Colour

### 2.1 The decision
Sunset **orange `#FF6B2C`** is the *single* brand anchor: primary actions, the
logo, active states, the marketing CTA. A calm **sky blue `#2B8CD9`** is the
*only* secondary accent, reserved for **weather / sky / flight-status** moments.
Neutrals are warm **"sand"** greys (brown undertone) so every surface feels cosy.
Status uses warm **green / amber / red**.

**Proportion (the 70/20/10 of Packed):** lead with **cream + white** surfaces,
then **one orange** for action, then **blue sparingly**. If a screen looks
orange-heavy, you've overused it — orange is for *the* action, not every element.

### 2.2 Raw scales
Full ramps in `tokens/colors.css`: `--orange-50…900`, `--sky-50…900`,
`--sand-0…900`, plus `--green / --amber / --red` (50/100/500/600/700). **Do not
reference these directly in product code** — they exist to derive semantics and
for rare custom cases.

### 2.3 Semantic aliases — reference THESE
| Role | Token | Value |
|---|---|---|
| Brand primary | `--brand` | `#FF6B2C` |
| Brand hover | `--brand-hover` | `#ED5418` |
| Brand pressed | `--brand-press` | `#C4400F` |
| Brand subtle (ghost fill) | `--brand-subtle` | `#FFF3ED` |
| On brand (text/icon) | `--on-brand` | `#FFFFFF` |
| Accent (sky) | `--accent` | `#2B8CD9` |
| App background (cream) | `--bg-app` | `#FBF7F2` |
| Card surface | `--surface-card` | `#FFFFFF` |
| Sunken (wells, inputs) | `--surface-sunken` | `#F5EEE6` |
| Text strong (headings) | `--text-strong` | `#221F1A` |
| Text body | `--text-body` | `#38322B` |
| Text muted | `--text-muted` | `#6F6456` |
| Text subtle (large only) | `--text-subtle` | `#938573` |
| Border subtle (hairlines) | `--border-subtle` | `#EAE0D4` |
| Border default | `--border-default` | `#D9CCBC` |
| Border on focus | `--border-brand` | `#FF9F6E` |
| Focus ring | `--ring-focus` | orange @ 45% |

### 2.4 Status pairs (foreground / background — always paired)
| State | fg token | bg token | Values |
|---|---|---|---|
| On time / success | `--status-ontime-fg` | `--status-ontime-bg` | `#1D6640` / `#E8F6EE` |
| Delayed / warning | `--status-delay-fg` | `--status-delay-bg` | `#9C6A09` / `#FEF6E7` |
| Cancelled / error | `--status-cancel-fg` | `--status-cancel-bg` | `#9C2424` / `#FDECEC` |
| Info / sky | `--status-info-fg` | `--status-info-bg` | `#195C93` / `#ECF6FD` |

### 2.5 Contrast — the only legal text pairings
All listed in `tokens/brand.css §5` with ratios. Key rules:
- **Small white text on solid orange fails AA.** For small text on orange, use
  `--brand-press (#C4400F)` as the background (`--pair-on-brand-safe`), or keep
  the white text **≥18px semibold** (large-text AA).
- `--text-subtle` is for **large or decorative** text only — never body copy.
- White on `--accent` is **large/semibold** only.

### 2.6 Gradients & image treatment (`registry/styles/packed-theme-effects.css`)
- Signature sunset: `--grad-sunset`; marketing CTA band: `--grad-cta`; deepest
  accent: `--grad-ember`. All **135°**.
- Dawn wash: `--grad-dawn` for soft hero backgrounds.
- Sunset→sky blend `--grad-journey` is for trip/weather heroes **only**, sparing.
- Destination **photos** always get a scrim (`--scrim-bottom` default) so white
  text stays legible; show `--photo-fallback` while loading. To keep a photo
  on-palette behind a logo lockup, lay `--wash-brand` over it.
- On-gradient content: `--on-grad`, `--on-grad-muted`, `--on-grad-shadow`.
- Glass (floating chrome only): `--glass-bar-bg`, `--glass-bar-blur`,
  `--glass-on-photo`, `--glass-tile`, `--glass-tile-blur`.

### 2.7 Dark theme
A **warm** dark foundation exists in `tokens/brand.css §10` under
`[data-theme="dark"]` (warm charcoal, never pure black; brand lightens one step).
Default experience is **light/cream** — dark is opt-in for media-heavy views or
OS preference, not the primary design target.

---

## 3 · Typography

### 3.1 The decision
Three families, each with a job:
- **Lora** (serif) — display & headlines. Warm, travel-journal feel. Weight
  **600**, tracking **`-0.02em`** (`--ls-tight`). `--font-serif`.
- **Figtree** (geometric sans) — all UI & body. Weights **300–800**, very
  legible at every size. `--font-sans`.
- **DM Mono** — numbers, times, flight codes, gates. Tabular and calm.
  `--font-mono`.

> Fonts load from Google Fonts (`tokens/fonts.css`) as a stand-in for licensed
> brand fonts. Self-host `.woff2` for production if licensed.

### 3.2 Scale & roles
| Role | Token | Size | Family / weight |
|---|---|---|---|
| Display | `--text-display` | `clamp(2.75rem, 6vw, 4.5rem)` | Lora 600 |
| H1 | `--text-h1` | `clamp(2.25rem, 4.5vw, 3.25rem)` | Lora 600 |
| H2 | `--text-h2` | `clamp(1.75rem, 3.2vw, 2.5rem)` | Lora 600 |
| H3 | `--text-h3` | `1.5rem` (24) | Lora 600 |
| H4 | `--text-h4` | `1.25rem` (20) | Lora 600 |
| Body large | `--text-lg` | `1.125rem` (18) | Figtree 400 |
| Body | `--text-base` | `1rem` (16) | Figtree 400 |
| Small | `--text-sm` | `0.875rem` (14) | Figtree 400/500 |
| XS | `--text-xs` | `0.75rem` (12) | Figtree 500 |
| Eyebrow | `--text-2xs` | `0.6875rem` (11) | Figtree **700**, UPPERCASE, `--ls-eyebrow 0.12em` |

Line heights: `--lh-tight 1.1` (display), `--lh-snug 1.25` (headings),
`--lh-normal 1.5`, `--lh-relaxed 1.65` (body, default).

### 3.3 React Native note
RN has no `clamp()`. Resolve fluid display sizes to **fixed phone numbers** in
`theme.type`: H1 ≈ **34**, H2 ≈ **26**, H3 ≈ **22**, body **16**, small **14**,
eyebrow **11**. RN matches fonts by family *name*, not weight against one file —
register one file per weight you use (`Figtree-Regular/SemiBold/Bold`).

### 3.4 Rules
- **Sentence case everywhere** — headings, buttons, nav. ALL-CAPS only for the
  small tracked **eyebrow**.
- Headlines in Lora; never set body/UI in the serif.
- All numbers, times, codes in DM Mono (`TP1234`, `08:45`, `Gate B7`, `12C`).
- Use `.pk-eyebrow` helper for kickers.

---

## 4 · Spacing, layout & corners

### 4.1 Grid
**4px base grid.** `--space-1…24` = 4·8·12·16·20·24·32·40·48·64·80·96. Lay rows
and groups out with **flex/grid + `gap`**, not margins or inline whitespace.

### 4.2 Corners (core to the friendly feel — nothing sharp)
| Element | Radius | Token |
|---|---|---|
| Inputs, buttons | 12 | `--radius-md` |
| Cards | 16 | `--radius-lg` |
| Hero / feature blocks | 20–28 | `--radius-xl` / `--radius-2xl` |
| Chips, avatars, status pills | full | `--radius-pill` |

### 4.3 Layout
- Dashboard: **264px** sidebar (`--sidebar-w`) + fluid content capped ~1120px
  (`--container-max 1200`).
- Marketing: content caps ~1140px; floating **pill nav** is full-width and
  transparent at the top, then pulls in (~940px) with blur + border + shadow once
  scrolled past ~24px (static, no shrink animation).
- Generous breathing room; don't crowd.

---

## 5 · Elevation, shadows & glass

### 5.1 Shadows are warm-tinted, soft, never hard black
Brown undertone `rgba(56,50,43,…)`. Scale `--shadow-xs…xl` in `tokens/spacing.css`.
`--shadow-brand` is an **orange glow** for primary CTAs only.

### 5.2 Use the role aliases (`tokens/brand.css §7`)
| Surface | Token |
|---|---|
| Resting card | `--elev-card` (= `--shadow-sm`) |
| Interactive card (hover, lift −2px) | `--elev-card-hover` (= `--shadow-md`) |
| Popover / menu / date picker | `--elev-popover` (= `--shadow-lg`) |
| Modal / sheet | `--elev-modal` (= `--shadow-xl`) |
| Primary CTA | `--elev-cta` (= `--shadow-brand`) |
| Sticky bar | `--elev-nav` (hairline, not a drop) |

### 5.3 Glass / translucency (`tokens/brand.css §8`)
For floating chrome over content only — not decorative. Sticky bars:
`--glass-bar-bg` + `--glass-bar-blur`. On-photo badges: `--glass-on-photo` (white
92%). Frosted tiles over gradient heroes: `--glass-tile` + `--glass-tile-blur`.

### 5.4 Cards (the default container)
White surface · 1px `--border-subtle` hairline · `--radius-lg` · `--elev-card`.
Interactive cards lift `-2px` to `--elev-card-hover` on hover.

---

## 6 · Motion

Gentle and brief — no harsh bounces, no long animations.
- Durations: `--dur-fast 120ms` (hover/press), `--dur-base 200ms` (toggles),
  `--dur-slow 320ms`.
- Easing: `--ease-out` to settle; `--ease-soft` (slight overshoot) for **one**
  delightful moment — the switch thumb. `--ease-in-out` for symmetric moves.
- The live status dot has a slow `pulse`.
- Always respect `prefers-reduced-motion` (web) / Reduce Motion (native) — base
  CSS already neutralises durations under the media query.

### Hover / press model
Buttons darken one step (`--brand` → `--brand-hover`) and lift `-1px` on hover;
ghost/soft buttons fill with `--brand-subtle`; nav/list rows wash to
`--state-row-hover`. Press settles back down. **No colour inversion.**
**Touch has no hover** — on native, collapse hover + press into the *pressed*
state and drop hover-only affordances (tooltips, row-hover washes).

---

## 7 · Iconography

- **Lucide** only — rounded line icons, **2px** stroke (2.4 for active/emphasis),
  round caps/joins. `lucide-react` (web) / `lucide-react-native` (native); names
  match across both.
- Colour: `--text-muted` at rest, `--brand` when active/meaningful, white on
  imagery/gradients.
- **Never** emoji or unicode as icons; never mix in a second/filled icon set.
- The **suitcase logo mark** is bespoke SVG in `public/` (ship via
  `react-native-svg`), **not** a Lucide glyph.

---

## 8 · Logo & agency branding

### 8.1 Packed mark
Suitcase mark in `public/` (`packed-mark.svg`, `packed-mark-white.svg`,
`packed-tile.svg`, `favicon.svg`). On light → `--brand` fill; on dark/photo →
white version. Logo specs in `registry/styles/packed-theme-tokens.css`: min **24px** (`--logo-min`),
clear space **50%** of mark height all sides (`--logo-clearspace`).

### 8.2 Agency logos — the "brand chip" (white-label)
Agencies upload their own logo (transparent *or* opaque-on-white). Always place
it inside a **white brand chip** — a rounded white card with a soft shadow — so
both render cleanly. Tokens in `tokens/brand.css §3` (`--chip-bg`,
`--chip-radius`, `--chip-shadow`, `--chip-logo-h`…). On photos, use
`--chip-shadow-on-photo`. Ask agencies for **~2–3:1 wordmarks** on
white/transparent; very tall/square logos make the chip bulky.

---

## 9 · Imagery

Warm, sunlit, **golden-hour** travel photography — sunsets, coastlines, old-town
streets. Avoid cold/blue-grey or clinical stock.
- Store a photo URL **per trip/destination**; render behind the hero with a scrim
  (§2.6). Keep hero text white with `--on-grad-shadow`.
- Placeholders today are warm gradients (`--photo-fallback`); swap in real photos
  in production.
- Data slop is banned — no decorative numbers, fake stats, or filler imagery.

---

## 10 · Voice & content

**Voice:** warm, calm, quietly capable. Speak to the user as **"you"**; Packed is
**"we"** ("We'll watch the flights from here").

- **Casing:** sentence case everywhere; ALL-CAPS only for eyebrows.
- **Length:** short. One idea per line. Notifications are a glanceable sentence.
- **Lead with the helpful fact**, then the detail.
- **No emoji** in product UI.
- **Numbers/times/codes** in the mono face.

| ✅ Do | ❌ Don't |
|---|---|
| "Heads up — your gate just moved to B7." | "ALERT: Gate reassignment event detected." |
| "All set. We'll watch the flights from here." | "Configuration successfully submitted." |
| "Your trip to Lisbon" | "Trip Entity #4471" |

- **Marketing headlines** lean lyrical in the serif: *"The trip is booked. The
  magic is what comes after."* Body stays plain and concrete.
- **Words we like:** journey, trip, sorted, set, heads up, in the loop, cared for.
- **Avoid:** leverage, utilize, seamless, synergy, "event", "entity".

---

## 11 · Components

React primitives in `registry/ui/`, published via the `@packed` shadcn registry.

- **Build any new component for both platforms with an identical prop API**
  (e.g. Button: `variant`, `size`, `pill`, `iconLeft/Right`).
- Native equivalents: `Pressable` / `View` / `Text` / `TextInput` against
  `theme.ts`.
- Forms: 1.5px border, turning `--border-brand` on focus with a `--ring-width 3px`
  `--ring-focus` halo.
- **Definition of done:** reads from tokens on both platforms · matching prop API
  · passes voice + sentence-case review.

---

## 12 · Token map (where to look)

| Concern | File |
|---|---|
| Design tokens (web) | `registry/styles/packed-theme-tokens.css` |
| Marketing / effects tokens | `registry/styles/packed-theme-effects.css` |
| React Native theme mirror | `registry/lib/theme.ts` |
| Tailwind theme bridge | `registry/styles/packed-theme.css` |

---

## 13 · Caveats (assets to replace for production)
- **Fonts** load from Google Fonts — swap for licensed/self-hosted if available.
- **Logo** is a designed-from-scratch suitcase mark — a strong start, not a final
  identity.
- **Photography** is warm gradient placeholders — replace with real travel imagery.
- **Icons** use Lucide via CDN in the kits — install the package for production.
- **Dark theme** is a considered foundation, not yet exercised across every screen.
