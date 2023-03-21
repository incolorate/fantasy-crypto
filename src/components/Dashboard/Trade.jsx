import { useSelector } from "react-redux";
import Coin from "./Coin";

function Trade() {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

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
      <div>{renderedCoins}</div>
    </div>
  );
}

export default Trade;
