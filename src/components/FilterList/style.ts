import styled from "styled-components";

const StyledFilterList = styled.div `
   display: flex;
   flex-direction: column;
   gap: 20px;
   width: 454px;
   padding: 0 15px;
   min-width: 250px;

   section {
       display: flex;
       flex-direction: column;
       gap: 15px;
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
       margin-left: 10px;
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
`

export default StyledFilterList