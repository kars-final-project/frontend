import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }
    .container{
        height: 100%;
        width: 90%;
        max-width: 1600px;
        display: flex;
        justify-content: space-between;
        align-items: center;    
    }
    button {
        border: 2px solid transparent;
        cursor: pointer;
    }

    :root {
        --color-brand-1: #4529E6;
        --color-brand-2: #5126EA;
        --color-brand-3: #B0A6F0;
        --color-brand-4: #EDEAFD;

        --color-grey-0: #0B0D0D;
        --color-grey-1: #212529;
        --color-grey-2: #495057;
        --color-grey-3: #868E96;
        --color-grey-4: #ADB5BD;
        --color-grey-5: #CED4DA;
        --color-grey-6: #DEE2E6;
        --color-grey-7: #E9ECEF;
        --color-grey-8: #F1F3F5;
        --color-grey-9: #F8F9FA;
        --color-grey-10: #FDFDFD;
        --color-white-fixed: #ffffff;

        --color-alert-1: #CD2B31;
        --color-alert-2: #FDD8D8;
        --color-alert-3: #FFE5E5;
        --color-sucess-1: #18794E;
        --color-sucess-2: #CCEBD7;
        --color-sucess-3: #DDF3E4;

        --color-random-1: #E34D8C;
        --color-random-2: #C04277;
        --color-random-3: #7D2A4D;
        --color-random-4: #7000FF;
        --color-random-5: #6200E3;
        --color-random-6: #36007D;
        --color-random-7: #349974;
        --color-random-8: #2A7D5F;
        --color-random-9: #153D2E;
        --color-random-10: #6100FF;
        --color-random-11: #5700E3;
        --color-random-12: #30007D;
    }

    .spinner {
        width: 25px;
        height: 25px;
        border: 4px solid;
        border-radius: 50%;
        border-color: black #e6e6e6 #e6e6e6 #e6e6e6;
        animation: loading 0.3s infinite;
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`