import styled from "styled-components";

export const Wrapper = styled.main`
  height: 100%;
  width: 50%;
  margin: auto;
  padding-top: 5%;
  text-align: center;
  font-family: Tahoma, Geneva, sans-serif;
`;

export const Title = styled.h1`
  color: #242423;
  margin: 0;
  padding: 0;
  font-size: 100px;
  margin-top: -50px;
  text-align: center;
`;

export const Subtitle = styled.h2`
  color: #242423;
  margin: -10px;
  padding: 0;
  text-align: center;
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
