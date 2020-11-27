import "./App.css";
import "antd/dist/antd.css";

import { Switch, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import RickAndMorty from "./pages/RickAndMorty";
import Pokemon from "./pages/Pokemon";

const App = () => {
	return (
		<div className="App ">
			<TopMenu />
			<header className="App-header">
				<Switch>
					<Route exact path="/">
						<h2>Home - WIP</h2>
					</Route>
					<Route exact path="/rick-and-morty">
						<RickAndMorty />
					</Route>
					<Route exact path="/rick-and-morty/favorites">
						<h2>Favoritos Rick And Morty - WIP</h2>
					</Route>
					<Route exact path="/pokemon">
						<Pokemon />
					</Route>
					<Route exact path="/pokemon/favorites">
						<h2>Favoritos Pokemon - WIP</h2>
					</Route>
				</Switch>
			</header>
		</div>
	);
};

export default App;
