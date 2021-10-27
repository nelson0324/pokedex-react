import styled from "styled-components";
import { CardProps } from "./Card";

export const LeftCornerCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: -20px;
  top: -20px;
`;

export const PokeContainer = styled.div`
  position: absolute;
  right: -5px;
  top: -25px;

  svg {
    width: 90px;
    height: 150px;
  }
`;

export const CardContent = styled.div`
  position: relative;
`;

export const CardContainer = styled.div<CardProps>`
  background-color: ${(props) => props.bgColor};
  align-items: center;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  min-height: 100px;
  box-shadow: rgb(0 0 0 / 48%) 0px 2px 1px -1px,
    rgb(0 0 0 / 35%) 0px 1px 1px 0px, rgb(0 0 0 / 46%) 0px 1px 3px 0px;
  position: relative;
  overflow: hidden;
  color: #ffff;
  justify-content: center;
  ${LeftCornerCircle} {
    background-color: ${(props) => props.shadow};
  }
  ${PokeContainer} {
    svg {
      path {
        fill: ${(props) => props.shadow};
      }
    }
  }
`;
