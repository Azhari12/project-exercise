import { Column } from "@ant-design/plots";
import { FC } from "react";

const ColoumnGraph: FC = () => {
	const data = [
		{
			type: "Mo",
			sales: 4,
		},
		{
			type: "Tu",
			sales: 7,
		},
		{
			type: "We",
			sales: 5,
		},
		{
			type: "Th",
			sales: 2,
		},
		{
			type: "Fr",
			sales: 8,
		},
		{
			type: "Sa",
			sales: 6,
		},
		{
			type: "Su",
			sales: 9,
		},
	];
	const config = {
		data,
		color: "#d9d6fe",
		xField: "type",
		yField: "sales",
		xAxis: {
			label: {
				autoHide: true,
				autoRotate: false,
			},
		},
		meta: {
			type: {
				alias: "Attedances",
			},
			sales: {
				alias: "Attedances",
			},
		},
		minColumnWidth: 20,
		maxColumnWidth: 20,
	};
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;
	const baseWidth = 250;
	const baseHeight = 100;

	const width = `${(baseWidth / viewportWidth) * 100}vw`;
	const height = `${(baseHeight / viewportHeight) * 100}vh`;

	return <Column {...config} style={{ width, height }} />;
};

export default ColoumnGraph;
