import React, { useState } from "react";

// components
import Button from "./Button";

// hooks
import { useSignup } from "../hooks/useSignup";
import ErrorText from "./ErrorText";

const FormSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const { error: signupError, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (displayName.length < 3) {
      setError("Nickname is too short");
    } else {
      // signup logic
      signup(email, password, displayName);
    }
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
        <span>Nickname:</span>
        <input
          className="p-2 rounded-xl dark:bg-gray-800"
          placeholder="Nickname"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
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
      {signupError && <ErrorText text={signupError} />}
      {error && !signupError && <ErrorText text={error} />}
      <Button text={!isPending ? `Sing up` : ""} loading={isPending} />
    </form>
  );
};

export default FormSignup;
