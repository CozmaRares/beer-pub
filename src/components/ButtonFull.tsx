import { twMerge as tw } from "tailwind-merge";

const ButtonFull: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <span
    className={tw(
      "block w-fit rounded-md bg-accent px-4 py-2 text-center text-xs font-bold uppercase text-black transition-colors hover:bg-orange-500 sm:text-base",
      className,
    )}
  >
    {children}
  </span>
);

export default ButtonFull;
