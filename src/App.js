import "./App.css";
import "antd/dist/antd.css";

import { Switch, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import RickAndMorty from "./pages/RickAndMorty";
import Pokemon from "./pages/Pokemon";

const App = () => {
	return (
		<div className="App">
			<TopMenu />
			<header className="App-header">
				<Switch>
					<Route exact path="/">
						<h2>Home</h2>
					</Route>
					<Route exact path="/rick-and-morty">
						<RickAndMorty />
					</Route>
					<Route exact path="/pokemon">
						<Pokemon />
					</Route>
				</Switch>
			</header>
		</div>
	);
};

export default App;
