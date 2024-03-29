import { ReactNode, isValidElement } from "react";
import { cn } from "@/shadui/utils";

type DefaultElement = {
  content: string;
  className?: string;
};

const EyebrowHeading: React.FC<{
  eyebrow: DefaultElement | ReactNode;
  heading: DefaultElement | ReactNode;
  description: DefaultElement | ReactNode;
  className?: string;
}> = ({ eyebrow, heading, description, className }) => {
  let eyebrowElement: ReactNode = null;
  let headingElement: ReactNode = null;
  let descriptionElement: ReactNode = null;

  if (isValidElement(eyebrow)) eyebrowElement = eyebrow;
  else {
    eyebrow = eyebrow as DefaultElement;
    eyebrowElement = (
      <p
        className={cn(
          "pb-1 font-shadows text-lightningYellow md:text-xl lg:text-2xl",
          eyebrow.className,
        )}
      >
        {eyebrow.content}
      </p>
    );
  }

  if (isValidElement(heading)) headingElement = heading;
  else {
    heading = heading as DefaultElement;
    headingElement = (
      <h2
        className={cn(
          "font-teko text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl",
          heading.className,
        )}
      >
        {heading.content}
      </h2>
    );
  }

  if (isValidElement(description)) descriptionElement = description;
  else {
    description = description as DefaultElement;
    descriptionElement = (
      <p
        className={cn(
          "sm:text-lg md:text-xl lg:text-2xl",
          description.className,
        )}
      >
        {description.content}
      </p>
    );
  }

  return (
    <div className={cn("space-y-1", className)}>
      {eyebrowElement}
      {headingElement}
      {descriptionElement}
    </div>
  );
};

export default EyebrowHeading;
