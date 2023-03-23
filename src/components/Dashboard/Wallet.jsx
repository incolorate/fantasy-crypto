import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateWalletFromLocalStorage } from "../../store/slices/userSlice";
import TopBar from "./TopBar";

function Wallet() {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  return (
    <div className="text-white">
      <TopBar location="Wallet" />
      <div
        className="bg-slate-300 bg-opacity-10 w-full p-8 
                rounded-xl  "
      >
        {Object.keys(wallet).map((keyName) => (
          <div
            key={keyName}
            className="bg-slate-300 bg-opacity-10 w-full p-8 
          rounded-xl flex gap-6 mb-3 shadow- shadow-slate-200"
          >
            <p>{keyName}:</p>
            <p>{wallet[keyName]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wallet;
