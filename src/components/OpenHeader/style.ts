import styled from "styled-components";

export const StyledOpenHeader = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 430px;
    position: absolute;
    top: 80px;
    right: 0;
    max-width: 100%;
    background-color: var(--color-white-fixed); 

    .div-buttons {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .div-buttons button, .button {
        background: none;
        border-bottom: 1px solid var(--color-grey-4);
        padding: 20px 0;
        width: 100%;
        cursor: pointer;
        text-align: center;
        color: black;
    }