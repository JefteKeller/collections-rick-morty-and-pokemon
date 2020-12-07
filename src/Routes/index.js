import { Switch, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

import RickAndMorty from "../pages/RickAndMorty";
import Pokemon from "../pages/Pokemon";

const Routes = () => {
	return (
		<AnimateSharedLayout>
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
		</AnimateSharedLayout>
	);
};

export default Routes;
