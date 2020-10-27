// Pulled in custom Noteworthy Light font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni

// NOTE: You must credit the author Copy this link on your web
// See License.txt in the noteworthy-light folder
// <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
// OR
//
// <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>

import { createGlobalStyle } from 'styled-components'

import NoteworthyLiteWoff from '../assest/fonts/noteworthy-light/noteworthy-light.woff'
import NoteworthyLiteWoff2 from '../assest/fonts/noteworthy-light/noteworthy-light.woff2'
import twCenMediumRegularWoff from '../assest/fonts/tw-cen-medium-regular/tw-cen-medium-regular.woff'
import twCenMediumRegularWoff2 from '../assest/fonts/tw-cen-medium-regular/tw-cen-medium-regular.woff2'

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Noteworthy Light';
        src: local('Noteworthy Light'), local('NoteworthyLight'),
        url(${NoteworthyLiteWoff2}) format('woff2'),
        url(${NoteworthyLiteWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Tw Cen Medium Regular';
        src: local('Tw Cen Medium Regular'), local('TwCenMediumRegular'),
        url(${twCenMediumRegularWoff2}) format('woff2'),
        url(${twCenMediumRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`

export default GlobalFonts
