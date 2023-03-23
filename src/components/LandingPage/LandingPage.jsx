import NavBar from "./NavBar";
import Hero from "./Hero";

function LandingPage() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-black via-black to-violet-900 h-screen overflow-auto">
        <div className="md:container md:mx-auto">
          <NavBar />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
