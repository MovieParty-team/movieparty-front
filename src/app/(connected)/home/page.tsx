"use client";

import { useLogout } from "@/api/iam/hooks/useLogout";
import { redirect } from "next/navigation";
import { useMemo } from "react";

const QuickAccessPage = () => {
  const { mutate, isSuccess } = useLogout();

  useMemo(() => {
    if (isSuccess) {
      console.log("isSuccess");
      redirect("/");
    }
  }, [isSuccess]);

  return (
    <>
      <h1>Quick Access</h1>
      <form action="">
        <button
          type="submit"
          onClick={() => {
            mutate();
          }}
        >
          se déconnecter
        </button>
      </form>
    </>
  );
};

export default QuickAccessPage;
