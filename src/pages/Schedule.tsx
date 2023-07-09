import type { TabsProps } from "antd";
import { Tabs } from "antd";
import React from "react";

import MonthCalender from "@/components/MonthCalender";
import { Search } from "@/components/Search";
import BiWeekly from "@/components/BiWeekly";
import { Bell } from "@/components/Bell";
import Weekly from "@/components/Weekly";
import Daily from "@/components/Daily";

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
		children: <Weekly />,
	},
	{
		key: "4",
		label: `Daily`,
		children: <Daily />,
	},
];

const Schedule: React.FC = () => {
	return (
		<div>
			<div className="flex justify-between ">
				<h1 className=" font-bold text-xl text-@blue">My Company</h1>
				<div className="form-control flex flex-row relative w-[25%]">
					<Bell />
					<Search />
				</div>
			</div>
			<Tabs
				defaultActiveKey="1"
				items={items}
				className=" mt-5 border text-@blue font-semibold p-3"
			/>
		</div>
	);
};

export default Schedule;
