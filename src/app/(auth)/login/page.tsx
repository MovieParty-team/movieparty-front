"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useLogin } from "@/api/iam/hooks/useLogin";
import { Credentials, ErrorResponse } from "@/api/iam/iam.model";
import AuthPage from "../_components/AuthPage";
import { FieldProps } from "@/types/FormProps";
import Field from "@/components/Field";

const LoginPage = () => {
  const initialValues: FieldProps = {
    email: "",
    password: "",
  };

  const { mutate } = useLogin();

  return (
    <AuthPage
      title="Connexion"
      initialValues={initialValues}
      onSubmit={(values: FieldProps) => {
        if (
          typeof values.email === "string" &&
          typeof values.password === "string"
        ) {
          mutate(
            {
              email: values.email,
              password: values.password,
            },
            {
              onSuccess: (data: Credentials | ErrorResponse) => {
                if ("provided" in data) {
                  // optional : save access token
                  redirect("/home");
                }
              },
              onError: (error) => {
                console.log("error", error);
              },
            }
          );
        }
      }}
    >
      <Field
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        className="text-black"
      />
      <Field
        id="password"
        name="password"
        type="password"
        placeholder="Mot de passe"
        className="text-black"
      />
    </AuthPage>
  );
};

export default LoginPage;
