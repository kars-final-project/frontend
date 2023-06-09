import styled from "styled-components";

export const StyledProduct = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;

  &::before {
    content: "";
    z-index: -1;
    width: 100%;
    height: 31%;
    background-color: var(--color-brand-1);
    position: absolute;
    top:0;
  }

  &::after {
    content: "";
    z-index: -1;
    width: 100%;
    height: 69%;
    background-color: var(--color-grey-8);
    position: absolute;
    bottom: 0;
  }

  .container-product{
    width: 90%;
    max-width: 1200;
    height: 90%;
    z-index: 0;
  }
`;
