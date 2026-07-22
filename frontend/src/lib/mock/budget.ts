import type { components } from "@/types/api.generated";

type BudgetSummary = components["schemas"]["BudgetSummaryDto"];

export const MOCK_BUDGET_SUMMARY: BudgetSummary = {
  month: "2026-04",
  spent: 218.4,
  savedVsFullPrice: 23.1,
  basketsCount: 4,
  avgBasket: 54.6,
  byRetailer: {
    BOOTS: 95.2,
    ASOS: 72.3,
    ARGOS: 50.9,
  },
  insights: [
    "You saved £12 at Boots this month using Advantage Card points.",
    "Your average basket is £5 under budget — steady trend.",
  ],
};
