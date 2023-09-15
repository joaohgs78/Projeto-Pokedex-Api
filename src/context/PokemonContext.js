import { useEffect, useState, createContext } from "react";
import { BASE_URL } from "../constants/BASE_URL";
import axios from "axios";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)



  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    let pokemonPoints = [];

    for (let i = 1; i <= 24; i++) {
      pokemonPoints.push(`${BASE_URL}/${i}`);
    }
    await axios
      .all(pokemonPoints.map((pokemon) => axios.get(pokemon)))
      .then((response) => {
        setPokemons(response);
        console.log(response);
        setIsLoading(false)

      })
      .catch((error) => {
        console.log(error);
       setIsLoading(false)
       setIsError(true)
      });
  };

  

  return (
    <PokemonContext.Provider value={{ pokemons, getPokemons, isLoading, isError }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
