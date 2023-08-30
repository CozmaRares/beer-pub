import { twMerge as tw } from "tailwind-merge";

const ButtonSkeleton: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <span
    className={tw(
      "block rounded-md border border-accent p-3 font-bold uppercase text-accent transition-colors hover:bg-accent hover:text-black",
      className,
    )}
  >
    {children}
  </span>
);

export default ButtonSkeleton;