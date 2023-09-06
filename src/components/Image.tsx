const Image: React.FC<
  {
    src: string;
    alt: string;
  } & React.ImgHTMLAttributes<HTMLImageElement>
> = props => (
  <img
    loading="lazy"
    {...props}
  />
);

export default Image;
