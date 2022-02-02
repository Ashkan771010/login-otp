import { createGlobalStyle } from "styled-components";

import Vazir from "../fonts/vazir/Vazir-Regular-FD.woff";
import VazirB from "../fonts/vazir/Vazir-Bold-FD.woff"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        scroll-behavior: smooth;
        direction: rtl;
    }

    @font-face {
        font-family: "Vazir";
        src: url(${Vazir});
        font-weight: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "VazirB";
        src: url(${VazirB});
        font-weight: bold;
        font-display: auto;
    }
`;

export default GlobalStyles;
