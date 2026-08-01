import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CandleCollection from "./pages/CandleCollection";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/seascape-whispering-wicks" element={<Home />} />
        <Route path="/candles" element={<CandleCollection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;