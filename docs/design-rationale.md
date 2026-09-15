---
artifact: design-rationale
version: "1.1"
created: 2026-08-30
status: accepted
---

# Design Rationale: Reusable flat-editorial travel illustration system

## Decision Summary

**Decision:** Use one cross-city flat-editorial illustration system with a city-specific 3–4-colour palette, rather than a fixed global palette or a realistic local style for every map.

**Date:** 2026-08-30  
**Decision Makers:** Project owner  
**Status:** Accepted

---

## Context

### Problem Statement

Kyoto, Munich, and future destinations need to feel like parts of one personal travel universe while retaining their own geography, landmark silhouettes, and colour mood.

### User Need

The map needs to be emotionally collectible and readable at a small size. The project owner explicitly wants a limited colour approach per map, not a permanently fixed set of colours.

### Constraints

| Constraint type | Description |
| --- | --- |
| Content | Only real supplied places and original photos may be used. |
| Geographic | Cardinal relationships must remain truthful even on an illustrative map. |
| Asset | Supplied maps and sticker sheets are references; no automatic cropping or alteration. |
| Interface | Labels, focus states, and reduced-motion access remain available outside the artwork. |

### Design principles applied

- **Memory over navigation:** illustration creates mood; data retains geographic truth.
- **Recognition before detail:** an iconic silhouette must work at map scale.
- **Consistency through rules, not sameness:** shared construction rules allow each city a distinct palette.

---

## Options Considered

### Option A: One permanent global colour palette

**Description:** All cities use the same exact colour swatches.

**Pros:** Maximum consistency; simple production decisions.

**Cons:** Cities risk looking interchangeable; landmark colour cues become repetitive.

### Option B: City-specific realistic illustration styles

**Description:** Each city uses a different visual technique and local rendering style.

**Pros:** Strong local flavour; broad expressive range.

**Cons:** The site loses its collectible-system feeling; asset quality and UI integration become uneven.

### Option C: Shared flat-editorial system with city-specific palettes (selected)

**Description:** Every city uses the same silhouette, line, negative-space, and sticker rules; each map selects 3–4 active chromatic families.

**Pros:** Coherent collection, local identity, small-size readability, and manageable production constraints.

**Cons:** Requires palette planning and restraint before each new city begins.

---

## Evaluation

| Criterion | Option A | Option B | Option C |
| --- | --- | --- | --- |
| Collection coherence | High | Low | High |
| City individuality | Low | High | High |
| Small-size readability | Medium | Medium | High |
| Reuse by future contributors | High | Low | High |

### User input

- The user prefers roughly three to four colours per map, not fixed colours across every map.
- Supplied Kyoto and Munich references favour flat colour blocks, clear silhouettes, restrained detail, and cream negative space.

---

## Decision Rationale

Option C preserves what should feel shared—flat travel-editorial graphic language—while letting Kyoto, Munich, and later cities choose local colour relationships. It avoids both the monotony of a global swatch lock and the fragmentation of unrelated illustration styles.

## Trade-offs Accepted

| Trade-off | Impact | Why acceptable |
| --- | --- | --- |
| Palette planning is required per city | Small upfront effort | Prevents uncontrolled colour growth and keeps a map coherent. |
| Architectural detail is removed | Less literal fidelity | Improves recognition and touch-target clarity at small scale. |

## Reversibility

**Is this decision reversible?** Yes, with effort.  
**Cost to reverse:** Recolouring or redrawing all existing and future landmark assets.  
**Revisit when:** a later city cannot be expressed within the four-family palette structure, or user testing shows reduced landmark recognition.

## Follow-up Considerations

- Record the city palette and landmark hierarchy in each city research document before asset creation.
- Decide whether Munich’s regional day trips appear as a regional map or framed postcard vignettes when the map artwork arrives.
- Test future production stickers at their intended rendered size before splitting a reference sheet into assets.

## Implementation update — 2026-09-14

The accepted system is now implemented for Kyoto and Munich as a desktop city-map experience. The supplied maps contain the illustrated landmark artwork, so the interactive layer deliberately uses transparent percentage-positioned hotspots instead of placing duplicate sticker art on top.

The map sits inside a light blush page frame, preserving a clear paper-map boundary. Selecting a place keeps the map present behind a darkened, lightly blurred memory stage. Real photos open as a count-aware Polaroid fan and then as a keyboard-accessible photo viewer. This implementation preserves the original photo directories and serves files read-only only when the browser requests a photo.

Kyoto's non-point Kamo River place remains deliberately manual: it is represented by the bridge beside Kamigamo Shrine rather than by invented GPS. The hidden Other memories folder is retained in data but excluded from the illustrated map.

## Supporting Materials

- [Reusable design system](./design-style.md)
- [Munich sticker sheet](../public/stickers/munich-landmark-sticker-sheet.png)
- [Flat editorial style reference](../public/stickers/flat-editorial-style-reference.png)
- [Munich research pack](./munich-research.md)

## Decision History

| Date | Change | Author |
| --- | --- | --- |
| 2026-08-30 | Initial accepted visual-system decision | Project owner |
| 2026-09-14 | Recorded approved desktop map, overlay, Polaroid, viewer, and Kamo River placement decisions | Project owner |
