import { Link } from "react-router-dom";
import Logo from "../../assets/green-logo.png";
const AuthLayout = ({ children, redirect, title, label }) => {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div>
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img src={Logo} alt="Workflow" className="mx-auto h-12 w-auto" />
					<h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
						{title}
					</h2>
					<p className="mt-2 text-center text-base leading-5 text-gray-600">
						Ou
						<Link
							to={redirect}
							className="font-medium ml-2 text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
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
