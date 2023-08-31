const Banner: React.FC<{ text: string }> = ({ text }) => (
  <h1 className="tracking bg-lightningYellow p-8 text-center font-teko text-4xl uppercase text-black md:text-6xl">
    {text}
  </h1>
);

export default Banner;
