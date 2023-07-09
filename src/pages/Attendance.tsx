import { FiUpload } from "react-icons/fi";
import { useCookies } from "react-cookie";
import { FC } from "react";

import { DownLineGraph, UpLineGraph } from "@/components/CardLineGraph";
import { TableAttendance } from "@/components/TableAttendance";
import { Search } from "@/components/Search";
import { Bell } from "@/components/Bell";

const Attendance: FC = () => {
	const [cookies, ,] = useCookies(["userData"]);
	return (
		<div className="flex flex-col">
			<div className="flex justify-between ">
				<h1 className=" font-bold text-xl text-@blue">My Company</h1>
				<div className="form-control flex flex-row relative w-[25%]">
					<Bell />
					<Search />
				</div>
			</div>
			<div className=" my-5 flex justify-between items-center">
				<div>
					<p className=" text-2xl font-semibold">
						Welcome back, {cookies.userData.name}
					</p>
					<p className=" text-normal text-gray-400 font-semibold">
						Your Working at ABC Company
					</p>
				</div>
				<div>
					<button className=" p-2 border rounded-md font-semibold flex justify-center items-center">
						<span className="mr-2">
							<FiUpload />
						</span>
						Export
					</button>
				</div>
			</div>
			<div className="flex justify-between">
				<div className=" w-full">
					<UpLineGraph
						title="Present Employeess"
						total="2,420"
						condition="450"
						date="yesterday"
					/>
				</div>
				<div className=" w-full mx-3">
					<DownLineGraph
						title="Late Employeess"
						total="1,210"
						condition="200"
						date="yesterday"
					/>
				</div>
				<div className=" w-full">
					<UpLineGraph
						title="Employeess on Leaves"
						total="316"
						condition="10"
						date="yesterday"
					/>
				</div>
			</div>
			<TableAttendance />
		</div>
	);
};

export default Attendance;
