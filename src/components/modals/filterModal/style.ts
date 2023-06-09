import styled from "styled-components";

export const StyledModal = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-white-fixed);
    top: 0;
    left: 0;

    .modal-box {
        display: flex;
        flex-direction: column;
        background-color: var(--color-white-fixed);
        width: 100%;
        position: absolute;
        top: 80px;
        max-width: 100%;
        padding-left: 20px;
    }

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary);
        width: 100%;
        height: 54px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
    }

    .modal-header div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 20px;
    }

    .modal-header div h2 {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 20px;
    }

    .modal-header div button {
        background: none;
        border: none;
        font-size: 16px;
        color: var(--color-grey-100);
        cursor: pointer;
    }

    @media (min-width: 938px) {
       display: none;
    }
`