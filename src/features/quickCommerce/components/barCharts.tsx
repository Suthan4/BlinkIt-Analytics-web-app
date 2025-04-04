import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, HelpCircle } from "lucide-react";
import { PivotConfig, ResultSet } from "@cubejs-client/core";
import { ChartType } from "../../../config/types";
import { format } from "date-fns";
interface ChartViewerProps {
  resultSet: ResultSet;
  pivotConfig: PivotConfig;
  chartType: ChartType;
}
// Data for the line charts
const monthlyData = [
  { month: "09", thisMonth: 2.5, lastMonth: 2.8 },
  { month: "10", thisMonth: 3.0, lastMonth: 2.5 },
  { month: "11", thisMonth: 2.8, lastMonth: 3.2 },
  { month: "12", thisMonth: 3.5, lastMonth: 3.0 },
  { month: "13", thisMonth: 3.2, lastMonth: 3.5 },
  { month: "14", thisMonth: 3.8, lastMonth: 3.2 },
  { month: "15", thisMonth: 4.8, lastMonth: 3.8 },
];

// Data for the cities pie chart
const citiesData = [
  { name: "New Delhi", value: 36, amount: 26.5, change: 1.2, increase: true },
  { name: "Mumbai", value: 23, amount: 36.4, change: 3.3, increase: false },
  {
    name: "West Bengal",
    value: 21,
    amount: 12.2,
    change: 2.3,
    increase: false,
  },
  { name: "Others", value: 9, amount: 24.3, change: 1.09, increase: true },
];

// Colors for the pie chart
const COLORS = ["#6366f1", "#ef4444", "#f59e0b", "#d1d5db"];

const BarCharts = (props: ChartViewerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { resultSet, pivotConfig, chartType } = props;
  console.log("resultSet-b", resultSet.series(pivotConfig));
  type DataPoint = { month: string } & { [key: string]: string | null };

  const transformedData = resultSet.chartPivot(pivotConfig).map((row) => {
    const dataPoint: DataPoint = { month: row.x }; // Explicitly typed
    resultSet.series(pivotConfig).forEach((item) => {
      const seriesKey = item.title; // Title becomes the key (e.g., 'thisMonth', 'lastMonth')
      const seriesValue =
        item.series.find(({ x }) => x === row.x)?.value || null;
      dataPoint[seriesKey] = seriesValue; // Use dynamic key assignment
    });
    return dataPoint;
  });

  const calculatePercentageIncrease = (
    current: number,
    previous: number
  ): number => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous) * 100;
  };

  const currentMonthData = transformedData[transformedData.length - 1] || {};
  const lastMonthData = transformedData[transformedData.length - 2] || {};

  const currentMonthOrders = currentMonthData["Orders Completed Count"] || "";
  const lastMonthOrders = lastMonthData["Orders Completed Count"] || "";

  const percentageIncrease = calculatePercentageIncrease(
    parseInt(currentMonthOrders),
    parseInt(lastMonthOrders)
  );

  const lastMonthValue = 119.69; // Replace with your actual logic to get the last month's value
  const currentMonthValue = 125.49; // Replace with your actual logic to get the current month's value
  const percentageIncreaseValue = calculatePercentageIncrease(
    currentMonthValue,
    lastMonthValue
  );



  console.log("transformedData", transformedData);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Sales (MRP) Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-md">
        <div className="flex flex-row items-center justify-between pb-2 border-b border-gray-200 p-4">
          <div className="text-sm font-medium">Sales (MRP)</div>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="p-4">
          <div className="text-2xl font-bold">{parseInt(currentMonthOrders).toFixed(1)}</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500 font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              {percentageIncreaseValue.toFixed(1)}%
            </span>
            <span className="ml-1">
              vs {lastMonthOrders} last month
            </span>
          </div>
          <div className="h-[100px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={transformedData}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                  tickFormatter={(tick) => format(new Date(tick), "M")}
                />
                <YAxis
                  domain={[0, 6]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                  allowDecimals={true}
                />
                <Line
                  type="monotone"
                  dataKey="Orders Completed Count"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="Orders Count"
                  stroke="#ef4444"
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex justify-start mt-2 gap-4 border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-emerald-700 mr-1"></div>
            <span className="text-xs text-gray-600">This Month</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-red-600 mr-1"></div>
            <span className="text-xs text-gray-600">Last Month</span>
          </div>
        </div>
      </div>

      {/* Total Quantity Sold Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-md">
        <div className="flex flex-row items-center justify-between pb-2 border-b border-gray-200 p-4">
          <div className="text-sm font-medium">Total Quantity Sold</div>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="p-4">
          <div className="text-2xl font-bold">125.49</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <span className="flex items-center text-emerald-500 font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              2.4%
            </span>
            <span className="ml-1">vs 119.69 last month</span>
          </div>
          <div className="h-[100px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  domain={[0, 6]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                  ticks={[1.5, 3.0, 4.5, 6.0]}
                />
                <Line
                  type="monotone"
                  dataKey="thisMonth"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="lastMonth"
                  stroke="#ef4444"
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex justify-start mt-2 gap-4 border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-emerald-700 mr-1"></div>
            <span className="text-xs">This Month</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-red-600 mr-1"></div>
            <span className="text-xs">Last Month</span>
          </div>
        </div>
      </div>

      {/* Top Cities Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="flex flex-row items-center justify-between pb-2 p-4 border-b border-gray-200">
          <div className="text-sm font-medium">Top Cities</div>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </div>
        <div>
          <div className="relative top-18 flex items-end justify-center h-[100px]">
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <PieChart width={400} height={160}>
              <Pie
                data={citiesData}
                cx="50%"
                cy="50%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
              >
                {citiesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            {/* </ResponsiveContainer> */}
            <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-center">
              <div className="text-xs text-muted-foreground">Total</div>
              <div className="text-xl font-bold">368.2L</div>
              <div className="flex items-center justify-center text-xs text-emerald-500">
                <ArrowUpRight className="mr-0.5 h-3 w-3" />
                2.2%
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2 p-4">
            {citiesData.map((city, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="h-2 w-2 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm">{city.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">₹{city.amount}L</span>
                  <span className="text-xs text-muted-foreground">
                    {city.value}%
                  </span>
                  <span
                    className={`flex items-center text-xs ${
                      city.increase ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {city.increase ? (
                      <ArrowUpRight className="h-3 w-3 mr-0.5" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-0.5" />
                    )}
                    {city.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarCharts;
