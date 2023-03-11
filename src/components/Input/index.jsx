const Input = ({
	className = "",
	name,
	label,
	error,
	labelClass = "",
	type = "text",
	autoComplete = "",
	register,
	...rest
}) => {
	let inpCls = `form-input block py-2 px-3 border border-gray-300 rounded-md 
    shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 
    focus:ring focus:ring-blue-100 ease-in-out sm:text-sm sm:leading-5 w-full ${
			error ? "border border-red-500" : ""
		} ${className}`;
	let checkBoxCls = `app__checkbox shrink-0 appearance-none select-none bg-white h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer border rounded ${
		error ? "border-red-500" : ""
	} ${className}`;
	let labelCls = `block text-sm font-medium leading-5 mb-1 text-gray-700 ${labelClass}`;
	if (type === "checkbox")
		return (
			<div className="relative flex items-start">
				<div className="flex items-center h-5">
					<input
						type="checkbox"
						className={checkBoxCls}
						{...rest}
						{...register}
					/>
				</div>
				<div className="ml-2 text-sm leading-5">
					<label htmlFor={name} className="font-medium text-gray-700">
						{label}
					</label>
					{error && <div className="text-xs text-red-500 mt-1">{error}</div>}
				</div>
			</div>
		);
	return (
		<>
			{label && (
				<label htmlFor={name} className={labelCls}>
					{label}
				</label>
			)}
			<div>
				<input
					type={type}
					autoComplete={autoComplete}
					className={inpCls}
					{...register}
					{...rest}
				/>
				{error && <div className="text-xs text-red-500 mt-1">{error}</div>}
			</div>
		</>
	);
};
export default Input;
