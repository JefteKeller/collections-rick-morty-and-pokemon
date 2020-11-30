import "./styles.css";
import { LoadingOutlined } from "@ant-design/icons";

const CharContainer = ({ charList, image, children }) => {
	if (!charList) {
		return (
			<div className="charContainer">
				<div className="titleImage">
					<img alt={image.alt} src={image.url} />
				</div>
				<LoadingOutlined />
			</div>
		);
	} else {
		return (
			<div className="charContainer">
				<div className="titleImage">
					<img alt={image.alt} src={image.url} />
				</div>
				{children}
			</div>
		);
	}
};

export default CharContainer;
