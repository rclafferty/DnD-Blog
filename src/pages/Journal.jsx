import { Link } from "react-router-dom";
import fm from "front-matter";

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
  const slug = path.split("/").pop().replace(".md", "");

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

/**
 * Optional: newest first
 */
entries.sort((a, b) => {
  if (!a.date || !b.date) return 0;
  return new Date(b.date) - new Date(a.date);
});

function formatDate(value) {
  if (!value) return "";
  if (value instanceof Date) {
    return value.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  return value;
}

export default function Journal() {
  return (
    <>
      <h1 className="text-3xl font-serif text-amber-800 mb-8 text-center">
        🛡️ Party Adventures
      </h1>

      <div className="card-grid">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            to={`/entry/${entry.slug}`}
            className="block bg-[rgba(255,255,240,0.9)] rounded-xl p-4 shadow hover:scale-[1.02] transition"
          >
            <div className="card text-center">
              <h2 className="text-xl font-semibold">
                {entry.title}
              </h2>

              {entry.date && (
                <p className="text-sm italic">
                  {formatDate(entry.date)}
                </p>
              )}

              {entry.summary && (
                <p className="mt-2">
                  {entry.summary}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
