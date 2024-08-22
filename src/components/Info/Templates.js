import Card from "./Card";
import Template from "./Template";

const templates = [
  {
    title: "Taking Points",
    image: "/images/taking-points.png",
    desc: "Write short simple and informative points for the subheadings of your articles",
  },
  {
    title: "Startup Name Generator",
    image: "/images/startup-name-generator.png",
    desc: "Generate cool, creative and catchy names for your statup in seconds",
  },
  {
    title: "Pros and Cons",
    image: "/images/pros-cons.png",
    desc: "write Pros and Cons of product, service or website for your blog article",
  },
  {
    title: "Product Name Generator",
    image: "/images/product-name-generator.png",
    desc: "Generate paragraphs about any topic including a keyword and in a specific tone of voice",
  },
  {
    title: "Product Description",
    image: "/images/product-description.png",
    desc: "Write the description about your product and why it worth it",
  },
  {
    title: "Article Generator",
    image: "/images/article-generator.png",
    desc: "Turn a title and outline text into a fully completed high quality article within seconds",
  },
];

function Templates() {
  return (
    <Card
      title={"Favourite Templates"}
      desc={
        "Always have your top favourite templates handy whenever you need them"
      }
    >
      {templates.map((template) => (
        <Template key={template.title} template={template} />
      ))}
    </Card>
  );
}

export default Templates;
