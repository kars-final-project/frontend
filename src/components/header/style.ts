import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100vw;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
.container{
    height: 100%;
    width: 80%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
}
.container-go-login{
    height: 100%;
    border-left: 1px solid var(--color-grey-6);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 44px;
    padding-left: 44px;
    button{
        border: 1.5px solid var(--color-grey-4);
        border-radius: 4px;
        padding: 12px 28px;
        background-color: var(--color-white-fixed);
        color: var(--color-grey-0);
    }
}
.link-login{
    color: var(--color-grey-2);
}
`