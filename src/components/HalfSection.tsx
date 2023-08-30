import { twMerge as tw } from "tailwind-merge";

const HalfSection: React.FC<{
  content: React.ReactNode;
  img: {
    src: string;
    className?: string;
    containerClassName?: string;
  };
  className?: string;
  reverse?: boolean;
}> = ({ content, img, className, reverse }) => (
  <div className={tw("grid gap-4 bg-black md:grid-cols-2", className)}>
    <div className={"p-4 sm:p-8" + (reverse ? " order-1" : "")}>{content}</div>
    <div
      className={tw(
        "aspect-video h-full max-h-[600px] w-full md:aspect-auto",
        img.containerClassName,
      )}
    >
      <img
        src={img.src}
        className={tw("h-full w-full object-cover", img.className)}
      />
    </div>
  </div>
);

export default HalfSection;
