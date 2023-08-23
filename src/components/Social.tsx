import { twMerge as tw } from "tailwind-merge";

const Social: React.FC<{
  icon: React.ReactNode;
  name: string;
  link: string;
  className?: string;
}> = ({ icon, name, link, className }) => (
  <a
    className={tw(
      "flex aspect-square w-[2em] cursor-pointer items-center justify-center rounded-[3px] border border-accent text-accent transition-colors hover:bg-accent hover:text-black",
      className,
    )}
    href={link}
    rel="noreferrer"
  >
    <p className="visually-hidden">{name}</p>
    {icon}
  </a>
);

export default Social;
