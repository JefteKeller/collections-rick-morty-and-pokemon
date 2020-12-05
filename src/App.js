import "./App.css";
import "antd/dist/antd.css";

import { Switch, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import RickAndMorty from "./pages/RickAndMorty";
import Pokemon from "./pages/Pokemon";

const App = () => {
	return (
		<div className="App ">
			<TopMenu />
			<header className="App-header">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route exact path="/rick-and-morty">
						<RickAndMorty />
					</Route>
					<Route exact path="/rick-and-morty/favorites">
						<Favorites />
					</Route>

					<Route exact path="/pokemon">
						<Pokemon />
					</Route>
					<Route exact path="/pokemon/favorites">
						<Favorites />
					</Route>
				</Switch>
			</header>
		</div>
	);
};

export default App;
