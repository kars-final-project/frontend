import styled from "styled-components";

interface iPropsStyled {
    showFilter: boolean
}

const StyledFilterList = styled.div <iPropsStyled> `
   display: ${ props => props.showFilter ? "flex" : "none"};
   flex-direction: column;
   margin-top: 55px;
   width: 100%;
   gap: 20px;
   
   section {
       display: flex;
       flex-direction: column;
       gap: 25px;
       max-width: 100%;
   }

   section h2 {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 35px;
    color: #000000;
   }

   section div {
       display: flex;
       flex-direction: column;
       margin-left: 20px;
       max-width: 100%;
   }

   .max-min-button {
       display: flex;
       flex-direction: row;
       align-items: center;
       gap: 15px;
       max-width: 100%;
   }

   .max-min-button button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 125px;
      height: 37px;
      left: 17px;
      top: 1045px;
      background-color: var(--color-grey-5);
   }

   section div > button {
       display: flex;
       width: fit-content;
       background: none;
       border: none;
       font-family: 'Lexend';
       font-style: normal;
       font-weight: 500;
       font-size: 1.25rem;
       color: var(--color-grey-3);
       cursor: pointer;
   }

   .see-ads-button {
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       padding: 12px 28px;
       gap: 10px;
       width: 279px;
       height: 48px;
       background-color: var(--color-brand-2);
       border: 1.5px solid var(--color-brand-2);
       border-radius: 4px;
       max-width: 100%;
       font-family: 'Inter';
       font-style: normal;
       font-weight: 600;
       font-size: 1rem;
       line-height: 0px;
       color: var(--color-white-fixed);
       cursor: pointer;
   }

   .selected {
       color: var(--color-random-10);
       transition: 0.3s;
   }

   .selected-box {
       color: var(--color-random-10);
    }

   @media (min-width: 938px) {
       display: flex;
       position: static;
       width: 454px;
       align-items: baseline;
       margin: 0;
       min-width: 250px;

       .see-ads-button {
          display: none;
       }
   }
`

export default StyledFilterList