import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateWalletFromLocalStorage } from "../../store/slices/userSlice";
import Coin from "./Coin";

function Trade() {
  let dispatch = useDispatch();
  useEffect(() => {
    let localWallet = JSON.parse(localStorage.getItem("localWallet"));
    dispatch(updateWalletFromLocalStorage(localWallet));
  }, []);

  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    localStorage.setItem("localWallet", JSON.stringify(wallet));
  }, [wallet]);

  const COINS = ["bitcoin", "ethereum", "binancecoin", "ripple", "cardano"];

  let renderedCoins = COINS.map((coin) => {
    return <Coin key={coin} coinType={coin} />;
  });

  return (
    <div>
      <div
        className="bg-slate-300 bg-opacity-10 w-full p-8 
                rounded-xl flex justify-between align-middle text-white mb-8"
      >
        <p className="text-2xl ">Welcome @{userName}</p>
        <p className="text-2xl">Your wallet: ${wallet.USD}</p>
      </div>
      <div
        className="bg-slate-300 bg-opacity-10 w-full p-8 
                rounded-xl text-white mb-8"
      >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>Name</th>
              <th>Change(24h)</th>
              <th>Price (USD)</th>
              <th>Amount to buy</th>
            </tr>
          </thead>
          <tbody>{renderedCoins}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Trade;
