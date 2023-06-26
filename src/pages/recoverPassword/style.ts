import styled from "styled-components";

export const StyledRecoverPassword = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-8);
  min-height: 100vh;
  .div-form-recover {
    background-color: var(--color-white-fixed);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 44px 48px;
    gap: 32px;

    h2 {
      font-size: 24px;
      font-weight: 500;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 24px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
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
`;
