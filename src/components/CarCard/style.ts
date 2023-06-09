import styled from "styled-components";

const StyledCards = styled.ul `
   display: flex;
   gap: 30px;
   max-width: 1153px;
   overflow-x: auto;

   li {
       display: flex;
       flex-direction: column;
       width: 312px; 
       min-width: 280px;
       gap: 10px;
       height: 360px;
       flex-basis: calc(32.33% - 20px);
   }

   h3 {
       font-family: 'Lexend';
       font-style: normal;
       font-weight: 600;
       font-size: 1rem;
       line-height: 20px;
       color: var(--color-grey-1);
   }
   
   .car-image {
       width: 100%;
       height: 152px;
       background-color: var(--color-grey-7);
   }

   .car-description {
       display: -webkit-box;
       -webkit-box-orient: vertical;
       -webkit-line-clamp: 2;
       overflow: hidden;
       text-overflow: ellipsis;
       font-family: 'Inter';
       font-style: normal;
       font-weight: 400;
       font-size: 0.875rem;
       line-height: 24px;
       color: var(--color-grey-2);
   }

   .user-info {
       display: flex;
       width: 100%;
       align-items: center;
       gap: 10px;
   }

   .user-info h4 {
       font-family: 'Inter';
       font-style: normal;
       font-weight: 500;
       font-size: 0.875rem;
       line-height: 24px;
       color: var(--color-grey-2);
   }

   .user-image {
       width: 32px;
       height: 32px;
       background-color: var(--color-brand-1);
       border-radius: 150px;
   }

   .more-info {
       display: flex;
       justify-content: space-between;
       width: 100%;
       align-items: center;
   }

   .more-info div {
       display: flex;
       gap: 10px;
   }

   .more-info div > span {
       display: flex;
       align-items: center;
       justify-content: center;
       width: 51px;
       height: 32px;
       background-color: var(--color-brand-4);
       font-family: 'Inter';
       font-style: normal;
       font-weight: 500;
       font-size: 0.875rem;
       line-height: 24px;
       color: var(--color-brand-1);
   }

   .more-info p {
      font-family: 'Lexend';
      font-style: normal;
      font-weight: 500;
      font-size: var(--color-grey-1);
      line-height: 20px;
      color: var(--color-grey-1);
   }

   .pages {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      width: 100%;
      top: 720px;
   }

   .pages button {
      background: none;
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

   @media (min-width: 938px) {
       flex-wrap: wrap;

       .pages {
           position: static;
           flex-direction: row;
       }
   }
`

export default StyledCards