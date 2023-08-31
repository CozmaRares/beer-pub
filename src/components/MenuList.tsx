const MenuList: React.FC<{
  listName: string;
  items: { name: string; price: string | number; description: string }[];
  displayTitle?: boolean;
}> = ({ listName, items, displayTitle }) => (
  <div>
    {displayTitle && (
      <h2 className="mb-8 font-teko text-2xl uppercase text-lightningYellow sm:text-3xl lg:text-4xl">
        {listName}
      </h2>
    )}
    <ul className="flex flex-col justify-between space-y-6">
      {items.map(({ name, price, description }) => (
        <li key={listName + name}>
          <div className="flex flex-row justify-between pb-1.5 font-teko text-2xl sm:text-3xl lg:text-4xl">
            <h3 className="uppercase">{name}</h3>
            <div className="flex-grow border-b-2 border-dotted border-lightningYellow" />
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
