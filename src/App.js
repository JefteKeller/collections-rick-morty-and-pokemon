import "./App.css";
import "antd/dist/antd.css";

import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import RickAndMorty from "./pages/RickAndMorty";
import Pokemon from "./pages/Pokemon";

const App = () => {
	const [rickFavorites, setRickFavorites] = useState([]);
	const [pokemonFavorites, setPokemonFavorites] = useState([]);

	return (
		<div className="App ">
			<TopMenu />
			<header className="App-header">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route exact path="/rick-and-morty">
						<RickAndMorty
							favoritesList={rickFavorites}
							setFavorites={setRickFavorites}
						/>
					</Route>
					<Route exact path="/rick-and-morty/favorites">
						<Favorites
							favoritesList={rickFavorites}
							setFavorites={setRickFavorites}
						/>
					</Route>

					<Route exact path="/pokemon">
						<Pokemon
							favoritesList={pokemonFavorites}
							setFavorites={setPokemonFavorites}
						/>
					</Route>
					<Route exact path="/pokemon/favorites">
						<Favorites
							favoritesList={pokemonFavorites}
							setFavorites={setPokemonFavorites}
						/>
					</Route>
				</Switch>
			</header>
		</div>
	);
};

export default App;
