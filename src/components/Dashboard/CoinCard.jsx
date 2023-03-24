import { useGetCoinDataQuery } from "../../store/apis/fetchCoinData";
import { CgTrendingDown } from "react-icons/cg";
import { CgTrending } from "react-icons/cg";

function CoinCard({ coinType, ...rest }) {
  const { data, isLoading } = useGetCoinDataQuery(coinType);

  console.log(data);

  let name;
  let coinImage;
  let currentPrice;
  let priceChange;
  if (isLoading) {
    name = <p>Loading</p>;
  } else {
    coinImage = data.image.thumb;
    name = data.name;
    currentPrice = data.market_data.current_price.usd;
    priceChange = data.market_data.price_change_percentage_24h;
    priceChange =
      priceChange > 0 ? (
        <CgTrending className="h-36 w-36  sm:h-36 sm:w-24 md:h-36 md:w-32 xl:h-36  xl:w-36 text-green-700 opacity-30" />
      ) : (
        <CgTrendingDown className="h-36 w-36  sm:h-36 sm:w-24 md:h-36 md:w-32 xl:h-36  xl:w-36 text-red-700 opacity-30" />
      );
  }

  return (
    <div className=" text-2xl bg-slate-300 bg-opacity-10 p-4 rounded-3xl align-middle text-white   xl:w-72 max-sm:col-span-3 grid grid-rows-2 grid-cols-3">
      <div className="flex gap-2 col-span-1">
        <img src={coinImage} className="w-10 h-10" />
        <p>{name}</p>
      </div>
      <div className="mt-8 row-start-2   row-end-3 col-start-1 ">
        <p>${currentPrice}</p>
      </div>
      <div className="col-start-2 row-span-2">{priceChange}</div>
    </div>
  );
}

export default CoinCard;
