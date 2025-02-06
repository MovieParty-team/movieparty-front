"use client";
import { useMemo } from "react";

import { redirect } from "next/navigation";
import useGetSelfInfo from "@/api/iam/hooks/useGetSelfInfo";

const DisconnectedProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSuccess, isError } = useGetSelfInfo();

  useMemo<boolean | undefined>((): boolean | undefined => {
    if (isSuccess) {
      redirect("/home");
    } else if (isError) {
      return true;
    }
  }, [isError, isSuccess]);

  return <>{children}</>;
};

export default DisconnectedProvider;
