import { Link } from "react-router-dom";

const SliderLink: React.FC<{
  text: string;
  link: string;
  className?: string;
}> = ({ text, link, className }) => (
  <Link
    className={`slider-link ${className ?? ""}`}
    to={link}
  >
    {text}
  </Link>
);

export default SliderLink;
