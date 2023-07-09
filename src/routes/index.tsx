import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FC } from "react";
import axios from "axios";

import Auth from "@/pages/Auth";
import Main from "@/pages";

axios.defaults.baseURL = "https://dev-api.fortiusys.com/api";

const Router: FC = () => {
	const [cookie] = useCookies(["token", "userData"]);

	const getToken = cookie.token;

	const router = createBrowserRouter([
		{
			path: "/auth",
			element: <Auth />,
		},
		{
			path: "/",
			element: getToken ? <Main /> : <Auth />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
