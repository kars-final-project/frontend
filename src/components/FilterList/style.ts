import styled from "styled-components";

const StyledFilterList = styled.div `
   display: none;
   flex-direction: column;
   gap: 20px;
   width: 454px;
   padding: 0 15px;
   min-width: 250px;

   section {
       display: flex;
       flex-direction: column;
       gap: 25px;
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
   }

   .max-min-button {
       display: flex;
       flex-direction: row;
       align-items: center;
       gap: 15px;
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

   @media (min-width: 938px) {
       display: flex;
   }
`

export default StyledFilterList