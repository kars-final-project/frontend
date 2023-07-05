import styled from "styled-components";
import Car from "./car.png";

export const StyledHome = styled.main`
  .card-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .cards-filters {
    display: flex;
    width: 100%;
    margin-top: 50px;
    padding: 0 5%;
    justify-content: space-between;
  }

  h5 {
       font-family: 'Lexend';
       font-weight: 600;
       font-size: 1.5rem;
       line-height: 30px;
       color: var(--color-grey-1);
       margin: 0 auto;
  }

  .filter-button {
     margin: 0 auto;
     margin-top: 30px;
     width: 279px;
     max-width: 100%;
     height: 48px;
     background-color: var(--color-brand-2);
     border: 1.5px solid var(--color-brand-2);
     border-radius: 4px;
     font-family: 'Inter';
     font-style: normal;
     font-weight: 600;
     font-size: 1rem;
     color: var(--color-white-fixed);
     cursor: pointer;
  }

  .pages {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      width: 100%;
      margin-top: 80px;
   }

   .pages button {
      background: none;
      margin-left: 15px;
      border: none;
      color: var(--color-brand-2);
      font-size: 1.5rem;
      font-weight: 600;
      font-family: "Lexend";
      cursor: pointer;
   }

   .pages span {
       font-family: 'Lexend';
       font-weight: 600;
       font-size: 1.5rem;
       line-height: 30px;
       color: var(--color-grey-3);
   }

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
    z-index: -1;

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

  @media (min-width: 938px) {
    .filter-button {
      display: none;
    }

    .pages {
      flex-direction: row;
      margin-top: 20px;
    }

    .card-container {
       max-width: 1032px;
    }
   }

`;