const Button = ({ className, children, ...rest }) => {
	let cls = `w-full flex justify-center py-2 px-4 border border-transparent 
        text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 
        focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo 
        active:bg-indigo-700 focus:ring focus:ring-blue-100 ease-in-out ${className}`;

	return (
		<button className={cls} {...rest}>
			{children}
		</button>
	);
};
export default Button;
