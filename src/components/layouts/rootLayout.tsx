import { Outlet } from "react-router";
import SideBar from "./sideBar";
import Header from "./header";

const RootLayout = () => {
  return (
    <div className="h-screen w-full bg-white text-gray-800 grid grid-cols-[auto_1fr]">
      {/* SideBar */}
      <SideBar />

      {/* Main Content */}
      <div className="grid grid-rows-[1fr] overflow-hidden p-4">
        <div className="border border-gray-200 rounded-xl overflow-hidden grid grid-rows-[auto_1fr]">
          {/* Header */}
          <Header />

          {/* Content */}
          <main className="p-6 bg-gray-50 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
