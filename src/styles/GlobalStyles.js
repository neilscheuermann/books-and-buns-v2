import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000;
    --gray-black: #333;
    --white: #fff;

    // TODO>>>: make this a color palate color instead?
    --border-color: rgb(184, 191, 204);

    // Our color palate 
    // https://coolors.co/dae4f5-fbf0ee-e0a690-d78d70-ce7450
    --blue: #DAE4F5;
    --creme: #FBF0EE;
    --orange-light: #E0A690;
    --orange: #D78D70;
    --orange-dark: #CE7450;

    --box-shadow: 0 0.5em 1em -0.125em rgba(43, 37, 35, 0.1), 0 0px 0 1px rgba(43, 37, 35, 0.0);

    // dimensions
    --tablet-max-width: 768px;
    --tablet-max-width-plus-1: 769px;
    --header-height-mobile: 78px;
    --footer-height: 64px;
  }

  body {
    background-color: white;
  }

  button {

  }

  // List styling
  ul {list-style: none}

  li::before {
    content: "•"; 
    display: inline-block; 
    width: 1em;
  }
`

export default GlobalStyles
