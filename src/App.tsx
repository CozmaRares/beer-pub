import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Social from "./components/Social";
import SliderLink from "./components/SliderLink";
import { useState } from "react";
import ButtonSkeleton from "./components/ButtonSkeleton";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

const App = () => (
  <div className="isolate bg-neutral-900 font-openSans text-white">
    <NavBar />
    <main className="space-y-8 py-8 sm:space-y-16">
      <RouterProvider router={router} />
    </main>
    <Footer />
  </div>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bounded-section relative z-[1] flex flex-row items-center justify-between pt-8 text-base lg:text-lg">
      <a
        className="w-full sm:w-auto sm:max-w-[40%]"
        href="/"
      >
        <img
          src={logo}
          width="200px"
          height="auto"
          className="max-w-full"
          alt=""
        />
      </a>
      <button
        className={`hamburger-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <p>{isOpen ? "Close" : "Open"} Menu</p>
        <div aria-hidden>
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </div>
      </button>
      <nav className={`hamburger-menu ${isOpen ? "open" : ""}`}>
        <ul className="flex flex-col font-bold md:flex-row md:gap-8">
          <li>
            <SliderLink
              text="About Us"
              link="/about"
            />
          </li>
          <li>
            <SliderLink
              text="Menu"
              link="/menu"
            />
          </li>
          <li>
            <SliderLink
              text="Blog"
              link="/blog"
            />
          </li>
          <li>
            <SliderLink
              text="Contact"
              link="/contact"
            />
          </li>
        </ul>
        <ul className="mx-auto flex flex-row gap-3 md:m-0 md:p-0">
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

const Footer = () => {
  const contacts: { icon: React.ReactNode; text: string }[] = [
    { icon: <Phone />, text: "+1 (234) 567 89 00" },
    { icon: <Mail />, text: "beerboutique@fake.email.com" },
    { icon: <Location />, text: "Somewhere in New York" },
    { icon: <Clock />, text: "4 PM — 2 AM" },
  ];

  return (
    <footer className="bounded-section flex grid-cols-[4fr,3fr,4fr,5fr] flex-col items-center gap-10 pb-8 text-center text-white/70 lg:grid lg:text-left [&>*]:space-y-4 [&>*]:lg:h-full">
      <div className="flex w-fit flex-col items-center lg:items-start lg:justify-between">
        <a href="/">
          <img
            src={logo}
            alt=""
            width="200px"
            height="auto"
          />
        </a>
        <p className="w-2/3 md:w-1/2 lg:w-4/5">
          Welcome to your favorite pub with draft and bottled beer from the best
          local and world-famous producers.
        </p>
        <ul className="flex flex-row gap-3">
          <li>
            <Social
              icon={<X />}
              name="X"
              link="#"
            />
          </li>
          <li>
            <Social
              icon={<TikTok />}
              name="TikTok"
              link="#"
            />
          </li>
          <li>
            <Social
              icon={<YouTube />}
              name="YouTube"
              link="#"
            />
          </li>
          <li>
            <Social
              icon={<Waze />}
              name="Waze"
              link="#"
            />
          </li>
        </ul>
      </div>
      <div>
        <span className="mb-4 font-teko text-4xl text-white">Navigation</span>
        <nav>
          <ul className="space-y-3 font-bold text-gray-400">
            <li>
              <SliderLink
                text="About Us"
                link="/about"
              />
            </li>
            <li>
              <SliderLink
                text="Menu"
                link="/menu"
              />
            </li>
            <li>
              <SliderLink
                text="Blog"
                link="/blog"
              />
            </li>
            <li>
              <SliderLink
                text="Contact"
                link="/contact"
              />
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="flex-col justify-between lg:flex"
        style={{ overflowWrap: "anywhere" }}
      >
        <span className="mb-4 font-teko text-4xl text-white">Contacts</span>
        <ul className="contents space-y-3 text-gray-400">
          {contacts.map(({ icon, text }, idx) => (
            <li
              key={idx}
              className="flex flex-row items-center justify-center gap-3 lg:justify-start"
            >
              <span className="text-accent">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-2/3 lg:w-full">
        <span className="mb-4 font-teko text-4xl text-white">Newsletter</span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className="mt-auto block w-full rounded-md bg-zinc-800 p-3 text-center"
        />
        <label
          htmlFor="email"
          className="visually-hidden"
        >
          Email Address
        </label>
        <button className="w-full ">
          <ButtonSkeleton>subscribe</ButtonSkeleton>
        </button>
      </div>
    </footer>
  );
};

export default App;
