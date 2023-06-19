import styled from "styled-components";

export const StyledLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-grey-8);
    min-height: 100vh;
    .div-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        background-color: var(--color-grey-10);
        border-radius: 0.25rem;
        width: 90%;
        max-width: 27.5rem;
        margin: 2.875rem;
        padding: 2.75rem 3rem;
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
            color: var(--color-grey-2);
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;
            .div-buttons {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1.5rem;
            }
            .div-inputs {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                div {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5625rem;
                    a {
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 0.875rem;
                        line-height: 1.5rem;
                        color: var(--color-grey-2);
                        text-align: right;
                        width: 100%;
                    }
                }
            }
        }
        a {
            width: 100%;
        }
        button {
            height: 3rem;
            padding: 0.75rem 1.75rem;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 1rem;
            line-height: 0rem;
            border-radius: 0.25rem;
            width: 100%;
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