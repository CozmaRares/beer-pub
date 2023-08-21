import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Error from "./routes/Error";

import Facebook from "./svg/logos/Facebook";
import GitHub from "./svg/logos/GitHub";
import Instagram from "./svg/logos/Ingtagram";
import Logo from "./svg/logos/Logo";
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
  <div>
    <NavBar />
    <main>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </div>
);

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

const Footer = () => (
  <footer>
    <div>
      <span>
        <Logo />
      </span>
      <p>
        Welcome to your favorite pub with draft and bottled beer from the best
        local and world-famous producers.
      </p>
      <ul>
        <li>
          <X />
        </li>
        <li>
          <TikTok />
        </li>
        <li>
          <YouTube />
        </li>
        <li>
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
