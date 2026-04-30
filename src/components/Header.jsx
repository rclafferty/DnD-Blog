import "../styles/Header.module.css";

import Navbar from "./Navbar";

export default function Header() {
    return (
        <>
            <header>
                <h1 className="text-3xl font-bold">📜 Adventures in Eberron</h1>
                <p className="italic">“Tales from the road, told by a weary traveler and his band of fools.”</p>
                <Navbar />
            </header>
        </>
    );
}