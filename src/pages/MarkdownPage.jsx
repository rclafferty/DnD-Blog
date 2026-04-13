import { useParams } from "react-router-dom";
import pages from "../data/loadPages";

import JournalEntry from "../pages/JournalEntry";
import Rules from "../pages/Rules";
import GenericPage from "../pages/GenericPage";

export default function MarkdownPage() {
  const { slug } = useParams();
  const page = pages.find(p => p.slug === slug);

  if (!page) return <p>Not found</p>;

  switch (page.layout) {
    case "journal":
      return <JournalEntry page={page} />;
    case "rules":
      return <Rules page={page} />;
    default:
      return <GenericPage page={page} />;
  }
}