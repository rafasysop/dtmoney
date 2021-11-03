import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: -7rem 0 0 0;
  
  & div {
    box-shadow: 0 0 8px var(--blue-light);
    width: 30%;
    margin: 5px;
    padding: 1rem 1.5rem;
  
    & strong{
       font-size: 2rem;
       font-weight: 600;
      }

      &:nth-child(1) {
      background-color: var(--backgroud);
    }

    &:nth-child(2) {
      background-color: var(--backgroud);
    }

    &:nth-child(3) {
      color: white;
      background-color: var(--green);
    }
    &.negativo {
      background-color: var(--red);
    }
  }

  & header {
      display: flex;
      justify-content: space-between;
    }

  
`