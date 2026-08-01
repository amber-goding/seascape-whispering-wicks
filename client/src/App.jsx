import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CandleCollection from "./pages/CandleCollection";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candles" element={<CandleCollection />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;