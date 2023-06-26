import styled from "styled-components";

export const StyledFooter = styled.footer`
width: 100%;
height: 140px;
display: flex;
justify-content: center;
align-items: center;
background: var(--color-grey-0);
bottom: 0;
p{
    color: var(--color-white-fixed);
}
a{
    color: var(--color-white-fixed);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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