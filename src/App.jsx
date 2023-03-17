import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom ";
import DashBoard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
