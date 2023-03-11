const Button = ({ className, children, ...rest }) => {
	let cls = `flex justify-center w-full px-4 py-2 text-sm font-medium text-white ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 focus:ring focus:ring-blue-100 ${className}`;

	return (
		<button className={cls} {...rest}>
			{children}
		</button>
	);
};
export default Button;
