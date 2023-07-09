import { AiOutlineAppstore, AiOutlineArrowUp } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheckToSlot } from "react-icons/fa6";
import { FC, useEffect, useState } from "react";
import { RiForbidLine } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";
import { TiCalendar } from "react-icons/ti";
import { TbMoodSick } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { BiCheck } from "react-icons/bi";

import ColoumnGraph from "./ColoumnGraph";

interface Type {
	name: string;
	type: string;
	total: string;
}

export const LeaveReport: FC = () => {
	const [data, setData] = useState<Type[]>([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		const dataTable = [
			{
				name: "Olivia Rhye",
				type: "Medical Leave",
				total: "20 Days",
			},
			{
				name: "Tony",
				type: "Medical Leave",
				total: "20 Days",
			},
			{
				name: "Jony",
				type: "Medical Leave",
				total: "20 Days",
			},
			{
				name: "Budi",
				type: "Medical Leave",
				total: "20 Days",
			},
			{
				name: "Yudi",
				type: "Medical Leave",
				total: "20 Days",
			},
			{
				name: "Olivia Rhye",
				type: "Medical Leave",
				total: "20 Days",
			},
			{
				name: "Yudi Saputra",
				type: "Medical Leave",
				total: "20 Days",
			},
			{
				name: "Ari",
				type: "Medical Leave",
				total: "20 Days",
			},
			{
				name: "Beno",
				type: "Medical Leave",
				total: "20 Days",
			},
		];

		setData(dataTable);
	};

	return (
		<div className="relative flex justify-between mt-5 p-5 shadow-md ring-1 ring-black ring-opacity-5 rounded-lg">
			<div className="w-[49%]">
				<div className="flex items-center">
					<div className=" text-lg">
						<TiCalendar />
					</div>
					<p className=" text-base font-semibold text-gray-600 p-3">
						Leave Report
					</p>
				</div>
				<div className="flex w-full justify-between p-5">
					<div className="flex flex-col justify-end ">
						<p className=" font-semibold text-3xl">2,420</p>
						<p className=" font-bold text-gray-400 flex items-center justify-around mt-5">
							<span className="text-@green">
								<AiOutlineArrowUp />
							</span>
							<span className="text-@green mx-2">440</span> vs yesterday
						</p>
					</div>

					<ColoumnGraph />
				</div>
				<div className="p-5 border rounded-xl">
					<p className=" text-base font-semibold text-gray-600 mb-2">
						Top leave type taken
					</p>
					<div className="flex justify-between font-medium text-gray-500">
						<div className="flex flex-col items-center">
							<div className="flex items-center">
								<div className="mr-2 text-@blue2 text-lg bg-@blue3 p-1 rounded">
									<FiCalendar />
								</div>
								<p>Annual</p>
							</div>
							<p className=" text-xl font-bold text-black mt-3">2,100</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="flex items-center">
								<div className="mr-2  text-@purple text-lg bg-@purple2 p-1 rounded">
									<TbMoodSick />
								</div>
								<p>Medical</p>
							</div>
							<p className=" text-xl font-bold text-black mt-3">250</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="flex items-center">
								<div className="mr-2  text-@orange text-lg bg-@red2 p-1 rounded">
									<AiOutlineAppstore />
								</div>
								<p>Other</p>
							</div>
							<p className=" text-xl font-bold text-black mt-3">100</p>
						</div>
					</div>
					<div className="flex w-full mt-5">
						<div className="flex-initial h-2 rounded-l-full w-[85.71%] bg-@blue2">
							{" "}
						</div>
						<div className="flex-initial h-2 w-[10.20%] bg-@purple"> </div>
						<div className="flex-initial h-2 rounded-r-full w-[4.08%] bg-@orange">
							{" "}
						</div>
					</div>
				</div>
			</div>
			<div className="w-1 h-100  bg-gray-200 rounded-full"></div>
			<div className=" w-[49%] flex flex-col p-5">
				<div className="mt-5 flex justify-center items-center font-semibold">
					<a className=" bg-@blue4 rounded-full p-1">
						<IoIosArrowBack />
					</a>
					<div className=" mx-3 ">Tue, 16 Aug 2021</div>
					<a className=" bg-@blue4 rounded-full p-1">
						<IoIosArrowForward />
					</a>
				</div>
				<div className="flex flex-col py-5 font-semibold text-gray-600">
					<div className="flex bg-@blue4 p-3">
						<p className="w-[33.33%]">Employee Name</p>
						<p className="w-[33.33%]">Type of Leave</p>
						<p className="w-[33.33%]">Total Days</p>
					</div>
					<div className=" max-h-[13rem] overflow-auto ">
						{data.map((data) => {
							return (
								<div className="flex p-3">
									<div className="w-[33.33%] flex items-center">
										<img
											src="https://qph.cf2.quoracdn.net/main-thumb-161841968-200-xtisrhulnnwiuyeojsvojtoqjrqsglrj.jpeg"
											width={30}
											height={30}
											className=" rounded-full mr-3"
										/>
										<p>{data.name}</p>
									</div>
									<p className="w-[33.33%]">{data.type}</p>
									<p className="w-[33.33%]">{data.total}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<a className="absolute right-3 bottom-3 text-@blue2">Go to leave</a>
		</div>
	);
};

export const AttedancesReport: FC = () => {
	return (
		<div className="relative flex justify-between mt-5 p-5 shadow-md ring-1 ring-black ring-opacity-5 rounded-lg">
			<div className="w-[49%]">
				<div className="flex items-center">
					<div className=" text-lg">
						<FaCheckToSlot />
					</div>
					<p className=" text-base font-semibold text-gray-600 p-3">
						Attedance Report
					</p>
				</div>
				<div className="flex w-full justify-between p-5">
					<div className="flex flex-col justify-end ">
						<p className=" font-semibold text-3xl">2,420</p>
						<p className=" font-bold text-gray-400 flex items-center justify-around mt-5">
							<span className="text-@green">
								<AiOutlineArrowUp />
							</span>
							<span className="text-@green mx-2">425</span> vs last month
						</p>
					</div>

					<ColoumnGraph />
				</div>
				<div className="p-5 border rounded-xl">
					<div className="flex justify-between font-medium text-gray-500">
						<div className="flex flex-col items-center">
							<div className="flex items-center">
								<div className="mr-2 text-@blue2 text-lg bg-@blue3 p-1 rounded">
									<BiCheck />
								</div>
								<p>Present</p>
							</div>
							<p className=" text-xl font-bold text-black mt-3">2,100</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="flex items-center">
								<div className="mr-2 text-@purple text-lg bg-@purple2 p-1 rounded">
									<RxCross2 />
								</div>
								<p>Late</p>
							</div>
							<p className=" text-xl font-bold text-black mt-3">250</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="flex items-center">
								<div className="mr-2 text-@red text-lg bg-@red2 p-1 rounded">
									<RiForbidLine />
								</div>
								<p>Absen</p>
							</div>
							<p className=" text-xl font-bold text-black mt-3">100</p>
						</div>
					</div>
					<div className="flex w-full mt-5">
						<div className="flex-initial h-2 rounded-l-full w-[85.71%] bg-@blue2">
							{" "}
						</div>
						<div className="flex-initial h-2 w-[10.20%] bg-@purple"> </div>
						<div className="flex-initial h-2 rounded-r-full w-[4.08%] bg-@red">
							{" "}
						</div>
					</div>
				</div>
			</div>
			<div className="w-1 h-100  bg-gray-200 rounded-full"></div>
			<div className=" w-[49%] flex flex-col p-5">
				<div className="flex justify-between mt-10">
					<div className="flex flex-col text-gray-400 font-semibold">
						<p>All Users Statistic</p>
						<p className="mt-3">
							<span className=" text-black  text-2xl font-semibold">
								25,256
							</span>{" "}
							Users
						</p>
					</div>
					<div className="flex flex-col text-gray-400 font-semibold">
						<p>Average Visit Time</p>
						<p className="mt-3">
							<span className=" text-black  text-2xl font-semibold">2</span>{" "}
							Hours{" "}
							<span className=" text-black  text-2xl font-semibold">35</span>{" "}
							Minutes
						</p>
					</div>
				</div>
				<div className="flex flex-col text-gray-400 font-semibold mt-5">
					<p>Top Visited Area</p>
					<div className="flex mt-3">
						<div className="flex-initial h-4 rounded-l-full w-[35%] bg-@yellow">
							{" "}
						</div>
						<div className="flex-initial h-4 w-[10%] bg-@blue2"> </div>
						<div className="flex-initial h-4 w-[15%] bg-@green"> </div>
						<div className="flex-initial h-4 w-[15%] bg-@orange"> </div>
						<div className="flex-initial h-4 w-[15%] bg-@purple"> </div>
						<div className="flex-initial h-4 rounded-r-full w-[10%] bg-@gray">
							{" "}
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="flex flex-col w-[50%]">
						<div className="flex items-center mt-3">
							<div className=" w-4 h-4 bg-@yellow mr-3"></div>
							<p>Kebayoran</p>
						</div>
						<div className="flex items-center mt-3">
							<div className=" w-4 h-4 bg-@blue2 mr-3"></div>
							<p>Kelurahan</p>
						</div>
						<div className="flex items-center mt-3">
							<div className=" w-4 h-4 bg-@green mr-3"></div>
							<p>Marghayu</p>
						</div>
					</div>
					<div className="flex flex-col w-[50%]">
						<div className="flex items-center mt-3">
							<div className=" w-4 h-4 bg-@orange mr-3"></div>
							<p>Sawangan Lama</p>
						</div>
						<div className="flex items-center mt-3">
							<div className=" w-4 h-4 bg-@purple mr-3"></div>
							<p>Cakung</p>
						</div>
						<div className="flex items-center mt-3">
							<div className=" w-4 h-4 bg-@gray mr-3"></div>
							<p>Other</p>
						</div>
					</div>
				</div>
			</div>
			<a className="absolute right-3 bottom-3 text-@blue2">Go to attendance</a>
		</div>
	);
};
