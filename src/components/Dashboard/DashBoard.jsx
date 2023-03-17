import { Routes } from "react-router-dom";
import SideBar from "./Sidebar";
import <TopBar

function DashBoard() {
  return (
    <div className="bg-gradient-to-tr from-black via-black to-violet-900 h-screen">
      <SideBar />
      <Routes>
        <TopBar />
      </Routes>
    </div>
  );
}
export default DashBoard;
