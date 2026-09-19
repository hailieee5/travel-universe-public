# Visual asset production

The project keeps the UI art deliberately separate from application code. Generate the asset first, review it, then add it to `public/` and reference it from the city JSON or a component.

## Workflow

1. Pick a single visual role: **city map**, **universe globe**, **decorative ring**, or **landmark sticker sheet**.
2. Generate at the required aspect ratio with no UI text or labels unless the asset is a sticker sheet.
3. Inspect the output at its intended on-screen size; regenerate rather than trying to repair distorted landmarks.
4. Export PNG, then place it under `public/maps`, `public/illustrations`, or `public/stickers`.
5. Wire the asset into `data/*.json` or the relevant component. Place names and interactive coordinates stay in JSON/code, not baked into a map image.

## Standard prompt — city map

Replace the bracketed fields, keeping the style section unchanged across cities.

```text
Create a 4:3 illustrated travel map for [CITY, COUNTRY].

Composition: warm ivory paper background; a simplified, non-geographic street network in soft blush pink; one or two broad sky-blue rivers; small green hills and hand-painted trees. Arrange these recognisable landmarks with generous empty space around each: [LANDMARK 1], [LANDMARK 2], [LANDMARK 3], [LANDMARK 4], [LANDMARK 5]. Use a friendly editorial travel-journal style: hand-drawn black outlines, watercolor and gouache texture, cheerful but restrained colours, clean silhouette, consistent landmark scale.

Include: a small north arrow and a simple back-arrow motif.
Do not include: people, cars in the foreground, photo-realism, dense building blocks, labels, captions, logos, watermarks, UI panels, borders, or text.
```

### Output sample — Kyoto map

The shipped output is [`public/maps/kyoto-map.png`](../public/maps/kyoto-map.png). The landmark names and clickable positions are supplied separately in [`data/kyoto.json`](../data/kyoto.json), which makes the map reusable and avoids generated-text mistakes.

![Kyoto map sample](../public/maps/kyoto-map.png)

## Standard prompt — universe globe

```text
Create a square, isolated watercolor-and-gouache illustration of planet Earth for a whimsical travel journal interface. View from space with the Americas, Europe and Africa visible; deep cobalt oceans, lush green continents, warm ochre deserts, soft white cloud swirls, visible handmade paint texture, playful but refined editorial illustration. The planet should be centered and nearly fill the canvas.

Output requirements: transparent background, no stars, no orbit ring, no text, no labels, no logo, no border, no watermark, no people, no photo-realism.
```

### Output sample — universe globe

The shipped output is [`public/illustrations/watercolor-earth-v1.png`](../public/illustrations/watercolor-earth-v1.png). It is layered with the separate transparent [`travel-earth-ring-v1.png`](../public/illustrations/travel-earth-ring-v1.png), so the orbit decoration can animate independently.

![Watercolor Earth sample](../public/illustrations/watercolor-earth-v1.png)

## Standard prompt — landmark sticker sheet

```text
Create a 4:3 landmark sticker sheet for [CITY, COUNTRY]. Draw [LIST OF LANDMARKS] as separate hand-painted travel stickers on a warm off-white background. Use watercolor and gouache fills with friendly dark outlines, matching a whimsical editorial travel-journal aesthetic. Arrange the stickers in a spacious grid and add a short English and local-language label directly beneath each sticker.

Do not include: people, scenery backgrounds, UI controls, logos, watermarks, photo-realism, borders, or overlapping stickers.
```

Keep the sheet as a visual reference and crop/position from it only when the implementation needs individual landmark art. Avoid relying on generated labels for app data: the canonical names live in JSON.
