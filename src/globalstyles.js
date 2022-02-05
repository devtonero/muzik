import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
       
    }

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
