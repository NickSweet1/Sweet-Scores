"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log("Login successful!");
        router.push("/");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login");
    }
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-background to-secondary">
      <div className="text-center border border-three p-8 bg-four rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-seven">Log In</h2>
        <Form.Root onSubmit={handleLogin}>
          <Form.Field name="username">
            <div className="mb-5">
              <Form.Label
                className={`block text-left mb-2 ${
                  usernameFocus ? "text-one" : "text-six"
                }`}
              >
                Username
              </Form.Label>
              <Form.Control
                className={`w-full p-2 border rounded-md focus:outline-none ${
                  usernameFocus ? "focus:border-primary" : ""
                }`}
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Message className="text-red-500" match="valueMissing">
                Please enter a username
              </Form.Message>
            </div>
          </Form.Field>

          <Form.Field name="password">
            <div className="mb-4">
              <Form.Label
                className={`block text-left mb-2 ${
                  passwordFocus ? "text-one" : "text-six"
                }`}
              >
                Password
              </Form.Label>
              <Form.Control
                className={`w-full p-2 border rounded-md focus:outline-none ${
                  passwordFocus ? "focus:border-primary" : ""
                }`}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                autoComplete="new-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Message className="text-red-500" match="valueMissing">
                Please enter a password
              </Form.Message>
            </div>
          </Form.Field>

          <Form.Submit className="w-full bg-seven text-five p-2 rounded-lg hover:text-one hover:bg-background focus:outline-none">
              Log In
          </Form.Submit>
        </Form.Root>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default Login;