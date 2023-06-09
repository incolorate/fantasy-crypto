import Button from "../Button";
import { Link } from "react-router-dom";
import CoinCard from "../Dashboard/CoinCard";
import hero from "../../img/hero.svg";

function Hero() {
  return (
    <div className="text-white grid md:grid-cols-2 ">
      <div className=" px-5 py-24 max-sm:col-span-2">
        <div>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Conquer the crypto trading world
          </h1>
          <p className="text-2xl mb-8">
            Join us now and become a hero of the crypto world! With your courage
            and our expertise, the possibilities are endless. Let the adventure
            begin!
          </p>
          <div>
            <Link to="/dashboard">
              <Button primary={true} rounded>
                Play now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 items-center justify-center grid gap-5">
        <img src={hero} alt="heroimg" className="max-md:hidden" />
      </div>
    </div>
  );
}

export default Hero;
