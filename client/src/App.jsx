import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Simulator from "./pages/Simulator";
import VigilanceScore from "./pages/VigilanceScore";
import DecisionCheck from "./pages/DecisionCheck";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/simulator" element={<Simulator />} />

        <Route path="/vigilance-score" element={<VigilanceScore />} />

        <Route path="/decision-check" element={<DecisionCheck />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
