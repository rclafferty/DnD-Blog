import entries from "../data/entries.json";

import { Link } from "react-router-dom";

export default function Journal() {
    return (
        <>
            <h1 className="text-3xl font-serif text-amber-800 mb-8 text-center">🛡️ Party Adventures</h1>
            <div className="card-grid">
                {entries.map((entry) => (
                    <Link key={entry.id} to={`/entry/${entry.id}`} className="block bg-[rgba(255,255,240,0.9)] rounded-xl p-4 shadow hover:scale-[1.02] transition">
                        <div className="card text-center">
                            <h2 className="text-xl font-semibold">{entry.title}</h2>
                            <p className="text-sm italic">{entry.date}</p>
                            <p className="mt-2">{entry.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}