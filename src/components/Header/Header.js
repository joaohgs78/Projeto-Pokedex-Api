import logo from "../../assets/logo.png";
import { useContext } from "react";
import * as S from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedexPage, goToPokemonListPage } from "../../routes/coordinator";
import { PokemonCardContext } from "../../context/PokemonCardContext";

const Header = ({ pokemon }) => {
  const { pokemonCart, addPokemonToCart, removePokemon } =
    useContext(PokemonCardContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isPokemonInPokedex =
    pokemon &&
    pokemonCart &&
    pokemonCart.some((item) => item.data.id === pokemon.data.id);

  return (
    <>
      <S.Header>
        {location.pathname.includes("pokedexPage") ||
        location.pathname.includes("detailPage") ? (
          <S.ButtonListPage onClick={() => goToPokemonListPage(navigate)}>
            Todos os Pokemons
          </S.ButtonListPage>
        ) : (
          <S.ButtonContainer>
            <S.Button
              backgroundColor="#33A4F5"
              onClick={() => goToPokedexPage(navigate)}
            >
              Pokedex
            </S.Button>
          </S.ButtonContainer>
        )}
        <S.LogoContainer>
          <S.Logo src={logo} alt="Logo Pokémon" />
        </S.LogoContainer>
        {location.pathname.includes("detail") &&
          (isPokemonInPokedex ? (
            <S.ButtonDetail
              backgroundColor="#FF6262"
              onClick={() => removePokemon(pokemon.data?.id)}
            >
              Remover da Pokedex
            </S.ButtonDetail>
          ) : (
            <S.ButtonDetail
              backgroundColor="#33A4F5"
              onClick={() => addPokemonToCart(pokemon)}
            >
              Adicionar a Pokedex
            </S.ButtonDetail>
          ))}
      </S.Header>
    </>
  );
};

export default Header;
