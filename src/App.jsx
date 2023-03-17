import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
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

export default App;
