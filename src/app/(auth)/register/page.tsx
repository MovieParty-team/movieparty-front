"use client";

import { useRegister } from "@/api/iam/hooks/useRegister";
import AuthPage from "../_components/AuthPage";
import { FieldProps } from "@/types/FormProps";
import Field from "@/components/Field";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("L'email n'est pas valide")
    .required("L'email est requis"),
  username: Yup.string().min(4).required("Le nom d'utilisateur est requis"),
  password: Yup.string().min(4).required("Le mot de passe est requis"),
  firstname: Yup.string().min(4).required("Le nom est requis"),
  lastname: Yup.string().min(4).required("Le prenom est requis"),
  birthday: Yup.string().required("La date de naissance est requise"),
});

const LoginPage = () => {
  const initialValues: FieldProps = {
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    birthday: "",
  };

  const { mutate } = useRegister();

  return (
    <AuthPage
      title="Inscription"
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values: FieldProps) => {
        mutate({
          email: values.email as string,
          username: values.username as string,
          password: values.password as string,
          firstname: values.firstname as string,
          lastname: values.lastname as string,
          birthday: values.birthday as string,
        });
      }}
    >
      <Field
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        className="text-black p-2"
      />
      <Field
        id="username"
        name="username"
        type="text"
        placeholder="Nom d'utilisateur"
        className="text-black p-2"
      />
      <Field
        id="password"
        name="password"
        type="password"
        placeholder="Mot de passe"
        className="text-black p-2"
      />

      <Field
        id="firstname"
        name="firstname"
        type="text"
        placeholder="Prénom"
        className="text-black p-2"
      />
      <Field
        id="lastname"
        name="lastname"
        type="text"
        placeholder="Nom"
        className="text-black p-2"
      />
      <Field
        id="birthday"
        name="birthday"
        type="date"
        placeholder="Date de naissance"
        className="text-black p-2"
      />
    </AuthPage>
  );
};

export default LoginPage;
