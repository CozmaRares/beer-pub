import heroBG from "../assets/background.mp4";
import beer from "../assets/beer.png";
import hamburger from "../assets/hamburger.png";
import pretzels from "../assets/pretzels.png";

import beerBottle from "../assets/beer-bottle.svg";
import beerGlass from "../assets/beer-glass.svg";
import sandwich from "../assets/sandwich.svg";
import cocktail from "../assets/cocktail.svg";

import IPA from "../assets/IPA.png";
import lagerBeer from "../assets/lager-beer.png";
import bitter from "../assets/bitter.png";

import fries from "../assets/fries.png";
import beerMug from "../assets/beer-mug.png";
import hamburgerCut from "../assets/hamburger-cut.png";
import women from "../assets/women.png";

import about from "../assets/about.png";

import samWhite from "../assets/sam-white.png";
import bernardRedhead from "../assets/bernard-redhead.png";
import group from "../assets/group.webp";

import waiter from "../assets/waiter.png";
import counter from "../assets/counter.png";
import irish from "../assets/irish.png";

import miller from "../assets/miller.svg";
import hoegaarden from "../assets/hoegaarden.svg";
import carlsberg from "../assets/carlsberg.svg";
import budweiser from "../assets/budweiser.svg";
import heineken from "../assets/heineken.svg";
import corona from "../assets/corona.svg";
import EyebrowHeading from "../components/EyebrowHeading";
import ButtonSkeleton from "../components/ButtonSkeleton";
import HorizontalList from "../components/HorizontalList";

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <BeerSpecials />
      <BestOffers />
      <About />
      <Testimonials />
      <Blog />
      <Brands />
    </>
  );
};

const Hero = () => (
  <section className="relative isolate">
    <video
      tabIndex={-1}
      loop
      muted
      autoPlay
      className="pointer-events-none h-[100vmin] object-cover md:w-full"
    >
      <source
        src={heroBG}
        type="video/mp4"
      />
    </video>
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/50"></div>
    <EyebrowHeading
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:left-3/4"
      eyebrow={{ content: "Enjoy your beer!", className: "text-white" }}
      heading={
        <h1 className="font-teko text-2xl uppercase text-accent sm:text-5xl md:text-7xl lg:text-8xl">
          Beer Boutique
        </h1>
      }
      description={
        <div className="mt-1 space-y-3 text-xs font-bold sm:mt-4 sm:text-base md:text-lg lg:text-2xl">
          <p>
            <span className="md:block">
              The <span className="text-accent">best beer</span> comes
            </span>{" "}
            <span className="md:block">
              with the <span className="text-accent">best foods</span>!
            </span>
          </p>
          <a
            className="block w-full rounded-md bg-accent p-0.5 text-xs font-bold uppercase text-black transition-colors hover:bg-orange-500 sm:p-2 sm:text-base md:text-xl"
            href="/menu"
          >
            See Menu
          </a>
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
    <section className="bounded-section">
      <EyebrowHeading
        eyebrow={{ content: "Menu" }}
        heading={{ content: "Explore our menu" }}
        description={{ content: "See what we offer" }}
        className="text-center"
      />
      <ul className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row lg:flex-nowrap">
        {menuCards.map(({ img, title, description }) => (
          // TODO: fix scroll on small screens
          <li
            key={title}
            className="group relative isolate flex aspect-[4/5] w-full flex-col justify-center rounded-lg p-2 text-center sm:gap-3 md:w-2/5 md:px-8"
            style={{
              background: `url(${img})`,
              backgroundSize: "cover",
              resize: "both",
              overflowY: "auto",
            }}
          >
            <div className="absolute left-0 right-0 top-0 -z-[1] h-full bg-black opacity-60  transition-opacity lg:opacity-0 lg:group-hover:opacity-60"></div>
            <h3 className="z-[1] font-teko text-3xl uppercase md:text-4xl lg:text-5xl">
              {title}
            </h3>
            <p className="mx-auto transition-opacity toMd:w-4/5 md:w-full lg:opacity-0 lg:group-hover:opacity-100">
              {description}
            </p>
            <a
              href="/menu"
              className="font-teko text-lg font-bold uppercase text-accent transition-opacity md:text-xl lg:text-2xl lg:opacity-0 lg:group-hover:opacity-100"
            >
              See full menu
            </a>
          </li>
        ))}
      </ul>
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
              <a
                href="/menu"
                className="block w-fit"
              >
                <ButtonSkeleton>Learn more</ButtonSkeleton>
              </a>
            </>
          }
        />
        <ul className="grid items-center gap-y-8 text-center sm:grid-cols-[minmax(100px,1fr),4fr] sm:text-left md:grid-cols-[minmax(180px,1fr),4fr,minmax(180px,1fr),4fr]">
          {menuItems.map(({ img, title, description }) => (
            <li
              key={title}
              className="contents"
            >
              <img
                src={img}
                className="mx-auto w-1/2 sm:h-full sm:max-w-full"
                alt=""
              />
              <div>
                <h3 className="font-teko text-3xl uppercase sm:text-2xl md:text-4xl">
                  {title}
                </h3>
                <p className="opacity-70">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <EyebrowHeading
        className="space-y-4 bg-accent py-8 text-center text-black md:py-16"
        eyebrow={{ content: "-30% every Friday", className: "text-black" }}
        heading={{ content: "friday deal" }}
        description={
          <>
            <p>Get a 30% discount on the food menu every Friday!</p>

            <a
              href="/menu"
              className="mx-auto block w-fit rounded-md bg-black p-2 text-xs font-bold uppercase text-white transition-colors hover:bg-neutral-800 hover:text-accent sm:p-4 sm:text-base md:text-xl"
            >
              Learn more
            </a>
          </>
        }
      />
    </section>
  );
};

const BeerSpecials = () => {
  type mata = {
    img: string;
    title: string;
    description: string;
    abv: number;
    ibu: number;
    taste: string;
  };
  const items: mata[] = [
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

  const Item: React.FC<mata> = ({
    img,
    title,
    description,
    abv,
    ibu,
    taste,
  }) => (
    <div className="flex flex-col items-center justify-center gap-4 toMd:flex-row toMd:px-16 ">
      <div className="">
        <img
          src={img}
          className="max-h-[200px] toMd:max-h-[400px]"
          draggable="false"
        />
      </div>
      <div className="w-2/3 space-y-4 py-8">
        <h3 className="font-teko text-6xl font-bold capitalize">{title}</h3>
        <p className="text-lg opacity-60">{description}</p>
        <p>
          <span className="mt-4 block">ABV - {abv}%</span>
          <span className="block">IBU - {ibu}%</span>
          <span className="mt-4 block">{taste}</span>
        </p>
      </div>
    </div>
  );

  return (
    <section className="bounded-section">
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
        fc={Item}
        items={items}
        scrollDuration={500}
      />
    </section>
  );
};

const BestOffers = () => (
  <section>
    <div>
      <p>Top choice</p>
      <h2>our best offers</h2>
      <p>Enjoy your meal at Beer Boutique!</p>
    </div>
    <ul>
      <li>
        <img src={fries} />
      </li>
      <li>
        <img src={beerMug} />
      </li>
      <li>
        <img src={hamburgerCut} />
      </li>
      <li>
        <img src={women} />
      </li>
    </ul>
    <div>
      {/* TODO: generalize list*/}
      <ul>
        <li>
          <h3>Spicy Nachos</h3>
          <span>15</span>
          <p>
            Cheddar cheese, jalapenos, queso fresco, sour cream, salsa,
            guacamole, beer cheese sauce + 3 sauces on your choice
          </p>
        </li>
        <li>
          <h3>Fish & Chips</h3>
          <span>12</span>
          <p>
            Our iconic dish paired with any draft or bottled beer: ale battered
            cod, coleslaw, French fries, and tartar sauce
          </p>
        </li>
        <li>
          <h3>Chicken Wrap</h3>
          <span>18</span>
          <p>
            Grilled chicken, honey bacon, tomato, fresh cucumber, lettuce,
            avocado, village sauce, and a whole-wheat wrap
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Fried Calamary</h3>
          <span>12</span>
          <p>
            Another iconic snack paired with beer: fried calamari served with
            spicy tartar sauce and dill aioli
          </p>
        </li>
        <li>
          <h3>Beer Boutique Pizza</h3>
          <span>18</span>
          <p>
            Goat cheese, red onion, baby spinach, pepperoni, smoked sausages,
            ham, and spicy beer sauce
          </p>
        </li>
        <li>
          <h3>Classic Burger</h3>
          <span>14</span>
          <p>
            Beef, tomato, pickle, lettuce, cucumber, cheddar cheese, bacon,
            ketchup, and American mustard
          </p>
        </li>
      </ul>
    </div>
    <a href="">watch all menu</a>
  </section>
);

const About = () => (
  <section>
    <div>
      <p>Our story</p>
      <h2>about beer boutique</h2>
      <p>
        Welcome to Beer Boutique, your favorite pub serving the best draft and
        bottled beer.
      </p>
      <p>
        We strive to promote the culture of drinking beer as something beyond a
        football match. It is a drink with a long history and an immense depth
        of flavor, which is why we build our menu foods around their
        compatibility with the beers. Beer Boutique is a place to find the
        favorite beer flavor and learn more about the drink.
      </p>
      <a href="">more about us</a>
    </div>
    <div>
      <img src={about} />
    </div>
  </section>
);

const Testimonials = () => (
  <section>
    <div>
      <p>Testimonials</p>
      <h2>Our clients about us</h2>
      <p>We're so happy to receive your feedback!</p>
    </div>
    <ul>
      <li>
        <img src={samWhite} />
        <h3>sam white</h3>
        <p>
          This place is definitely worth visiting and making friends there. I
          don't know how you do it, but it is a strange combination of a posh
          place for beer snobs and a local pub at the same time. It's so weird
          that it works. Love it!
        </p>
        <span>May 28, 2022</span>
      </li>
      <li>
        <img src={bernardRedhead} />
        <h3>Bernard Redhead</h3>
        <p>
          I am definitely a beer person, and my girlfriend loves cider offered
          at Beer Boutique as well. We love to taste different craft beer
          varieties on Sundays here. Besides, the concerts there are amazing.
          Rock it on!
        </p>
        <span>March 15, 2022</span>
      </li>
    </ul>
    <div>
      <img src={group} />
    </div>
  </section>
);

const Blog = () => (
  <section>
    <div>
      <p>Latest posts</p>
      <h2>Blog & Events</h2>
      <p>Read interesting articles about beer culture and our news.</p>
    </div>
    <ul>
      <li>
        <img src={waiter} />
        <p>EVENT</p>
        <h3>Beer Tasting</h3>
        <p>
          Beer Boutique has always been something bigger than just a pub. We
          often host different events and tastings with local and world-famous
          beer producers.
        </p>
        <a href="">read more</a>
      </li>
      <li>
        <img src={counter} />
        <p>BEER BLOG</p>
        <h3>How to Find a Perfect Match?</h3>
        <p>
          What goes first, the food or the beer? Here is a brief guide to
          choosing the combination of beer and snack, so that they complement
          each other's flavor. Spoiler: no chips in this list.
        </p>
        <a href="">read more</a>
      </li>
      <li>
        <img src={irish} />
        <p>EVENT</p>
        <h3>Irish Beer Festival</h3>
        <p>
          Irish Beer festival is a small celebration of the Irish tradition in
          drinking culture. Our brewmasters will introduce an exclusive line of
          ales especially for our guests at the festival.
        </p>
        <a href=""></a>
      </li>
    </ul>
  </section>
);

const Brands = () => (
  <section>
    <ul>
      <li>
        <img src={miller} />
      </li>
      <li>
        <img src={hoegaarden} />
      </li>
      <li>
        <img src={carlsberg} />
      </li>
      <li>
        <img src={budweiser} />
      </li>
      <li>
        <img src={heineken} />
      </li>
      <li>
        <img src={corona} />
      </li>
    </ul>
  </section>
);

export default Home;
