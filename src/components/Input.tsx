/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, InputHTMLAttributes } from "react";

interface inputType extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	register?: any;
	errors?: string;
	valueAsNumber?: boolean;
	name: string;
}

export const Input: FC<inputType> = (props) => {
	const { label, register, valueAsNumber, name, errors } = props;
	return (
		<div className="form-control w-full min-w-xs">
			<label className="label">
				<span className="label-text font-semibold">{label}</span>
			</label>
			<div
				className={`${
					errors ? "tooltip tooltip-open w-full tooltip-bottom" : ""
				}`}
				data-tip={errors}
			>
				<input
					className="input input-bordered w-full rounded-3xl font-normal"
					{...(register ? register(name, { valueAsNumber }) : {})}
					{...props}
				/>
			</div>
		</div>
	);
};
