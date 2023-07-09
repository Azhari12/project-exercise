import { useCookies } from "react-cookie";
import { FC } from "react";

import { AttedancesReport, LeaveReport } from "@/components/CardRerport";
import { DownLineGraph, UpLineGraph } from "@/components/CardLineGraph";
import { Search } from "@/components/Search";
import PieGraph from "@/components/PieGraph";

const Home: FC = () => {
	const [cookies, ,] = useCookies(["userData"]);
	return (
		<div className="flex flex-col">
			<div className="flex justify-between ">
				<h1 className=" font-bold text-xl text-@blue">My Company</h1>
				<div className="form-control flex flex-row relative w-[25%]">
					<Search />
				</div>
			</div>
			<div className=" my-5">
				<p className=" text-2xl font-semibold">
					Welcome, {cookies.userData.name}
				</p>
				<p className=" text-normal text-gray-400 font-semibold">
					Your Working at ABC Company
				</p>
			</div>
			<div className=" shadow-md ring-1 ring-black ring-opacity-5 rounded-lg pt-5 px-5 pb-10">
				<p className=" text-2xl font-semibold text-gray-600">
					Company Overview
				</p>
				<div className="flex  w-full">
					<div className="w-[40%]">
						<UpLineGraph
							title="Total Employeess"
							total="2,420"
							condition="425"
							date="last month"
						/>
						<DownLineGraph
							title="Total Department"
							total="100"
							condition="52"
							date="last month"
						/>
					</div>
					<div className="w-[55%] ml-5 mt-5 rounded-lg shadow-md ring-1 ring-black ring-opacity-5 p-5">
						<p className=" font-bold">Diversity</p>
						<div className="flex justify-between items-center mt-5 ">
							<div className="w-[49%] rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 flex flex-col items-center justify-center p-3">
								<p className=" font-bold">Gender</p>
								<PieGraph
									data={[
										{ type: "Male", value: 60 },
										{ type: "Female", value: 40 },
									]}
									color={["#0055ff", "#fea3b4"]}
								/>
							</div>
							<div className="w-[49%] rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 flex flex-col items-center justify-center p-3">
								<p className=" font-bold">Status</p>
								<PieGraph
									data={[
										{ type: "Married", value: 30 },
										{ type: "Not Married", value: 70 },
									]}
									color={["#7101ff", "#84caff"]}
								/>{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
			<AttedancesReport />
			<LeaveReport />
		</div>
	);
};

export default Home;
