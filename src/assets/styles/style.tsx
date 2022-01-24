import { createGlobalStyle } from "styled-components";

import IRANSans from "../fonts/iranSans/IRANSansWeb.ttf";
import IRANSansB from "../fonts/iranSans/IRANSansWeb_Bold.ttf";

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
        font-family: "IRANSans";
        src: url(${IRANSans});
        font-weight: normal;
        font-display: auto;
    }

    @font-face {
        font-family: "IRANSansB";
        src: url(${IRANSansB});
        font-weight: bold;
        font-display: auto;
    }
`;

export default GlobalStyles;
