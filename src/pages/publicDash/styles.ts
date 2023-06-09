import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  position: relative;

  main {
    margin: 10px 0;
    width: 100vw;
    display: flex;
    gap: 15px;
  }

  .pictures {
    width: 95vw;
    height: 330px;
    background-color: white;
    border-radius: 8px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;

    h2,
    p {
      margin: 20px 0 0 20px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: 100%;
    }

    li {
      width: 32%;
    }

    img {
      width: 80%;
    }
  }

  @media (min-width: 768px) {
    .pictures {
      display: flex;
      position: absolute;
      top: 106px;
      width: 25vw;
      right: 143px;
    }
  }
`

export const StyledBack = styled.div`
  height: 360px;
  background-color: var(--color-brand-1);
  width: 100vw;
`

export const StyledUser = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: clamp(360px, 80vw, 1600px);
  padding: 32px;
  padding-top: 40px;
  padding-bottom: 36px;
  background: var(--color-grey-9);
  top: 200px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

export const StyledImgCircle = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: var(--color-brand-1);
`

export const StyledH2 = styled.h2`
  font-size: 20px;
  font-family: Lexend;
  font-weight: 600;
  color: var(--colo-grey-1);
`

export const StyledH3 = styled.h3`
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--color-grey-4);
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-brand-1)
`

export const StyledP = styled.p`
  font-size: 16px;
  font-family: Inter;
  line-height: 28px;
  color: var(--color-grey-2);

`

export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-itens: center;
  gap: 8px;
`

export const StyledAddAdBtn = styled.button`
  height: 48px;
  width: 160px;
  padding: 12px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1.5px solid var(--color-brand-1);
  background: none;
  color: var(--color-brand-1);
`