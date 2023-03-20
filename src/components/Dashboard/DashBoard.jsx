import { useSelector } from "react-redux";
import SideBar from "./Sidebar";
import Intro from "./Intro";

function DashBoard() {
  let { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  console.log(userName, wallet);
  return (
    <div className="bg-gradient-to-tr from-black via-black to-violet-900 h-screen">
      <SideBar />
      <div className="h-full w-full max-sm:pl-8 sm:pl-24 pr-8 py-8">
        <Intro />
      </div>
    </div>
  );
}
export default DashBoard;
