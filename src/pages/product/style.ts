import styled from "styled-components";

export const StyledProduct = styled.main`
  width: 100vw;
  position: relative;
  overflow-x: scroll;
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
    top: 0;
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

  .container-product {
    width: 90%;
    max-width: 1200;
    height: 90%;
    z-index: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .product-main-img-container {
    min-height: 350px;
    max-width: 750px;
    background-color: var(--color-grey-10);
    border-radius: 4px;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  .product-info {
    background-color: var(--color-grey-10);
    border-radius: 4px;
    padding: 45px;
    max-width: 750px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 20px;
    h2 {
      font-weight: 600;
      font-size: 20px;
    }
  }
  .buttons-price {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    p {
      font-weight: 500;
      font-size: 16px;
    }
  }
  .car-buttons {
    display: flex;
    flex-direction: column;
    gap: 25px;
    div {
      display: flex;
      gap: 15px;
      button {
        color: var(--color-brand-1);
        background-color: var(--color-brand-4);
        border-radius: 4px;
        padding: 4px 8px;
      }
    }
  }
  .buy-button {
    color: var(--color-white-fixed);
    background-color: var(--color-brand-1);
    border-radius: 4px;
    padding: 12px 20px;
  }
  .description-product {
    background-color: var(--color-grey-10);
    border-radius: 4px;
    padding: 36px 44px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 750px;
    margin-top: 40px;
    h2 {
      font-weight: 600;
      font-size: 20px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    }
  }
  .car-pictures {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: var(--color-grey-10);
    border-radius: 4px;
    padding: 36px 44px;
    width: 100%;
    h2 {
      font-weight: 600;
      font-size: 20px;
    }
    div {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      img {
        max-width: 30%;
      }
    }
  }
  .upperDiv {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .user-info {
    background-color: var(--color-grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 37px 44px;
    img {
      border-radius: 50%;
    }
    h3 {
      font-weight: 600;
      font-size: 20px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
    }
    button {
      background-color: var(--color-grey-0);
      border-radius: 4px;
      color: var(--color-white-fixed);
      font-weight: 600;
      font-size: 16px;
      padding: 12px 28px;
    }
  }
  .pictures-user {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  @media (min-width: 768px) {
    .upperDiv {
      flex-direction: row;
      justify-content: space-between;
    }
    .car-pictures,
    .user-info {
      max-width: 440px;
    }
  }
`;
