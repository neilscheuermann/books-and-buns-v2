// Pulled in custom font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni

// NOTE: You must credit the author Copy this link on your web
// See License.txt in the noteworthy-light folder
// <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
// OR
//
// <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>

import { createGlobalStyle } from 'styled-components'

import twCenMediumRegularWoff from '../assets/fonts/tw-cen-medium-regular/tw-cen-medium-regular.woff'
import twCenMediumRegularWoff2 from '../assets/fonts/tw-cen-medium-regular/tw-cen-medium-regular.woff2'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Tw Cen Medium Regular';
    src: local('Tw Cen Medium Regular'), local('TwCenMediumRegular'),
    url(${twCenMediumRegularWoff2}) format('woff2'),
    url(${twCenMediumRegularWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  html {
    font-family: 'Tw Cen Medium Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black-gray);
  }

  p {
    font-size: 1.2rem;
  }

  h1, h2 {
    font-weight: 700;
  }
`

export default Typography
