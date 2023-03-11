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
	let inpCls = `block w-full px-3 py-2 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:ring focus:ring-blue-100 sm:text-sm sm:leading-5 ${
		error ? "border border-red-500" : ""
	} ${className}`;
	let checkBoxCls = `w-4 h-4 text-indigo-600 transition duration-150 ease-in-out bg-white border rounded appearance-none cursor-pointer select-none app__checkbox shrink-0 focus:shadow-checked checked:border-transparent ${
		error ? "border-red-500" : ""
	} ${className}`;
	let labelCls = `block mb-1 text-sm font-medium leading-5 text-gray-700 ${labelClass}`;
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
					{error && <div className="mt-1 text-xs text-red-500">{error}</div>}
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
				{error && <div className="mt-1 text-xs text-red-500">{error}</div>}
			</div>
		</>
	);
};
export default Input;
