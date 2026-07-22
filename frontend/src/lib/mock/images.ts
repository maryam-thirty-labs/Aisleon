// Real product photos (Unsplash CDN) used by the mock fixtures. The card
// components render these via a plain <img>, so no next.config remote-pattern
// setup is required. If a URL ever fails to load, the cards fall back to a glyph.
const U = (id: string) =>
  `https://images.unsplash.com/${id}?w=400&q=80&auto=format&fit=crop`;

export const IMG = {
  serum: U("photo-1620916566398-39f1143ab7be"),
  moisturiser: U("photo-1571781926291-c477ebfd024b"),
  cleanser: U("photo-1608248543803-ba4f8c70ae0b"),
  shampoo: U("photo-1556228578-8c89e6adf883"),
  cosmetics: U("photo-1596462502278-27bfdc403348"),
  lipstick: U("photo-1512496015851-a90fb38ba796"),
  fragrance: U("photo-1541643600914-78b084683601"),
  beautyFlatlay: U("photo-1522338242992-e1a54906a8da"),
  dress: U("photo-1595777457583-95e059d581b8"),
  trainers: U("photo-1542291026-7eec264c27ff"),
  tote: U("photo-1584917865442-de89df76afd3"),
  candle: U("photo-1602874801007-bd458bb1b8b6"),
} as const;
