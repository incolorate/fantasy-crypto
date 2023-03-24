import ReactDOM from "react-dom";
import Button from "./Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCrypto, updateUsd } from "../store/index";
import { BsArrowDownUp } from "react-icons/bs";

function BuyModal({ handleClose, handleOpen, coinName, coinType, data }) {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });
  const [amountOfUsdSpent, setAmountOfUsdSpent] = useState(0 || "");

  const dispatch = useDispatch();
  // Control form

  const handleChange = (e) => {
    setAmountOfUsdSpent(e.target.value);
  };

  //  this should work
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
      handleClose();
    }
  };

  const handleMaxButton = (e) => {
    e.preventDefault();
    setAmountOfUsdSpent(wallet.USD);
  };

  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-600 opacity-80 overflow-hidden"></div>
      <div className="absolute inset-0 lg:inset-x-60 lg:inset-y-20   p-10 bg-gray-900 text-white">
        <div>
          <p className="text-green-700 text-3xl mb-4">Buy {coinName}</p>
          <form onSubmit={handleBuy} className="flex flex-col gap-8">
            <input
              type="number"
              onChange={handleChange}
              value={amountOfUsdSpent}
              className="text-black w-full h-11 text-xl "
            />
            <Button onClick={handleMaxButton} primary>
              Max
            </Button>
            {amountOfUsdSpent > wallet.USD ? (
              <p className="text-xl text-red-700 fixed mt-12">
                You only have: ${wallet.USD}
              </p>
            ) : (
              ""
            )}
            <div className="flex justify-center">
              <BsArrowDownUp className="w-24 h-24" />
            </div>
            <div className="bg-white text-black w-full h-11 flex flex-col justify-center text-xl">
              {amountOfUsdSpent / data.market_data.current_price.usd}
            </div>
            <div className="flex justify-between">
              <Button primary>Buy</Button>
              <Button secondary onClick={handleClose}>
                Close
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default BuyModal;
