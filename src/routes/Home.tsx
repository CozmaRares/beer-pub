import Facebook from "../svg/logos/Facebook";
import GitHub from "../svg/logos/GitHub";
import Instagram from "../svg/logos/Ingtagram";
import Logo from "../svg/logos/Logo";

import heroBG from "../assets/background.mp4";
import beer from "../assets/beer.png";
import hamburger from "../assets/hamburger.png";
import pretzels from "../assets/pretzels.png";

import BeerBottle from "../svg/BeerBottle";
import BeerGlass from "../svg/BeerGlass";
import Sandwich from "../svg/Sandwich";
import Cocktail from "../svg/Cocktail";

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

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Menu />
        <BeerSpecials />
        <BestOffers />
        <About />
        <Testimonials />
        <Blog />
      </main>
    </div>
  );
};

const NavBar = () => (
  <aside>
    <Logo />
    <div>
      <ul>
        <li>about us</li>
        <li>menu</li>
        <li>blog</li>
        <li>contacts</li>
      </ul>
      <ul>
        <li>
          <GitHub />
        </li>
        <li>
          <Facebook />
        </li>
        <li>
          <Instagram />
        </li>
      </ul>
    </div>
  </aside>
);

const Hero = () => (
  <section>
    <video
      loop
      muted
      autoPlay
    >
      <source
        src={heroBG}
        type="video/mp4"
      />
    </video>
    <div></div>
    <div>
      {/* TODO: component */}
      <p>Enjoy your beer!</p>
      <h1>beer boutique</h1>
      <p>The best beer comes with the best foods!</p>
      <a>reserve a table</a>
    </div>
  </section>
);

const Menu = () => (
  <section>
    <div>
      <p>menu</p>
      <h2>explore our menu</h2>
      <p>See what we have to offer</p>
    </div>
    <ul>
      <li>
        <img
          src={beer}
          alt="A glass of beer"
        />
        <div>
          <h3>beer menu</h3>
          <div>
            <p>
              We are proud to introduce our collection of crafted beers. Try our
              special recipes of beers and ciders separately or in a beer
              flight. If you’re not much into beer, order some wine, a spirit,
              or a cocktail. We also have a broad selection of soft drinks.
            </p>
            <a href="">watch full menu</a>
          </div>
        </div>
      </li>
      <li>
        <img
          src={hamburger}
          alt="A hamburger"
        />
        <div>
          <h3>food menu</h3>
          <div>
            <p>
              We adjust our menu to any tastes and needs. Apart from an
              impressive grill menu, we have vegetarian and gluten-free options.
              Try a single meal or share a plate with the company. Also, ask a
              waiter about the best gastronomic match for your drink.
            </p>
            <a href="">watch full menu</a>
          </div>
        </div>
      </li>
      <li>
        <img
          src={pretzels}
          alt="A bucker full of pretzels"
        />
        <div>
          <h3>happy hour</h3>
          <div>
            <p>
              This is a special offer available from 3 to 5 p.m. Check the Happy
              Hour menu online or ask a waiter about the special offer, so you
              can save your money and enjoy a delicious meal. Hours may change
              from time to time, so make sure to subscribe.
            </p>
            <a href="">watch full menu</a>
          </div>
        </div>
      </li>
    </ul>
    <div>
      <div>
        <p>What we offer</p>
        <h2>cold beer and tasty snacks</h2>
        <p>We offer a simple and tasty menu for true beer connoisseurs. </p>
        <a href="">learn more</a>
      </div>
      <ul>
        <li>
          <BeerBottle />
          <h3>bottled beer</h3>
          <p>
            We sell craft bottled beer from the best local and foreign
            producers.
          </p>
        </li>
        <li>
          <Sandwich />
          <h3>snacks</h3>
          <p>
            Explore the fresh dishes in our menu that will complement your
            drink.
          </p>
        </li>
        <li>
          <BeerGlass />
          <h3>beer on tap</h3>
          <p>
            Our waiters will gladly tell you about the draft craft beer
            available today.
          </p>
        </li>
        <li>
          <Cocktail />
          <h3>cocktails</h3>
          <p>
            Enjoy your favorite cocktails, from classic long drinks to exotic
            mixes.
          </p>
        </li>
      </ul>
    </div>
    <div>
      <p>-30% every Friday</p>
      <h2>friday deal</h2>
      <p>Get a 30% discount on the food menu every Friday!</p>
      <a href="">learn more</a>
    </div>
  </section>
);

const BeerSpecials = () => (
  <section>
    <div>
      <p>Bottled beer</p>
      <h2>bottled beer specials</h2>
      <p>
        Appreciate the taste of craft bottled beer from the best producers.{" "}
      </p>
    </div>
    {/* TODO: horizontal infinite scroll*/}
    <ul>
      <li>
        <div>
          <img
            src={IPA}
            alt="Beer bottle."
          />
        </div>
        <div>
          <h3>ipa</h3>
          <p>
            Ideal for those who prefer strong and bitter beer with rich aroma.
          </p>
          <p>
            <span>ABV - 8%</span>
            <span>IBU - 80%</span>
            <span>Very bitter, hoppy, with grainy notes.</span>
          </p>
        </div>
      </li>
      <li>
        <div>
          <img
            src={lagerBeer}
            alt="Beer bottle."
          />
        </div>
        <div>
          <h3>lager beer</h3>
          <p>
            This classic bottled beer features a wheat aroma and mild taste.
          </p>
          <p>
            <span>ABV - 4.2%</span>
            <span>IBU - 12%</span>
            <span>Light, mild, with very little bitterness.</span>
          </p>
        </div>
      </li>
      <li>
        <div>
          <img
            src={bitter}
            alt="Beer bottle."
          />
        </div>
        <div>
          <h3>bitter</h3>
          <p>
            "England's favorite beer" is a great choice for those who like dark
            varieties of beer.
          </p>
          <p>
            <span>ABV - 4.6%</span>
            <span>IBU - 40%</span>
            <span>Bitter, malty, with a slight aftertaste of toasts.</span>
          </p>
        </div>
      </li>
    </ul>
  </section>
);

const BestOffers = () => (
  <section>
    <div>
      <p>Top choice</p>
      <h2>our best offers</h2>
      <p>Enjoy your meal at Beer Boutique!</p>
    </div>
    <ul>
      <li>
        <img
          src={fries}
          alt=""
        />
      </li>
      <li>
        <img
          src={beerMug}
          alt=""
        />
      </li>
      <li>
        <img
          src={hamburgerCut}
          alt=""
        />
      </li>
      <li>
        <img
          src={women}
          alt=""
        />
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
      <img
        src={about}
        alt=""
      />
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
        <img
          src={samWhite}
          alt=""
        />
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
        <img
          src={bernardRedhead}
          alt=""
        />
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
      <img
        src={group}
        alt=""
      />
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
        <img
          src={waiter}
          alt=""
        />
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
        <img
          src={counter}
          alt=""
        />
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
        <img
          src={irish}
          alt=""
        />
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

export default Home;
