"use client";

import React, { useCallback, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useLogin } from "@/api/iam/hooks/useLogin";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { mutate, isSuccess, data: loginData } = useLogin();

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate({
            email,
            password,
          });
          if (isSuccess) {
            setError(null);
            if (loginData && loginData.data) {
              const decoded = jwtDecode(loginData.data.accessToken);
              localStorage.setItem("sub", decoded.sub!);
              router.push("/home");
            }
          }
        }}
      >
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="text-black"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="text-black"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
