import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";

function LandingPage() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-black via-black to-violet-900 h-screen">
        <div className="md:container md:mx-auto">
          <NavBar />
          <Hero />
        </div>
      </div>
      <div className="bg-white h-screen bg-gradient-to-bl from-black via-black to-violet-900">
        <Card />
      </div>
    </div>
  );
}

export default LandingPage;
