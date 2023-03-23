import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateWalletFromLocalStorage } from "../../store/slices/userSlice";
import { useGetTenCoinsQuery } from "../../store/apis/fetchCoinData";
import Coin from "./Coin";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Trade() {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    localStorage.setItem("localWallet", JSON.stringify(wallet));
  }, [wallet]);

  const [page, setPage] = useState(1);
  const COINS = [];

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => {
      if (prevPage > 1) {
        prevPage - 1;
      }
    });
  };

  let { data, isLoading, error } = useGetTenCoinsQuery(page);

  if (!isLoading) {
    data.map((object) => COINS.push(object.id));
  }

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
        <p className="text-2xl">
          Your wallet:{" "}
          <span className="text-green-700">${wallet.USD.toFixed(2)}</span>
        </p>
      </div>
      <div
        className="bg-slate-300 bg-opacity-10 w-full sm:p-8 
                rounded-xl text-white mb-8"
      >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm md:text-xl uppercase bg-gray-700 text-gray-400 bg-opacity-60">
            <tr>
              <th>Name</th>
              <th>Change (24h)</th>
              <th>Price (USD)</th>
              <th>Buy</th>
            </tr>
          </thead>
          <tbody>{renderedCoins}</tbody>
        </table>
        <div className="flex justify-center gap-16 mt-7">
          <FaArrowLeft onClick={prevPage} className="w-6 h-6" />
          <FaArrowRight onClick={nextPage} className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Trade;
