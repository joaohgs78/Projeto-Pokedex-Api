import React from "react";
import * as S from "./styles";
import { useContext } from "react";
import Header from "../../components/Header/Header";
import { PokemonCardContext } from "../../context/PokemonCardContext";
import { PokemonContext } from "../../context/PokemonContext";
import Card from "../../components/Card/Card";
import IsLoading from "../../components/IsLoading/IsLoading";

const PokedexPage = () => {
  const { isLoading, isError } = useContext(PokemonContext);
  const { pokemonCart, removePokemon } = useContext(PokemonCardContext);

  return (
    <>
      <Header />
      <S.Title>
        <h1>Meus Pokemons</h1>
      </S.Title>
      <S.ContainerCard>
        {isError ? (
          <p>Erro tente novamente mais tarde</p>
        ) : isLoading ? (
          <IsLoading />
        ) : (
          pokemonCart.map((pokemon) => {
            const types = pokemon.data.types
              .map((types) => types.type.name)
              .join(" ");
            return (
              <Card
                pokemon={pokemon}
                image={pokemon.data.sprites.other.dream_world.front_default}
                name={pokemon.data.name}
                types={types}
                key={pokemon.data.id}
                id={pokemon.data.id}
              />
            );
          })
        )}
      </S.ContainerCard>
    </>
  );
};

export default PokedexPage;
