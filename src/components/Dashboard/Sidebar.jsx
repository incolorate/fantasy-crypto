import { TfiWallet } from "react-icons/tfi";
import { MdQueryStats } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import SideBarIcon from "./SideBarIcon";

function SideBar() {
  return (
    <div className="max-sm:bottom-0  max-sm:h-16 max-sm:w-full fixed sm:top-0 sm:left-0 sm:h-screen sm:w-16 m-0 flex sm:flex-col bg-gray-900 text-white shadow-xl">
      <SideBarIcon icon={<MdOutlineDashboard />} text="Dashboard" />
      <hr className="rounded-2xl w-11 mx-auto opacity-70 mb-10 max-sm:hidden" />
      <SideBarIcon icon={<TfiWallet />} text="Wallet" />
      <SideBarIcon icon={<MdQueryStats />} text="Crypto stats" />
    </div>
  );
}
export default SideBar;
