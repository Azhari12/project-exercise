import { Input } from "@/components/Input";
import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Swal from "sweetalert2";
import Location from "@/utils/types/Location";
import { Select } from "@/components/Select";
import Business from "@/utils/types/Business";
import { Navigate, useNavigate } from "react-router-dom";

const schmaLogin = z.object({
	email: z
		.string()
		.min(5, { message: "Users ID is required" })
		.email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(6, { message: "Password is Required and have minimum 6 character" }),
});

const schemaRegister = z.object({
	name: z.string().min(5, { message: "Name is required" }),
	email: z
		.string()
		.min(5, { message: "Users ID is required" })
		.email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(6, { message: "Password is Required and have minimum 6 character" }),
	password_confirmation: z.string().min(6, {
		message: "Confirm Password is Required and have minimum 6 character",
	}),
	company_name: z.string().min(1, { message: "Company Name is required" }),
	company_location: z
		.number()
		.min(1, { message: "Company Location is required" }),
	business: z.number().min(1, { message: "Business is required" }),
	number_of_employees: z
		.number()
		.min(1, { message: "Number of Employee is required" }),
});

type SchemaLogin = z.infer<typeof schmaLogin>;
type SchemaRegister = z.infer<typeof schemaRegister>;

const Auth: FC = () => {
	const [registerButton, setRegister] = useState<boolean>(false);
	const [location, setLocation] = useState<Location[]>([]);
	const [business, setBusiness] = useState<Business[]>([]);
	const navigate = useNavigate();
	function buttonRegister(bool: boolean) {
		return setRegister(bool);
	}

	useEffect(() => {
		fetchLocation();
		fetchBusiness();
	}, []);

	function fetchLocation() {
		axios
			.get("location")
			.then((res) => {
				const { data } = res.data;
				// data.map((data: any) => {
				// 	console.log(data.id, data.name);
				// });
				setLocation(data);
			})
			.catch((err) => {
				const { message } = err.response;
				Swal.fire({
					icon: "error",
					title: "Failed",
					text: message,
					showCancelButton: false,
				});
			});
	}

	function fetchBusiness() {
		axios
			.get("business")
			.then((res) => {
				const { data } = res.data;
				// data.map((data: any) => {
				// 	console.log(data.id, data.name);
				// });
				setBusiness(data);
			})
			.catch((err) => {
				const { message } = err.response;
				Swal.fire({
					icon: "error",
					title: "Failed",
					text: message,
					showCancelButton: false,
				});
			});
	}

	const onSubmit: SubmitHandler<SchemaLogin> = (data) => {
		alert(JSON.stringify(data));
		console.log(location);
		axios
			.post("login", data)
			.then((res) => {
				const { message } = res.data;
				Swal.fire({
					icon: "success",
					title: "Success ",
					text: message,
					showCancelButton: false,
				}).then((result) => {
					if (result.isConfirmed) {
						navigate("/");
					}
				});
			})
			.catch((error) => {
				const errorMessage = error.response.data.error.message;
				Swal.fire({
					icon: "error",
					title: "Failed",
					text: errorMessage,
					showCancelButton: false,
				});
			});
	};

	const onSubmitRegister: SubmitHandler<SchemaRegister> = (data) => {
		alert(JSON.stringify(data));
		console.log(data);
		axios
			.post("register", data)
			.then((res) => {
				const { message } = res.data;
				Swal.fire({
					icon: "success",
					title: "Success ",
					text: message,
					showCancelButton: false,
				});
			})
			.catch((error) => {
				const errorMessage = error.response.data.error.message;
				Swal.fire({
					icon: "success",
					title: "Failed",
					text: errorMessage,
					showCancelButton: false,
				});
			});
	};

	const Form1 = () => {
		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm<SchemaLogin>({
			resolver: zodResolver(schmaLogin),
		});

		return (
			<form className=" transition-all" onSubmit={handleSubmit(onSubmit)}>
				<Input
					register={register}
					name="email"
					errors={errors.email?.message}
					label="Email"
					type="text"
					placeholder="Enter your Mail"
				/>
				<Input
					register={register}
					name="password"
					errors={errors.password?.message}
					label="Password"
					type="password"
					placeholder="Enter your Password"
				/>

				<div className=" flex justify-center transition-all">
					<button className=" bg-@based px-10 py-2 text-white rounded-3xl transition-all mt-5">
						Login
					</button>
				</div>
			</form>
		);
	};

	const Form2 = () => {
		const {
			register,
			handleSubmit,
			formState: { errors },
		} = useForm<SchemaRegister>({
			resolver: zodResolver(schemaRegister),
		});

		return (
			<form
				className=" transition-all"
				onSubmit={handleSubmit(onSubmitRegister)}
			>
				<Input
					register={register}
					name="name"
					errors={errors.name?.message}
					label="Name"
					type="text"
					placeholder="Enter your Name"
				/>
				<Input
					register={register}
					name="email"
					errors={errors.email?.message}
					label="Email"
					type="text"
					placeholder="Enter your Mail"
				/>
				<Input
					register={register}
					name="password"
					errors={errors.password?.message}
					label="Password"
					type="password"
					placeholder="Enter your Password"
				/>
				<Input
					register={register}
					name="password_confirmation"
					errors={errors.password_confirmation?.message}
					label="Confirm Password"
					type="password"
					placeholder="Re enter your Password"
				/>
				<Input
					register={register}
					name="company_name"
					errors={errors.company_name?.message}
					label="Company Name"
					type="text"
					placeholder="Enter your Company Name"
				/>
				<Select
					selectFor="Location"
					valueAsNumber={true}
					register={register}
					name="company_location"
					errors={errors.company_location?.message}
					label="Company Location"
					firstOption="Select Your Location Company"
					dataLocation={location}
					dataBusiness={business}
				/>
				<Select
					dataLocation={location}
					valueAsNumber={true}
					register={register}
					name="business"
					errors={errors.business?.message}
					label="Business"
					firstOption="Select Your Business"
					dataBusiness={business}
					selectFor="Business"
				/>
				<Input
					valueAsNumber={true}
					register={register}
					name="number_of_employees"
					errors={errors.number_of_employees?.message}
					label="Number of Employess"
					type="number"
					placeholder="Enter Number of Employes"
				/>
				<div className=" flex justify-center transition-all">
					<button className=" bg-@based px-10 py-2 text-white rounded-3xl transition-all mt-5">
						Register
					</button>
				</div>
			</form>
		);
	};

	return (
		<div data-theme="light" className="min-h-screen mx-auto">
			<div className=" container mx-auto min-h-screen poppin flex flex-col justify-center py-20 items-center">
				<div className="h-full items-center shadow-lg p-5 rounded-xl min-w-[50%]">
					<div className=" flex flex-col ">
						<div className=" w-full flex flex-col justify-center items-center ">
							<p className=" text-4xl text-button font-bold text-right">
								Fortius
							</p>
							<p className="text-center mb-5">Welcome to Fortius</p>
							{registerButton == false ? (
								<div className=" flex flex-row bg-@based justify-around items-center p-2 rounded-3xl w-2/3">
									<button className=" bg-white  py-2 text-@based rounded-3xl transition-all w-full">
										Login
									</button>
									<button
										className=" py-2 transition-all w-full text-white"
										onClick={(event) => buttonRegister(true)}
									>
										Register
									</button>
								</div>
							) : (
								<div className=" flex flex-row bg-@based justify-around items-center p-2 rounded-3xl w-2/3">
									<button
										className=" py-2 transition-all w-full text-white"
										onClick={(event) => buttonRegister(false)}
									>
										Login
									</button>
									<button className=" bg-white py-2 text-based rounded-3xl transition-all w-full">
										Register
									</button>
								</div>
							)}
						</div>
						<div className=" flex flex-col justify-center px-10">
							<p className=" mt-5 text-center">
								With Us, Your Company Will Be Amazing.
							</p>
							{registerButton == false ? <Form1 /> : <Form2 />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
