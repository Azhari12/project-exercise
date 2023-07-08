import React from "react";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import {
	FieldTimeOutlined,
	HomeOutlined,
	UserOutlined,
} from "@ant-design/icons";

const getListData = (value: Dayjs) => {
	let listData;
	switch (value.date()) {
		case 8:
			listData = [
				{ icon: <UserOutlined />, content: "This is warning event." },
				{ icon: <FieldTimeOutlined />, content: "This is usual event." },
			];
			break;
		case 10:
			listData = [
				{ icon: <UserOutlined />, content: "This is warning event." },
				{ icon: <FieldTimeOutlined />, content: "This is usual event." },
			];
			break;
		case 15:
			listData = [
				{ icon: <UserOutlined />, content: "This is warning event." },
				{ icon: <FieldTimeOutlined />, content: "This is usual event." },
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
			<ul className="events bg-[#f5fafe]">
				{listData.map((item) => (
					<li key={item.content}>
						<div className="flex">
							{item.icon}
							{item.content}
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
			<Calendar mode="month" cellRender={cellRender} className="" />
		</div>
	);
};

export default MonthCalender;
