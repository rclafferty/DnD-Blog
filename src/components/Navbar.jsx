import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 py-4 bg-parchment shadow-md fixed w-full top-0 z-10">
      <Link to="/" className="hover:text-link transition">Home</Link>
      <Link to="/journal" className="hover:text-link transition">Journal</Link>
      <Link to="/party" className="hover:text-link transition">Party</Link>
      <Link to="/about" className="hover:text-link transition">About</Link>
    </nav>
  );
}
