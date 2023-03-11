import React from "react";
import Logo from "../assets/green-logo.png";

const Heading = () => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img src={Logo} alt="Workflow" className="mx-auto h-12 w-auto" />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Criar nova conta
      </h2>
      <p className="mt-2 text-center text-base leading-5 text-gray-600">
        Ou
        <Link
          to="/Login"
          className="font-medium ml-2 text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          entrar na sua conta existente
        </Link>
      </p>
    </div>
  );
};

export default Heading;
