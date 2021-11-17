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
  border-radius: 12px;
  padding: 32px;
  width: 100%;
  height: 100vh;
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 56px 0;
  svg {
    transform: scale(2);
    cursor: pointer;
    path {
      fill: #404040;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #333232;
`;

export const PokemonsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;
export const Image = styled.img`
  width: 110px;
`;
export const PokemonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  text-transform: capitalize;
`;

export const PokemonName = styled.div`
  text-align: center;
`;
