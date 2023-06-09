import styled from "styled-components";

interface iPropsStyled {
    showContainer: boolean
}

export const StyledHeader = styled.header <iPropsStyled>`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;

.more-button {
    border: none;
    cursor: pointer;
    background: none;
}

.container-go-login{
    height: 100px;
    width: 100%;
    display: ${ props => props.showContainer? "flex" : "none" };
    justify-content: center;
    gap: 20%;
    align-items: center;
    padding: 0 20px;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: var(--color-white-fixed);
    z-index: 1;
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
}
.link-login{
    color: var(--color-grey-2);
}

@media (min-width: 938px) {
    .more-button {
        display: none;
    }

    .container-go-login {
        display: flex;
        gap: 44px;
        position: static;
        height: 100%;
        justify-content: center;
        padding-left: 44px;
        border-left: 1px solid var(--color-grey-6);
        width: 350px;
    }
   }
`