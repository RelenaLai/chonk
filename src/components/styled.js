import styled from "styled-components";

export const UploadWrapper = styled.div``;

export const Button = styled.button`
  border-color: transparent;
  background-color: black;
  margin: 0px;
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  transition: 0.2s;
  background-size: 200% auto;
  color: #fff;
  width: 200px;
  transition: all 0.3s;
  cursor: pointer;
  display: inline-block;
  border-radius: 25px;

  &:hover {
    box-shadow: 0 10px 20px rgba(18, 17, 17, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    margin: 25px 10px 12px;
    background-image: linear-gradient(
      to right,
      #3c00f1 30%,
      #001cf1 51%,
      #004df4 90%
    );
    background-position: center;
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
`;

export const Result = styled.div`
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
`;
