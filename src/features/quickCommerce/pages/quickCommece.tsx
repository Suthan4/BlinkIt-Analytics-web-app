import React from "react";
import BarCharts from "../components/barCharts";
import SkuLevelData from "../components/skuLevelData";
import CityLevelData from "../components/cityLevelData";
import { CubeProvider, useCubeQuery } from "@cubejs-client/react";
import cube, { PivotConfig, Query } from "@cubejs-client/core";
import WebSocketTransport from "@cubejs-client/ws-transport";
import { ChartType, Config } from "../../../config/types";
import { extractHashConfig } from "../../../config/config";
import { QueryRenderer } from "../../../lib/querRenderer";

const QuickCommece = () => {
  // const { resultSet, isLoading, error, progress } = useCubeQuery({
  //   timeDimensions: [
  //     {
  //       dimension: "orders.created_at",
  //       granularity: "quarter",
  //     },
  //   ],
  //   measures: ["orders.count", "orders.completed_count"],
  // });
  const {
    apiUrl,
    apiToken,
    query,
    pivotConfig,
    chartType,
    useWebSockets,
    useSubscription,
  } = extractHashConfig({
    apiUrl: import.meta.env.VITE_CUBE_API_URL || "",
    apiToken: import.meta.env.VITE_CUBE_API_TOKEN || "",
    query: JSON.parse(import.meta.env.VITE_CUBE_QUERY || "{}") as Query,
    pivotConfig: JSON.parse(
      import.meta.env.VITE_CUBE_PIVOT_CONFIG || "{}"
    ) as PivotConfig,
    chartType: import.meta.env.VITE_CHART_TYPE as ChartType,
    websockets: import.meta.env.VITE_CUBE_API_USE_WEBSOCKETS === "true",
    subscription: import.meta.env.VITE_CUBE_API_USE_SUBSCRIPTION === "true",
  } as Config);

  let transport = undefined;

  if (useWebSockets) {
    transport = new WebSocketTransport({ authorization: apiToken, apiUrl });
  }

  const cubeApi = cube(apiToken, { apiUrl, transport });
  return (
    <div className="bg-gray-50">
      <CubeProvider cubeApi={cubeApi}>
        <QueryRenderer query={query} subscribe={useSubscription}>
          {({ resultSet }) => {
            return (
              <BarCharts
                chartType={chartType}
                resultSet={resultSet}
                pivotConfig={pivotConfig}
              />
            );
          }}
        </QueryRenderer>
        <SkuLevelData />
        <CityLevelData />
      </CubeProvider>
    </div>
  );
};

export default QuickCommece;
