import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import MonthCalender from "@/components/MonthCalender";
import BiWeekly from "@/components/BiWeekly";

const onChange = (key: string) => {
	console.log(key);
};

const items: TabsProps["items"] = [
	{
		key: "1",
		label: `Monthly`,
		children: <MonthCalender />,
	},
	{
		key: "2",
		label: `Biweekly`,
		children: <BiWeekly />,
	},
	{
		key: "3",
		label: `Weekly`,
		children: `Content of Tab Pane 3`,
	},
	{
		key: "4",
		label: `Daily`,
		children: `Content of Tab Pane 4`,
	},
];

const Schedule: React.FC = () => {
	return (
		<div>
			<h1 className=" font-bold text-xl text-@blue">My Company</h1>
			<Tabs
				defaultActiveKey="1"
				items={items}
				onChange={onChange}
				className=" mt-5 border text-@blue font-semibold p-3"
			/>
		</div>
	);
};

export default Schedule;
