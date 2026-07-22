import type { components } from "@/types/api.generated";
import { MOCK_BASKET_MIXED_DIETARY } from "./baskets";
import { MOCK_PROFILE } from "./profile";

type SharedBasket = components["schemas"]["SharedBasketDto"];

export const MOCK_SHARED_BASKET: SharedBasket = {
  shareId: "sb-123abc",
  basket: MOCK_BASKET_MIXED_DIETARY,
  poster: { ...MOCK_PROFILE, isSelf: false },
  title: "Halal-friendly skincare edit",
  description: "Mostly certified halal cosmetics with a couple of verify-before-you-buy items.",
  tags: ["halal", "skincare", "beauty"],
  estimatedSaving: 8.4,
};
