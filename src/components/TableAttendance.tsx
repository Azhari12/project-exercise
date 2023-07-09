import { BsFilter } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FC } from "react";
import {
	IoIosArrowForward,
	IoIosArrowBack,
	IoIosArrowDown,
	IoIosArrowUp,
} from "react-icons/io";

export const TableAttendance: FC = () => {
	const data = [
		{
			name: "Tony",
			timeIn: "09.00",
			locationIn: "Singapore",
			timeOut: "09.00",
			locationOut: "Singapore",
			status: "Early Checkin",
		},
		{
			name: "Tony",
			timeIn: "09.00",
			locationIn: "Singapore",
			timeOut: "09.00",
			locationOut: "Singapore",
			status: "On Time",
		},
		{
			name: "Tony",
			timeIn: "09.00",
			locationIn: "Singapore",
			timeOut: "09.00",
			locationOut: "Singapore",
			status: "Absent",
		},
		{
			name: "Tony",
			timeIn: "09.00",
			locationIn: "Singapore",
			timeOut: "09.00",
			locationOut: "Singapore",
			status: "Late Checkin",
		},
		{
			name: "Tony",
			timeIn: "09.00",
			locationIn: "Singapore",
			timeOut: "09.00",
			locationOut: "Singapore",
			status: "Early Checkout",
		},
	];
	return (
		<div className="flex flex-col w-full shadow ring-1 ring-black ring-opacity-5 rounded-lg  mt-5">
			<div className="flex relative justify-center items-center p-5">
				<div className="flex justify-center items-center font-bold">
					<a className=" bg-@blue4 rounded-full p-1">
						<IoIosArrowBack />
					</a>
					<div className=" mx-3 ">Tue, 16 Aug 2021</div>
					<a className=" bg-@blue4 rounded-full p-1">
						<IoIosArrowForward />
					</a>
				</div>
				<button className="font-semibold absolute right-5 flex justify-center items-center border p-2 rounded-md">
					<BsFilter />
					<p className="ml-2">More Filter</p>
				</button>
			</div>
			<div className=" w-full">
				<table className=" w-full table-fixed font-medium">
					<thead className=" bg-@blue4">
						<tr>
							<td className="border p-3 w-[30%]" rowSpan={2}>
								<div className="flex  justify-between items-center">
									<p>Employee Name</p>
									<button className="flex flex-col text-xs">
										<IoIosArrowUp />
										<IoIosArrowDown />
									</button>
								</div>
							</td>
							<td className="border text-center w-[20%] p-3" colSpan={2}>
								Check In
							</td>
							<td className="border text-center w-[20%] p-3" colSpan={2}>
								Check Out
							</td>
							<td className="border p-3 w-[15%]" rowSpan={2}>
								<div className="flex  justify-between items-center">
									<p>Status</p>
									<button className="flex flex-col text-xs">
										<IoIosArrowUp />
										<IoIosArrowDown />
									</button>
								</div>
							</td>
							<td className="border p-3 w-[15%]" rowSpan={2}>
								Action
							</td>
						</tr>
						<tr>
							<td className="border p-3">Time</td>
							<td className="border p-3">Location</td>
							<td className="border p-3">Time</td>
							<td className="border p-3">Location</td>
						</tr>
					</thead>
					<tbody>
						{data.map((d) => {
							return (
								<tr>
									<td className="p-3 border">{d.name}</td>
									<td className="p-3 border">{d.timeIn}</td>
									<td className="p-3 border">{d.locationIn}</td>
									<td className="p-3 border">{d.timeOut}</td>
									<td className="p-3 border">{d.locationOut}</td>
									<td className="p-3 border text-center flex justify-center items-center">
										<div
											className={` p-1 w-[80%] rounded-full ${
												d.status == "Early Checkin"
													? " text-green-700 bg-@gree2"
													: d.status == "On Time"
													? " text-blue-400 bg-@blue4"
													: d.status == "Absent"
													? " text-@red bg-@red2"
													: d.status == "Late Checkin"
													? " text-@purple bg-@purple2"
													: d.status == "Early Checkout"
													? "text-@choklat bg-@choklat2"
													: d.status == "Late Checkout"
													? " text-@orange bg-@orange2"
													: ""
											}`}
										>
											{d.status}
										</div>
									</td>
									<td className="p-3 border">
										<a className=" flex justify-between items-center">
											<p className=" text-blue-400">Details</p>
											<IoIosArrowDown />
										</a>
									</td>
								</tr>
							);
						})}
						<tr>
							<td className="p-3 border">Tony</td>
							<td className="p-3 border">09.00</td>
							<td className="p-3 border">
								<a className="flex justify-between items-center text-@blue2">
									<BiMap />
									<p>View Map</p>
								</a>
							</td>
							<td className="p-3 border">09.00</td>
							<td className="p-3 border">
								<a className="flex justify-between items-center text-@blue2">
									<BiMap />
									<p>View Map</p>
								</a>
							</td>
							<td className="p-3 border text-center flex justify-center items-center">
								<div
									className={`p-1 w-[80%] rounded-full text-@orange bg-@orange2`}
								>
									Late Checkout
								</div>
							</td>
							<td className="p-3 border">
								<a className=" flex justify-between items-center">
									<p className=" text-blue-400">Details</p>
									<IoIosArrowDown />
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex justify-between items-center p-5 font-semibold text-gray-600">
				<div className="flex items-center  ">
					<button className=" py-2 px-3 border rounded-lg mr-3">
						Previous
					</button>
					<button className=" py-2 px-3 border rounded-lg">Next</button>
				</div>
				<p>Page 1 of 10</p>
			</div>
		</div>
	);
};
