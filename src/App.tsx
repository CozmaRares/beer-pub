import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Error from "./routes/Error";

import Facebook from "./svg/logos/Facebook";
import GitHub from "./svg/logos/GitHub";
import Instagram from "./svg/logos/Ingtagram";
import logo from "./assets/logo.svg";
import X from "./svg/logos/X";
import TikTok from "./svg/logos/TikTok";
import YouTube from "./svg/logos/YouTube";
import Waze from "./svg/logos/Waze";
import Phone from "./svg/Phone";
import Mail from "./svg/Mail";
import Location from "./svg/Location";
import Clock from "./svg/Clock";
import Social from "./components/Social";
import SliderLink from "./components/SliderLink";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

const App = () => (
  <div className="bg-zinc-900 text-white">
    <NavBar />
    <main>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </div>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bounded-section relative mx-auto flex max-w-full flex-row items-center justify-between py-4 text-base lg:text-lg">
      <div className="w-fit md:max-w-[15%]">
        <img
          src={logo}
          width="200px"
          height="auto"
          className="max-w-full text-white"
          alt=""
        />
      </div>
      <button
        className={`hamburger-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <p>{isOpen ? "Close" : "Open"} Menu</p>
        <div aria-hidden="true">
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </div>
      </button>
      <nav className={`hamburger-menu ${isOpen ? "open" : ""}`}>
        <ul className="flex flex-col font-openSans font-bold capitalize md:flex-row md:gap-8">
          <li>
            <SliderLink
              text="about us"
              link="/about"
            />
          </li>
          <li>
            <SliderLink
              text="menu"
              link="/menu"
            />
          </li>
          <li>
            <SliderLink
              text="blog"
              link="/blog"
            />
          </li>
          <li>
            <SliderLink
              text="contacts"
              link="/contacts"
            />
          </li>
        </ul>
        <ul className="mx-auto flex flex-row gap-3 text-mainAccent md:m-0 md:p-0">
          <li>
            <Social
              icon={<GitHub />}
              name="GitHub"
              link="#"
            />
          </li>
          <li>
            <Social
              icon={<Facebook />}
              name="Facebook"
              link="#"
            />
          </li>
          <li>
            <Social
              icon={<Instagram />}
              name="Instagram"
              link="#"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer>
    <div>
      <img
        src={logo}
        alt=""
      />
      <p>
        Welcome to your favorite pub with draft and bottled beer from the best
        local and world-famous producers.
      </p>
      <ul>
        <li>
          <div className="visually-hidden">X</div>
          <X />
        </li>
        <li>
          <div className="visually-hidden">TikTok</div>
          <TikTok />
        </li>
        <li>
          <div className="visually-hidden">YouTube</div>
          <YouTube />
        </li>
        <li>
          <div className="visually-hidden">Waze</div>
          <Waze />
        </li>
      </ul>
    </div>
    <div>
      <span>navigation</span>
      <ul>
        <li>About us</li>
        <li>Menu</li>
        <li>Blog</li>
        <li>Contacts</li>
      </ul>
    </div>
    <div>
      <span>contacts</span>
      <ul>
        <li>
          <Phone />
          <span>+1 (234) 567 89 00</span>
        </li>
        <li>
          <Mail />
          <span>beerboutique@fake.email.com</span>
        </li>
        <li>
          <Location />
          <span>Somewhere in New York</span>
        </li>
        <li>
          <Clock />
          <span>4 PM — 02 AM</span>
        </li>
      </ul>
    </div>
    <div>
      <span>newsletter</span>
      <div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="email"></label>
        </div>
        <button>subscribe</button>
      </div>
    </div>
  </footer>
);

export default App;
