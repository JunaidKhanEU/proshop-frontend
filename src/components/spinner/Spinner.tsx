import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  backdrop-filter: grayscale(0.9) opacity(0.9) blur(10px);
  &.spinner {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 30rem auto;
  }
  &.spinner div {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-top-color: ${(props) => props.theme.colors.yellow};
    border-radius: 50%;
    animation: spinnerOne 1.2s linear infinite;
  }
  &.spinner div:nth-child(2) {
    border: 10px solid transparent;
    border-bottom-color: ${(props) => props.theme.colors.orange};
    animation: spinnerTwo 1.2s linear infinite;
  }

  @keyframes spinnerOne {
    0% {
      transform: rotate(0deg);
      border-width: 10px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 1px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 10px;
    }
  }

  @keyframes spinnerTwo {
    0% {
      transform: rotate(0deg);
      border-width: 1px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 10px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 1px;
    }
  }
`;
const Spinner = () => {
  return (
    <DivWrapper className="spinner">
      <div> </div>
      <div></div>
    </DivWrapper>
  );
};

export default Spinner;
