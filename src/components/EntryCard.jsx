import { Link } from "react-router-dom";

export default function EntryCard({ entry }) {
  return (
    <Link to={`/entry/${entry.slug}`} className="card hover:scale-[1.02] transition">
      <h2 className="text-xl font-semibold mb-1">{entry.title}</h2>
      <p className="meta text-sm italic">{entry.date?.toLocaleDateString("en-US", {
          timeZone: "UTC" // e.g., "America/New_York"
        })} • {entry.location}</p>
      <p className="mt-2">{entry.summary}</p>
      <img
        src={`${import.meta.env.BASE_URL}party/ElfDruid.jpg`}
      />
    </Link>
  );
}
