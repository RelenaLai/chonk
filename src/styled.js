import styled from "styled-components";

export const Wrapper = styled.main`
  height: 100%;
  width: 50%;
  margin: auto;
  padding-top: 3%;
  text-align: center;
`;

export const Title = styled.h1`
  color: #242423;
  margin: 0;
  padding: 0;
  font-size: 100px;
  margin-top: -50px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

export const Subtitle = styled.h2`
  color: #242423;
  margin: -10px;
  padding: 0;
  text-align: center;
  font-family: 'Lato', sans-serif;
  animation: colorchange 10s infinite alternate;

  @keyframes colorchange {
    0% {
      color: blue;
    }
    10% {
      color: #8e44ad;
    }
    20% {
      color: #1abc9c;
    }
    30% {
      color: #d35400;
    }
    40% {
      color: blue;
    }
    50% {
      color: #34495e;
    }
    60% {
      color: blue;
    }
    70% {
      color: #2980b9;
    }
    80% {
      color: #f1c40f;
    }
    90% {
      color: #2980b9;
    }
    100% {
      color: pink;
    }
`;

export const Button = styled.button`
  border-color: transparent;
  background-color: black;
  margin: 0px;
  margin-top: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 600;
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
  outline: none;

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
  margin: 2em auto 1em auto;
`;

export const Score = styled.div`
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
`;

export const Rating = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 20px;
`;
