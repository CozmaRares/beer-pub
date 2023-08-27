import { twMerge as tw } from "tailwind-merge";

const MenuList: React.FC<{
  listName: string;
  items: { name: string; price: string | number; description: string }[];
  className?: string;
}> = ({ listName, items, className }) => (
  <ul className={tw("flex flex-col justify-between space-y-6", className)}>
    {items.map(({ name, price, description }) => (
      <li key={listName + name}>
        <div className="flex flex-row justify-between pb-1.5 font-teko text-2xl sm:text-3xl lg:text-4xl">
          <h3 className="uppercase">{name}</h3>
          <div className="flex-grow border-b border-dotted border-accent" />
          <span className="text-accent before:content-['$']">{price}</span>
        </div>
        <p className="text-sm text-gray-400 sm:text-lg lg:text-xl">
          {description}
        </p>
      </li>
    ))}
  </ul>
);

export default MenuList;
