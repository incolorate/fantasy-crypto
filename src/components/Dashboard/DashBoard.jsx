import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <div className="bg-gradient-to-tr from-black via-black to-violet-900 h-screen overflow-auto">
      <SideBar />
      <div className="max-sm:pb-20 sm:pl-20 sm:pr-4 py-4">
        <Outlet />
      </div>
    </div>
  );
}
export default DashBoard;
