import React from "react";
import FavoriteContext from "../contexts/favoritesContext";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div className="navbar-text">
      <h2>Bienvenido a la Pokedex</h2>
      <p>¡Tu enciclopedia electrónica portátil! Aquí puedes buscar y registrar automáticamente las fichas</p>
        <p> de todas las diversas especies Pokémon vistas y capturadas durante tu gran viaje como entrenadores.</p>
      </div>
      <div className="num">&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
