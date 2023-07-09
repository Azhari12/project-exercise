import { FC } from "react";
import { BsSearch } from "react-icons/bs";

export const Search: FC = () => {
	return (
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
	);
};
