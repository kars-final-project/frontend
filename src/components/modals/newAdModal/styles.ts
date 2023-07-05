import styled from "styled-components";

export const StyledNewAdModal = styled.div`
width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  .modal-ad-container {
    background-color: white;
  position: relative;
  max-height: 90%;
  /* transform: translate(-50%, -50%); */
  border-radius: 8px;
  overflow-y: scroll;
  padding: 18px 24px;
  }

  .divTitleAndCloseButton {
    display: flex;
    justify-content: space-between;
    align-items: space-between;

    button {
      color: #adb5bd;
      font-size: 15pt;
    }
  }
 h2{
  font-size: 16px;
    font-weight: 500;
 }
  h3 {
    font-size: 14px;
    font-weight: 500;
    align-self: flex-start;
  }

  .divInputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    fieldset{
        max-width: 100%;
        gap: 5px;
    }

    label {
      font-size: 12pt;
      margin: 20px 0 0 10px;
    }

    input::placeholder{
        font-size: 10pt;
    }

    input {
      margin: 0 0 0 10px;
      width: 88%;
      border: 1pt solid #868e96;
      height: 35px;
      font-size: 15px;
    }
  }

  .divTwoInputs{

    display: flex;

    input{
        width: 75%;
    }
  }

  .buttonAddField{
    background-color: #EDEAFD;
    margin: 20px 0;
    width: 95%;
    color: #4529E6;
    font-size: 10pt;
    font-weight: bold;
  }

  .divButtonCancelAndSubmit{
    display: flex;
    justify-content: space-around;
    align-items: space-between;
    margin: 20px 0;
    font-weight: bold;
    width: 100%;

    .buttonCancel{
        background-color: #DEE2E6;
        color: #495057;
    }

    .buttonSubmit{
        background-color: #4529E6;
        color: white;
    }

  }

  /* @media (min-width: 768px) {
    width: 30vw;
  } */

`