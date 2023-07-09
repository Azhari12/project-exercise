import { FieldTimeOutlined, HomeOutlined } from "@ant-design/icons";
import { FaCheckToSlot, FaRegMoneyBill1 } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { TbCalendarShare } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FC, useState } from "react";
import { Layout, Menu } from "antd";

import Attendance from "./Attendance";
import Schedule from "./Schedule";
import Home from "./Home";
import Swal from "sweetalert2";

const { Content, Sider } = Layout;

const Main: FC = () => {
	const [cookies, , removeCookies] = useCookies(["userData", "token"]);

	const [collapsed, setCollapsed] = useState(false);
	const [page, setPage] = useState("home");

	const navigate = useNavigate();

	const homePage = () => {
		setCollapsed(false);
		setPage("home");
	};

	const schedulePage = () => {
		setCollapsed(true);
		setPage("schedule");
	};

	const attedancePage = () => {
		setCollapsed(false);
		setPage("attendance");
	};

	const leavePage = () => {
		setCollapsed(false);
		setPage("leave");
	};

	const employeessPage = () => {
		setCollapsed(false);
		setPage("employeess");
	};

	const payrollPage = () => {
		setCollapsed(false);
		setPage("payroll");
	};

	const logout = () => {
		Swal.fire({
			title: "Are you sure?",
			text: `You will logout from this App`,
			icon: "question",
			showCancelButton: true,
			confirmButtonText: `Logout`,
			cancelButtonText: "Cancel",
		}).then((result) => {
			if (result.isConfirmed) {
				removeCookies("token");
				removeCookies("userData");
				navigate("/");
			}
		});
	};
	return (
		<div data-theme="light" className="min-w-[1000px]">
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
					// collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
					style={{ background: "#101828" }}
				>
					<div className=" max-h-screen relative h-screen">
						<div className="flex justify-center items-center w-full p-2 mt-5 text-xl font-normal text-white">
							<img
								src="https://img.freepik.com/premium-vector/letter-f-logo-abstract_8677-73.jpg"
								width={40}
								height={40}
								className="mr-2 rounded-lg"
							/>
							{collapsed ? "" : <h1>FORTIUS</h1>}
						</div>
						<Menu
							theme="dark"
							defaultSelectedKeys={["1"]}
							mode="inline"
							inlineCollapsed={collapsed}
						>
							<Menu.Item key="1" icon={<HomeOutlined />} onClick={homePage}>
								Home
							</Menu.Item>
							<Menu.Item
								key="2"
								onClick={attedancePage}
								icon={<FaCheckToSlot />}
							>
								Attendance
							</Menu.Item>
							<Menu.Item key="3" onClick={leavePage} icon={<TbCalendarShare />}>
								Leave
							</Menu.Item>
							<Menu.Item
								key="4"
								onClick={employeessPage}
								icon={<HiOutlineUserGroup />}
							>
								Employeess
							</Menu.Item>
							<Menu.Item
								key="5"
								onClick={payrollPage}
								icon={<FaRegMoneyBill1 />}
							>
								Payroll
							</Menu.Item>
							<Menu.Item
								key="6"
								onClick={schedulePage}
								icon={<FieldTimeOutlined />}
							>
								Schedule
							</Menu.Item>
						</Menu>
						<div className=" border-t border-gray-700  absolute bottom-10 flex justify-around items-center w-full p-3 mt-5 text-xl font-normal text-white">
							<img
								src="https://qph.cf2.quoracdn.net/main-thumb-161841968-200-xtisrhulnnwiuyeojsvojtoqjrqsglrj.jpeg"
								width={45}
								height={45}
								className="mr-2 rounded-full"
							/>
							{collapsed ? (
								""
							) : (
								<div className="flex items-center">
									<div className=" text-[10px] flex-col justify-start">
										<div>{cookies.userData.name}</div>
										<div>{cookies.userData.email}</div>
									</div>
									<div className="dropdown dropdown-right dropdown-end">
										<a tabIndex={0} className=" m-1">
											<IoIosArrowForward />
										</a>
										<ul
											tabIndex={0}
											className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w- text-@based"
										>
											<li>
												<a onClick={logout} className=" w-full">
													Logout
												</a>
											</li>
										</ul>
									</div>
								</div>
							)}
						</div>
					</div>
				</Sider>
				<Layout style={{ background: "#101828" }}>
					<Content className=" mt-2 ml-2">
						<div
							style={{
								padding: 24,
								minHeight: 360,
								background: "colorBgContainer",
							}}
							className=" rounded-tl-3xl h-full bg-white"
						>
							{page == "home" ? (
								<Home />
							) : page == "schedule" ? (
								<Schedule />
							) : page == "attendance" ? (
								<Attendance />
							) : (
								""
							)}
						</div>
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};

export default Main;
