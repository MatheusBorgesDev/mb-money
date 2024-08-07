import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    padding: 1rem;

    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${(props) => props.theme["green-300"]};
    background: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    border-radius: 6px;

    &:hover {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme["green-500"]};
      border: 1px solid ${(props) => props.theme["green-500"]};

      transition: 0.2s;
    }
  }
`;
