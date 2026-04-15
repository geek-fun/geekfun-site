# GEEKFUN Project Instructions

## Design Context

### Users
Developers, DevOps engineers, and the open-source community who need database clients (NoSQL/SQL), serverless tools, and productivity-enhancing software. They use the site to discover products like DocKit, SqlKit, ServerlessInsight, serverless-adapter, and jest-search; download binaries; read documentation; and learn about the community's mission. Context: typically at work, exploring tools for their stack, evaluating open-source alternatives.

### Brand Personality
Technical, Opinionated, Open.

Voice: developer-to-developer, not marketing-to-user. Straightforward, opinionated about tool quality, open-source ethos. No fluff.

### Emotional Goals
Confidence & Trust.

Users should feel they're using professional, battle-tested tools from a community that cares about quality and sustainability.

### Aesthetic Direction
**Visual tone**: Luxury/refined technical — cinematic, polished, developer-focused. Inspired by linear.app and raycast.com.

**Theme**: Light + Dark mode. Dark is primary for developers working late; light for docs and browsing.

**Anti-references**: Generic AI startup templates. Avoid:
- purple gradients on white
- gradient text for emphasis
- Inter/Roboto/system fonts
- card grids with icons + headers + descriptions repeated endlessly
- hero metric layouts (big number, small label, stats)
- glassmorphism everywhere
- side-stripe borders (>1px) on cards/callouts

**References**: linear.app, raycast.com, stripe.com — premium enterprise SaaS aesthetics with compositional restraint and subtle depth.

### Design Principles
1. **Functional clarity over decoration**. Every element serves a purpose. No decorative sparklines or glass cards that don't communicate anything.
2. **Developer-to-developer voice**. Copy is technical and direct. No marketing fluff.
3. **Premium restraint**. Subtle shadows, layered depth, not flashy gradients. One memorable thing: compositional restraint + depth, not colorful noise.
4. **Accessibility as baseline**. WCAG 2.1 AA minimum. Focus-visible states, semantic markup, proper contrast.
5. **Distinctive typography**. Custom fonts: distinctive display + refined body. Never Inter/Roboto/Space Grotesk.

### Typography Direction
- **Display font**: Distinctive, not reflex. Reject Fraunces, Newsreader, Lora, Playfair, Syne, Space Grotesk, Inter, DM Sans. Browse Google Fonts, Pangram Pangram, Future Fonts for something that fits "technical, opinionated, open" as a physical object — a mainframe manual, a shop sign, a fabric label.
- **Body font**: Refined, readable. Not the same as display.
- **Scale**: Modular, fixed rem for app UI (not fluid). At least 1.25 ratio between steps.
- **Line height**: 1.7 for body text, tighter for narrow columns, looser for light-on-dark.

### Color & Theme
- **Primary brand**: Orange `#f89b40` — energy, warmth, developer-friendly.
- **Accent**: Purple `#bd34fe` — used in gradients, not as primary UI.
- **Neutrals**: Tint toward brand hue. Even 0.005-0.01 chroma creates cohesion.
- **Dark mode**: Near-black backgrounds (#0f0f11), elevated surfaces (#18181b, #1f1f22), subtle glows instead of harsh shadows.
- **Light mode**: White cards, subtle borders, soft shadows.
- **Never**: AI color palette (cyan-on-dark, purple-to-blue gradients, neon accents).

### Layout & Spacing
- **Grid**: Self-adjusting `repeat(auto-fit, minmax(280px, 1fr))` for card content.
- **Spacing scale**: 4pt semantic tokens (--space-sm, --space-md). Not pixel-named.
- **Rhythm**: Vary spacing for hierarchy. Tight groupings, generous separations.
- **Max line length**: 65-75ch for body text.
- **Avoid**: Identical card grids, nested cards, hero metric layouts, centered everything.

### Motion
- **Easing**: Exponential (ease-out-quart/quint/expo). No bounce/elastic.
- **Properties**: Transform and opacity only. Never animate width/height/padding/margin.
- **Focus**: High-impact moments (page load, state changes). One orchestrated reveal > scattered micro-interactions.

### Accessibility
- **WCAG**: 2.1 AA minimum.
- **Contrast**: 4.5:1 for text, 7:1 for AAA targets.
- **Focus**: Visible focus indicators on all interactive elements.
- **Semantics**: Proper heading hierarchy, landmarks, buttons vs divs, form labels.

### Products
- **DocKit**: NoSQL desktop client (Elasticsearch, OpenSearch, DynamoDB)
- **SqlKit**: SQL desktop client (PostgreSQL, MySQL, SQL Server, SQLite)
- **ServerlessInsight**: Serverless infrastructure platform + CLI
- **serverless-adapter**: Serverless adapter for Express/Koa
- **jest-search**: Jest utility for search integration testing

### Internationalization
- English (root) and Chinese (zh/) locales.
- Design should work for both. Typography and spacing decisions apply globally.