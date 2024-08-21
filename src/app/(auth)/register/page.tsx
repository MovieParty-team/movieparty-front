"use client";

import { redirect } from "next/navigation";
import { useRegister } from "@/api/iam/hooks/useRegister";
import AuthPage from "../_components/AuthPage";
import { FieldProps } from "@/types/FormProps";
import { Credentials, ErrorResponse } from "@/api/iam/iam.model";
import Field from "@/components/Field";

const LoginPage = () => {
  const initialValues: FieldProps = {
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    birthday: "",
  };

  const { mutate } = useRegister();

  return (
    <AuthPage
      title="Inscription"
      initialValues={initialValues}
      onSubmit={(values: FieldProps) => {
        const { email, username, password, firstName, lastName, birthday } =
          values;
        if (
          typeof email === "string" &&
          typeof username === "string" &&
          typeof password === "string" &&
          typeof firstName === "string" &&
          typeof lastName === "string" &&
          typeof birthday === "string"
        ) {
          mutate(
            {
              email,
              username,
              password,
              firstName,
              lastName,
              birthday,
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
        type="email"
        placeholder="Email"
        className="text-black"
      />
      <Field
        id="username"
        name="username"
        type="text"
        placeholder="Nom d'utilisateur"
        className="text-black"
      />
      <Field
        id="password"
        name="password"
        type="password"
        placeholder="Mot de passe"
        className="text-black"
      />

      <Field
        id="firstName"
        name="firstName"
        type="text"
        placeholder="Prénom"
        className="text-black"
      />
      <Field
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Nom"
        className="text-black"
      />
      <Field
        id="birthday"
        name="birthday"
        type="date"
        placeholder="Date de naissance"
        className="text-black"
      />
    </AuthPage>
  );
};

export default LoginPage;
