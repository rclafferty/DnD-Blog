import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

import styles from "../styles/Entry.module.css";

import entries from "../data/entries.json";

// Updated syntax for Vite 5+
const markdownFiles = import.meta.glob("../data/*.md", {
  query: "?raw",
  import: "default"
});

function annotationDirective() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === "textDirective"// &&
        //node.name.startsWith("annotation-")
      ) {
        const data = (node.data ||= {});
        data.hName = "span";
        data.hProperties = { className: node.name };
      }

      if (
        node.type === "containerDirective" // &&
        //node.name.startsWith("annotation-")
      ) {
        const data = (node.data ||= {});
        data.hName = "div";
        data.hProperties = { className: node.name };
      }
    });
  };
}

export default function Entry() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const entry = entries.find((e) => e.id === Number(id));

  useEffect(() => {
    const path = `../data/${entry.file}`;
    if (markdownFiles[path]) {
      markdownFiles[path]().then(setContent);
    } else {
      setContent("⚠️ Entry not found.");
    }
  }, [entry]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[rgba(255,255,245,0.9)] rounded-2xl shadow-md">
      <h1 className="font-serif text-3xl mb-2">{entry.title}</h1>
      <p className="italic text-sm mb-4">
        {entry.date} • {entry.location}
      </p>
      <ReactMarkdown remarkPlugins={[remarkDirective, annotationDirective, remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
