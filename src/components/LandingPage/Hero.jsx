import Button from "../Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-white grid grid-cols-2">
      <div className=" px-5 py-24">
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
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="bg-slate-300 bg-opacity-10  p-8 rounded-xl flex justify-between align-middle text-white">
          <p className="text-5xl">Buy, sell, have fun</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
