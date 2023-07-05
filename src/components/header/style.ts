import { UserData } from "../../contexts/auth.context";
import styled from "styled-components";

interface iPropsStyled {
    showContainer: boolean
    user: UserData | null;
}

export const StyledHeader = styled.header <iPropsStyled>`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
z-index: 0;
position: relative;
top: 0px;
background-color: var(--color-grey-10);
.more-button {
    border: none;
    cursor: pointer;
    background: none;
}

.container-go-login{
    height: ${ props => props.user ? "0" : "100px" };
    width: 100%;
    display: ${ props => props.user ? "flex" : props.showContainer ? "flex" : "none" };
    justify-content: center;
    gap: 20%;
    align-items: center;
    padding: 0 20px;
    position:"absolute" ;
    top: 80px;
    left: 0;
    background-color: var(--color-white-fixed);
    z-index: 1;
    max-width: 100%;
    button{
        border: 1.5px solid var(--color-grey-4);
        border-radius: 4px;
        padding: 12px 28px;
        background-color: var(--color-white-fixed);
        color: var(--color-grey-0);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        color: var(--color-grey-0);
        cursor: pointer;
    }
    a {
        width: fit-content;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
    }
    .user-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    border: 0;
    color: var(--color-grey-2);
        div {
            width: 2rem;
            height: 2rem;
            border-radius: 9.375rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--color-brand-1);
            color: var(--color-white-fixed);
        }
    }
}
.link-login{
    color: var(--color-grey-2);
    border: 1px solid transparent
}

@media (min-width: 938px) {
    .more-button {
        display: none;
    }

    .container-go-login {
        display: flex;
        gap: 44px;
        position: "absolute" ;
        height: 100%;
        justify-content: center;
        padding-left: 44px;
        border-left: 1px solid var(--color-grey-6);
        width: 350px;
    }
   }
`