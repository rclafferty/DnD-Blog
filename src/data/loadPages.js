import fm from "front-matter";

const modules = import.meta.glob("./**/*.md", { eager: true, as: "raw" });

const pages = Object.entries(modules).map(([path, content]) => {
  const { attributes, body } = fm(content);

  let layout = attributes.layout;

  if (!layout) {
    if (path.includes("/journal/")) layout = "journal";
    else if (path.includes("/rules/")) layout = "rules";
    else layout = "generic";
  }

  return {
    ...attributes,
    layout,
    content: body,
    path,
  };
});

export default pages;