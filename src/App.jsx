import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom ";
import DashBoard from "./components/Dashboard/Dashboard";
import Intro from "./components/Dashboard/Intro";
import Wallet from "./components/Dashboard/Wallet";
import Trade from "./components/Dashboard/Trade";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashBoard />}>
        <Route path="/dashboard" element={<Intro />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="trade" element={<Trade />} />
      </Route>
    </Routes>
  );
}

export default App;
