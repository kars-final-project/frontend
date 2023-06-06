import styled from "styled-components";
import Car from "./car.png";

export const StyledHome = styled.main`
  .bigImg {
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url(${Car});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
    }
    h1,p {
        position: absolute;
        color: var(--color-grey-10);
        font-weight: 500;
        font-size: 32px;
        text-align: center;
    }
    h1{
        margin-bottom: 50px;
    }
    p {
        margin-top: 50px;
    }
  }

`;
