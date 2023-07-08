import { FC } from "react";
import ReactDOM from "react-dom";
import { TinyArea } from "@ant-design/plots";
import LineGraph from "@/components/LineGraph";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const Home: FC = () => {
	return (
		<div>
			<div className="flex justify-between ">
				<h1 className=" font-bold text-xl text-@blue">My Company</h1>
				<div className="form-control flex flex-row relative w-[25%]">
					<label className="relative block flex-initial w-full ">
						<button className="absolute inset-y-0 left-3">
							<BsSearch className="h-4 w-4 font-bold hover:w-8 hover:h-8 transition-all" />
						</button>
						<input
							className=" bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-@Red focus:ring-@Red focus:ring-1 sm:text-sm"
							placeholder="Search"
							type="text"
							name="search"
						/>
					</label>
				</div>
			</div>
			<div className=" my-5">
				<p className=" text-2xl font-semibold">Welcome, John</p>
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
						<div className=" relative flex rounded-lg shadow-md ring-1 ring-black ring-opacity-5 mt-5 p-3 w-full">
							<div className="flex flex-col justify-around h-[8rem]">
								<p className=" font-bold">Total Employee</p>
								<p className=" font-semibold text-3xl">2,420</p>
								<p className=" font-bold text-gray-400 flex items-center justify-around">
									<span className="text-@green">
										<AiOutlineArrowUp />
									</span>
									<span className="text-@green mx-2">425</span> vs last month
								</p>
							</div>
							<div className=" absolute right-5 bottom-5">
								<LineGraph
									lineColor="#2abd79"
									data={[0, 30, 45, 25, 70, 90]}
									color="#ecfdf3"
								/>
							</div>
						</div>
						<div className=" mt-5 relative flex rounded-lg shadow-md ring-1 ring-black ring-opacity-5 p-3 w-full">
							<div className="flex flex-col justify-around h-[8rem]">
								<p className=" font-bold">Total Department</p>
								<p className=" font-semibold text-3xl">100</p>
								<p className=" font-bold text-gray-400 flex items-center justify-around">
									<span className="text-@red">
										<AiOutlineArrowDown />
									</span>
									<span className="text-@red mx-2">52</span> vs last month
								</p>
							</div>
							<div className=" absolute right-5 bottom-5">
								<LineGraph
									lineColor="#2abd79"
									data={[90, 70, 25, 45, 30, 0]}
									color="#fef3f2"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
