import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { buyCrypto, updateUsd } from "../../store";
import { useGetCoinDataQuery } from "../../store/apis/fetchCoinData";
import { useState, useEffect } from "react";
import classNames from "classnames";

function Coin({ coinType }) {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  const [amountOfUsdSpent, setAmountOfUsdSpent] = useState();
  const [amountToSell, setAmountToSell] = useState(wallet[coinType]);

  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetCoinDataQuery(coinType);

  const handleBuy = (e) => {
    e.preventDefault();
    if (wallet.USD >= amountOfUsdSpent) {
      dispatch(updateUsd(amountOfUsdSpent));

      let dispatchObject = {
        amountBought: amountOfUsdSpent / data.market_data.current_price.usd,
        coin: data.id,
      };

      dispatch(buyCrypto(dispatchObject));
      setAmountOfUsdSpent(0 || "");
    }
  };

  const handleSell = (e) => {
    e.preventDefault();
    if (wallet.USD >= amountOfUsdSpent) {
      dispatch(updateUsd(amountOfUsdSpent));

      let dispatchObject = {
        amountBought: amountOfUsdSpent / data.market_data.current_price.usd,
        coin: data.id,
      };

      dispatch(buyCrypto(dispatchObject));
      setAmountOfUsdSpent(0 || "");
    }
  };

  const handleChange = (e) => {
    setAmountOfUsdSpent(e.target.value);
  };

  let coinName;
  let symbol;
  let priceChange;
  let priceInUsd;
  let coinImage;
  if (isLoading) {
    coinName = "Loading...";
  } else if (error) {
    coinName = "Error, something went wrong, probably to many api calls..";
    symbol = "Error, something went wrong, probably to many api calls..";
    priceChange = "Error, something went wrong, probably to many api calls..";
    priceInUsd = "Error, something went wrong, probably to many api calls..";
    coinImage = "Error, something went wrong, probably to many api calls..";
  } else {
    coinName = data.name;
    symbol = data.symbol.toUpperCase();
    priceChange = data.market_data.price_change_percentage_24h;
    priceInUsd = data.market_data.current_price.usd;
    coinImage = data.image.thumb;
  }
  let priceChangeBackgroundClasses = classNames({
    "bg-red-200  text-red-900": priceChange < 0,
    "bg-green-200  text-green-900": priceChange > 0,
  });

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 bg-opa">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 align-middle"
      >
        <img src={coinImage} alt={`${coinName}-image`} />
        <p className="m-0 p-0 text-lg">
          {coinName} · {symbol}
        </p>
      </th>
      <td className="px-6 py-4">
        <p className={priceChangeBackgroundClasses}>{priceChange} %</p>
      </td>
      <td className="px-6 py-4">${priceInUsd}</td>
      <td className="px-6 py-4">
        <form onSubmit={handleBuy}>
          <input
            type="number"
            onChange={handleChange}
            value={amountOfUsdSpent}
            max={wallet.USD}
            min={0}
            className="text-black mr-3"
          />
          <Button primary>Buy</Button>
        </form>
      </td>
      <td className="px-6 py-4">
        <form onSubmit={handleSell}>
          <input
            type="number"
            onChange={handleChange}
            value={amountToSell}
            max={wallet.USD}
            min={0}
            className="text-black mr-3 w-"
          />
          <Button secondary onClick={handleSell}>
            Sell
          </Button>
        </form>
      </td>
    </tr>
  );
}

export default Coin;
