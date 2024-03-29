import EyebrowHeading from "@/components/EyebrowHeading";
import ButtonSkeleton from "@/components/ButtonSkeleton";
import HorizontalList from "@/components/HorizontalList";
import InferProps from "@/utils/InferProps";
import MenuList from "@/components/MenuList";
import ButtonFull from "@/components/ButtonFull";
import HalfSection from "@/components/HalfSection";
import { Link } from "react-router-dom";

import beerFilling from "@/assets/beer-glass-filling.mp4";

import beer from "@/assets/images/beer.webp";
import hamburger from "@/assets/images/hamburger.webp";
import pretzels from "@/assets/images/pretzels.webp";

import beerBottle from "@/assets/svg/beer-bottle.svg";
import beerGlass from "@/assets/svg/beer-glass.svg";
import sandwich from "@/assets/svg/sandwich.svg";
import cocktail from "@/assets/svg/cocktail.svg";

import IPA from "@/assets/images/IPA.webp";
import lagerBeer from "@/assets/images/lager-beer.webp";
import bitter from "@/assets/images/bitter.webp";

import fries from "@/assets/images/fries.webp";
import beerMug from "@/assets/images/beer-mug.webp";
import hamburgerCut from "@/assets/images/hamburger-cut.webp";
import women from "@/assets/images/women.webp";

import about from "@/assets/images/about.webp";

import samWhite from "@/assets/images/sam-white.webp";
import bernardRedhead from "@/assets/images/bernard-redhead.webp";
import group from "@/assets/images/group.webp";

import waiter from "@/assets/images/waiter.webp";
import counter from "@/assets/images/counter.webp";
import irish from "@/assets/images/irish.webp";

import miller from "@/assets/svg/miller.svg";
import hoegaarden from "@/assets/svg/hoegaarden.svg";
import carlsberg from "@/assets/svg/carlsberg.svg";
import budweiser from "@/assets/svg/budweiser.svg";
import heineken from "@/assets/svg/heineken.svg";
import corona from "@/assets/svg/corona.svg";
import Image from "@/components/Image";

const Home = () => {
  return (
    <div className="space-children">
      <Hero />
      <Menu />
      <BeerSpecials />
      <BestOffers />
      <About />
      <Testimonials />
      <Blog />
      <Brands />
    </div>
  );
};

const Hero = () => (
  <section className="relative isolate">
    <video
      tabIndex={-1}
      loop
      muted
      autoPlay
      className="pointer-events-none h-[100vmin] w-full object-cover"
    >
      <source
        src={beerFilling}
        type="video/mp4"
      />
    </video>
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/50" />
    <EyebrowHeading
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:left-[70%]"
      eyebrow={{ content: "Enjoy your beer!", className: "text-white" }}
      heading={
        <h1 className="font-teko text-3xl uppercase text-lightningYellow sm:text-5xl md:text-7xl lg:text-8xl">
          Beer Boutique
        </h1>
      }
      description={
        <div className="mt-1 space-y-3 text-xs sm:mt-4 sm:text-base md:text-lg lg:text-2xl">
          <p>
            <span className="md:block">
              The <span className="text-lightningYellow">best beer</span> comes
            </span>{" "}
            <span className="md:block">
              with the <span className="text-lightningYellow">best foods</span>!
            </span>
          </p>
          <Link
            className="mx-auto block w-fit"
            to="/menu"
          >
            <ButtonFull>See Menu</ButtonFull>
          </Link>
        </div>
      }
    />
  </section>
);

const Menu = () => {
  const menuCards: { img: string; title: string; description: string }[] = [
    {
      img: beer,
      title: "Beer Menu",
      description:
        "We are proud to introduce our collection of crafted beers. Try our special recipes of beers and ciders separately or in a beer flight. If you’re not much into beer, order some wine, a spirit, or a cocktail. We also have a broad selection of soft drinks.",
    },
    {
      img: hamburger,
      title: "Food Menu",
      description:
        "We adjust our menu to any tastes and needs. Apart from an impressive grill menu, we have vegetarian and gluten-free options. Try a single meal or share a plate with the company. Also, ask a waiter about the best gastronomic match for your drink.",
    },
    {
      img: pretzels,
      title: "Happy Hour",
      description:
        "This is a special offer available from 3 to 5 p.m. Check the Happy Hour menu online or ask a waiter about the special offer, so you can save your money and enjoy a delicious meal. Hours may change from time to time, so make sure to join our newsletter.",
    },
  ];

  const menuItems: { img: string; title: string; description: string }[] = [
    {
      img: beerBottle,
      title: "Bottled Beer",
      description:
        "We sell craft bottled beer from the best local and foreign producers.",
    },
    {
      img: sandwich,
      title: "Snacks",
      description:
        "Explore the fresh dishes in our menu that will complement your drink.",
    },
    {
      img: beerGlass,
      title: "Beer On Tap",
      description:
        "Our waiters will gladly tell you about the draft craft beer available today.",
    },
    {
      img: cocktail,
      title: "Cocktails",
      description:
        "Enjoy your favorite cocktails, from classic long drinks to exotic mixes.",
    },
  ];

  return (
    <section className="bounded-section space-children">
      <div>
        <EyebrowHeading
          eyebrow={{ content: "Menu" }}
          heading={{ content: "Explore our menu" }}
          description={{ content: "See what we offer" }}
          className="pb-8 text-center"
        />
        <ul className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row lg:flex-nowrap">
          {menuCards.map(({ img, title, description }) => (
            <li
              key={title}
              className="group relative isolate flex aspect-[4/5] w-full flex-col justify-center overflow-y-hidden rounded-lg p-3 text-center sm:gap-3 toMd:w-2/3 md:w-2/5 md:px-8"
              style={{
                background: `url(${img})`,
                backgroundSize: "cover",
                resize: "both",
              }}
            >
              <div className="absolute left-0 right-0 top-0 -z-[1] h-full bg-black opacity-60 transition-opacity lg:opacity-0 lg:group-focus-within:opacity-60 lg:group-hover:opacity-60" />
              <h3 className="z-[1] font-teko text-xl uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
              </h3>
              <p className="mx-auto text-xs transition-opacity sm:text-sm toMd:block toMd:w-4/5 toMd:text-base md:w-full lg:opacity-0 lg:group-focus-within:opacity-100 lg:group-hover:opacity-100">
                {description}
              </p>
              <Link
                to="/menu"
                className="mx-auto w-fit border-b border-transparent text-xs font-bold uppercase text-lightningYellow transition-opacity hover:border-current sm:text-sm toMd:text-base lg:opacity-0 lg:group-focus-within:opacity-100 lg:group-hover:opacity-100"
              >
                See full menu
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr,5fr]">
        <EyebrowHeading
          className="space-y-4"
          eyebrow={{ content: "What we offer" }}
          heading={{ content: "Cold Beer And Tasty Snacks" }}
          description={
            <>
              <p>
                We offer a simple and tasty menu for true beer connoisseurs.
              </p>
              <Link
                to="/menu"
                className="block w-fit"
              >
                <ButtonSkeleton>Learn more</ButtonSkeleton>
              </Link>
            </>
          }
        />
        <ul className="grid items-center gap-y-8 text-center sm:grid-cols-[minmax(100px,1fr),4fr] sm:text-left md:grid-cols-[minmax(180px,1fr),4fr,minmax(180px,1fr),4fr]">
          {menuItems.map(({ img, title, description }) => (
            <li
              key={title}
              className="contents"
            >
              <Image
                src={img}
                className="mx-auto w-1/2 sm:h-full sm:max-w-full"
                alt="icon"
              />
              <div>
                <h3 className="font-teko text-3xl uppercase sm:text-2xl md:text-4xl">
                  {title}
                </h3>
                <p className="text-gray-400">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <EyebrowHeading
        className="space-y-4 bg-lightningYellow px-4 py-8 text-center text-black md:py-16"
        eyebrow={{ content: "-30% every Friday", className: "text-black" }}
        heading={{ content: "friday deal" }}
        description={
          <>
            <p className="mx-auto toMd:w-5/6">
              Get a 30% discount on the food menu every Friday!
            </p>

            <Link
              to="/menu"
              className="mx-auto block w-fit"
            >
              <ButtonFull className="bg-black text-lightningYellow hover:bg-neutral-800 hover:text-lightningYellow toMd:p-3">
                Learn more
              </ButtonFull>
            </Link>
          </>
        }
      />
    </section>
  );
};

const BeerSpecials = () => {
  const items: {
    img: string;
    title: string;
    description: string;
    abv: number;
    ibu: number;
    taste: string;
  }[] = [
    {
      img: IPA,
      title: "IPA",
      description:
        "Ideal for those who prefer strong and bitter beer with rich aroma.",
      abv: 8,
      ibu: 80,
      taste: "Very bitter, hoppy, with grainy notes.",
    },
    {
      img: lagerBeer,
      title: "Lager Beer",
      description:
        "This classic bottled beer features a wheat aroma and mild taste.",
      abv: 4.2,
      ibu: 12,
      taste: "Light, mild, with very little bitterness.",
    },
    {
      img: bitter,
      title: "Bitter",
      description:
        '"England\'s favorite beer" is a great choice for those who like dark varieties of beer.',
      abv: 4.6,
      ibu: 40,
      taste: "Bitter, malty, with a slight aftertaste of toasts.",
    },
  ];

  const Item: React.FC<(typeof items)[number]> = ({
    img,
    title,
    description,
    abv,
    ibu,
    taste,
  }) => (
    <div className="flex flex-col items-center justify-center gap-4 toMd:flex-row toMd:px-4">
      <Image
        src={img}
        alt="photo"
        className="h-[200px] max-h-[70vh] toMd:h-[400px]"
      />
      <div className="w-2/3 space-y-4 pt-8">
        <h3 className="font-teko text-3xl font-bold capitalize toMd:text-4xl">
          {title}
        </h3>
        <p className="text-gray-400 toMd:text-lg">{description}</p>
        <p>
          <span className="mt-4 block">ABV - {abv}%</span>
          <span className="block">IBU - {ibu}%</span>
          <span className="mt-4 block">{taste}</span>
        </p>
      </div>
    </div>
  );

  return (
    <section className="bounded-section space-children">
      <EyebrowHeading
        className="text-center"
        eyebrow={{ content: "Bottled beer" }}
        heading={{ content: "Bottled Beer Specials" }}
        description={{
          content:
            "Appreciate the taste of craft bottled beer from the best producers.",
        }}
      />
      <HorizontalList
        listName="bottled-beers"
        component={Item}
        items={items}
        numItems={{ lg: 2 }}
      />
    </section>
  );
};

const BestOffers = () => {
  const images = [fries, beerMug, hamburgerCut, women];

  const lists: InferProps<[typeof MenuList]>[] = [
    {
      listName: "snacks",
      items: [
        {
          name: "Spicy Nachos",
          price: 15,
          description:
            "Cheddar cheese, jalapenos, queso fresco, sour cream, salsa, guacamole, beer cheese sauce + 3 sauces on your choice",
        },
        {
          name: "Fish & Chips",
          price: 12,
          description:
            "Our iconic dish paired with any draft or bottled beer: ale battered cod, coleslaw, French fries, and tartar sauce",
        },
        {
          name: "Chicken Wrap",
          price: 18,
          description:
            "Grilled chicken, honey bacon, tomato, fresh cucumber, lettuce, avocado, village sauce, and a whole-wheat wrap",
        },
      ],
    },
    {
      listName: "meals",
      items: [
        {
          name: "Fried Calamary",
          price: 12,
          description:
            "Another iconic snack paired with beer: fried calamari served with spicy tartar sauce and dill aioli",
        },
        {
          name: "Beer Boutique Pizza",
          price: 18,
          description:
            "Goat cheese, red onion, baby spinach, pepperoni, smoked sausages, ham, and spicy beer sauce",
        },
        {
          name: "Classic Burger",
          price: 14,
          description:
            "Beef, tomato, pickle, lettuce, cucumber, cheddar cheese, bacon, ketchup, and American mustard",
        },
      ],
    },
  ];

  return (
    <section className="bounded-section space-children">
      <EyebrowHeading
        className="text-center"
        eyebrow={{ content: "Top choice" }}
        heading={{ content: "Our Best Offers" }}
        description={{ content: "Enjoy your meal at Beer Boutique!" }}
      />
      <ul className="mx-auto grid max-w-[400px] grid-cols-1 gap-4 sm:grid-cols-2 md:max-w-full md:grid-cols-4 md:[&>:first-child>img]:rounded-tl-[100px] md:[&>:last-child>img]:rounded-br-[100px]">
        {images.map(img => (
          <li
            key={img}
            className="aspect-square w-full"
          >
            <Image
              alt="image placeholder"
              className="h-full w-full rounded-2xl object-cover"
              src={img}
            />
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8">
        {lists.map(list => (
          <MenuList
            key={list.listName}
            {...list}
          />
        ))}
      </div>
      <Link
        to="/menu"
        className="mx-auto block w-fit"
      >
        <ButtonFull className="px-4">See All Menu</ButtonFull>
      </Link>
    </section>
  );
};

const About = () => (
  <section>
    <HalfSection
      content={
        <EyebrowHeading
          className="mx-auto flex h-full max-w-[600px] flex-col justify-center space-y-4"
          eyebrow={{ content: "Our story" }}
          heading={{ content: "About Beer Boutique" }}
          description={
            <>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Welcome to Beer Boutique, your favorite pub serving the best
                draft and bottled beer.
              </p>
              <p className="text-gray-400">
                We strive to promote the culture of drinking beer as something
                beyond a football match. It is a drink with a long history and
                an immense depth of flavor, which is why we build our menu foods
                around their compatibility with the beers. Beer Boutique is a
                place to find the favorite beer flavor and learn more about the
                drink.
              </p>
              <Link
                to="/about"
                className="block w-fit"
              >
                <ButtonFull className="px-4">More About Us</ButtonFull>
              </Link>
            </>
          }
        />
      }
      img={{
        src: about,
        alt: "image placeholder",
        className: "object-[50%,35%]",
      }}
    />
  </section>
);

const Testimonials = () => {
  const testimonials: {
    img: string;
    name: string;
    text: string;
    date: string;
  }[] = [
    {
      img: samWhite,
      name: "Sam White",
      text: "This place is definitely worth visiting and making friends there. I don't know how you do it, but it is a strange combination of a posh place for beer snobs and a local pub at the same time. It's so weird that it works. Love it!",
      date: "May 28th, 2022",
    },
    {
      img: bernardRedhead,
      name: "Bernard Redhead",
      text: "I am definitely a beer person, and my girlfriend loves cider offered at Beer Boutique as well. We love to taste different craft beer varieties on Sundays here. Besides, the concerts there are amazing. Rock it on!",
      date: "March 15th, 2022",
    },
  ];

  return (
    <section className="bounded-section space-children">
      <EyebrowHeading
        className="text-center"
        eyebrow={{ content: "Testimonials" }}
        heading={{ content: "Our clients about us" }}
        description={{ content: "We're so happy to receive your feedback" }}
      />
      <ul className="flex flex-col gap-16 md:flex-row">
        {testimonials.map(({ img, name, text, date }) => (
          <li
            key={img}
            className="space-y-6 rounded-md bg-black px-6 py-8 text-center"
          >
            <Image
              alt="profile picture placeholder"
              src={img}
              className="mx-auto aspect-square h-[100px] rounded-full"
            />
            <h3 className="font-teko text-3xl uppercase">{name}</h3>
            <p
              className="text-gray-400 before:content-[attr(data-quote)] after:content-[attr(data-quote)]"
              data-quote='"'
            >
              {text}
            </p>
            <time className="block font-bold text-lightningYellow">{date}</time>
          </li>
        ))}
      </ul>
      <Image
        alt="image placeholder"
        src={group}
        className="min-h-[300px] rounded-md object-cover"
      />
    </section>
  );
};

const Blog = () => {
  const posts: {
    img: string;
    type: string;
    title: string;
    description: string;
  }[] = [
    {
      img: waiter,
      type: "Event",
      title: "Beer Tasting",
      description:
        "Beer Boutique has always been something bigger than just a pub. We often host different events and tastings with local and world-famous beer producers.",
    },
    {
      img: counter,
      type: "Beer Blog",
      title: "How to Find a Perfect Match?",
      description:
        "What goes first, the food or the beer? Here is a brief guide to choosing the combination of beer and snack, so that they complement each other's flavor. Spoiler: no chips in this list.",
    },
    {
      img: irish,
      type: "Event",
      title: "Irish Beer Festival",
      description:
        "Irish Beer festival is a small celebration of the Irish tradition in drinking culture. Our brewmasters will introduce an exclusive line of ales especially for our guests at the festival.",
    },
  ];

  return (
    <section className="bounded-section space-children">
      <EyebrowHeading
        className="text-center"
        eyebrow={{ content: "Latest posts" }}
        heading={{ content: "Blog & Events" }}
        description={{
          content: "Read interesting articles about beer culture and our news",
        }}
      />
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ img, type, title, description }) => (
          <li key={img}>
            <article className="flex h-full flex-col justify-between gap-4">
              <Image
                alt="image placeholder"
                src={img}
                className="rounded-md"
              />
              <p className="font-bold uppercase text-lightningYellow">{type}</p>
              <h3 className="font-teko text-3xl uppercase">{title}</h3>
              <p className="text-gray-400">{description}</p>
              <Link
                to="/blog"
                className="block w-fit"
              >
                <ButtonSkeleton className="border-white text-white hover:bg-white">
                  Read More
                </ButtonSkeleton>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Brands = () => {
  const images = [miller, hoegaarden, carlsberg, budweiser, heineken, corona];

  const Item: React.FC<string> = img => (
    <div className="flex h-[90px] items-center justify-center bg-neutral-500/20 px-8 py-4">
      <Image
        alt="brand logo"
        src={img}
        className="max-h-[40px] opacity-90"
      />
    </div>
  );

  return (
    <section className="bg-lightningYellow">
      <div className="bounded-section space-children py-4">
        <HorizontalList
          listName="brands"
          component={Item}
          items={images}
          numItems={{ lg: 5, md: 3, sm: 2 }}
          buttonClass={{
            both: "text-black hover:bg-amber-500",
          }}
          itemGap="1rem"
        />
      </div>
    </section>
  );
};

export default Home;
