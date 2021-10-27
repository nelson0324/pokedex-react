import styled from "styled-components";
export const Container = styled.div`
  align-items: center;
  background-color: #f6f7fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  background-color: white;
  width: 500px;
`;

export const SearchSection = styled.section`
  background-color: white;
  border-radius: 12px;
  display: grid;
  grid-gap: 40px;
  padding: 32px;
`;

export const Title = styled.h1`
  font-size: 30px;
  padding-top: 200px;
  color: #1e1e1f;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; //Dos filas
  grid-gap: 20px; //Espacio entre elementos del grid
`;
