import { twMerge as tw } from "tailwind-merge";

const ButtonFull: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <span
    className={tw(
      "block rounded-md bg-accent p-2 text-center font-bold uppercase text-black transition-colors hover:bg-orange-500",
      className,
    )}
  >
    {children}
  </span>
);

export default ButtonFull;
