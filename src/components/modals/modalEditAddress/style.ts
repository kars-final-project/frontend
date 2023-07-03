import styled from "styled-components";

export const StyledModalEditAddress = styled.div`
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

  .modal-white-background {
    width: 90%;
    max-width: 440px;
    padding: 24px 24px 48px;
    background: #ffffff;
    border-radius: 16px;
    position: relative;
    max-height: 95%;
    overflow-y: auto;

    span {
      cursor: pointer;
    }

    h2 {
      font-size: 16px;
      font-weight: 500;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-top: 35px;

      h3 {
      font-size: 14px;
      font-weight: 500;
    }

      input {
        height: 50px;
        border-radius: 4px;
        border: 2px solid var(--color-grey-7);
      }

      .edit-form-buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;

        .cancelBtn {
          padding: 12px 28px;
          background-color: var(--color-grey-6);
          border-radius: 4px;
          color: var(--color-grey-2);
          font-size: 16px;
          font-weight: 600;
        }
        .saveBtn {
          padding: 12px 28px;
          background-color: var(--color-brand-1);
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          color: var(--color-white-fixed);
        }
      }
    }

    .input {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .form-div {
      display: flex;
      justify-content: space-between;
    }
    .double-input{
      max-width: 50%;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .double-input-container{
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }

  @media(min-width: 768px) {
    .double-input{
      max-width: 100%;
    }
  }
`;
