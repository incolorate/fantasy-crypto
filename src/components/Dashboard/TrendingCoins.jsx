import { useGetTrendingCoinsQuery } from "../../store/apis/fetchCoinData";

function TrendingCoins() {
  const { data, error, isLoading, isSuccess } = useGetTrendingCoinsQuery();

  let renderTrendingCoins;

  if (isLoading) {
    renderTrendingCoins = <h1>loading..</h1>;
  } else if (isSuccess) {
    renderTrendingCoins = data.coins.map((coin) => {
      return (
        <tr
          className="border-b bg-gray-900 border-gray-700 bg-opacity-5"
          key={coin.item.symbol}
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 max-sm:px-2"
          >
            <img src={coin.item.thumb} alt={`${coin.item.name}-image`} />
            <p className="m-0 p-0 text-lg truncate ">{coin.item.name} </p>
            <p className="m-0 p-0 text-lg hidden lg:contents">
              · {coin.item.symbol}
            </p>
          </th>
          <td className="px-6 py-4 max-md:hidden">
            {coin.item.price_btc || "-"}
          </td>
          <td className="px-6 py-4">{coin.item.market_cap_rank || "-"}</td>
        </tr>
      );
    });
  } else if (error) {
    renderTrendingCoins = "Error...";
  }

  return (
    <div
      className="bg-slate-300 bg-opacity-10 p-2 sm:p-4 
    rounded-3xl align-middle text-white row-span-3  col-span-3 "
    >
      <p className="text-3xl mb-3">Trending coins</p>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm md:text-xl uppercase bg-gray-700 text-gray-400 bg-opacity-60">
          <tr>
            <th>Name</th>
            <th className="max-md:hidden ">Price(BTC)</th>
            <th>Market Cap Rank</th>
          </tr>
        </thead>
        <tbody> {renderTrendingCoins}</tbody>
      </table>
    </div>
  );
}

export default TrendingCoins;
