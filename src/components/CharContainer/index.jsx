import "./styles.css";
import { LoadingOutlined } from "@ant-design/icons";

const CharContainer = ({ className, charList, image, alt, children }) => {
	if (!charList) {
		return (
			<div className={className}>
				<div className="titleImage">
					<img alt={alt} src={image} />
				</div>
				<LoadingOutlined />
			</div>
		);
	} else {
		return (
			<div className={className}>
				<div className="titleImage">
					<img alt={alt} src={image} />
				</div>
				{children}
			</div>
		);
	}
};

export default CharContainer;
