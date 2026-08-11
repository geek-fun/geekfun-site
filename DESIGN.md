---
name: GEEKFUN
description: The Night Workshop — dark-first, precision developer-tool surfaces with forge-amber signal color
colors:
  forge-amber: "#f89b40"
  forge-amber-light: "#fba95a"
  forge-amber-deep: "#e0832a"
  forge-amber-dark: "#c97120"
  forge-amber-text: "#f89b40"
  forge-amber-display: "#f89b40"
  ember-soft: "rgba(248, 155, 64, 0.16)"
  violet-signal: "#bd34fe"
  ink-on-amber: "#241505"
  paper: "#ffffff"
  night-bg: "#0f0f11"
  night-bg-alt: "#18181b"
  night-bg-elv: "#1f1f22"
  glass-card: "rgba(24, 24, 27, 0.6)"
  hairline-light: "rgba(0, 0, 0, 0.06)"
  hairline-dark: "rgba(255, 255, 255, 0.08)"
  route-muted: "#565a63"
  text-1: "#213547"
  text-2: "rgba(60, 60, 67, 0.78)"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.2em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  pill: "9999px"
  lg: "12px"
  md: "10px"
  sm: "8px"
  dot: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  "2xl": "32px"
  "3xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.forge-amber}"
    textColor: "{colors.ink-on-amber}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "{colors.forge-amber-deep}"
  button-secondary:
    backgroundColor: "{colors.night-bg-elv}"
    textColor: "{colors.text-1}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
    height: "36px"
  button-secondary-hover:
    backgroundColor: "{colors.night-bg-alt}"
  feature-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "28px"
  feature-card-hover:
    backgroundColor: "{colors.glass-card}"
  section-label:
    textColor: "{colors.forge-amber-text}"
    typography: "{typography.label}"
  brand-display:
    textColor: "{colors.forge-amber-display}"
    typography: "{typography.display}"
  eyebrow-pill:
    backgroundColor: "{colors.ember-soft}"
    textColor: "{colors.forge-amber}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  announcement-badge:
    backgroundColor: "{colors.forge-amber}"
    textColor: "{colors.ink-on-amber}"
    rounded: "{rounded.lg}"
    padding: "2px 8px"
---

# Design System: GEEKFUN

## Overview

**Creative North Star: "The Night Workshop"**

GEEKFUN's interface is a workshop kept after hours: near-black walls, one warm work lamp, and precision tools laid out in deliberate order. The system is dark-first — the primary environment is `#0f0f11` night, elevated in `#18181b` and `#1f1f22` — with light mode as the bright, white-walled daytime bench for docs and browsing. Everything is built around one commitment: developers who ship, served by tools engineered for the long term.

The voice is **quiet precision**. Restraint does the talking: generous vertical rhythm, hairline borders instead of heavy frames, refined soft shadows that only appear at rest and deepen on hover, and a single signal color — forge amber — applied in rare, deliberate moments. Cards float on subtle depth rather than colored noise. The only gradient pair, amber-to-violet, is reserved for decorative backgrounds and accent lines; it never carries text or primary action.

Motion is disciplined: transform and opacity only, expo-eased, one orchestrated reveal per moment. The carousel and the typewriter cursor are the only recurring motion signatures. Accessibility is baseline — WCAG 2.1 AA, visible focus rings in forge amber, touch targets of 44px minimum on coarse pointers, and full `prefers-reduced-motion` support.

**Key Characteristics:**
- Dark-first workshop surfaces (`#0f0f11` / `#18181b` / `#1f1f22`), light paper mode for docs
- One signal color — forge amber `#f89b40` — used sparingly, never more than a whisper
- Hairline borders (1px) + refined soft shadows; glow replaces shadow in dark mode
- Pill buttons and generous radii (12px cards, 9999px pills)
- Uppercase micro-labels with wide tracking as the recurring section rhythm
- Expo-eased motion on transform/opacity only; reduced-motion fully honored
- 4pt spacing scale, 1152px container scaling up to 1800px on large displays

## Colors

A two-environment palette: warm forge amber as the single signal color on cool near-black workshop surfaces (dark) or clean white paper (light). Neutrals are tinted toward the brand hue at very low chroma for cohesion; violet exists only inside gradients.

### Primary
- **Forge Amber** (#f89b40): The work lamp — the brand color. Primary buttons, badges, section labels, hero brand words, active states, carousel dots. In dark mode it lifts to **Forge Amber Light** (#fba95a) for contrast. Deeper steps **Forge Amber Deep** (#e0832a, hover) and **Forge Amber Dark** (#c97120, pressed/visited) build the interaction ramp. **Ember Soft** (rgba(248, 155, 64, 0.16)) tints subtle fills: eyebrow pills, announcement bars, active menu backgrounds.
- **Forge Amber Text** (#f89b40): Amber as text on light backgrounds — section labels, links, eyebrow text, hero brand words. Same hue as the fill; this is the brand color and its vibrancy is the point.

### Accent
- **Violet Signal** (#bd34fe): Gradient partner only. Appears exclusively inside amber→violet gradients on decorative backgrounds (hero glows, accent lines, panel washes). Never as a UI element, never on text, never as a surface.

### Neutral
- **Ink on Amber** (#241505): Text and icons on forge-amber fills — dark warm ink, never white. White on amber fails WCAG AA (2.15:1); dark ink passes at 8.3:1 (light) / 9.3:1 (dark).
- **Paper** (#ffffff): Light-mode card and surface base; the bright side of the duality.
- **Night Background** (#0f0f11): Dark-mode page base.
- **Night Alt** (#18181b): Dark-mode alternating sections and hover fills.
- **Night Elevated** (#1f1f22): Dark-mode raised surfaces (secondary buttons, floating panels).
- **Glass Card** (rgba(24, 24, 27, 0.6)): Dark-mode card fill — translucent, lets the night show through.
- **Hairline Light** (rgba(0, 0, 0, 0.06)) / **Hairline Dark** (rgba(255, 255, 255, 0.08)): The 1px border token for cards and dividers, per mode.
- **Text 1** (#213547 / rgba(255, 255, 255, 0.87) dark) and **Text 2** (rgba(60, 60, 67, 0.78) / rgba(235, 235, 245, 0.6) dark): VitePress default primary and secondary text, unmodified.

### Named Rules
**The One Lamp Rule.** Forge amber is the only saturated color in the system. It appears on ≤10% of any given screen — a primary button, a label, a focus ring — and its rarity is the point. If a screen needs more color, the answer is more night, not more amber.

**The Violet Enclosure Rule.** Violet exists only inside a gradient with amber. A lone violet element is off-system; a violet-only gradient is off-system.

**The Ink-on-Amber Rule.** Text on forge-amber fills is always dark ink (#241505), never white. White-on-amber measures 2.15:1 and fails WCAG AA; dark ink passes at 8.3:1+. Amber as text on light surfaces uses the brand hue itself (#f89b40 in light, #fba95a in dark) — brand vibrancy is a committed identity decision. Note: at the fill hue on white, amber text measures ~2.15:1, below WCAG AA for normal text; the brand accepts this for the primary color and keeps AA on button text via dark ink.

## Typography

**Display Font:** System UI stack (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif)
**Body Font:** Same system UI stack
**Label/Mono Font:** ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace — for install commands, shortcuts, and code

**Character:** Clean, neutral, weight-led hierarchy. The system speaks through weight and tracking, not exotic letterforms: tight negative tracking on display lines for a premium, engineered feel; wide-tracked uppercase micro-labels as the recurring structural voice; body type at 1.7 line height for unhurried reading.

> **Committed Direction (unimplemented):** The brand commits to distinctive custom display and body fonts — never Inter, Roboto, or Space Grotesk. The implementation currently ships the VitePress default system stack. When custom fonts land, preserve the weight/tracking/scale structure below; only the family changes.

### Hierarchy
- **Display** (800, 3.5rem → 5rem at 1920px, line-height 1.05, tracking -0.04em): Hero headlines and brand names. Tight, monumental, never word-wrapped awkwardly.
- **Headline** (700, 1.75rem, line-height 1.2, tracking -0.02em): Section CTAs and page titles.
- **Title** (700, 1.125rem, line-height 1.4, tracking -0.01em): Card and feature titles.
- **Body** (400, 1rem / 0.9375rem, line-height 1.7 for prose, 1.5–1.6 for card copy, max ~65–75ch): Running text. Secondary text uses Text 2.
- **Label** (700, 0.8125rem, tracking 0.2em, uppercase): Section labels flanked by hairlines; the recurring rhythm marker. Smaller variants at 0.6875rem tracking 0.05em for badges and eyebrow pills.

### Product-page variants (documented sub-scale steps)
The product landing pages (ProductLayout kit) use deliberate intermediate steps between the canonical roles. These are intentional, not drift:
- **Hero on product pages** (700, 2.5rem → 3rem at ≥1440px, tracking -0.03em): A quieter headline than the homepage display, suited to the product hero's two-line name + claim.
- **Showcase panel title** (700, 2rem, tracking -0.02em): Between Headline and Title; the persuasive panel opener.
- **Card/section lead-ins** (1.375rem, 700): Section titles on install/ecosystem/features/security sections at ≤768px (down from 1.75rem).
- **Body lead** (1.0625rem, 400): Showcase body copy at desktop.
- **Tight sub-labels** (0.75rem, 600) and **micro-badges** (0.625rem): Platform-grid and database-grid chip labels.
- **Radii:** 8px is the interactive-element radius for install tabs and copy buttons (bumped from 7px to align with the token); 14px remains the ≥1440px card radius.

### Named Rules
**The Tracking Rule.** Display and headline type always carries negative tracking (-0.02em to -0.04em); labels and badges always carry wide tracking (0.05em to 0.2em) with uppercase. No zero-tracking display type, no tight-tracked labels.

## Layout

A centered container system that grows deliberately with viewport: **1152px** at desktop, **1320px** at ≥1440px, **1536px** at ≥1920px, **1800px** at ≥2560px, with matching padding of 24 / 48 / 64 / 80px. Content columns narrow inside (hero text max 880px, body copy 65–75ch).

Sections breathe vertically — hero 120px top padding, values/products 80–100px, team 80–120px — scaling up on large displays and down at ≤768px (hero 80px, sections 56–64px). Alternating section backgrounds (`--vp-c-bg` ↔ `--vp-c-bg-alt`) create rhythm without dividers.

Grids follow the responsive ladder:
- **Values grid:** 3 columns → 2 at ≤1024px → 1 at ≤768px; gap 24px → 32px → 40px
- **Products grid:** 2 columns → 1 at ≤768px; gap 32px → 40px → 48px; an odd last card centers itself on its row
- **Card content:** `repeat(auto-fit, minmax(280px, 1fr))` where card grids self-adjust

Buttons and actions stack full-width at ≤480px; interactive elements expand to 48px min-height at ≤768px and 44×44px minimum on coarse pointers.

## Elevation & Depth

A hybrid system that changes material philosophy per environment. **Light mode uses refined soft shadows** — layered, low-opacity, no hard edges. **Dark mode abandons shadows for borders and warm glow** — near-black shadows would read as mud, so depth is carried by hairline borders and forge-amber glow instead.

### Shadow Vocabulary
- **Shadow 1** (`0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)`): Card rest state. A whisper of depth.
- **Shadow 2** (`0 8px 24px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)`): Hover lift and raised panels.
- **Shadow 3** (`0 16px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)`): Floating elements — mega menus, hero imagery, modals.
- **Button Rest / Hover / Soft** (`0 10px 24px rgba(15,23,42,0.08)` / `0 18px 38px rgba(15,23,42,0.12)` / `0 8px 20px rgba(15,23,42,0.06)`): Pill-button shadow ramp in light mode; deeper equivalents in dark.
- **Glow** (rgba(248,155,64,0.08) light / 0.15 dark): The dark-mode depth carrier. `box-shadow: 0 8px 24px var(--gf-c-glow)` on card hover, plus radial-gradient amber glows behind hero visuals (blurred 40–80px).

### Named Rules
**The Glow-in-Dark Rule.** In dark mode, elevation is expressed with borders and amber glow, not black shadows. When a dark surface needs lift, raise its border and add glow; do not stack black shadow layers.

**The Flat-At-Rest Rule.** Cards are calm at rest (Shadow 1 only). Depth appears as a response to hover or focus: lift 2–4px, border shifts to forge amber, glow joins the shadow stack. No element sits permanently "popped."

## Shapes

A pill-and-radius language on a 4pt rhythm. **Pills (9999px)** for every interactive element — buttons, eyebrow pills, badges, download chips — the signature silhouette. **Cards** use 12px radius (14px at ≥1440px, 10px at ≤1024px, 8px at ≤768px) with 1px hairline borders. Small embedded elements — sub-cards, code frames, callouts — step down to 8–10px. Carousel indicators and value icons are perfect circles (50%).

Borders are always 1px hairlines, never side-stripes or heavy frames. Border color follows the mode (Hairline Light / Hairline Dark) and warms to forge amber on hover (`rgba(248,155,64,0.4)` in light; `rgba(255,255,255,0.2)` in dark).

## Components

### Buttons
- **Shape:** Pill (9999px). Min-height 36px, padding 0.5rem 1.25rem, font-weight 500, size 0.9375rem, gap 0.5rem for icon+label.
- **Primary:** Forge Amber fill, **Ink on Amber** (#241505) text, rest shadow. Hover deepens to Forge Amber Deep (#e0832a) and lifts. Focus shows a 2px forge-amber outline, 2px offset.
- **Secondary / Ghost:** Night Elevated fill, Text 1, hairline border. Hover raises to Night Alt with an ember-soft border tint.
- **Responsive:** Full-width at ≤480px; min-height 48px at ≤768px; 44×44px minimum on coarse pointers. Hover communicates via opacity 0.92 on the fill plus color shift.

### Cards / Containers
- **Corner Style:** 12px (14px ≥1440px, 8px ≤768px).
- **Background:** Paper in light; Glass Card (translucent night) in dark.
- **Border:** 1px hairline (mode-appropriate), warming to forge amber on hover.
- **Shadow Strategy:** Shadow 1 at rest; hover lifts 2–4px with glow + Shadow 2.
- **Internal Padding:** 1.75rem (28px) at rest, 2rem (32px) ≥1440px.

### Section Labels
- **Style:** Uppercase, 0.8125rem, weight 700, tracking 0.2em, forge amber, centered, flanked by 32px (48px ≥1440px) hairlines at 35% opacity. The recurring structural rhythm of every section.

### Eyebrow Pills
- **Style:** Ember Soft fill, forge-amber text, pill radius, 0.8125rem uppercase, tracking 0.05em, weight 600, hairline border. Used above product heroes.

### Announcement Badges
- **Style:** Forge Amber fill, Ink on Amber (#241505) text, 0.6875rem uppercase, tracking 0.05em, weight 700, radius 12px. Signals "New" items in the announcement bar.

### Inputs / Fields
- **Style:** Transparent or paper fill, hairline border, 8px radius.
- **Focus:** 2px forge-amber outline, 2px offset — the same ring language as buttons.

### Navigation
- **Style:** Default VitePress top bar with a mega menu (12px radius, Night surface, Shadow 3, 24–28px padding). Menu rows hover to `--vp-c-bg-soft` with 8px radius; category labels are 11px uppercase with wide tracking; item names 14px/500 and 13px/600.

### Carousel Indicators
- **Style:** 8px circles, Text 3 at rest, forging to amber when active. The only dot-grid pattern in the system.

### Flow Diagram (architecture routing, product pages)
- **Style:** Dark-first routing diagram showing the query path: AI agent → MCP server → split → DocKit/SqlKit bridges → databases. Connector routes rest in **Route Muted** (#565a63) and draw to forge amber on scroll-into-view; a forge-amber pulse travels the route once, nodes glow as the query lands, then the route stays traced ("the always-open path"). Fully static under `prefers-reduced-motion`; routes always visible in the default state.

### Code / Install Frames
- **Style:** Mono font, 8px radius, Night Alt fill, hairline border. The terminal voice for install commands.

## Do's and Don'ts

### Do:
- **Do** keep forge amber rare — one signal moment per viewport is plenty (The One Lamp Rule).
- **Do** use hairline (1px) borders for structure and let shadows/glow carry depth.
- **Do** carry dark-mode elevation with borders and warm glow, never black shadow stacks (The Glow-in-Dark Rule).
- **Do** set display/headline type with negative tracking and labels with wide tracking (The Tracking Rule).
- **Do** keep motion to transform/opacity with expo easing, and honor `prefers-reduced-motion`.
- **Do** maintain 44×44px touch targets on coarse pointers and visible forge-amber focus rings.

### Don't:
- **Don't** put white text on forge-amber fills — use Ink on Amber (#241505) (The Ink-on-Amber Rule).
- **Don't** use violet outside an amber-containing gradient (The Violet Enclosure Rule).
- **Don't** use Inter, Roboto, or Space Grotesk when custom fonts are introduced — the committed direction is a distinctive display/body pairing.
- **Don't** add gradient text for emphasis; text stays solid and legible in Text 1 / Text 2.
- **Don't** use glassmorphism as a system-wide treatment; the translucent Glass Card is reserved for dark-mode card fills.
- **Don't** build hero-metric layouts (big number, small label, stats) — this system leads with tools and type, not numbers.
- **Don't** introduce bounce or elastic easing; the motion vocabulary is expo out.
