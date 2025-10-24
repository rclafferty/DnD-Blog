import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Entry from "./pages/Entry";
import Party from "./pages/Party";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/entry/:id" element={<Entry />} />
          <Route path="/party" element={<Party />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
