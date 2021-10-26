import styled from "styled-components";
import { CardProps } from "./Card";
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
`;

export const LeftCornerCircle = styled.div``;

export const PokeContainer = styled.div``;

export const CardContent = styled.div``;
