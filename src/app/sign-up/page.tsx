"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";

const Login = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setlastNameFocus] = useState(false);

  return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-background to-secondary">
        <div className="text-center border border-three p-8 bg-four rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-seven">Sign Up</h2>
          <Form.Root method="post">
          <Form.Field name="email">
              <div
                className='mb-5'
              >
                <Form.Label
                  className={`block text-left mb-2 ${
                    firstNameFocus ? "text-one" : "text-six"
                  }`}
                >
                  First Name
                </Form.Label>
                <Form.Control
                  className={`w-full p-2 border rounded-md focus:outline-none ${
                    firstNameFocus ? "focus:border-primary" : ""
                  }`}
                  onFocus={() => setFirstNameFocus(true)}
                  onBlur={() => setFirstNameFocus(false)}
                />
                <Form.Message className="text-red-500" match="valueMissing">
                  Please enter your Email
                </Form.Message>
              </div>
            </Form.Field>

            <Form.Field name="email">
              <div
                className='mb-5'
              >
                <Form.Label
                  className={`block text-left mb-2 ${
                    lastNameFocus ? "text-one" : "text-six"
                  }`}
                >
                  Last Name
                </Form.Label>
                <Form.Control
                  className={`w-full p-2 border rounded-md focus:outline-none ${
                    lastNameFocus ? "focus:border-primary" : ""
                  }`}
                  onFocus={() => setlastNameFocus(true)}
                  onBlur={() => setlastNameFocus(false)}
                />
                <Form.Message className="text-red-500" match="valueMissing">
                  Please enter your last name.
                </Form.Message>
              </div>
            </Form.Field>

            <Form.Field name="email">
              <div
                className='mb-5'
              >
                <Form.Label
                  className={`block text-left mb-2 ${
                    emailFocus ? "text-one" : "text-six"
                  }`}
                >
                  Email
                </Form.Label>
                <Form.Control
                  className={`w-full p-2 border rounded-md focus:outline-none ${
                    emailFocus ? "focus:border-primary" : ""
                  }`}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <Form.Message className="text-red-500" match="valueMissing">
                  Please enter your Email
                </Form.Message>
              </div>
            </Form.Field>

            <Form.Field name="username">
              <div
                className='mb-5'
              >
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
                />
                <Form.Message className="text-red-500" match="valueMissing">
                  Please enter a username
                </Form.Message>
              </div>
            </Form.Field>

            <Form.Field name="password">
              <div
                className='mb-4'
              >
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
                />
                <Form.Message className="text-red-500" match="valueMissing">
                  Please enter a password
                </Form.Message>
              </div>
            </Form.Field>

            <Form.Submit>
              <button className="w-full bg-seven text-five p-2 rounded-lg hover:text-one hover:bg-background focus:outline-none">
                Sign Up
              </button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
  );
};

export default Login;