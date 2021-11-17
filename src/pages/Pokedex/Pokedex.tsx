import {
  Container,
  Header,
  Content,
  Title,
  PokemonsList,
  PokemonDiv,
  Image,
  PokemonName,
} from "./Pokedex.styles";
import { IoIosArrowRoundBack, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { usePokemons } from "../../hooks/usePokemons";
export const Pokedex = () => {
  const { pokemons = [] } = usePokemons();

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
          {pokemons.map((pokemon) => {
            return (
              <Card
                color={`rgb(${pokemon.colors[2]})`}
                shadow={`rgb(${pokemon.colors[1]})`}
                key={pokemon.name}
                to=""
              >
                <PokemonDiv>
                  <PokemonName> {pokemon.name}</PokemonName>
                  <Image src={pokemon.imageURL} alt={pokemon.name} />
                </PokemonDiv>
              </Card>
            );
          })}
        </PokemonsList>
      </Content>
    </Container>
  );
};
