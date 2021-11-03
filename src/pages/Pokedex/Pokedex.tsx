import {
  Container,
  Header,
  Content,
  Title,
  PokemonsList,
} from "./Pokedex.styles";
import { IoIosArrowRoundBack, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { usePokemons } from "../../hooks/usePokemons";
export const Pokedex = () => {
  const pokemons = usePokemons();

  return (
    <Container>
      <Content>
        <Header>
          <Link to="/">
            <IoIosArrowRoundBack />
          </Link>
          <IoIosMenu />
        </Header>
        <Title>Pokedex</Title>

        <PokemonsList>
          <Card to=""></Card>
          <Card to=""></Card>
          <Card to=""></Card>
        </PokemonsList>
      </Content>
    </Container>
  );
};
