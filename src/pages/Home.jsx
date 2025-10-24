import entries from "../data/entries.json";
import { Link } from "react-router-dom";

export default function Home() {
  const latest = entries.slice(-3).reverse();
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">📜 The Adventures of the Wandering Party</h1>
      <p className="text-lg italic mb-8">
        “Tales from the road, told by a weary traveler and his band of fools.”
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {latest.map((entry) => (
          <Link key={entry.id} to={`/entry/${entry.id}`} className="block bg-[rgba(255,255,240,0.9)] rounded-xl p-4 shadow hover:scale-[1.02] transition">
            <h2 className="text-xl font-semibold">{entry.title}</h2>
            <p className="text-sm italic">{entry.date}</p>
            <p className="mt-2">{entry.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
