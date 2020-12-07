import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Chart from "../pages/Chart";

import RickAndMorty from "../pages/RickAndMorty";
import Pokemon from "../pages/Pokemon";

const Routes = () => {
	return (
		<AnimatePresence>
			<Switch>
				<Route exact path="/" component={Home} />

				<Route exact path="/rick-and-morty" component={RickAndMorty} />
				<Route exact path="/rick-and-morty/favorites" component={Favorites} />

				<Route exact path="/pokemon" component={Pokemon} />
				<Route exact path="/pokemon/favorites" component={Favorites} />

				<Route exact path="/chart" component={Chart} />
			</Switch>
		</AnimatePresence>
	);
};

export default Routes;
