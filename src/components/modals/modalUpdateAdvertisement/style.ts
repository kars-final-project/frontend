import { styled } from "styled-components";

const StyledModalUpdateAdvertisement = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 20px 0;

    .modal-box {
        display: flex;
        flex-direction: column;
        background-color: var(--color-white-fixed);
        width: 520px;
        gap: 25px;
        top: 80px;
        max-width: 100%;
        padding: 25px 30px;
        border-radius: 8px;
        overflow-x: auto;
        max-height: 100%;
    }

    .modal-box > h3 {
        font-family: "Inter";
        font-weight: 500;
        font-size: 0.875rem;
        color: #000000;
    }

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary);
        width: 100%;
        height: 54px;
        top: 0;
        left: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    form > textarea {
        width: 100%;
        height: 80px;
        resize: none;
        border-color: var(--color-grey-6);
        padding: 10px 20px;
        font-family: "Inter";
    }

    small {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 0.875;
        line-height: 20px;
        color: var(--color-alert-1);
    }

    label {
        font-family: "Inter";
        font-weight: 500;
        font-size: 0.875rem;
    }

    .modal-header div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
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
        color: var(--color-grey-4);
        cursor: pointer;
    }

    .modal-buttons {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }

    .cancel-button {
        width: 150px;
        height: 48px;
        background-color: var(--color-grey-6);
        border-radius: 4px;
        font-family: "Inter";
        font-weight: 600;
        font-size: 1rem;
    }

    .delete-button {
        width: 60%;
        height: 48px;
        border-radius: 4px;
        background-color: var(--color-grey-6);
        font-family: "Inter";
        font-weight: 600;
        font-size: 1rem;
        color: var(--color-grey-1);
    }

    .save-button {
        width: 40%;
        height: 48px;
        font-family: "Inter";
        font-weight: 600;
        font-size: 1rem;
        background-color: var(--color-brand-1);
        color: var(--color-white-fixed);
    }

    .div-input {
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }

    .button-yes {
        width: 100%;
        height: 48px;
        background-color: var(--color-white-fixed);
        border: 1px solid var(--color-grey-4);
    }

    .button-no {
        width: 100%;
        height: 48px;
        background-color: var(--color-brand-1);
        color: var(--color-white-fixed);
    }
`

export default StyledModalUpdateAdvertisement