import logo from "../../images/Logo.png";

import {
  Nav,
  Navcontainer,
  Navmenu,
  Navlogo,
  Navitems,
  Navlink,
  Navbtn,
  Navbtnlink,
  Navibtn,
} from "./navbar.styles";
const Navbar = () => {
  return (
    <Nav>
      <Navcontainer>
        <Navlogo to="/">
          <img src={logo} alt="logo" />
        </Navlogo>
        <Navmenu>
          <Navitems>
            <Navlink to="/">Speakers</Navlink>
          </Navitems>
          <Navitems>
            <Navlink to="/">Schedule</Navlink>
          </Navitems>
          <Navitems>
            <Navlink to="/">Contact Us</Navlink>
          </Navitems>
          <Navibtn>
            <Navbtn>
              <Navbtnlink to="/">Get Started</Navbtnlink>
            </Navbtn>
          </Navibtn>
        </Navmenu>
      </Navcontainer>
    </Nav>
  );
};

export default Navbar;
