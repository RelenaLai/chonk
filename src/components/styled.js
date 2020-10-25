import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  font-size: 20px;
  display: inline-block;
  padding: 1em 2em;
  border: none;
  border-radius: 1em;
  text-decoration: none;
  color: #ffffff;
  margin-top: 1em;
  text-align: center;
  transition: all 0.2s;
  outline: none;

  &:hover {
    background-color: palevioletred;
    color: white;
  }

  &:active {
    box-shadow: 1px 3px 2px #ced4da;
    transform: translateY(3px);
    border: none;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Image = styled.img`
  max-width: 60%;
`;

export const Result = styled.div``;
