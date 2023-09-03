import drinks from "@/assets/drinks.png";
import Banner from "@/components/Banner";
import EyebrowHeading from "@/components/EyebrowHeading";
import HorizontalList from "@/components/HorizontalList";
import MenuList from "@/components/MenuList";
import fridayBg from "@/assets/friday-bg.png";
import friday from "@/assets/friday.svg";
import paleAle from "@/assets/pale-ale.png";
import crutons from "@/assets/crutons.png";
import sausages from "@/assets/sausages.png";
import Image from "@/components/Image";

const Menu = () => {
  return (
    <>
      <Banner text="Menu" />
      <Friday />
      <div className="space-children bounded-section mt-8">
        <section className="space-children">
          <EyebrowHeading
            className="text-center"
            eyebrow={{ content: "Bar" }}
            heading={{ content: "Bar Menu" }}
            description={{
              content:
                "We offer bottled beers by local producers, our own draft beer, and a variety of cocktails.",
              className: "w-2/3 toMd:w-1/2 mx-auto [text-wrap:balance]",
            }}
          />
          <HorizontalList
            listName="drinks"
            component={MenuList}
            numItems={{ md: 2 }}
            items={[
              {
                listName: "Boottled Beer",
                displayName: true,
                items: [
                  {
                    name: "Indian Pale Ale",
                    price: 4,
                    description: "Strong and bitter beer with intense aroma",
                  },
                  {
                    name: "Lager Beer",
                    price: 3.5,
                    description:
                      "This beer is not bitter at all and features wheat aroma",
                  },
                  {
                    name: "Bitter",
                    price: 4,
                    description: '"England\'s favorite beer", dark and intense',
                  },
                  {
                    name: "Stout",
                    price: 5,
                    description:
                      "This frothy beer has a medium strength and a pleasant aroma",
                  },
                  {
                    name: "Caramel Ale",
                    price: 5.5,
                    description:
                      "Caramel malt sweetness accompanied by spicy and citrusy hops",
                  },
                ],
              },
              {
                listName: "Beer On Tap",
                displayName: true,
                items: [
                  {
                    name: "Blue Style",
                    price: 5,
                    description: "Brewed with oats and spiced with orange peel",
                  },
                  {
                    name: "Boutique Ipa",
                    price: 6,
                    description:
                      "Our best-selling draft beer with bitter taste",
                  },
                  {
                    name: "Absolute Porter",
                    price: 7,
                    description:
                      "Chocolate peanut butter porter with rich taste",
                  },
                  {
                    name: "Belgian Dream",
                    price: 8,
                    description:
                      "A traditional Belgian-style wheat ale with whispers of orange",
                  },
                  {
                    name: "Beer Boutique Lager",
                    price: 9,
                    description:
                      "Crisp, clean and slightly dry with some residual sweetness",
                  },
                ],
              },
              {
                listName: "Cocktails",
                displayName: true,
                items: [
                  {
                    name: "Monkey Sour",
                    price: 10,
                    description:
                      "Monkey Shoulder whisky, strawberry, lemon, sugar",
                  },
                  {
                    name: "Old Fashioned",
                    price: 11,
                    description:
                      "Buffalo Trace bourbon, demerara, Angostura Bitters",
                  },
                  {
                    name: "Piña Colada",
                    price: 10,
                    description:
                      "Havana Club 3 Year Old rum, coconut, pineapple",
                  },
                  {
                    name: "Mojito",
                    price: 11,
                    description: "Havana Club 3 Year Old rum, lime, mint, soda",
                  },
                  {
                    name: "Bramble",
                    price: 13,
                    description:
                      "Tanqueray London Dry gin, crème de mure, lemon",
                  },
                ],
              },
            ]}
          />
        </section>
        <Image
          src={drinks}
          alt="image placeholder"
          className="aspect-video w-full object-cover"
        />
        <section className="space-children pb-16">
          <EyebrowHeading
            className="text-center"
            eyebrow={{ content: "Food" }}
            heading={{ content: "Food Menu" }}
            description={{
              content: "Explore our snacks, burgers, and main dishes.",
              className: "w-2/3 toMd:w-1/2 mx-auto [text-wrap:balance]",
            }}
          />
          <HorizontalList
            listName="food"
            component={MenuList}
            numItems={{ md: 2 }}
            items={[
              {
                listName: "Snacks",
                displayName: true,
                items: [
                  {
                    name: "Spicy Nachos",
                    price: 15,
                    description:
                      "Cheddar cheese, jalapenos, queso fresco, sour cream, salsa",
                  },
                  {
                    name: "Fish & Chips",
                    price: 12,
                    description:
                      "Ale battered cod, coleslaw, French fries, and tartar sauce",
                  },
                  {
                    name: "Fried Calamary",
                    price: 12,
                    description:
                      "Fried calamari served with spicy tartar sauce and dill aioli",
                  },
                  {
                    name: "Chicken Wrap",
                    price: 18,
                    description:
                      "Grilled chicken, bacon, tomato, cucumber, avocado, village sauce",
                  },
                  {
                    name: "Mac & Cheese Bites",
                    price: 10,
                    description: "With maple bacon and cheese sauce",
                  },
                ],
              },
              {
                listName: "Burgers",
                displayName: true,
                items: [
                  {
                    name: "Classic Burger",
                    price: 14,
                    description:
                      "Beef, tomato, pickle, lettuce, cucumber, cheddar cheese, bacon",
                  },
                  {
                    name: "Beef King",
                    price: 18,
                    description:
                      "Beef brisket, Swiss cheese, caramelised onions",
                  },
                  {
                    name: "Double Cheeseburger",
                    price: 22,
                    description:
                      "Double beef patties with cheese, tomato, topped with mozzarella",
                  },
                  {
                    name: "Chicken Burger",
                    price: 15,
                    description:
                      "Chicken breast, soaked with hot sauce & blue cheese slaw",
                  },
                  {
                    name: "Boutique Burger",
                    price: 19,
                    description:
                      "Maple bacon, tomato, red onions topped off with a fried egg",
                  },
                ],
              },
              {
                listName: "Meat",
                displayName: true,
                items: [
                  {
                    name: "Sesame Chicken Strips",
                    price: 13,
                    description:
                      "Chicken breasts in Jack Daniel's glaze with toasted sesame seeds",
                  },
                  {
                    name: "Hot wings",
                    price: 15,
                    description: "Served with barbecue sauce and coleslaw",
                  },
                  {
                    name: "Lamb Gyro",
                    price: 20,
                    description:
                      "Lamb, tzatziki sauce, tomato, cucumber & lettuce in pita bread",
                  },
                  {
                    name: "Lamb Chops",
                    price: 22,
                    description:
                      "Marinated herb roasted rack of lamb chops with balsamic sauce",
                  },
                  {
                    name: "Pan Roasted Pork Chop",
                    price: 23,
                    description:
                      "Served in a bourbon & honey glaze with berry sauce",
                  },
                ],
              },
            ]}
          />
        </section>
      </div>
    </>
  );
};

const Friday = () => (
  <section
    id="friday-deal"
    style={{
      backgroundImage: `url(${fridayBg})`,
      backgroundSize: "cover",
      backgroundPositionX: "50%",
    }}
  >
    <div className=" flex h-full items-center justify-center py-32 backdrop-brightness-50 backdrop-grayscale">
      <div className="bounded-section col-span-full row-span-full grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
        <Image
          alt="illutsration"
          src={friday}
          className="mx-auto object-cover lg:max-h-[500px]"
        />
        <div className="h-full flex-col space-y-8 rounded-lg bg-black/40 p-8 backdrop-blur-sm toMd:p-16">
          <EyebrowHeading
            className="text-center"
            eyebrow={{ content: "Special price" }}
            heading={{ content: "Every Friday" }}
            description={<></>}
          />
          <MenuList
            listName="friday"
            items={[
              {
                img: { src: paleAle, alt: "illutsration" },
                name: "Pale Ale",
                price: 3.5,
                description:
                  "Enjoy draft pale ale at Beer Boutique with its mild taste and tender aroma",
              },
              {
                img: { src: crutons, alt: "illutsration" },
                name: "Croutons & Sauce",
                price: 7,
                description:
                  "Croutons with cheese and chilli sauces are the best beer accompaniment",
              },
              {
                img: { src: sausages, alt: "illutsration" },
                name: "Pan With Sausages",
                price: 15,
                description:
                  "Delicious and spicy sausages is our special offer for a big company",
              },
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Menu;
