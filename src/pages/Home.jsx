import entries from "../data/entries.json";
import { Link } from "react-router-dom";
import Party from "./Party";

export default function Home() {
    const latest = entries.slice(-3).reverse();
    return (
        <>
            <Party />
            <section className="p-8 text-center">
                {/* <div className="grid md:grid-cols-3 gap-4"> */}
                <h1 className="text-3xl font-serif text-amber-800 mb-8 text-center">🛡️ Latest Adventures</h1>
                <div className="card-grid">
                    {latest.map((entry) => (
                        <Link key={entry.id} to={`/entry/${entry.id}`} className="hover:scale-[1.02] transition">
                            <div className="card text-center">
                                <h2 className="text-xl font-semibold">{entry.title}</h2>
                                <p className="text-sm italic">{entry.date}</p>
                                <p className="mt-2">{entry.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
