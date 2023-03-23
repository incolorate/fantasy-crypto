import { useSelector } from "react-redux";
import { useGetCoinDataQuery } from "../../store/apis/fetchCoinData";
import classNames from "classnames";
function WalletHoldings({ coinType }) {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  console.log(wallet);
  const { data, isLoading } = useGetCoinDataQuery(coinType);

  let coinName;
  let symbol;
  let priceChange;
  let priceInUsd;
  let coinImage;
  if (isLoading) {
    coinName = "Loading...";
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
    <tr className="border-b bg-gray-900 border-gray-700 bg-opacity-5">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 max-sm:px-2"
      >
        <img src={coinImage} alt={`${coinName}-image`} />
        <p className="m-0 p-0 text-lg truncate ">{coinName} </p>
        <p className="m-0 p-0 text-lg hidden lg:contents">· {symbol}</p>
      </th>
      <td className="px-6 py-4">
        <p>{wallet[coinType].toFixed(5)}</p>
      </td>
      <td className="px-6 py-4">
        ${(wallet[coinType] * priceInUsd).toFixed(5)}
      </td>
    </tr>
  );
}

export default WalletHoldings;
