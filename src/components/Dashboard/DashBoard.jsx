import { useSelector } from "react-redux";
import SideBar from "./Sidebar";
import Intro from "./Intro";
import Wallet from "./Wallet";
import Trade from "./Trade";

function DashBoard() {
  return (
    <div className="bg-gradient-to-tr from-black via-black to-violet-900 h-screen">
      <SideBar />
      <div className="h-full w-full max-sm:pl-8 sm:pl-24 pr-8 py-8">
        <Trade />
      </div>
    </div>
  );
}
export default DashBoard;
