import styled from "styled-components";

export const StyledComments = styled.section `
    display: flex;
    flex-direction: column;
    max-width: 100%;

    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 36px 44px;
        gap: 24px;
        max-width: 751px;
        max-height: 300px;
        overflow-x: scroll;
        background: var(--color-grey-10);
        border-radius: 4px;
    }

    li {
        display: flex;
        gap: 20px;
        flex-direction: column;
    }

    ul h2 {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 25px;
        color: var(--color-grey-1);
    }

    li > p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 24px;
        color: var(--color-grey-2);
    }

    .user-info {
        display: flex;
        align-items: start;
        gap: 10px;
    }

    .row-div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
    }

    .row-div img {
        width: 32px;
        height: 32px;
        background-color: var(--color-random-1);
        border-radius: 50%;
    }

    .comment-span {
        border-radius: 50%;
    }

    .row-div h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        color: var(--color-grey-1);
    }

    .date-info {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: var(--color-grey-3);
    }

    .comment-text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: var(--color-grey-2);
        text-align: start;
        margin-left: 2px;
        margin-top: 12px;
    }

    .add-comment {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 751px;
        padding: 36px 44px;
        background-color: var(--color-grey-10);
        border-radius: 4px;
        margin-top: 25px;
        max-width: 100%;
    }

    .user-info-comment {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .user-info-comment img {
        width: 32px;
        height: 32px;
        background-color: var(--color-random-1);
        border-radius: 150px;
    }

    .user-info-comment h3 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        color: var(--color-grey-1);
    }

    .comment-input {
        width: 100%;
        height: 128px;
        max-width: 100%;
        border: 1.5px solid var(--color-grey-7);
        border-radius: 4px;
        position: relative;
    }

    .comment-input textarea {
        width: 100%;
        height: 100%;
        max-width: 100%;
        border: 1.5px solid var(--color-grey-7);
        border-radius: 4px;
        text-align: top;
        padding: 10px;
        resize: none;
        outline-color: var(--color-grey-6);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: var(--color-grey-3);
        
    }

    .comment-input button {
        width: 108px;
        height: 38px;
        background: var(--color-brand-1);
        border: 1.5px solid var(--color-brand-1);
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--color-white-fixed);
        cursor: pointer;
        position: absolute;
        left: 45%;
        bottom: 7%;
    }

    .suggestions {
        display: flex;
        gap: 10px;
    }

    .suggestions p {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-grey-7);
        border-radius: 24px;
        padding: 8px 12px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 0.75rem;
        color: var(--color-grey-3);
    }
    
    @media (min-width:425px){
        .comment-input button{
            left: 60%;
        }
    }
    @media (min-width:768px){
        .comment-input button{
            left: 80%;
        }
    }
`