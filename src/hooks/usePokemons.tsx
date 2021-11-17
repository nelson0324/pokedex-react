import React from "react";
import { pokeApi } from "../api";
import { GetPokemons, Result } from "../types";
import { prominent } from "color.js";
interface Pokemon extends Result {
  imageURL: string;
  colors: string[];
}
export const usePokemons = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  React.useEffect(() => {
    pokeApi
      .get<GetPokemons>("/pokemon?limit=10&offset=0")
      .then(async (response) => {
        const pokemonFormatted = response.data.results.map((pokemon) => {
          const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            pokemon.url.split("/")[pokemon.url.split("/").length - 2]
          }.png`;
          return { ...pokemon, imageURL };
        });
        const ImageColorsPromises = pokemonFormatted.map((pokemon) => {
          return prominent(pokemon.imageURL);
        });
        const dominantColors = Promise.all(ImageColorsPromises);
        const pokeColors = (await dominantColors).map((colorsArray: any) =>
          colorsArray.map((colorValue: Number[]) => colorValue.join(","))
        );

        console.log(pokeColors);

        setPokemons((prevPokemons: any) => [
          ...prevPokemons,
          ...pokemonFormatted.map((pokemon, index) => ({
            ...pokemon,
            colors: pokeColors[index],
          })),
        ]);
      });
  }, []);

  return {
    pokemons,
  };
};
