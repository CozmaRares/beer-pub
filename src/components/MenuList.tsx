import { cn } from "@/shadui/utils";
import Image from "@/components/Image";

const MenuList: React.FC<{
  listName: string;
  items: {
    img?: { src: string; alt: string };
    name: string;
    price: number;
    description: string;
  }[];
  displayName?: boolean;
}> = ({ listName, items, displayName }) => (
  <div>
    {displayName && (
      <h2 className="mb-8 font-teko text-2xl uppercase text-lightningYellow sm:text-3xl lg:text-4xl">
        {listName}
      </h2>
    )}
    <ul className="flex flex-col justify-between space-y-6">
      {items.map(({ img, name, price, description }) => (
        <li
          key={listName + name}
          className={cn({ "grid grid-cols-[70px,1fr] gap-x-6": !!img })}
        >
          {img && (
            <Image
              src={img.src}
              alt={img.alt}
              className="row-span-2 aspect-square rounded-full"
            />
          )}
          <div className="flex flex-row justify-between pb-1.5 font-teko text-2xl sm:text-3xl lg:text-4xl">
            <h3 className="uppercase">{name}</h3>
            <div className="mb-[6px] flex-grow border-b-2 border-dotted border-lightningYellow" />
            <span className="text-lightningYellow before:content-['$']">
              {price}
            </span>
          </div>
          <p className="text-sm text-gray-400 sm:text-base">{description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default MenuList;
