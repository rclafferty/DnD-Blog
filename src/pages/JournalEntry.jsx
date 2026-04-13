import ReactMarkdown from "react-markdown";

export default function JournalEntry({ page }) {
  return (
    <div className="journal-entry">
      <header className="journal-header">
        <h1 className="journal-title">{page.title}</h1>

        <div className="journal-meta">
          {page.date && <span className="journal-date">{page.date}</span>}
          {page.location && (
            <span className="journal-location">📍 {page.location}</span>
          )}
        </div>

        {page.summary && (
          <p className="journal-summary">{page.summary}</p>
        )}
      </header>

      <article className="journal-content">
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </article>
    </div>
  );
}