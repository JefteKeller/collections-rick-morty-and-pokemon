import { Pie } from "react-chartjs-2";

const Chart = () => {
	const data = {
		labels: ["Rick and Morty", "Pokemon"],
		datasets: [
			{
				data: [671, 4100],
				backgroundColor: ["#FF6384", "#36A2EB"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB"],
			},
		],
	};

	return (
		<div>
			<Pie data={data} />
		</div>
	);
};

export default Chart;
