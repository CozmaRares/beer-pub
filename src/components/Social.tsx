import { cn } from "@/shadui/utils";

const Social: React.FC<{
  icon: React.ReactNode;
  name: string;
  link: string;
  className?: string;
}> = ({ icon, name, link, className }) => (
  <a
    className={cn(
      "flex aspect-square w-[2em] cursor-pointer items-center justify-center rounded-[3px] border border-lightningYellow text-lightningYellow transition-colors hover:bg-lightningYellow hover:text-black",
      className,
    )}
    href={link}
    rel="noreferrer"
    target="_blank"
  >
    <p className="sr-only">{name}</p>
    {icon}
  </a>
);

export default Social;
