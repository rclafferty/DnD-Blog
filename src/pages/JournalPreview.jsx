import { Link } from "react-router-dom";
import fm from "front-matter";
import EntryCard from "../components/EntryCard";

/**
 * Auto-discover all journal markdown files
 */
const markdownModules = import.meta.glob("../data/journal/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

/**
 * Parse frontmatter + derive display data
 */
const entries = Object.entries(markdownModules).map(([path, raw]) => {
  const { attributes, body } = fm(raw);
  const slug = attributes.slug ?? path.split("/").pop().replace(".md", "");

  // Fallbacks
  const title =
    attributes.title ??
    body.match(/^#\s+(.*)$/m)?.[1] ??
    slug;

  const summary =
    attributes.summary ??
    body.split("\n").slice(1, 4).join(" ");

  return {
    slug,
    title,
    date: attributes.date,
    summary
  };
});

// Helper to ensure date is comparable
function toDate(value) {
  if (!value) return null;
  return value instanceof Date ? value : new Date(value);
}

// Get 3 latest entries
const latestEntries = entries
  .filter(e => e.date) // ignore entries without date
  .sort((a, b) => toDate(b.date) - toDate(a.date)) // newest first
  .slice(0, 3);

export default function JournalPreview() {
    return (
        <div className="card-grid">
            {latestEntries.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} />
            ))}
        </div>
    );
}