const Image: React.FC<
  { src: string; alt: string } & React.HTMLProps<HTMLImageElement>
> = props => <img {...props} />;

export default Image;
