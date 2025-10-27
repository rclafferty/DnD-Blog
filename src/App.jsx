import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Entry from "./pages/Entry";
import Party from "./pages/Party";
import About from "./pages/About";
import Header from "./components/Header";

export default function App() {
    return (
        <Router>
            <div id="outerwrapper">
                <div className="content-wrapper">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/journal" element={<Journal />} />
                        <Route path="/entry/:id" element={<Entry />} />
                        <Route path="/party" element={<Party />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    );
}
