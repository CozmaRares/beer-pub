import { cn } from "@/shadui/utils";

const ButtonFull: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <span
    className={cn(
      "block w-fit rounded-md bg-lightningYellow px-4 py-2 text-center text-xs font-bold uppercase text-black transition-colors hover:bg-orange-500 sm:text-base",
      className,
    )}
  >
    {children}
  </span>
);

export default ButtonFull;
