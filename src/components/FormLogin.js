import React, { useState } from "react";

// components
import Button from "./Button";
import ErrorText from "./ErrorText";

// hooks
import { useLogin } from "../hooks/useLogin";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 m-4 rounded-md bg-gray-200 dark:bg-gray-700 shadow-lg h-fit"
    >
      <label className="grid grid-cols-2 mb-4 items-center">
        <span>Email:</span>
        <input
          className="p-2 rounded-xl dark:bg-gray-800"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="grid grid-cols-2 mb-4 items-center">
        <span>Password:</span>
        <input
          className="p-2 rounded-xl dark:bg-gray-800"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <ErrorText text={error} />}
      <Button text={!isPending ? `Log in` : ``} loading={isPending} />
    </form>
  );
};

export default FormLogin;
