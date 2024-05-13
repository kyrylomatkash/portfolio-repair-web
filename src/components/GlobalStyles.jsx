import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'SF Pro Display', 'Helvetica Neue', 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8f8f8;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'SF Pro Display', 'Helvetica Neue', 'Arial', sans-serif;
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export default GlobalStyles;
