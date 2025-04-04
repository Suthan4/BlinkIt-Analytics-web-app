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
      <div className="w-[3]  mt-3">
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
// import * as React from "react";

// function SideBar() {
//   return (
//     <aside className="flex z-10 items-start self-start mt-0 -mr-5 min-h-[831px] max-md:mt-0">
//       <div className="w-72 min-h-[831px] min-w-60">
//         <div className="flex flex-col items-end w-full max-w-72 min-h-[831px]">
//           <div className="flex items-start w-full min-h-[831px]">
//             <div className="w-72 h-[831px] min-w-60">
//               <header className="flex gap-4 items-center py-5 pr-3.5 pl-1.5 w-full font-semibold text-center whitespace-nowrap bg-white">
//                 <img
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b97041abc314c7cf13d473ce46582039ca6eaf?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                   className="object-contain shrink-0 self-stretch my-auto w-10 rounded-xl aspect-square"
//                   alt="Logo"
//                 />
//                 <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-1.5 my-auto bg-white rounded-xl border border-solid basis-0 border-black border-opacity-10">
//                   <div className="flex gap-2 items-center self-stretch my-auto">
//                     <div className="gap-2.5 self-stretch px-1.5 my-auto w-6 h-6 text-xs text-white bg-teal-600 rounded-lg">
//                       SS
//                     </div>
//                     <span className="self-stretch my-auto text-sm text-green-950">
//                       Test_brand
//                     </span>
//                   </div>
//                   <img
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2957698874ec81ef23e27590fea8bb97c436bb91?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                     className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
//                     alt="Dropdown"
//                   />
//                 </div>
//                 <img
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e11e8e895b7b0bcbbe740bf153a59339ff7f9a5?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-[1.06] w-[17px]"
//                   alt="Menu"
//                 />
//               </header>
//               <div className="flex items-start min-h-[755px]">
//                 <div className="flex items-start min-h-[755px] w-[51px] max-md:hidden">
//                   <div className="relative bg-white min-h-[755px] w-[51px] max-md:hidden">
//                     <button className="flex z-0 gap-2.5 justify-center items-center px-1.5 py-1.5 w-[50px]">
//                       <img
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aeccccbb90d1b8e88ef2efdb94045f28bdda1c6?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                         className="object-contain self-stretch my-auto w-10 rounded-xl aspect-square"
//                         alt="Tab 1"
//                       />
//                     </button>
//                     <button className="flex z-0 gap-2.5 justify-center items-center px-1.5 py-1.5 w-[50px]">
//                       <img
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/73236df85d7e01d30816258108841a9e27c2e019?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                         className="object-contain self-stretch my-auto w-10 rounded-xl aspect-square"
//                         alt="Tab 2"
//                       />
//                     </button>
//                     <button className="flex z-0 gap-2.5 justify-center items-center px-1.5 py-1.5 w-[50px]">
//                       <img
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/a49fdf7b709d5c2e456b48a5ae8ba8fa93997e3d?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                         className="object-contain self-stretch my-auto w-10 rounded-xl aspect-square"
//                         alt="Tab 3"
//                       />
//                     </button>
//                     <div className="flex absolute bottom-8 z-0 flex-col items-center w-7 text-xs font-semibold text-center text-white whitespace-nowrap left-[11px]">
//                       <img
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e285a28275ca8928d553f072259d77f37b33fb?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                         className="object-contain w-full aspect-square"
//                         alt="User icon"
//                       />
//                       <div className="px-1.5 mt-5 w-full h-7 bg-purple-600 border border-solid border-white border-opacity-10 min-h-7 rounded-[32px]">
//                         SS
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <nav className="flex flex-col justify-center px-4 py-7 text-sm leading-none text-center bg-stone-50 min-h-[755px] w-[237px]">
//                   <div className="w-full min-h-[703px]">
//                     <div className="w-full">
//                       <button className="flex gap-3 items-start px-3 py-2 w-full font-medium whitespace-nowrap text-green-950">
//                         <img
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/3faef36ae2b728eac6f82d7475337b10252d1345?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                           className="object-contain shrink-0 w-5 aspect-square"
//                           alt="Overview icon"
//                         />
//                         <span>Overview</span>
//                       </button>
//                       <div className="mt-2.5 w-full">
//                         <button className="flex gap-10 justify-between items-center px-3 py-2 w-full font-medium whitespace-nowrap text-green-950">
//                           <div className="flex gap-3 items-center self-stretch my-auto">
//                             <img
//                               src="https://cdn.builder.io/api/v1/image/assets/TEMP/48e8953b1968df8bb028ae917e86f65166b8946f?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                               className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
//                               alt="Channels icon"
//                             />
//                             <span className="self-stretch my-auto">
//                               Channels
//                             </span>
//                           </div>
//                           <img
//                             src="https://cdn.builder.io/api/v1/image/assets/TEMP/b90548bb37d7ee967eb291a844df690777b13130?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                             className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
//                             alt="Dropdown"
//                           />
//                         </button>
//                         <div className="flex items-center pl-4 mt-1 w-full text-green-950">
//                           <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0">
//                             <button className="gap-3 self-stretch px-4 py-1.5 w-full rounded-xl">
//                               Meta Ads
//                             </button>
//                             <button className="gap-3 self-stretch px-4 py-1.5 mt-1 w-full rounded-xl">
//                               Google Ads
//                             </button>
//                             <button className="gap-3 self-stretch px-4 py-1.5 mt-1 w-full font-semibold text-emerald-700 bg-gray-200 rounded-xl">
//                               Quick Commerce
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                       <button className="flex gap-3 items-start px-3 py-2 mt-2.5 w-full font-medium whitespace-nowrap text-green-950">
//                         <img
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a1fde9159703f360347c4ccfef72bfbf1fde08a?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                           className="object-contain shrink-0 w-5 aspect-square"
//                           alt="Creatives icon"
//                         />
//                         <span>Creatives</span>
//                       </button>
//                     </div>
//                     <div className="mt-96 w-full font-medium whitespace-nowrap max-md:mt-10">
//                       <button className="flex gap-3 items-start px-3 py-2 w-full text-green-950">
//                         <img
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/d71db73bdf1e0294af119fe9ed90a8ea48d88a55?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                           className="object-contain shrink-0 w-5 aspect-square"
//                           alt="Help icon"
//                         />
//                         <span>Help</span>
//                       </button>
//                       <button className="flex gap-3 items-start px-3 py-2 mt-2.5 w-full text-green-950">
//                         <img
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/76a2b6e4b1064e65506e4a446b58c68e4183893e?placeholderIfAbsent=true&apiKey=a912864bea7c42f3bfb0e3650ed0dee9"
//                           className="object-contain shrink-0 w-5 aspect-square"
//                           alt="Settings icon"
//                         />
//                         <span>Settings</span>
//                       </button>
//                     </div>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

// export default SideBar;
