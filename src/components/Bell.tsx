import { FC } from "react";
import { AiOutlineBell } from "react-icons/ai";

export const Bell: FC = () => {
	return (
		<button className=" text-xl flex justify-center items-center py-1 px-2 border rounded-md mr-3">
			<AiOutlineBell />
		</button>
	);
};
