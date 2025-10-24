import { Link } from "react-router-dom";

export default function EntryCard({ entry }) {
  return (
    <Link to={`/entry/${entry.id}`} className="card hover:scale-[1.02] transition">
      <h2 className="text-xl font-semibold mb-1">{entry.title}</h2>
      <p className="meta text-sm italic">{entry.date} • {entry.location}</p>
      <p className="mt-2">{entry.summary}</p>
    </Link>
  );
}
