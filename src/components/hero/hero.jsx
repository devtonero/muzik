import Navbar from "../navbar/navbar";

import {
  Herocontainer,
  Imagecontent,
  Imageitems,
  Imageh1,
  Imagep,
  Imagebc,
  Imagebt,
  Imagebtn,
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
            <Imagebtn>Watch Video</Imagebtn>
          </Imagebc>
        </Imageitems>
      </Imagecontent>
    </Herocontainer>
  );
};

export default Hero;
