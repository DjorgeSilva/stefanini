import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        text-decoration: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: -moz-none;
        -o-user-select: none;
         user-select: none;
    } 
    body{
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        background: #0B1641;
        font-family: 'Roboto', sans-serif;
    }
    ul{
        list-style: none;
    }
    
    p {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -o-user-select: text;
        user-select: text;
    }
`;