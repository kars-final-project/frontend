import styled from "styled-components";

export const StyledModalPassword = styled.div`
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;

  .modal-white-background {
    width: 90%;
    max-width: 440px;
    padding: 24px 24px 48px;
    background: #ffffff;
    border-radius: 16px;
    position: relative;
    max-height: 350px;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-end;
      gap: 25px;

      form {
        display: flex;
        flex-direction: column;
        gap: 25px;

        p {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
        }

        .erro-password-recovery {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          color: var(--color-alert-1);
          margin: 0;
        }

        small {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          color: var(--color-alert-1);
        }

        button {
          cursor: pointer;
          width: 100%;
          padding: 12px 0px;
          background-color: var(--color-brand-1);
          text-align: center;
          color: var(--color-white-fixed);
          font-size: 16px;
          font-weight: 600;
          border-radius: 4px;
        }
      }
    }
  }
`;
