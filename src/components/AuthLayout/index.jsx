import { Link } from "react-router-dom";
import Logo from "../../assets/green-logo.png";
const AuthLayout = ({ children, redirect, title, label }) => {
	return (
		<div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
			<div>
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img src={Logo} alt="Workflow" className="w-auto h-12 mx-auto" />
					<h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
						{title}
					</h2>
					<p className="mt-2 text-base leading-5 text-center text-gray-600">
						Ou
						<Link
							to={redirect}
							className="ml-2 font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
						>
							{label}
						</Link>
					</p>
				</div>
				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
			</div>
		</div>
	);
};
export default AuthLayout;
