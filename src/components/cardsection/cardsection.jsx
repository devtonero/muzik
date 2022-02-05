import {
  Cardcontainer,
  Cardcontent,
  Cardheading,
  Cardicon,
  Cardtext,
  Cardh2,
  Cardc,
} from "./cardsection.styles";

const CardSection = () => {
  return (
    <Cardcontainer>
      <Cardheading>Explore By category</Cardheading>
      <Cardc>
        <Cardcontent>
          <Cardicon />
          <Cardtext>
            <Cardh2>Instrument</Cardh2>
            Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate
            vitae
          </Cardtext>
        </Cardcontent>

        <Cardcontent>
          <Cardicon />
          <Cardtext>
            <Cardh2>Instrument</Cardh2>
            Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate
            vitae
          </Cardtext>
        </Cardcontent>

        <Cardcontent>
          <Cardicon />
          <Cardtext>
            <Cardh2>Instrument</Cardh2>
            Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate
            vitae
          </Cardtext>
        </Cardcontent>
      </Cardc>
    </Cardcontainer>
  );
};

export default CardSection;
