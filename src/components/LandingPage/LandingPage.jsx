import NavBar from "./NavBar";
import Hero from "./Hero";
import CoinInformation from "./CoinInformation";

function LandingPage() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-black via-black to-violet-900 h-screen overflow-auto">
        <div className="md:container md:mx-auto">
          <NavBar />
          <Hero />
        </div>
        <div className="md:container md:mx-auto">
          <CoinInformation className="w-80" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
