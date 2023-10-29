import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--text-2xl-font-semibold: Inter;

/* font sizes */
--font-size-xl: 20px;
--font-size-17xl: 36px;
--text-2xl-font-semibold-size: 24px;
--font-size-21xl: 40px;

/* Colors */
--color-black: #000;
--color-aliceblue: #ebf5ff;
--color-midnightblue: #3d0460;
--blue-900: #233876;
--color-white: #fff;

/* Gaps */
--gap-xs: 12px;

/* Border radiuses */
--br-xl: 20px;

}
`;
