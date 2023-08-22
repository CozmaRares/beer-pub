const SliderLink: React.FC<{
  text: string;
  link: string;
  className?: string;
}> = ({ text, link, className }) => (
  <a
    href={link}
    className={`slider-link ${className ?? ""}`}
  >
    {text}
  </a>
);

export default SliderLink;
