import { ArrowUp, ChartLine, ChevronDown } from "lucide-react";
import React from "react";

const CityTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse p-4">
          {/* Table Header */}
          <thead>
            <tr className="text-base border-b border-gray-200">
              {/* Checkbox and SKU column */}
              <th className="py-3 px-4 text-left font-medium border-r border-gray-200">
                <div className="flex items-center space-x-2">
                  <ChartLine size={17} />
                  <span>SKU Name</span>
                </div>
              </th>

              {/* Availability Section */}
              <th
                colSpan={3}
                className="text-center py-3 font-medium border-r border-gray-200 whitespace-nowrap"
              >
                <div className="border-b border-gray-200 pb-1 mb-2">
                  Availability
                </div>
                <div className="flex justify-between text-sm">
                  <div className="px-4 flex items-center w-1/3">
                    Sales <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                  <div className="px-4 flex items-center w-1/3">
                    Out of Stock <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                  <div className="px-4 flex items-center w-1/3">
                    Total Inventory <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </th>

              {/* Visibility Section */}
              <th
                colSpan={4}
                className="text-center py-3 font-medium whitespace-nowrap"
              >
                <div className="border-b border-gray-200 pb-1 mb-2">
                  Visibility
                </div>
                <div className="flex justify-between text-sm">
                  <div className="px-4 flex items-center w-1/4">
                    Average Rank <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                  <div className="px-4 flex items-center w-1/4">
                    Est. Traffic <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                  <div className="px-4 flex items-center w-1/4">
                    Est. Impressions <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                  <div className="px-4 flex items-center w-1/4">
                    CTR <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm">
            {/* Row 1 */}
            <tr className="border-b border-gray-200 bg-gray-100">
              <td className="py-3 px-4 border-r border-gray-200">
                <div className="flex items-center">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-2"
                      htmlFor="checkbox-2"
                      data-ripple-dark="true"
                    >
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-4.5 w-4.5 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-800 checked:bg-emerald-800 checked:before:bg-emerald-800 hover:before:opacity-10"
                        id="checkbox-2"
                        checked
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                  </div>
                  <span className="font-medium underline">Delhi</span>
                </div>
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                493,132.12
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                1.68%
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                931.9
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                3.2
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                12,303
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                25,405
              </td>
              <td className="py-3 px-4 text-right text-gray-600">1.8%</td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b border-gray-200 bg-gray-100">
              <td className="py-3 px-4 border-r border-gray-200">
                <div className="flex items-center">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-2"
                      htmlFor="checkbox-2"
                      data-ripple-dark="true"
                    >
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-4.5 w-4.5 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-800 checked:bg-emerald-800 checked:before:bg-emerald-800 hover:before:opacity-10"
                        id="checkbox-2"
                        checked
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                  </div>
                  <span className="font-medium underline">Bengaluru</span>
                </div>
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                <div>48,528.32</div>
                <div className="text-green-500 flex items-center justify-end text-xs">
                  <ArrowUp className="h-3 w-3 mr-1" /> 2.4%
                </div>
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                <div>6.79%</div>
                <div className="text-green-500 flex items-center justify-end text-xs">
                  <ArrowUp className="h-3 w-3 mr-1" /> 2.4%
                </div>
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                679
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                7
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                <div>3005</div>
                <div className="text-green-500 flex items-center justify-end text-xs">
                  <ArrowUp className="h-3 w-3 mr-1" /> 2.4%
                </div>
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200 text-gray-600">
                <div>4231</div>
                <div className="text-green-500 flex items-center justify-end text-xs text-gray-600">
                  <ArrowUp className="h-3 w-3 mr-1" /> 2.4%
                </div>
              </td>
              <td className="py-3 px-4 text-right">1.8%</td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 border-r border-gray-200">
                <div className="flex items-center">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-2"
                      htmlFor="checkbox-2"
                      data-ripple-dark="true"
                    >
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-4.5 w-4.5 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-800 checked:bg-emerald-800 checked:before:bg-emerald-800 hover:before:opacity-10"
                        id="checkbox-2"
                        checked={false}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                  </div>
                  <span className="font-medium underline">SKU 3</span>
                </div>
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                931.13
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                1.68%
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                931.9
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                11
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                1031.9
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                9031.9
              </td>
              <td className="py-3 px-4 text-right">1.8%</td>
            </tr>

            {/* Row 4 */}
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 border-r border-gray-200">
                <div className="flex items-center">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-2"
                      htmlFor="checkbox-2"
                      data-ripple-dark="true"
                    >
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-4.5 w-4.5 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-800 checked:bg-emerald-800 checked:before:bg-emerald-800 hover:before:opacity-10"
                        id="checkbox-2"
                        checked={false}
                      />
                      <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                  </div>
                  <span className="font-medium underline">SKU 4</span>
                </div>
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                -
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                -
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                -
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                -
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                -
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                -
              </td>
              <td className="py-3 px-4 text-right">-</td>
            </tr>

            {/* Total Row */}
            <tr className="bg-gray-50 font-medium">
              <td className="py-3 px-4 border-r border-gray-200">Total</td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                542,611.32
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                16%
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                2931
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                8.3
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                61,985
              </td>
              <td className="py-3 px-4 text-right border-r border-gray-200">
                261,768
              </td>
              <td className="py-3 px-4 text-right">1.8%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CityTable;
