import styled from "styled-components";

export const Container = styled.form`

h2 {
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0%.25rem;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  &.input-entrada {
    color: var(--green);
  }

  &.input-saida {
    color: var(--red);
  }

  & + input {
    margin-top: 1rem;
  }
}

.react-modal-type {
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 1rem;
  button {
    width: 30%;
    padding: 0.8rem 2rem;
    border: 0;
    transform: scale(0.9);
    transition: all 0.2s ease;

    &:first-child {
      background: var(--green);
      color: white;
      filter: brightness(0.9);
    }

    &:last-child {
      background: var(--red);
      color: white;
      filter: brightness(0.9);
    }

    &:hover {
      transform: scale(1);
    }

    &.selected {
      filter: brightness(1);
      transform: scale(1);
      font-weight: 600;
      box-shadow:  0 0 16px rgba(0,0,0,0.7);
    }
  }
}

button[type='submit'] {
  width: 100%;
  padding: 0 1.5rem;
  background: var(--green);
  height: 4rem;
  margin-top: 1.5rem;
  color: #fff;
  border-radius: 0.25rem;
  border:0;
  font-size: 1rem;
  transition: filter ease 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
}
`