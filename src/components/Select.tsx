/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-mixed-spaces-and-tabs */
import { FC, SelectHTMLAttributes } from "react";

import Business from "@/utils/types/Business";
import Location from "@/utils/types/Location";

interface selectType extends SelectHTMLAttributes<HTMLInputElement> {
	label: string;
	firstOption: string;
	dataLocation: Location[];
	dataBusiness: Business[];
	register?: any;
	errors?: string;
	valueAsNumber?: boolean;
	name: string;
	selectFor: string;
}

export const Select: FC<selectType> = (props) => {
	const {
		label,
		firstOption,
		dataLocation,
		dataBusiness,
		register,
		valueAsNumber,
		name,
		errors,
		selectFor,
	} = props;
	return (
		<div className="form-control w-full">
			<label className="label">
				<span className="label-text">{label}</span>
			</label>
			<div
				className={`${
					errors ? "tooltip tooltip-open w-full tooltip-bottom" : ""
				}`}
				data-tip={errors}
			></div>
			<select
				className="select select-bordered font-normal rounded-3xl w-full"
				{...(register ? register(name, { valueAsNumber }) : {})}
			>
				<option disabled selected>
					{firstOption}
				</option>

				{selectFor == "Location"
					? dataLocation.map((data) => {
							return <option value={data.id}>{data.name}</option>;
					  })
					: dataBusiness.map((data) => {
							return <option value={data.id}>{data.business_name}</option>;
					  })}
			</select>
		</div>
	);
};
