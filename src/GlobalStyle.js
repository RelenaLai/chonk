import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background-color: white;
    }

    html {
        height: 100%;
        width: 100%;
    }

    #root {
        height: 100%;
        width: 100%;
    }

    body {
        background-color: var(--background-color);
        width: 100%;
        height: 100%;
        margin: 0;
    }
`;
