import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import fm from "front-matter";


const markdownModules = import.meta.glob("../data/journal/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

const entries = Object.entries(markdownModules).map(([path, raw]) => {
  const { attributes, body } = fm(raw);
  const slug = attributes.slug ?? path.split("/").pop().replace(".md", "");

  return {
    slug,
    frontmatter: attributes,
    body
  };
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

  const entry = entries.find((e) => e.slug === id);

  if (!entry) {
    return <p>⚠️ Entry not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[rgba(255,255,245,0.9)] rounded-2xl shadow-md">
      <h1 className="font-serif text-3xl mb-2">
        {entry.frontmatter.title}
      </h1>

      <p className="italic text-sm mb-4">
        {entry.frontmatter.date?.toLocaleDateString("en-US", {
          timeZone: "UTC" // e.g., "America/New_York"
        })} • {entry.frontmatter.location}
      </p>

      <ReactMarkdown
        remarkPlugins={[remarkDirective, annotationDirective, remarkGfm]}
      >
        {entry.body}
      </ReactMarkdown>
    </div>
  );
}
