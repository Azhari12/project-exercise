import React from "react";
import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import { FieldTimeOutlined, UserOutlined } from "@ant-design/icons";

const getListData = (value: Dayjs) => {
	let listData;
	switch (value.date()) {
		case 8:
			listData = [
				{ icon: <UserOutlined />, content: "5" },
				{ icon: <FieldTimeOutlined />, content: "14 Hours 30 Minutes" },
			];
			break;
		case 23:
			listData = [
				{ icon: <UserOutlined />, content: "20" },
				{ icon: <FieldTimeOutlined />, content: "10 Hours 5 Minutes" },
			];
			break;

		default:
	}
	return listData || [];
};

const MonthCalender: React.FC = () => {
	const dateCellRender = (value: Dayjs) => {
		const listData = getListData(value);
		return (
			<ul className="events bg-[#f5fafe] p-1">
				{listData.map((item, index) => (
					<li key={item.content}>
						<div className="flex items-center text-xs">
							{item.icon}
							{index == 0 ? (
								<div className=" ml-1">
									<p>Employeess Working </p>
									<p className=" font-bold">{item.content}</p>
								</div>
							) : (
								<div className=" ml-1">
									<p>Working Hours</p>
									<p className=" font-bold">{item.content}</p>
								</div>
							)}
						</div>
					</li>
				))}
			</ul>
		);
	};

	const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
		if (info.type === "date") return dateCellRender(current);
		return info.originNode;
	};

	return (
		<div className="flex flex-col">
			<button className=" bg-@blue2 py-2 px-3 rounded-lg text-white self-end">
				Set Schedule
			</button>
			<Calendar mode="month" cellRender={cellRender} />
		</div>
	);
};

export default MonthCalender;
