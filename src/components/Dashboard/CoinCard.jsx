import { useGetCoinDataQuery } from "../../store/apis/fetchCoinData";
import { CgTrendingDown } from "react-icons/cg";

function CoinCard({ coinType }) {
  const { data, isLoading } = useGetCoinDataQuery(coinType);

  console.log(data);
  let name;
  let coinImage;
  let currentPrice;
  if (isLoading) {
    name = <p>Loading</p>;
  } else {
    coinImage = data.image.thumb;
    name = data.name;
    currentPrice = data.market_data.current_price.usd;
  }

  return (
    <div
      className=" text-2xl bg-slate-300 bg-opacity-10 p-4 
    rounded-3xl align-middle text-white   xl:w-72 max-sm:col-span-3"
    >
      <div className="flex gap-2">
        <img src={coinImage} className="w-10 h-10" />
        <p>{name}</p>
      </div>
      <div className="mt-8">
        <p>${currentPrice}</p>
      </div>
    </div>
  );
}

export default CoinCard;
