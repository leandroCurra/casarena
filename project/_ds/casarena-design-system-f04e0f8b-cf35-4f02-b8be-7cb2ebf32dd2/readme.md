# Casarena — Design System

Casarena is a coastal house on the east coast: six rooms on a dune, a long gallery, and a wooden stair down to the sand. The brand is warm, quiet and slightly antiquarian — deep sea greens against warm sand, nineteenth-century engraved sea life, and aerial photographs of water meeting shore.

## Sources

Everything here is derived from material the client supplied. There is no product codebase.

| Source | What it gave us |
| --- | --- |
| `Casarena.fig` (mounted Figma file, page **Page 1**, frame **Slide 16:9 - 1**, node `1:2`) | The brand sheet: wordmark placement (292.06 × 29.88 px at x 1414, y 48 on a 1920 × 1080 artboard), the eight-colour palette as swatches, the engraved icon sheet, and five photographs |
| `uploads/logo.svg` | The Casarena wordmark, the only brand mark in the system |
| `uploads/Recurso 102–186.svg` (85 files) | The engraved nautical glyph set |
| Five `ChatGPT Image …png` files | The photographic library |
| Client note | The eight named palette values, in Spanish (Dark Teal, Deep Green, Ocean Green, Sea Mist, Sand, Warm Stone, Blanco cálido, Turquesa profundo) |

Figma variables in the file: two collections — **Design System Colors** (4 colour variables) and **Design System Typography** (1 string variable, `Montserrat`).

## Index

- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `base.css`
- `components/` — `brand/`, `core/`, `forms/`, `surfaces/`
- `ui_kits/website/` — the Casarena site, click-through
- `slides/` — six 1920 × 1080 deck layouts
- `templates/deck/` — the same six layouts as a copyable Design Component
- `guidelines/` — the foundation specimen cards
- `assets/` — `logo.svg`, `icons/` (85 SVGs), `imagery/` (5 photographs)
- `SKILL.md` — Agent Skills wrapper
- `thumbnail.html` — the homepage tile

## Components

**Brand** — `Logo`, `Icon`
**Core** — `Button`, `IconButton`, `Badge`, `Tag`, `Divider`
**Forms** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
**Surfaces** — `Card`, `Tabs`, `Dialog`, `Tooltip`

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage, variants).

### Intentional additions

The source `.fig` is a brand sheet, not a component library — it defines exactly one symbol (`logo 1`). Everything except `Logo` is therefore an addition, authored to the brand's visual rules so consumers have a working primitive set. In order of confidence:

- `Logo` — the one component the source defines.
- `Icon` — a wrapper for the 85-glyph engraved set, which the source *does* define; the wrapper is ours.
- `Button`, `IconButton`, `Badge`, `Tag`, `Divider`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Card`, `Tabs`, `Dialog`, `Tooltip` — a standard primitive set, styled to the foundations below. No visual precedent exists for these in the source; treat their *styling* as canonical and their *inventory* as a proposal.

These fourteen names are **intentional additions**, confirmed. They do not appear in the `.fig` because the `.fig` is a brand sheet with no component library; there is no source vocabulary to rename them to.

## Content fundamentals

The voice is Argentine Spanish, written the way a caretaker would write a note left on a kitchen table.

- **Person.** Second person singular, voseo — *consultá*, *reservá*, *anotá*. Never *usted*. The house speaks as *nosotros* when it speaks about itself: "Abrimos en octubre."
- **Casing.** Sentence case in body and headings. Uppercase is reserved for micro-type — eyebrows, buttons, labels, captions — where it always carries wide tracking.
- **Sentence shape.** Short declaratives, often two clauses joined by *y*. Concrete nouns over adjectives: "seis habitaciones", "una escalera de madera", "el cuaderno de mareas". No superlatives, no "experiencia", no "único".
- **Facts as poetry.** The brand states practicalities plainly and lets them do the emotional work: "Se come a las nueve, en la galería, todos en la misma mesa." "Abre en octubre y cierra cuando baja el viento."
- **Numbers.** Written as digits, unqualified: "km 41", "$180 / noche", "1974".
- **What's absent.** No emoji, ever. No exclamation marks. No CTAs that beg — *Consultar fechas*, not *¡Reservá ya!*. No hospitality jargon (no "amenities", "escapada", "rincón soñado").
- **Length.** Headings under eight words. Body paragraphs under three sentences. Eyebrows two to four words.

## Visual foundations

### Colour
Eight values, no more. Three greens carry the brand (**Dark Teal `#064E4A`**, **Deep Green `#063531`**, **Ocean Green `#346A67`**), **Deep Turquoise `#0E7777`** is the single accent, **Sea Mist `#7A9093`** is quiet text, and three warm neutrals form every surface (**Warm White `#F7F5EF`** page, **Sand `#E2DDCE`** raised, **Warm Stone `#C1C0B1`** muted). Pure white exists only inside cards; pure black exists only as the original ink of the engravings.

A page uses **one or two** background fields — warm white plus one sand or deep-green band. Never three. Semantic colour (success/warning/error) does not exist; errors are marked in Deep Turquoise, which reads as emphasis rather than alarm.

Two theme scopes ship: `[data-theme="deep"]` (deep-green page) and `[data-theme="sand"]`.

### Type
**Montserrat** is the entire type system, from ExtraLight 200 to Bold 700, and it is the one typeface named in the file's own variables. Its personality comes from weight and tracking, not from family mixing:

- Display: 88 / 64 px, weight 200, **uppercase, `.24em` tracking**. This is the brand's signature — very light, very open.
- Headings: 48 → 22 px, weight 300 → 500, `.06em`.
- Body: 16 px / 1.45; lead 20 px / 1.7 at weight 300.
- Micro-type: 11 px eyebrows at weight 600 with **`.34em`** tracking, uppercase.

The wordmark itself is a custom lettering file, not a font — never re-set "Casarena" in Montserrat where the mark belongs.

### Space and layout
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Page gutter 48 px (96 wide), container 1280, prose measure 62ch, section rhythm 96 px. Slides are 1920 × 1080 with a **145 px** margin and the wordmark locked top-right — both numbers taken from the source artboard.

### Shape, borders and elevation
Square corners everywhere. The pill radius appears in exactly two places — `Tag` and `Switch` — and nowhere else. Borders are 1 px hairlines at `rgba(6,53,49,.14)`, never grey. Three shadows, all tinted deep green rather than black: `low` for a barely-lifted surface, `lift` for cards over imagery, `float` for modals. Cards are **flat by default** — hairline border, no shadow, no radius; `elevated` is opt-in.

### Backgrounds and imagery
Photography is aerial or top-down, cool-to-neutral, high-key, and abstract — water, foam, raked sand, palm shadow on a painted wall. No people, no interiors, no golden-hour warmth. Images are used **full-bleed** or half-bleed to a page edge, never as an inset rounded thumbnail. Over photography, use the bottom protection gradient (`--scrim-bottom`) or the flat wash (`--scrim-full`), both deep green — never a black scrim, never a blur-behind-text capsule.

Texture, not pattern: the brand has no repeating motif, no illustration wallpaper. The palm-shadow images double as tinted background fields at 28 % opacity.

### Transparency and blur
Two sanctioned uses: the sticky header (`rgba(247,245,239,.92)` + 14 px backdrop blur) and the modal scrim (`rgba(6,53,49,.62)` + 14 px blur). Nowhere else.

### Motion
Drift, never bounce. `--ease-shore` `cubic-bezier(.22,.61,.36,1)` for anything entering or hovering; `--ease-inout` for reversible transitions. 90 ms for colour, 280 ms for layout, 520 ms for image scale. No spring, no overshoot, no staggered reveal cascades. `prefers-reduced-motion` zeroes every duration.

### States
- **Hover** — primary buttons brighten to Deep Turquoise; outline and ghost controls fill with Sand; card images scale to 1.04 over 520 ms and the card shadow deepens from `lift` to `float`; links shift from Deep Turquoise to Dark Teal and their underline follows.
- **Press** — 1 px downward translate. No colour change, no scale-down.
- **Focus** — 2 px Deep Turquoise outline, 2 px offset, on every focusable element.
- **Disabled** — 38 % opacity, `not-allowed`. Never grey-out by recolouring.
- **Selected** — Dark Teal fill with Warm White text (`Tag`), or a 2 px Dark Teal underline (`Tabs`).

## Iconography

The set is **85 SVG line engravings** in a nineteenth-century natural-history style — shells, corals, gulls, crustaceans, ships, instruments — supplied by the client as `Recurso 102–186.svg` and copied verbatim into `assets/icons/`. Two files (`Recurso 152`, `Recurso 154`) are empty in the source and are excluded from `Icon.names`, leaving **83 usable glyphs**.

- **They are ornaments, not affordances.** Casarena has no functional UI icon set — no chevrons, no hamburger, no magnifier. Navigation and controls are labelled in words. If you need a UI glyph, use a text character (`×` for close, as `Dialog` does) rather than importing an icon library.
- **Format.** Plain SVG, single-colour, no icon font, no sprite sheet, no CDN dependency. The `Icon` component renders them as CSS masks so they inherit `currentColor` and can be tinted to any palette value.
- **Repair note.** As exported, each engraving's outer silhouette carried a `.cls-1` class whose stylesheet was stripped, so it filled solid black over the line detail. We added `fill="none"` to that one path in the 44 affected files and `fill-rule="evenodd"` at the root. The path data is untouched.
- **Scale.** 24–32 px as a caption mark, 40–56 px inline, 88–96 px as a section illustration. Below 24 px the engraving lines collapse — use words instead.
- **Emoji and Unicode.** Emoji are never used. Unicode is used only for `×` and the middot separator `·`, which appears throughout micro-type.

## Caveats

- **No font binaries were supplied.** Montserrat is loaded from Google Fonts. If Casarena licenses a specific cut, send the files and we'll swap the `@font-face` rules.
- **The wordmark's lettering is not available as a typeface** — only as `logo.svg`. Any headline that wants that look must be set in Montserrat 200 uppercase with `.24em` tracking, which is the closest system equivalent.
- **No product screens exist in the source.** `ui_kits/website/` applies the foundations to a plausible marketing site; its layout is a proposal, not a recreation. See `ui_kits/website/README.md`.
- **Spanish is assumed.** All sample copy is Argentine Spanish. If the brand ships in English, the voice rules hold but the examples need rewriting.
