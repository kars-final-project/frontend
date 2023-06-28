import styled from "styled-components";

export const StyledFooter = styled.footer`
width: 100%;
height: 310px;
display: flex;
justify-content: center;
align-items: center;
background: var(--color-grey-0);
bottom: 0;
.footer-container {
    width: 90%;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
}
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

@media(min-width:768px) {
    height: 140px;

    .footer-container {
    flex-direction: row;
    gap: 0px;
    justify-content: space-between;
}
}
`