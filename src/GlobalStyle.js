import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
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
