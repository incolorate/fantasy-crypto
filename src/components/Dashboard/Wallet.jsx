import { useSelector, useDispatch } from "react-redux";
import WalletHoldings from "./WalletHoldings";
import TopBar from "./TopBar";

function Wallet() {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  let renderedHoldings = Object.keys(wallet).map((keyName) => {
    return keyName != "USD" ? (
      <WalletHoldings coinType={keyName} key={keyName} />
    ) : (
      " "
    );
  });

  return (
    <div className="text-white">
      <TopBar location="Wallet" />
      <div
        className="bg-slate-300 bg-opacity-10 p-2 sm:p-4 
    rounded-3xl align-middle text-white row-span-3  col-span-3 "
      >
        <p className="text-3xl mb-3">
          Fiat: <span className="text-green-700">${wallet.USD.toFixed(2)}</span>
        </p>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm md:text-xl uppercase bg-gray-700 text-gray-400 bg-opacity-60">
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Value</th>
              <th>Sell</th>
            </tr>
          </thead>
          <tbody> {renderedHoldings}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Wallet;
