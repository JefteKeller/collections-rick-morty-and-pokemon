import "./App.css";
import "antd/dist/antd.css";

import TopMenu from "./components/TopMenu";
import Routes from "./Routes";

const App = () => {
	return (
		<div className="App ">
			<TopMenu />
			<header className="App-header">
				<Routes />
			</header>
		</div>
	);
};

export default App;
