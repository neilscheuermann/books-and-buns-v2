import { createGlobalStyle } from 'styled-components'

// Currently only using one break point globally.
// WEB
// @media only screen and (min-width: ${WEB_MIN_WIDTH})
// MOBILE OR TABLET
// @media (max-width: ${MOBILE_MAX_WIDTH})
export const MOBILE_MAX_WIDTH = '768px'
export const WEB_MIN_WIDTH = '769px'

export const ORANGE = 'D78D70'

const GlobalStyles = createGlobalStyle`
  :root {
    // colors
    //
    --black: #000;
    --black-gray: #333;
    --white: #fff;
    --link-background-hover: 	#ededed;

    // TODO>>>: make these a color palate color instead?
    --border-color: rgb(184, 191, 204);
    --background-color-light-blue: rgb(218, 228, 245);

    // Our color palate, https://coolors.co/dae4f5-fbf0ee-e0a690-d78d70-ce7450
    --blue: #DAE4F5;
    --creme: #FBF0EE;
    --orange-light: #E0A690;
    --orange: #${ORANGE};
    --orange-dark: #CE7450;

    // dimensions
    //
    --footer-height: 64px;
    --header-height: 96px;
    --header-height-mobile: 78px;
 
    // misc
    //
    --box-shadow: 2px 2px 10px 0px #1f1a26;

 }

  body {
    background-color: white;
  }

  a {
    color: inherit;
  }

  hr {
    border-bottom: 1px solid black;
    width: 100%;
    margin: 16px 0;
  }

  button {
    border: none;
    border-radius: 5px;
    color: white;
    background: var(--orange);
    font-size: 1.5rem;
    white-space: nowrap;
    text-decoration: none;
    padding: 8px 16px;

    &:hover {
      color: white;
      background-color: var(--orange-dark);
      cursor: pointer;
    }
  }

  // This should match whatever is in the button{} styles
  .button {
    border: none;
    border-radius: 5px;
    color: white;
    background: var(--orange);
    font-size: 1.5rem;
    white-space: nowrap;
    text-decoration: none;
    padding: 8px 16px;

    &:hover {
      color: white;
      background-color: var(--orange-dark);
      cursor: pointer;
    }
  }

  // List styling
  ul {
    list-style: none;
    margin: 8px 0;
  }

  li {
    margin: 8px 0;
    
    &::before {
    
    content: "•"; 
    display: inline-block; 
    width: 1em;
  }
  }

  // Classes
  // 

  .apply-max-width {
    max-width: 1480px;
    margin-left: auto;
    margin-right: auto;
  }

  .apply-max-width-blog {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .apply-min-height {
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
  }

  .apply-mobile-padding {
    @media (max-width: ${MOBILE_MAX_WIDTH})
      padding-left: 16px;
      padding-right: 16px;
    border: solid red 3px;
  }

  .bg-orange-light {
    background-color: var(--orange-light);
  }

  .center-text {
    text-align: center;
  }

  .jc-center {
    display: flex;
    justify-content: center;
  }
`

export default GlobalStyles
