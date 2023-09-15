import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonListPage from "../pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/detailPage" element={<PokemonDetailPage />} />
        <Route path="/pokedexPage" element={<PokedexPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
