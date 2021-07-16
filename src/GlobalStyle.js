import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import background from "./background_pxhere_com.jpg";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    font-family: 'Ubuntu', sans-serif;
    color: ${({ theme }) => theme.colors.tenn};
    background-color: ${({ theme }) => theme.colors.gallery};
    background-image: url("${background}");
    background-size: cover;
    background-position: center; 
    display: grid;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  `;
