import {
  Nav,
  Navcontainer,
  Navmenu,
  Navlogo,
  Navitems,
  Navlink,
  Navbtn,
  Navbtnlink,
} from "./navbar.styles";
const Navbar = () => {
  return (
    <Nav>
      <Navcontainer>
        <Navlogo to="/">Muzik</Navlogo>
        <Navmenu>
          <Navitems>
            <Navlink>Speakers</Navlink>
          </Navitems>
          <Navitems>
            <Navlink>Schedule</Navlink>
          </Navitems>
          <Navitems>
            <Navlink>Contact Us</Navlink>
          </Navitems>
        </Navmenu>
        <Navbtn>
          <Navbtnlink to="/">Login</Navbtnlink>
        </Navbtn>
      </Navcontainer>
    </Nav>
  );
};

export default Navbar;
