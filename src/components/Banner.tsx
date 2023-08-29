const Banner: React.FC<{ text: string }> = ({ text }) => (
  <h1 className="tracking bg-accent p-8 text-center font-teko text-6xl uppercase text-black">
    {text}
  </h1>
);

export default Banner;
