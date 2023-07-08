import React, { useState } from "react";
import { FieldTimeOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Schedule from "./Schedule";
import Home from "./Home";

const { Content, Sider } = Layout;

const Main: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [page, setPage] = useState("home");

	const homePage = () => {
		setCollapsed(false);
		setPage("home");
	};

	const schedulePage = () => {
		setCollapsed(true);
		setPage("schedule");
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
							onClick={schedulePage}
							icon={<FieldTimeOutlined />}
						>
							Schedule
						</Menu.Item>
					</Menu>
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
							{page == "home" ? <Home /> : <Schedule />}
						</div>
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};

export default Main;
