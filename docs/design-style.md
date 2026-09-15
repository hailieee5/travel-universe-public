# Travel Universe — reusable map & sticker design system

> **Read this before creating any new city map, landmark sticker, character placement, or photo-reveal surface.** This document is the source of truth for the visual system; city research documents only supply local facts and references.

## 1. Design intent

Travel Universe is a personal memory atlas: **a modern travel magazine × a flat city poster × a light marker sketch × a collectible sticker book**. It is not a navigation product and it is not a photorealistic travel guide.

Geography must keep its truthful north / south / east / west relationship. The map is nevertheless allowed to simplify scale, spacing, and roads in service of a clear, emotional composition.

## 2. What stays fixed across cities

| System element | Required rule |
| --- | --- |
| Illustration mode | Flat editorial travel illustration with slightly naive, hand-made geometry. |
| Silhouette | Make the landmark recognisable at small size from its most iconic mass or roofline. |
| Structure | Use large colour blocks, few architectural divisions, and only the lines needed for recognition. |
| Lines | Use dark ink or selective white cut-lines for windows, columns, and roof structure. Never trace every detail. |
| Sticker framing | Prefer transparent-background production assets with a very thin warm-white edge only when it helps separation. No thick cartoon border, glow, or heavy drop shadow. |
| Text | Do not put place names inside production sticker artwork. Render labels separately in the website with a clean sans-serif face. |
| Environment | Add 0–3 supporting elements only when they identify the place: a water patch, small mountain, bridge, tree group, or bushes. The landmark always dominates. |
| Map purpose | Roads, rivers, hills, and north markers are story cues, never turn-by-turn navigation. |

## 3. Colour system — relational, not fixed

### Palette rule

Each **city map** chooses **3–4 active chromatic families**. Warm cream, charcoal / dark navy, and white are functional neutrals and do not consume those 3–4 slots. A city may choose different hues; it must preserve the same colour relationships:

1. **Paper neutral:** warm cream / ivory background.
2. **Ink neutral:** charcoal or deep navy for structure, silhouettes, and small text.
3. **Hero accent(s):** 1–2 stronger colours used on about 30–40% of landmarks to create anchors.
4. **Quiet supporting hue(s):** 1–2 softer colours for the remaining landmarks, water, or landscape.

### Per-sticker rule

- A sticker normally uses **two dominant colours**, and never more than **three active colour families** before neutrals.
- Vary the colour treatment across the sheet: not every sticker may use the strongest accent.
- Keep one or two highly saturated landmarks as visual anchors; let the others remain cream, muted green, soft peach, navy, or warm beige.
- Flat colour blocks are preferred. No glossy gradients, realistic material textures, or soft 3D shading.

### City palette handoff template

Before creating a new city, record this in that city’s research document:

| Role | City choice | Intended use |
| --- | --- | --- |
| Paper | _warm cream / ivory_ | Map background and breathing room |
| Ink | _charcoal or deep navy_ | Structural lines and text |
| Anchor A | _city-specific_ | 1–2 hero landmarks |
| Anchor B / support | _city-specific_ | Contrasting landmark or transport cue |
| Landscape / water | _city-specific, only if selected_ | Minimal environmental orientation |

Kyoto may lean on vermilion, gold, water blue, and leaf green; Munich may lean on deep navy, bridge red, soft peach, and green. These are examples of colour *roles*, not mandatory global swatches.

## 4. Landmark construction recipe

1. Identify the one recognisable silhouette: a tower, roof stack, bridge arch, pavilion, façade, chimney, or castle profile.
2. Reduce it to 2–3 large colour masses.
3. Add only the minimum structural lines required to distinguish it.
4. Add one environmental cue only if it increases recognition.
5. Review at small on-map size. If the landmark stops reading, simplify before adding detail.

### Do

- Permit gently uneven roof lines and simplified proportions.
- Use hand-drawn geometric feeling rather than architectural tracing.
- Let white line cuts articulate a façade without adding dense window grids.
- Keep open cream space around clustered stickers and photo stacks.

### Do not

- Use realistic architectural drawings, detailed watercolour, 3D icons, glossy vectors, fantasy scenery, or generic app-icon styling.
- Add excessive brick patterns, windows, foliage, clouds, flowers, or surrounding buildings.
- Let shadows, borders, or decoration overpower the landmark.
- Make a map grey, uniformly muted, or uniformly saturated.

## 5. Map composition and spatial truth

- `latitude` / `longitude` describe the real location; `mapX` / `mapY` only describe its position on the illustration. They are never interchangeable.
- Preserve cardinal direction even when distance is compressed or enlarged.
- Keep genuine local clusters together. Example: Kyoto Tower is just north of Kyoto Station and must read as a paired city-centre moment.
- Keep regional outliers separate. Example: Yamazaki must sit visibly southwest and distant from central Kyoto.
- For a city with day trips, decide early whether they are framed postcards around a city map or a true regional map. Do not disguise a distant day trip as a neighbouring city sticker.

## 6. Map, sticker, and UI relationship

- Map: warm cream field, clear negative space, simplified roads and water, illustrative orientation.
- Hotspot: the primary interactive target when a supplied map already contains its own landmark art. It is transparent at rest and never redraws or duplicates the landmark.
- Sticker: a supplied landmark asset is a source asset, not an automatic on-map overlay. Use it only when the map does not already carry that landmark artwork, and never crop, recolour, redraw, or replace it without approval.
- Label: separate, calm, sans-serif text with name and optional photo count.
- Character: a supporting travel companion, never a replacement for a landmark or a click target.
- Photos: Polaroid / tarot-card memory objects; the photograph, not visual chrome, stays primary.

## 7. Motion and accessibility guardrails

- City entry should feel like unfolding a paper map, not a game cinematic.
- Sticker selection may use one restrained lift, tilt, or colour response—never constant bouncing.
- Support `prefers-reduced-motion`; animation cannot be required to navigate or understand place selection.
- Expose every Place name and photo count in text; do not rely on colour or map position alone.
- Provide keyboard focus and a clear close action for future expanded-photo views.

## 8. Supplied visual assets

| Asset | Location | Purpose | Handling |
| --- | --- | --- | --- |
| Kyoto map | `public/maps/kyoto-map.png` | Project reference copy of the supplied Kyoto map | Use as supplied; the original source asset remains untouched. |
| Kyoto sticker sheet | `public/stickers/kyoto-landmark-sticker-sheet.png` | Kyoto place-reference sheet | Use as supplied; do not crop or edit without explicit approval. |
| Munich map | `public/maps/munich-map.png` | Existing Munich map reference | Use as supplied; do not crop, redraw, or edit without explicit approval. |
| Travel girl character sheet | `public/characters/travel-girl-character-sheet.png` | Character reference and future UI art | Use as supplied; no derivative assets yet. |
| Munich landmark sticker sheet | `public/stickers/munich-landmark-sticker-sheet.png` | Munich place-reference sheet | Use as supplied; it is not yet split into production stickers. |
| Flat editorial style reference | `public/stickers/flat-editorial-style-reference.png` | Palette, silhouette, and line-treatment reference | Reference only; it does not lock a global palette. |

## 9. New-city checklist

Before any new city artwork is accepted, confirm:

- [ ] Real coordinates and visual map coordinates are stored separately.
- [ ] The city chose 3–4 active chromatic families plus functional neutrals.
- [ ] Each sticker has a strong small-size silhouette and 2–3 dominant colours.
- [ ] Place labels are separate from production sticker images.
- [ ] Environment is minimal and adds recognition.
- [ ] Directional relationships are correct and day trips are not visually misleading.
- [ ] No fake places, photos, or landmark assets were introduced.
- [ ] The artwork follows the motion and accessibility guardrails above.

## 10. Deliberate omissions

- No final web font has been selected.
- No supplied map artwork has been redrawn, altered, or split into implementation assets.
- No supplied sheet has been automatically cropped, split, recoloured, or converted into new sticker assets.

## 11. Approved desktop city-map experience

### Frame and map

- The first implementation targets desktop browsers only: minimum page width `1200px`, visual reference width `1440px`, and a stable result from `1280px` through `1920px`.
- The outer page frame is a light blush gradient (`#F4DEDF` to `#ECCBD0`). It must remain visually distinct from the map's warm-cream paper field.
- The illustrated map stays centred, keeps its original aspect ratio, and fits the available desktop height without adding needless vertical scrolling. It has a restrained white paper edge and a soft green-tinted shadow.
- `mapX` and `mapY` remain percentage coordinates relative to the map itself. Landmark positions must never be bound to viewport pixels.
- The Kyoto and Munich supplied maps already include landmark artwork. Their implementation uses transparent hotspot buttons positioned over the in-map landmarks, rather than a second visible layer of sticker art.

### Map interaction

- At rest, a hotspot is quiet. On hover or keyboard focus it gains only a fine halo / outline and a compact dark label with the place name, photo count, and camera mark.
- The hover response is a small editorial lift and scale (roughly `1.03–1.06`), never a bounce, spin, glow field, or cartoon spring.
- The hotspot must be keyboard reachable and announce the place name and photo count. Reduced-motion users retain the same navigation and visibility.
- Kyoto's **Other memories** remains in the data and photo manifest but uses `mapVisible: false` and has no hotspot.
- Kamo River is intentionally a visual, non-point place: its hotspot is placed on the bridge beside Kamigamo Shrine. This is a manual illustrated-map position, not inferred GPS.

### Memory overlay and Polaroids

- Selecting a place does not navigate away. It opens a memory overlay above the current map.
- The map remains visible as the stage: only a dark translucent wash and light blur are applied. There is no opaque cream modal card or boxed photo panel.
- The overlay contains only the place name, photo count, close action, and Polaroid fan.
- Photos keep their original files and are rendered as white Polaroids with a generous lower border and no fabricated caption.
- The fan adapts to the number of photos. One photo is centred; two through seven use a measured bottom-origin arc. Current desktop sizes step from roughly `360px` for one photo to `230px` for seven photos, so a short set feels substantial while a seven-photo set stays readable.
- The fan initially displays at most seven photos; any further photos remain available in the viewer. Hovering one card lifts it about `24px`, raises its stacking order, and adds a slight scale without scattering the rest.
- CSS dimensions for the cards are resolved to explicit pixel custom properties in the component before rendering. This avoids browser incompatibilities with multiplying CSS custom properties inside `calc()` and keeps real photographs visible.

### Photo viewer

- Clicking a Polaroid opens a centred, photo-only viewer. It supports close, previous, next, a visible current index, keyboard `←` / `→`, and `Esc`.
- Closing the viewer returns to the same open Polaroid fan; closing the fan returns to the city map.
- The viewer exposes no EXIF, GPS, AI description, social controls, comments, or decorative metadata.
