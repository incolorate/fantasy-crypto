import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { buyCrypto, updateUsd } from "../../store";
import { useGetCoinDataQuery } from "../../store/apis/fetchCoinData";
import { useState, useEffect } from "react";
import classNames from "classnames";
import BuyModal from "../BuyModal";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";

function Coin({ coinType }) {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const { data, isLoading, error } = useGetCoinDataQuery(coinType);

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
    <tr className="border-b bg-gray-900 border-gray-700 bg-opacity-5">
      <th
        scope="row"
        className="px-2 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-2 align-middle"
      >
        <img
          src={coinImage}
          alt={`${coinName}-image`}
          className="hidden sm:flex"
        />
        <p className="m-0 p-0 text-lg truncate w-20 ">{coinName} </p>
        <p className="m-0 p-0 text-lg hidden lg:contents">· {symbol}</p>
      </th>
      <td className="px-2 sm:px-6 py-4">
        <p className={priceChangeBackgroundClasses}>{priceChange}%</p>
      </td>
      <td className="px-2 sm:px-6 py-4">${priceInUsd}</td>
      <td>
        <Button onClick={handleOpenModal} className="p-0">
          <TbSquareRoundedPlusFilled className="text-green-700 w-6 h-6 sm:w-8 sm:h-8 p-0" />
        </Button>
        {modal && (
          <BuyModal
            handleClose={handleCloseModal}
            handleOpen={handleOpenModal}
            coinName={coinName}
            coinType={coinType}
            data={data}
          />
        )}
      </td>
    </tr>
  );
}

export default Coin;
