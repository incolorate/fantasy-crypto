import { TfiWallet } from "react-icons/tfi";
import { MdQueryStats } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import SideBarIcon from "./SideBarIcon";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="overflow-hidden max-sm:justify-around max-sm:bottom-0  max-sm:h-16 max-sm:w-full fixed sm:top-0 sm:left-0 sm:h-screen sm:w-16 m-0 flex sm:flex-col bg-gray-900 text-white shadow-xl">
      <Link to="">
        <SideBarIcon icon={<MdOutlineDashboard />} text="Dashboard" />
      </Link>

      <hr className="rounded-2xl w-11 mx-auto opacity-70 mb-10 max-sm:hidden" />
      <Link to="wallet">
        <SideBarIcon icon={<TfiWallet />} text="Wallet" />
      </Link>
      <Link to="trade">
        <SideBarIcon icon={<MdQueryStats />} text="Crypto stats" />
      </Link>
    </div>
  );
}
export default SideBar;
