import {
  Container,
  Header,
  Content,
  Title,
  PokemonsList,
  PokemonDiv,
  Image,
  PokemonName,
  SkeletonsContainer,
} from "./Pokedex.styles";
import { IoIosArrowRoundBack, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { usePokemons } from "../../hooks/usePokemons";
import Skeletons from "react-loading-skeleton";
export const Pokedex = () => {
  const { pokemons, loading } = usePokemons();

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
          <SkeletonsContainer>
            {true && <Skeletons count={10} style={{ height: 100 }} />}
          </SkeletonsContainer>
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
