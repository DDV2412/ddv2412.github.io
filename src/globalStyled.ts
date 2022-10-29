import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    font-family: "Montserrat", sans-serif;
    margin: 0;
    box-sizing: border-box;
}
    body{
        padding: 0;
        min-height: 100vh;
        background-color: #0f172a;
        color: #f8fafc;
        font-family: "Montserrat", sans-serif;
    }

    #root{
        position: relative;
        min-height: 100vh;
        transition: all 500ms ease-in-out;
    }


`;

export default GlobalStyle;
