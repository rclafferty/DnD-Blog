import ReactMarkdown from "react-markdown";

export default function RulesPage({ page }) {
  return (
    <div className="rules-container">
      <h1 className="rules-title">{page.title}</h1>

      {page.summary && (
        <p className="rules-summary">{page.summary}</p>
      )}

      <div className="rules-content">
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </div>
    </div>
  );
}