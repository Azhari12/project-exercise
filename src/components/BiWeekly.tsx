import { FC, useState } from "react";
import { RxPencil1 } from "react-icons/rx";
import { PiTrash } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
const BiWeekly: FC = () => {
	const [data] = useState([1, 2, 3, 4, 5]);
	const scheduleData = [
		{
			starTime: "7.30am",
			endTime: "3.25pm",
		},
		{
			starTime: "7.00am",
			endTime: "3.25pm",
		},
		{
			starTime: "6.45am",
			endTime: "3.25pm",
		},
		{
			starTime: "6.35am",
			endTime: "3.25pm",
		},
		{
			starTime: "7.30am",
			endTime: "12.15pm",
		},
		{
			starTime: "7.30am",
			endTime: "10.30pm",
		},
		{
			starTime: "9.30am",
			endTime: "3.25pm",
		},
		{
			starTime: "7.30am",
			endTime: "3.25am",
		},
	];
	return (
		<div className=" text-black">
			<div className="flex w-full justify-between items-center">
				<div className="w-full max-w-[15rem] ">
					<select className="select select-bordered w-full max-w-[15rem] text-base font-normal">
						<option disabled selected>
							Select Department
						</option>
					</select>
				</div>
				<div className="flex w-full justify-end">
					<div className="flex justify-around items-center self-end w-[20%] border">
						<IoIosArrowBack />
						<p> 3 Mar - 9 Mar</p>
						<IoIosArrowForward />
					</div>
				</div>
			</div>
			<div className="flex w-full mt-3">
				<div className="w-full max-w-[15rem]">
					<button className="w-full flex justify-between p-2 border  items-center rounded-t-xl">
						<p className=" text-sm text-gray-400 font-normal">Add Schedule</p>
						<p className=" text-4xl">+</p>
					</button>
					<div className=" max-h-[48vh] overflow-auto">
						{scheduleData.map((data) => {
							return (
								<div className="w-full flex justify-between p-2 border mt-3 items-center">
									<p>
										{data.starTime} - {data.endTime}
									</p>
									<div className="flex text-xl">
										<RxPencil1 />
										<PiTrash />
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className=" w-full ml-3 max-h-[60vh] overflow-auto">
					<table className=" table-fixed w-full border text-center max-h-[48vh] overflow-auto">
						<thead className=" bg-[#f5fafe] ">
							<tr className=" text-based">
								<th className="border w-[11rem]">Employeess</th>
								<th className="border">
									<p>MON</p>
									<p>1</p>
								</th>
								<th className="border">
									<p>MON</p>
									<p>1</p>
								</th>
								<th className="border">
									<p>MON</p>
									<p>1</p>
								</th>
								<th className="border">
									<p>MON</p>
									<p>1</p>
								</th>
								<th className="border">
									<p>MON</p>
									<p>1</p>
								</th>
								<th className="border">
									<p>MON</p>
									<p>1</p>
								</th>
								<th className="border">
									<p>MON</p>
									<p>1</p>
								</th>
								<th className="border">
									<p>Tue</p>
									<p>2</p>
								</th>
								<th className="border">
									<p>WED</p>
									<p>3</p>
								</th>
								<th className="border">
									<p>THU</p>
									<p>4</p>
								</th>
								<th className="border">
									<p>FRI</p>
									<p>5</p>
								</th>
								<th className="border">
									<p>SAT</p>
									<p>6</p>
								</th>
								<th className="border">
									<p>SUN</p>
									<p>7</p>
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((index) => {
								return (
									<tr>
										<td className="flex justify-center items-center p-3 border">
											<img
												src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
												className=" w-10 h-10 rounded-full object-cover mr-3"
											/>
											<p>Tony</p>
										</td>
										{index == 1 ? (
											<td className=" bg-[#f5fafe] border">7am-3pm</td>
										) : (
											<td className=" text-xl border">+</td>
										)}
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
										<td className=" text-xl border">+</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default BiWeekly;
