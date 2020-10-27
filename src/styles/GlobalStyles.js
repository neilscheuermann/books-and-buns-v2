import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
  }

  strong {
    font-weight: 900;
  }

  ul {list-style: none}

  li::before {
    content: "•"; 
    display: inline-block; 
    width: 1em;
  }

  .big-ass-border {
    border: solid 10px yellow;
  }

  .border{
    border-radius: 5px;
    border: solid 1px rgb(184, 191, 204);
  }

  .box-shadow{
    box-shadow: 0 0.5em 1em -0.125em rgba(43, 37, 35, 0.1), 0 0px 0 1px rgba(43, 37, 35, 0.0);
  }

  .text-white{
    color: white;
  }

  .make-full-width{
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .jc-center {
    display: flex;
    justify-content: center;
  }

  /* For quick deving purposes */
  .dev-red-border {
    border: solid red 2px;
  }
  .dev-orange-border {
    border: solid orange 2px;
  }
  .dev-yellow-border {
    border: solid yellow 2px;
  }
  .dev-green-border {
    border: solid green 2px;
  }
  .dev-blue-border {
    border: solid blue 2px;
  }

  /* Create custom css shape here http://androidcss.com/css-shape-icon-generator/# */
  .icon-circle{
    display:inline-block!important;
    position:relative;
    width:12px;
    height:12px;
    background:white;
    border-radius:100%;
    border:calc(16px/10) solid rgb(184, 191, 204);
    box-sizing:content-box
  }

  /* For section divider in index-page */
  .divider
  {
    position: relative;
    margin: 90px 0;
    height: 1px;
  }

  .div-transparent:before
  {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, rgb(48,49,51), transparent);
  }

  .div-dot:after
  {
    content: "";
    position: absolute;
    z-index: 1;
    top: -9px;
    left: calc(50% - 9px);
    width: 18px;
    height: 18px;
    background-color: goldenrod;
    border: 1px solid rgb(48,49,51);
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px white,
            0 0 0 4px white;
  }
  /* ================================= */
`

export default GlobalStyles
