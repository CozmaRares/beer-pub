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

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Menu />
        <BeerSpecials />
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

export default App;
