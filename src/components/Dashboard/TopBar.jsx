import { useSelector } from "react-redux";
import cat from "../../img/cat.svg";

function TopBar({ location }) {
  let { userName } = useSelector((state) => {
    return state.user;
  });

  return (
    <div className="flex justify-between mb-8">
      <div
        className="bg-slate-300 bg-opacity-10 p-4 
                rounded-3xl align-middle text-white"
      >
        <p className="text-4xl">{location}</p>
      </div>
      <div
        className="sm:flex align-middle gap-4 bg-slate-300 bg-opacity-10 p-4 
                rounded-3xl text-white hidden"
      >
        <div className="bg-slate-700 rounded-full w-14 h-14 flex align-middle justify-center">
          <img src={cat} alt="cat" className="w-10 h-10" />
        </div>
        <p className="text-4xl">{userName}</p>
      </div>
    </div>
  );
}

export default TopBar;
