import Facebook from "../svg/Facebook";
import GitHub from "../svg/GitHub";
import Instagram from "../svg/Ingtagram";
import Logo from "../svg/Logo";

const App = () => {
  return (
    <div>
      <NavBar />
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

export default App;
