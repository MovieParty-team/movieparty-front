"use client";

import React from "react";
import { useLogin } from "@/api/auth/hooks/useLogin";
import AuthPage from "../_components/AuthPage";
import { FieldProps } from "@/types/FormProps.types";
import Field from "@/components/Field";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("L'email n'est pas valide")
    .required("L'email est requis"),
  password: Yup.string()
    .min(4, "Le mot de passe doit contenir au moins 4 caractères")
    .required("Le mot de passe est requis"),
});

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
      validationSchema={loginSchema}
      onSubmit={(values: FieldProps) => {
        mutate({
          email: values.email as string,
          password: values.password as string,
        });
      }}
    >
      <Field
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        className="p-2"
      />
      <Field
        id="password"
        name="password"
        type="password"
        placeholder="Mot de passe"
        className="p-2"
      />
    </AuthPage>
  );
};

export default LoginPage;
