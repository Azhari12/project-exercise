/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Pie, measureTextWidth } from "@ant-design/plots";

interface Props {
	color: string[];
	data: {
		type: string;
		value: number;
	}[];
}

const PieGraph: FC<Props> = (props) => {
	const { color, data } = props;
	function renderStatistic(containerWidth: number, text: string, style: any) {
		const { width: textWidth, height: textHeight } = measureTextWidth(
			text,
			style
		);
		const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

		let scale = 1;

		if (containerWidth < textWidth) {
			scale = Math.min(
				Math.sqrt(
					Math.abs(
						Math.pow(R, 2) /
							(Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
					)
				),
				1
			);
		}

		const textStyleStr = `width:${containerWidth}px;`;
		return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
			scale < 1 ? 1 : "inherit"
		};">${text}</div>`;
	}

	const config = {
		color: color,
		appendPadding: 10,
		data,
		angleField: "value",
		colorField: "type",
		radius: 1,
		innerRadius: 0.64,
		meta: {
			value: {
				formatter: (v: any) => `${v}`,
			},
		},
		label: {
			type: "inner",
			offset: "-50%",
			style: {
				textAlign: "center",
			},
			autoRotate: false,
			content: "{value}",
		},
		statistic: {
			title: {
				style: {
					textAlign: "center",
					fontSize: "2vw",
				},
				offsetY: -4,
				customHtml: (container: any, _view: any, datum: any) => {
					const { width, height } = container.getBoundingClientRect();
					const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
					const text = datum ? datum.type : "Total";
					return renderStatistic(d, text, {
						fontSize: 28,
					});
				},
			},
			content: {
				offsetY: 4,
				style: {
					fontSize: "2vw",
					textAlign: "center",
				},
				customHtml: (container: any, _view: any, datum: any, data: any) => {
					const { width } = container.getBoundingClientRect();
					const text = datum
						? ` ${datum.value}`
						: ` ${data.reduce((r: any, d: any) => r + d.value, 0)}`;
					return renderStatistic(width, text, {
						fontSize: 32,
					});
				},
			},
		},
		interactions: [
			{
				type: "element-selected",
			},
			{
				type: "element-active",
			},
			{
				type: "pie-statistic-active",
			},
		],
	};
	const viewportWidth = window.innerWidth; // Dapatkan lebar viewport saat ini
	const viewportHeight = window.innerHeight; // Dapatkan tinggi viewport saat ini
	const baseWidth = 250;
	const baseHeight = 200;

	const width = `${(baseWidth / viewportWidth) * 100}vw`;
	const height = `${(baseHeight / viewportHeight) * 100}vh`;

	return <Pie {...config} style={{ width, height }} />;
};

export default PieGraph;
