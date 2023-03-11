import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
	const defaultValues = {
		email: "",
		password: "",
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues });

	const onSubmit = (data) => {
		console.log({ data });
	};

	return (
		<AuthLayout
			title="Entrar na sua conta"
			redirect="/signup"
			label="fazer cadastro"
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
			>
				<div>
					<Input
						name="email"
						label="E-mail"
						register={register("email", {
							required: "Esse campo e obrigatório",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Endereço de email invalido",
							},
						})}
						error={errors?.email?.message}
					/>
				</div>
				<div className="mt-6">
					<Input
						name="password"
						label="Senha"
						type="password"
						checked
						register={register("password", {
							required: "Esse campo e obrigatório",
							minLength: {
								value: 8,
								message: "A senha deve ter pelo menos 8 caracteres",
							},
						})}
						error={errors?.password?.message}
					/>
				</div>
				<div className="mt-2 flex items-center justify-end">
					<div className="text-sm leading-5">
						<Link
							to="/ResetPassword"
							className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
						>
							Esqueceu a senha?
						</Link>
					</div>
				</div>
				<div className="mt-6">
					<Button type="submit">Entrar</Button>
				</div>
			</form>
		</AuthLayout>
	);
};

export default Login;
