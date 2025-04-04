import React, { useState } from "react";
import SkuTable from "./skuTable";
import { ChevronDown } from "lucide-react";
import CityTable from "./cityTable";

const CityLevelData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const options = ["Price: Low to High", "Price: High to Low"];
  return (
    <>
      <div className="mt-10 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-medium">City level data</h1>
            <p className="text-base text-gray-600">
              Analytics for all your Cities
            </p>
          </div>
          <div>
            <div className="relative">
              {/* Dropdown button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-x-1 justify-between w-full px-3 py-1.5 text-white bg-emerald-800 rounded-lg shadow-sm hover:bg-emerald-900 transition-all duration-300"
              >
                <span>{selected || "Filters"}(1)</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown menu */}
              <div
                className={`absolute mt-1 w-full text-sm bg-white rounded-md shadow-lg z-10 transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0 pointer-events-none"
                }`}
              >
                <ul>
                  {options.map((option, index) => (
                    <li key={index}>
                      <button
                        onClick={() => {
                          setSelected(option);
                          setIsOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-teal-50"
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CityTable />
    </>
  );
};

export default CityLevelData;
