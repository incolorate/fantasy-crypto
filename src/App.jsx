import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className=" bg-slate-900 h-screen">
      <div className="md:container md:mx-auto bg-slate-900">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
