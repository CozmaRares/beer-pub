import { ReactNode, isValidElement } from "react";
import { twMerge as tw } from "tailwind-merge";

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
        className={tw(
          "pb-1 font-shadows text-sm text-accent md:text-xl",
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
        className={tw(
          "font-teko text-2xl uppercase sm:text-4xl md:text-6xl lg:text-7xl",
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
        className={tw(
          "text-base sm:text-lg md:text-2xl lg:text-3xl",
          description.className,
        )}
      >
        {description.content}
      </p>
    );
  }

  return (
    <div className={tw("space-y-1", className)}>
      {eyebrowElement}
      {headingElement}
      {descriptionElement}
    </div>
  );
};

export default EyebrowHeading;
