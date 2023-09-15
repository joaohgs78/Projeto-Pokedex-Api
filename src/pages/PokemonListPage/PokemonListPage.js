import React, { useContext } from 'react'
import {PokemonContext} from '../../context/PokemonContext'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import IsLoading from '../../components/IsLoading/IsLoading'
import * as S from './styles' 
import { PokemonCardContext } from '../../context/PokemonCardContext'


const PokemonListPage = () => {

  const {pokemons, isLoading, isError} = useContext(PokemonContext)
  const {pokemonCart} = useContext(PokemonCardContext)

  console.log('aquiii',pokemons);

  return (
    <>
      <Header />
      <S.Title>
        <h1>Todos Pokémons</h1>
      </S.Title>
      <S.ContainerCard>
        {isError ? (
          <p>ERRO!! TENTE NOVAMENTE</p>
        ) : isLoading ? (
          <IsLoading/>
        ) : (
          pokemons
            .filter((pokemonList) => {
              if (
                pokemonCart.find(
                  (pokemonPokedex) =>
                    pokemonList.data.id === pokemonPokedex.data.id
                )
              ) {
                return !pokemonList;
              } else {
                return pokemonList;
              }
            })
            .map((pokemon) => {
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
      {/* <ModalPokemon /> */}
    </>
   
  )
}



export default PokemonListPage