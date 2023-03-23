import ReactDOM from "react-dom";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sellCrypto, updateUsd } from "../store/index";
import { BsArrowDownUp } from "react-icons/bs";

function SellModal({ coinType, priceInUsd, handleClose }) {
  const { userName, wallet } = useSelector((state) => {
    return state.user;
  });
  const [amountToSell, setAmountToSell] = useState(0 || "");

  useEffect(() => {
    localStorage.setItem("localWallet", JSON.stringify(wallet));
  }, [wallet]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAmountToSell(e.target.value);
  };

  const handleSell = (e) => {
    e.preventDefault();
    let dispatchObject = {
      coinType: coinType,
      amountToSell: amountToSell,
      valueInUsd: amountToSell * priceInUsd,
    };

    if (wallet[coinType] >= amountToSell) {
      dispatch(sellCrypto(dispatchObject));
      setAmountToSell(0);
    }
  };

  const handleMaxButton = (e) => {
    e.preventDefault();
    setAmountToSell(wallet[coinType]);
  };

  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-600 opacity-80 overflow-hidden"></div>
      <div className="absolute inset-0 lg:inset-x-60 lg:inset-y-20   p-10 bg-gray-900 text-white">
        <div>
          <p className="text-red-700 text-3xl mb-4">Sell {coinType}</p>
          <form className="flex flex-col gap-8">
            <input
              type="number"
              onChange={handleChange}
              value={amountToSell}
              max={wallet[coinType]}
              className="text-black w-full h-11 text-xl "
            />
            <Button onClick={handleMaxButton}>Max</Button>
            {amountToSell > wallet[coinType] ? (
              <p className="text-xl text-red-700 fixed mt-12">
                You only have: {wallet[coinType]} {coinType}
              </p>
            ) : (
              ""
            )}
            <div className="flex justify-center">
              <BsArrowDownUp className="w-24 h-24" />
            </div>
            <div className="bg-white text-black w-full h-11 flex flex-col justify-center text-xl">
              {amountToSell * priceInUsd}
            </div>
            <div className="flex justify-between">
              <Button primary onClick={handleSell}>
                Sell
              </Button>
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

export default SellModal;
