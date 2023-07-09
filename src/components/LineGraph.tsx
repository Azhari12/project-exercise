import { FC } from "react";
import { TinyArea } from "@ant-design/plots";

interface Props {
	color: string;
	lineColor: string;
	data: number[];
}

const LineGraph: FC<Props> = (props) => {
	const { color, data } = props;

	const config = {
		height: 30,
		width: 30,
		autoFit: true,
		data,
		smooth: true,
		color: color,
	};
	return <TinyArea {...config} style={{ width: 140, height: 70 }} />;
};

export default LineGraph;
