import { Calendar, ChartLine, ChevronDown } from "lucide-react";
import Simg1 from "../../assets/images/blinkit-logo.png";
import Simg2 from "../../assets/images/sInstamart-logo.png";
import Simg3 from "../../assets/images/zepto-logo.png";

const Header = () => {
  return (
    <>
      <header className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-lg font-medium">Quick Commerce</h1>
        <div className="flex items-center gap-x-2">
          <div className="border flex items-center gap-x-2 bg-white border-gray-200 p-2.5 rounded-xl shadow-xs">
            <ChartLine size={17} />
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={true} className="sr-only peer" />
              <div className="w-7 h-4  bg-gray-300 peer-focus:ring-1 peer-focus:ring-primary rounded-full peer-checked:bg-primary transition-colors" />
              <div className="absolute left-1 bottom-0.5 w-3.5 h-3 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-2" />
            </label>
          </div>
          <div>
            <button
              className={`flex items-center justify-between w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl shadow-xs hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary`}
            >
              <div className="flex items-center mr-1">
                <Calendar className="mr-2" size={17} />
                <span className="text-base">Aug 01, 024 - Aug 03, 2024</span>
              </div>
              <ChevronDown size={17} />
            </button>
          </div>
        </div>
      </header>
      <nav className="p-4 border-b border-gray-200 flex gap-x-4 items-center">
        <div className="px-4 py-1 border border-gray-200 shadow-xs rounded-xl flex gap-x-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors cursor-pointer bg-primary/15 text-green-800 disabled:cursor-not-allowed disabled:opacity-30`}
          >
            <img src={Simg1} alt="Blinkit" className="w-5 h-5 mr-2" /> Blinkit
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors cursor-pointer text-green-800 disabled:cursor-not-allowed disabled:opacity-30`}
            disabled={true}
          >
            <img src={Simg3} alt="Zepto" className="w-5 h-5 mr-2" /> Zepto
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors cursor-pointer text-green-800 disabled:cursor-not-allowed disabled:opacity-30`}
            disabled={true}
          >
            <img src={Simg2} alt="Instamart" className="w-5 h-5 mr-2" />{" "}
            Instamart
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
