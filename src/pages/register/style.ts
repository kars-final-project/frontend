import styled from "styled-components";

export const StyledRegister = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-grey-8);
    min-height: 100vh;
    .div-form {
        width: 90%;
        max-width: 27.5rem;
        margin: 2.875rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 2.75rem 3rem;
        gap: 2rem;
        background-color: var(--color-grey-10);
        border-radius: 0.25rem;
        h2 {
            font-family: 'Lexend';
            font-style: normal;
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 1.875rem;
        }
        p {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 0.625rem;
            }
        }
        button {
            width: 100%;
            height: 3rem;
            padding: 0.75rem 1.75rem;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 1rem;
            line-height: 0rem;
            border-radius: 0.25rem;
        }
        .button-brand {
            background-color: var(--color-brand-1);
            color: var(--color-white-fixed);
            border: 1.5px solid #4529E6;
        }
        .button-white {
            background-color: var(--color-white-fixed);
            color: var(--color-grey-0);
            border: 1.5px solid #ADB5BD;
        }
    }

    @media (min-width: 938px) {
        width: 100%;
    }

`;