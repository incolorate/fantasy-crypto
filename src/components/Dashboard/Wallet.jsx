import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateWalletFromLocalStorage } from "../../store/slices/userSlice";

function Wallet() {
  let dispatch = useDispatch();
  useEffect(() => {
    let localWallet = JSON.parse(localStorage.getItem("localWallet"));
    dispatch(updateWalletFromLocalStorage(localWallet));
  }, []);

  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  return (
    <div
      className="text-white
    "
    >
      <div
        className="bg-slate-300 bg-opacity-10 w-full p-8 
                rounded-xl flex justify-between align-middle mb-8"
      >
        <h1 className="text-3xl">Hello @{userName}</h1>
      </div>
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
