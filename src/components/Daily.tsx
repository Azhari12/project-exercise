import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FC, useEffect, useState } from "react";
import { RxPencil1 } from "react-icons/rx";
import { PiTrash } from "react-icons/pi";

const Daily: FC = () => {
	const [data] = useState([
		{
			name: "Tony",
			starTime: 5,
			endTime: 21,
		},
		{
			name: "Stark",
			starTime: 13,
			endTime: 16,
		},
		{
			name: "Steve",
			starTime: 8,
			endTime: 19,
		},
		{
			name: "Stank",
			starTime: 5,
			endTime: 21,
		},
		{
			name: "Sherly",
			starTime: 13,
			endTime: 24,
		},
	]);
	const [time, setTime] = useState<number[]>([]);
	useEffect(() => {
		addTime();
	}, []);

	const addTime = () => {
		const array = [];
		for (let i = 1; i <= 24; i++) {
			array.push(i);
		}
		setTime(array);
	};
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
						<button>
							<IoIosArrowBack />
						</button>
						<p> 3 Mar - 9 Mar</p>
						<button>
							<IoIosArrowForward />
						</button>
					</div>
				</div>
			</div>
			<div className="flex w-full mt-3">
				<div className=" w-[20%]">
					<button className="w-full flex justify-between p-2 border  items-center rounded-t-xl">
						<p className=" text-sm text-gray-400 font-normal">Add Schedule</p>
						<p className=" text-4xl">+</p>
					</button>
					<div className=" max-h-[48vh] overflow-auto">
						{scheduleData.map((data) => {
							return (
								<div className="w-[95%] flex justify-between p-2 border mt-3 items-center">
									<p>
										{data.starTime} - {data.endTime}
									</p>
									<div className="flex text-xl text-gray-500">
										<button>
											<RxPencil1 />
										</button>
										<button>
											<PiTrash />
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className=" ml-3 font-semibold w-[80%]">
					<div className="flex">
						<div className="flex flex-col flex-initial w-[20%] overflow-auto">
							<div className=" bg-@blue4 h-14 text-xl text-center border-b border-l border-t rounded-tl-md py-3">
								Employeess
							</div>
							{data.map((d) => {
								return (
									<div className="flex justify-between border-b border-l p-3">
										<div className="flex items-center text-[1vw]">
											<img
												src="https://qph.cf2.quoracdn.net/main-thumb-161841968-200-xtisrhulnnwiuyeojsvojtoqjrqsglrj.jpeg"
												width={20}
												height={20}
												className=" rounded-full mr-2"
											/>
											{d.name}
										</div>
										<div className=" text-[1vw]">
											{d.starTime <= 12 ? d.starTime : d.starTime - 12}
											{`${d.starTime <= 12 ? "am" : "pm"}`} -{" "}
											{d.endTime <= 12 ? d.endTime : d.endTime - 12}
											{`${d.endTime <= 12 ? "am" : "pm"}`}
										</div>
									</div>
								);
							})}
							<div className=" h-full rounded-bl-lg bg-slate-500 w-full"></div>
						</div>
						<div className=" flex flex-col flex-initial border max-w-[80%] overflow-auto bg-@blue4">
							<div className=" h-14  rounded-tr-md flex items-start">
								{time.map((t) => {
									return (
										<div className="flex flex-col justify-end border-b">
											<p className="my-1 ml-7">
												{t <= 12 ? t : t - 12}
												{`${t <= 12 ? "am" : "pm"}`}
											</p>
											<div className="w-10 border-r-2  border-gray-300 h-6 max-h-full"></div>
										</div>
									);
								})}
							</div>
							{data.map((d) => {
								return (
									<div className=" h-[2.9rem] pl-[0.5rem] rounded-tr-md flex items-start">
										{time.map((t) => {
											return (
												<div className=" text-lg bg-@blue4 h-full flex items-center">
													{t < d.starTime || t > d.endTime ? (
														<div className="w-[2rem] pr-[3.5rem] text-center">
															+
														</div>
													) : (
														<div className=" w-[2rem] pr-[3.5rem] h-8 bg-white text-sm text-center">
															{/* {d.starTime <= 12 ? d.starTime : d.starTime - 12}
															{`${d.starTime <= 12 ? "am" : "pm"}`} -{" "}
															{d.endTime <= 12 ? d.endTime : d.endTime - 12}
															{`${d.endTime <= 12 ? "am" : "pm"}`} */}
														</div>
													)}
												</div>
											);
										})}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Daily;
