import ReactMarkdown from "react-markdown";

export default function GenericPage({ page }) {
  return (
    <div className="page-container">
      <h1 className="page-title">{page.title}</h1>

      <div className="page-content">
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </div>
    </div>
  );
}