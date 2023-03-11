import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import Input from "../components/Input";

const SignUp = () => {
	const defaultValues = {
		email: "",
		confirm_email: "",
		password: "",
		terms: true,
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({ defaultValues });

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<AuthLayout
			title="Criar nova conta"
			redirect="/login"
			label="entrar na sua conta existente"
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10"
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
						name="confirm_email"
						label="Repetir e-mail"
						register={register("confirm_email", {
							required: "Endereço de email invalido",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Endereço de email invalido",
							},
							validate: (value) =>
								value === watch("email") || "Os dois e-mails devem ser iguais.",
						})}
						error={errors?.confirm_email?.message}
					/>
				</div>
				<div className="mt-6">
					<Input
						name="password"
						label="Senha"
						type="password"
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
				<div className="mt-6">
					<Input
						name="terms"
						type="checkbox"
						register={register("terms", {
							required: "(Esse campo é obrigatório)",
						})}
						error={errors?.terms?.message}
						label={
							<>
								Eu li e aceito os&nbsp;
								<Link
									href="https://kiwify.com.br/termos-de-uso"
									target="_blank"
									className="underline"
								>
									termos de uso
								</Link>
								,&nbsp;
								<Link
									href="https://kiwify.com.br/licenca-de-uso-software"
									target="_blank"
									className="underline"
								>
									termos de licença de uso de software
								</Link>
								,&nbsp;
								<Link
									href="https://kiwify.com.br/politica-de-conteudo"
									target="_blank"
									className="underline"
								>
									política de conteúdo
								</Link>
								&nbsp; da Kiwify
							</>
						}
					/>
				</div>
				<div className="mt-6">
					<Button type="submit">Criar conta</Button>
				</div>
			</form>
		</AuthLayout>
	);
};

export default SignUp;
