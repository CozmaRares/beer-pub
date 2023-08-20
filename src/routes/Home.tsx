import Facebook from "../svg/Facebook";
import GitHub from "../svg/GitHub";
import Instagram from "../svg/Ingtagram";
import Logo from "../svg/Logo";

import heroBG from "../assets/background.mp4";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
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
      <button>reserve a table</button>
    </div>
  </section>
);

export default App;
