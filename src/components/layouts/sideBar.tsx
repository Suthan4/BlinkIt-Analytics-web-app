import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  LayoutDashboard,
  MessageSquare,
  Plus,
  HelpCircle,
  Settings,
  Layers,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  Tv,
  Home,
  CircleHelp,
  ChevronsLeft,
  Users,
} from "lucide-react";
import Simg1 from "../../assets/images/sidebar-img-1.png";
import Simg2 from "../../assets/images/sidebar-img-2.png";
import Simg3 from "../../assets/images/sidebar-img-3.png";

const brands = ["Test_brand", "Brand_One", "Brand_Two"];
export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("Quick Commerce");
  const [channelsOpen, setChannelsOpen] = useState<boolean>(true);
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside className="flex justify-between h-screen bg-white">
      <div className="w-[3vw] mt-3">
        <div className="p-1 flex flex-col items-center space-y-4 h-full">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={Simg1}
              alt="Brand 1"
              className="w-10 h-10 rounded-xl border border-gray-200"
            />
            <img
              src={Simg2}
              alt="Brand 2"
              className="w-10 h-10 rounded-xl border border-gray-200"
            />
            <img
              src={Simg3}
              alt="Brand 3"
              className="w-10 h-10 rounded-xl border border-gray-200"
            />
            <button
              type="button"
              className={`w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors cursor-pointer`}
            >
              <Plus size={17} className="text-primary" />
            </button>
          </div>
          <div className="mt-auto pb-3 flex flex-col space-y-4 items-center">
            <div className="flex justify-center">
              <Users size={17} />
            </div>
            {/* User profile */}
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium mr-2">
                <span>M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[18vw] flex-1 flex flex-col">
        {/* Header with logo */}
        <div className="flex items-center">
          <div className="relative m-4 flex-1" ref={dropdownRef}>
            {/* Select Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between gap-2 p-1.5 border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Avatar */}
              <div className="w-6 h-6 flex items-center justify-center bg-teal-600 text-white font-semibold rounded-lg text-xs">
                {selectedBrand.slice(0, 2).toUpperCase()}
              </div>

              {/* Selected Brand */}
              <span className="mr-4 text-gray-900 text-md">
                {selectedBrand}
              </span>
              <span className="ml-auto">
                {/* Dropdown Icon */}
                <ChevronsUpDown size={17} />
              </span>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-200 transform ${
                isOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-[-5px] pointer-events-none"
              }`}
            >
              {brands.map((brand) => (
                <div
                  key={brand}
                  onClick={() => {
                    setSelectedBrand(brand);
                    setIsOpen(false);
                  }}
                  className="p-2 hover:bg-gray-200 cursor-pointer text-gray-900"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-4">
            <ChevronsLeft size={17} />
          </div>
        </div>
        {/* Main sidebar items */}
        <div className="flex-grow bg-gray-50 overflow-y-auto p-4">
          <nav className="space-y-2">
            {/* Overview item */}
            <button className="flex items-center gap-3 px-3 py-2 whitespace-nowrap hover:bg-gray-50 cursor-pointer font-medium">
              <Home className=" text-gray-500" size={18} />
              <span>Overview</span>
            </button>

            {/* Channels item with dropdown */}
            <div>
              <button
                className="flex w-full items-center justify-between gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer"
                onClick={() => setChannelsOpen(!channelsOpen)}
              >
                <div className="flex items-center gap-3">
                  <Tv className=" text-gray-500" size={17} />
                  <span className="font-semibold text-base">Channels</span>
                </div>

                <ChevronDown
                  size={17}
                  className={`
                    " text-gray-500 transition-transform",
                    ${channelsOpen && "transform rotate-180"} 
                  `}
                />
              </button>

              {/* Dropdown content */}
              {channelsOpen && (
                <div className="ml-2 space-y-1 mt-1">
                  <div className="px-3 py-1.5 rounded-xl hover:bg-gray-50 cursor-pointer">
                    <span className="ml-2">Meta Ads</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl hover:bg-gray-50 cursor-pointer">
                    <span className="ml-2">Google Ads</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-primary/15 text-emerald-700 cursor-pointer">
                    <span className="ml-2">Quick Commerce</span>
                  </div>
                </div>
              )}
            </div>

            {/* Creatives item */}
            <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
              <Layers className="text-gray-500" size={17} />
              <span className="font-medium">Creatives</span>
            </div>
          </nav>
        </div>
        {/* Bottom items */}
        <div className="mt-auto bg-gray-50">
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
            <CircleHelp className=" text-gray-500" size={18} />
            <span className="font-semibold">Help</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
            <Settings className=" text-gray-500" size={18} />
            <span className="font-semibold">Settings</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
