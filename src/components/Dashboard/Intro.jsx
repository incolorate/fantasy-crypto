import { useGetTrendingCoinsQuery } from "../../store/apis/fetchCoinData";
import CoinCard from "./CoinCard";

import TopBar from "./TopBar";
import TrendingCoins from "./TrendingCoins";

function Intro() {
  return (
    <div className="text-white max-lg:">
      <div>
        <TopBar location="Dashboard" />
      </div>
      <div className="grid grid-cols-3   lg:grid-cols-4 gap-8 grid-rows-3 ">
        <TrendingCoins />
        <CoinCard coinType="bitcoin" />
        <CoinCard coinType="ethereum" />
        <CoinCard coinType="binancecoin" />
      </div>
    </div>
  );
}

export default Intro;
