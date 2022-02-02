import styled from "styled-components";
import img from "../../images/Img.png";

export const Herocontainer = styled.div`
  border-radius: 0px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  //margin-top: -30px;
  position: absolute;
  height: auto;
  background-size: cover;
  //background-position: center;
  overflow: hidden;
  background-image: url(${img}); 

  background: linear-gradient(180deg, #381ddb 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)));
`;
export const Imagecontent = styled.div`
  display: flex;
  height: 370px;
  max-height: 100%;
  width: 100%;
  // background-color: purple;
  justify-content: center;
`;
export const Imageitems = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 40px;
  justify-content: center;
  align-content: center;
  align-items: center;

  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 600px;
  color: #ffffff;

  line-height: 1;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const Imageh1 = styled.h1`
  //width: 600px;
  height: 50px;
  left: 0px;
  top: 0px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 50px;
  text-align: center;
  text-transform: capitalize;

  /* Inside auto layout */
  flex: none;
  order: 0;
  //align-self: stretch;
  flex-grow: 0;
  margin: 30px 0px;
  //background-color: black;
`;
export const Imagep = styled.p`
  //width: 600px;
  padding-top: 20px;
  height: 70px;
  left: 0px;
  //top: 216px;
  //padding-bottom: 30px;
  /* /Subtitle/Regular */
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;

  /* or 158% */
  text-align: center;

  /* General / Light */
  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  //order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 30px 0px;
  //background-color: blue;
`;
export const Imagebc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 400px;
  //height: 56px;

  padding: 0px 34px;
  //background-color: green;
  margin-top: -20px;
`;
export const Imagebt = styled.button`
  height: 50px;
  width: 154px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  padding: 18px, 34px, 18px, 34px;
  font-size: 18px;

  /* General / Red */
  background: #fc5252;

  margin: 0px 40px;
`;
export const Imagebtn = styled.div``;
