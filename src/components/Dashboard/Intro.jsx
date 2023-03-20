import { useSelector } from "react-redux";
import { useGetTrendingCoinsQuery } from "../../store/apis/fetchCoinData";

function Intro() {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });

  const { data, error, isLoading, isSuccess } = useGetTrendingCoinsQuery();
  console.log(isSuccess);

  let renderTrendingCoins;

  if (isLoading) {
    renderTrendingCoins = <h1>loading..</h1>;
  } else if (isSuccess) {
    renderTrendingCoins = data.coins.map((coin) => {
      console.log(coin.item.price_btc);

      return (
        <div
          className="flex justify-between text-white text-2xl"
          key={coin.item.name}
        >
          <p>{coin.item.name}</p>
          <p>{coin.item.price_btc || "no data"}</p>
        </div>
      );
    });
  } else if (error) {
    renderTrendingCoins = <h1>error..</h1>;
  }

  return (
    <div>
      <div
        className="bg-slate-300 bg-opacity-10 w-full p-8 
                rounded-xl flex justify-between align-middle text-white"
      >
        <p className="text-2xl ">Welcome @{userName}</p>
        <p className="text-2xl">Your wallet: ${wallet.USD}</p>
      </div>
      <div
        className="bg-slate-300 bg-opacity-10 w-full p-8 
                rounded-xl align-middle text-white mt-8"
      >
        <div className="flex flex-col gap-3">{renderTrendingCoins}</div>
      </div>
    </div>
  );
}

export default Intro;
