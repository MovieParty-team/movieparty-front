"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/api/iam/hooks/useLogin";
import Link from "next/link";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Credentials, ErrorResponse } from "@/api/iam/iam.model";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();

  const [formFields, setFormFields] = useState<any>({
    email: "",
    password: "",
  });

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const { mutate } = useLogin();

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: LoginFormValues,
          helpers: FormikHelpers<LoginFormValues>
        ) => {
          mutate(
            {
              ...values,
            },
            {
              onSuccess: (data: Credentials | ErrorResponse) => {
                console.log("loginData", data);
                if ("provided" in data) {
                  helpers.setSubmitting(false);
                  router.push("/home");
                }
              },
              onError: (error) => {
                console.log("error", error);
              },
            }
          );
        }}
      >
        <Form>
          <label htmlFor="email">Votre e-mail</label>
          <Field
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className="text-black"
          />

          <label htmlFor="password">Mot de passe</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Mot de passe"
            className="text-black"
          />
          <button type="submit">Se connecter</button>
        </Form>
      </Formik>
      <Link href="/register">Créer un compte</Link>
    </div>
  );

  // return (
  //   <div>
  //     <h2>Login</h2>
  //     {error && <p>{error}</p>}
  //     <form
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         mutate(
  //           {
  //             ...formFields,
  //           },
  //           {
  //             onSuccess: (data) => {
  //               setError(null);
  //               console.log("loginData", data);
  //               if ("provided" in data) {
  //                 console.log("loginData", data);
  //                 const decoded = jwtDecode(data.provided.accessToken!); // never null
  //                 localStorage.setItem("sub", decoded.sub!);
  //                 router.push("/home");
  //               }
  //             },
  //             onError: (error) => {
  //               setError(error.message);
  //               console.log("error", error);
  //             },
  //           }
  //         );
  //       }}
  //     >
  //       <input
  //         type="text"
  //         value={formFields.email}
  //         onChange={(e) =>
  //           setFormFields((prev: any) => ({ ...prev, email: e.target.value }))
  //         }
  //         placeholder="Email"
  //         className="text-black"
  //       />
  //       <input
  //         type="password"
  //         value={formFields.password}
  //         onChange={(e) => {
  //           console.log(typeof e.target.value);
  //           setFormFields((prev: any) => ({
  //             ...prev,
  //             password: e.target.value,
  //           }));
  //         }}
  //         placeholder="Password"
  //         className="text-black"
  //       />
  //       <button type="submit">Login</button>
  //     </form>
  //     <Link href="/register">Créer un compte</Link>
  //   </div>
  // );
};

export default LoginPage;
