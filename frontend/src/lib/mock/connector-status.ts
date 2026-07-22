import type { components } from "@/types/api.generated";

type ConnectorStatus = components["schemas"]["ConnectorStatusDto"];

export const MOCK_CONNECTOR_STATUS: ConnectorStatus[] = [
  {
    retailer: "ASOS",
    healthy: true,
    disabled: false,
    circuitState: "CLOSED",
    lastSuccessAt: "2026-04-12T11:10:00Z",
    lastFailureAt: null,
    lastFailureReason: null,
    recentResultCount: 24,
    staleCacheUsageCount: 0,
    apifyConnector: false,
  },
  {
    retailer: "BOOTS",
    healthy: false,
    disabled: false,
    circuitState: "OPEN",
    lastSuccessAt: "2026-04-12T09:15:00Z",
    lastFailureAt: "2026-04-12T11:00:00Z",
    lastFailureReason: "bot detection",
    recentResultCount: 3,
    staleCacheUsageCount: 4,
    apifyConnector: false,
  },
  {
    retailer: "ARGOS",
    healthy: true,
    disabled: false,
    circuitState: "CLOSED",
    lastSuccessAt: "2026-04-12T11:08:00Z",
    lastFailureAt: null,
    lastFailureReason: null,
    recentResultCount: 22,
    staleCacheUsageCount: 0,
    apifyConnector: false,
  },
];
