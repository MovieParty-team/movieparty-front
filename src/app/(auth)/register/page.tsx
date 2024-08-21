"use client";

import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useRegister } from "@/api/iam/hooks/useRegister";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const [formFields, setFormFields] = useState<any>({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    birthday: "",
  });

  const [error, setError] = useState<string | null>(null);

  const { mutate } = useRegister();

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate(
            {
              ...formFields,
            },
            {
              onSuccess: (data) => {
                setError(null);
                console.log("loginData", data);
                if ("provided" in data) {
                  console.log("loginData", data);
                  const decoded = jwtDecode(data.provided.accessToken!); // never null
                  localStorage.setItem("sub", decoded.sub!);
                  router.push("/home");
                }
              },
              onError: (error) => {
                setError(error.message);
                console.log("error", error);
              },
            }
          );
        }}
      >
        <input
          type="text"
          value={formFields.email}
          onChange={(e) =>
            setFormFields((prev: any) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Email"
          className="text-black"
        />
        <input
          type="text"
          value={formFields.username}
          onChange={(e) =>
            setFormFields((prev: any) => ({
              ...prev,
              username: e.target.value,
            }))
          }
          placeholder="Username"
          className="text-black"
        />
        <input
          type="password"
          value={formFields.password}
          onChange={(e) =>
            setFormFields((prev: any) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          placeholder="Password"
          className="text-black"
        />
        <input
          type="text"
          value={formFields.firstName}
          onChange={(e) =>
            setFormFields((prev: any) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
          placeholder="First Name"
          className="text-black"
        />
        <input
          type="text"
          value={formFields.lastName}
          onChange={(e) =>
            setFormFields((prev: any) => ({
              ...prev,
              lastName: e.target.value,
            }))
          }
          placeholder="Last Name"
          className="text-black"
        />
        <input
          type="date"
          value={formFields.birthday}
          onChange={(e) =>
            setFormFields((prev: any) => ({
              ...prev,
              birthday: e.target.value,
            }))
          }
          placeholder="Birthday"
          className="text-black"
        />
        <button type="submit">Login</button>
      </form>
      <Link href="/login">Se connecter</Link>
    </div>
  );
};

export default LoginPage;
