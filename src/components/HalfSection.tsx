import { cn } from "@/shadui/utils";
import Image from "@/components/Image";

const HalfSection: React.FC<{
  content: React.ReactNode;
  img: {
    src: string;
    alt: string;
    containerClassName?: string;
  } & React.ImgHTMLAttributes<HTMLImageElement>;
  className?: string;
  reverse?: boolean;
}> = ({ content, img, className, reverse }) => (
  <div className={cn("grid gap-4 bg-black md:grid-cols-2", className)}>
    <div className={"p-4 sm:p-8" + (reverse ? " order-1" : "")}>{content}</div>
    <div
      className={cn(
        "aspect-video h-full max-h-[600px] w-full md:aspect-auto",
        img.containerClassName,
      )}
    >
      <Image
        {...img}
        className={cn("h-full w-full object-cover", img.className)}
      />
    </div>
  </div>
);

export default HalfSection;
