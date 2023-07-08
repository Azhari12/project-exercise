import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { FC } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Auth from "@/pages/Auth";
import Main from "@/pages";

axios.defaults.baseURL = "https://dev-api.fortiusys.com/api";

const Router: FC = () => {
	const [cookie] = useCookies(["token", "user_position", "url"]);

	const getToken = cookie.token;
	const role = cookie.user_position;

	const router = createBrowserRouter([
		{
			path: "/auth",
			element: <Auth />,
		},
		{
			path: "/",
			element: <Main />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
