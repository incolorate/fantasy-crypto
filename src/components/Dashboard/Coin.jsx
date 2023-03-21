import { useSelector } from "react-redux";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { buyCrypto, updateUsd } from "../../store";
import { useGetCoinDataQuery } from "../../store/apis/fetchCoinData";
import { useState } from "react";

function Coin({ coinType }) {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  const [amountOfUsdSpent, setAmountOfUsdSpent] = useState();
  const { data, isLoading } = useGetCoinDataQuery(coinType);

  const dispatch = useDispatch();

  const handleBuy = (e) => {
    e.preventDefault();
    if (wallet.USD >= amountOfUsdSpent) {
      dispatch(updateUsd(amountOfUsdSpent));

      let dispatchObject = {
        amountBought: amountOfUsdSpent / data.market_data.current_price.usd,
        coin: data.symbol,
      };

      dispatch(buyCrypto(dispatchObject));
      setAmountOfUsdSpent(0 || "");
    }
  };

  const handleChange = (e) => {
    setAmountOfUsdSpent(e.target.value);
  };

  let coinName;

  if (isLoading) {
    coinName = <h1>Loading...</h1>;
  } else {
    coinName = data.name;
  }

  return (
    <div>
      <div
        className="bg-slate-300 bg-opacity-10 w-full p-8 
                rounded-xl flex justify-between align-middle text-white"
      >
        <div>{coinName}</div>
        <form onSubmit={handleBuy}>
          <input
            type="number"
            onChange={handleChange}
            value={amountOfUsdSpent}
            max={wallet.USD}
            min={0}
            className="text-black mr-3"
          ></input>
          <Button primary>Buy</Button>
        </form>
      </div>
    </div>
  );
}

export default Coin;
