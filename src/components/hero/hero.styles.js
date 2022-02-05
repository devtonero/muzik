import styled from "styled-components";
import img from "../../images/Img.png";

export const Herocontainer = styled.div`
  height: auto;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
  background-image: url(${img});
  background-size: auto;
  background-repeat: no-repeat;
`;
export const Imagecontent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
`;
export const Imageitems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 600px;
  padding: 0 2rem;
  color: #ffffff;

  // @media screen and (max-width: 650px) {
  //  width: 100%;
  //}
`;
export const Imageh1 = styled.h1`
  width: 750px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 62px;
  line-height: 60px;
  text-align: center;
  text-transform: capitalize;
  padding-bottom: 30px;
`;
export const Imagep = styled.p`
  width: 750px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 30px;
`;
export const Imagebc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0px 34px;
`;
export const Imagebt = styled.button`
  height: 50px;
  width: 154px;
  border-radius: 8px;
  padding: 18px, 34px, 18px, 34px;
  font-size: 18px;
  text-decoration: none;
  background: #fc5252;
  cursor: pointer;
  margin: 0px 40px;
`;
export const Img = styled.img`
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  margin-right: 10px;
`;
export const Imagebtn = styled.div`
  width: 198px;
  height: 28px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
export const ImgT = styled.span`
  height: 28px;
  width: 148px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
`;
export const Imagetime = styled.img`
  height: 100px;
  width: 1000px;
  opacity: 0.5;
  margin-top: 50px;
`;
