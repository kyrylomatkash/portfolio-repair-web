import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'SF Pro Display', 'Helvetica Neue', 'Arial', sans-serif;
    color: #333;
    background-color: #f8f8f8;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #0056b3;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  ul, ol {
    margin: 1rem 0;
    padding: 0 0 0 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

export default GlobalStyles;
