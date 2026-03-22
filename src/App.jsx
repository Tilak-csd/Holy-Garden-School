import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* Catch-all for 404 pages */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
}