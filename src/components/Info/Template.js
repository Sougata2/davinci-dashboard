import { MdOutlineStar } from "react-icons/md";

function Template({ template }) {
  return (
    <div className="template">
      <div className="template-image">
        <img src={template.image} alt={template.title} />
      </div>
      <div className="template-title">{template.title}</div>
      <div className="template-description">{template.desc}</div>
      <div className="template-rating">
        <MdOutlineStar />
      </div>
    </div>
  );
}

export default Template;
