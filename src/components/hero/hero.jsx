import Navbar from "../navbar/navbar";
import Vector from "../../images/Vector.png";
import timeming from "../../images/timeming.png";

import {
  Herocontainer,
  Imagecontent,
  Imageitems,
  Imageh1,
  Imagep,
  Imagebc,
  Imagebt,
  Imagebtn,
  Img,
  ImgT,
  Imagetime,
} from "./hero.styles";

const Hero = () => {
  return (
    <Herocontainer>
      <Navbar />
      <Imagecontent>
        <Imageitems>
          <Imageh1>The Best experience of music in 2021 </Imageh1>
          <Imagep>
            The year was without concerts and shared experiences around music,
            which made forming a connection with new artists hard, but not
            impossible.
          </Imagep>
          <Imagebc>
            <Imagebt>Get Started</Imagebt>
            <Imagebtn>
              <Img src={Vector} alt="vector" />
              <ImgT>Watch Video</ImgT>
            </Imagebtn>
          </Imagebc>
          <Imagetime src={timeming} alt="right" />
        </Imageitems>
      </Imagecontent>
    </Herocontainer>
  );
};

export default Hero;
