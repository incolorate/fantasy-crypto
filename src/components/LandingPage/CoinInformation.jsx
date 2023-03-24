import CoinCard from "../Dashboard/CoinCard";

function CoinInformation() {
  return (
    <div className="text-white px-5 flex gap-5 justify-around flex-wrap pb-8">
      <CoinCard coinType="bitcoin" />
      <CoinCard coinType="ethereum" />
      <CoinCard coinType="binancecoin" />
      <CoinCard coinType="ripple" />
    </div>
  );
}

export default CoinInformation;
