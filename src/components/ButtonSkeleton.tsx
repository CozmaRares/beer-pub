import { cn } from "@/shadui/utils";

const ButtonSkeleton: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <span
    className={cn(
      "block rounded-md border border-lightningYellow p-3 font-bold uppercase text-lightningYellow transition-colors hover:bg-lightningYellow hover:text-black",
      className,
    )}
  >
    {children}
  </span>
);

export default ButtonSkeleton;
