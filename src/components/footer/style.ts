import styled from "styled-components";

export const StyledFooter = styled.footer`
width: 100vw;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
background: var(--color-grey-0);
position: fixed;
bottom: 0;
p{
    color: var(--color-white-fixed);
}
.up {
    background: var(--color-grey-1);
    border-radius: 4px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`