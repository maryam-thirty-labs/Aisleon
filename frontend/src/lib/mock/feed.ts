import type { components } from "@/types/api.generated";
import { IMG } from "./images";

type FeedPage = components["schemas"]["FeedPageDto"];

export const MOCK_FEED_PAGE: FeedPage = {
  posts: [
    {
      id: "po_001",
      type: "PRODUCT",
      authorHandle: "layla",
      authorDisplayName: "Layla",
      caption:
        "Best retinol serum I've found under £20 — Boots have it on Advantage points too.",
      product: {
        retailer: "BOOTS",
        name: "No7 Advanced Retinol 1.5% Complex serum",
        brand: "No7",
        price: 17.95,
        imageUrl: IMG.serum,
        dietaryTags: ["HALAL_LIKELY"],
      },
      basket: null,
      reactions: [{ type: "TRIED_THIS", count: 4 }],
      commentCount: 2,
      createdAt: "2026-04-12T08:30:00Z",
    },
    {
      id: "po_002",
      type: "BASKET",
      authorHandle: "amira",
      authorDisplayName: "Amira",
      caption: "Full skincare restock for under £65 — swapped two brands to stay in budget.",
      product: null,
      basket: {
        basketId: "bk_approved_020",
        title: "Halal skincare bundle",
        total: 64.3,
        itemThumbnails: [IMG.serum, IMG.moisturiser, IMG.cleanser],
        category: "HEALTH_BEAUTY",
      },
      reactions: [
        { type: "TRIED_THIS", count: 12 },
        { type: "BETTER_ALT", count: 1 },
      ],
      commentCount: 5,
      createdAt: "2026-04-11T19:00:00Z",
    },
    {
      id: "po_003",
      type: "BASKET",
      authorHandle: "rosa",
      authorDisplayName: "Rosa",
      caption: "Spring fit sorted — under £80 all in.",
      product: null,
      basket: {
        basketId: "bk_fashion_022",
        title: "Spring weekend fit",
        total: 78.4,
        itemThumbnails: [IMG.dress, IMG.trainers, IMG.tote],
        category: "FASHION",
        subcategoryMix: ["DRESSES", "FOOTWEAR", "OUTERWEAR"],
      },
      reactions: [{ type: "TRIED_THIS", count: 8 }],
      commentCount: 1,
      createdAt: "2026-04-19T17:30:00Z",
    },
  ],
  nextCursor: null,
  hasMore: false,
};
