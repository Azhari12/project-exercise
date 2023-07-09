import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FC } from "react";

import LineGraph from "@/components/LineGraph";

interface Props {
	title: string;
	total: string;
	condition: string;
	date: string;
}

export const UpLineGraph: FC<Props> = (props) => {
	const { title, total, condition, date } = props;
	return (
		<div className=" relative flex rounded-lg shadow-md ring-1 ring-black ring-opacity-5 mt-5 p-3 w-full">
			<div className="flex flex-col justify-around h-[8rem]">
				<p className=" font-bold">{title}</p>
				<p className=" font-semibold text-3xl">{total}</p>
				<p className=" font-bold text-gray-400 flex items-center justify-around">
					<span className="text-@green">
						<AiOutlineArrowUp />
					</span>
					<span className="text-@green mx-2">{condition}</span> vs {date}
				</p>
			</div>
			<div className=" absolute right-5 bottom-5">
				<LineGraph
					lineColor="#2abd79"
					data={[0, 30, 45, 25, 70, 90]}
					color="#ecfdf3"
				/>
			</div>
		</div>
	);
};

export const DownLineGraph: FC<Props> = (props) => {
	const { title, total, condition, date } = props;
	return (
		<div className=" mt-5 relative flex rounded-lg shadow-md ring-1 ring-black ring-opacity-5 p-3 w-full">
			<div className="flex flex-col justify-around h-[8rem]">
				<p className=" font-bold">{title}</p>
				<p className=" font-semibold text-3xl">{total}</p>
				<p className=" font-bold text-gray-400 flex items-center justify-around">
					<span className="text-@red">
						<AiOutlineArrowDown />
					</span>
					<span className="text-@red mx-2">{condition}</span> vs {date}
				</p>
			</div>
			<div className=" absolute right-5 bottom-5">
				<LineGraph
					lineColor="#2abd79"
					data={[90, 70, 25, 45, 30, 0]}
					color="#fef3f2"
				/>
			</div>
		</div>
	);
};
