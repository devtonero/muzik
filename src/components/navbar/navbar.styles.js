import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalstyles";

export const Nav = styled.nav`
  background: transparent;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
  margin-top: 20px;
  margin-left: 150px;
  margin-right: 150px;
`;

export const Navcontainer = styled(Container)`
  display: flex;
  //justify-content: space-between;
  justify-content: space-around;

  height: 80px;

  ${Container}
`;
export const Navlogo = styled(Link)`
  width: 125px;
  left: 373px;
  top: 45px;
  border-radius: 0px;
  display: flex;
  align-items: center;

  cursor: pointer;
  text-decoration: none;
`;
export const Navmenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;
export const Navitems = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  text-transform: uppercase;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const Navlink = styled(Link)`
  display: flex;
  color: #fff;
  height: 100%;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 1rem;
`;
export const Navibtn = styled.div`
  margin-left: 50px;
`;
export const Navbtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;
export const Navbtnlink = styled.button`
  height: 56px;
  width: 175px;
  left: 501px;
  top: 0px;
  border-radius: 8px;
  padding: 18px, 34px, 18px, 34px;
`;
