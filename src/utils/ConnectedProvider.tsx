"use client";

import useGetSelfInfo from "@/api/iam/hooks/useGetSelfInfo";
import CustomLoading from "@/components/CustomLoading";
import { userInfosType } from "@/types/userData.types";
import { redirect } from "next/navigation";
import React, {
  FunctionComponent,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
} from "react";

interface ConnectedContextType {
  userInfos: userInfosType;
  setUpdatedUserInfos: any;
}

export const ConnectedContext = createContext<ConnectedContextType | undefined>(
  undefined
);

interface IProps {
  children: ReactNode;
}

const ConnectedProvider: FunctionComponent<IProps> = ({ children }) => {
  const setUpdatedUserInfos = useCallback(() => {
    // update data and refetch OR set a state
  }, []);

  const { data: userInfosData, isSuccess, isError } = useGetSelfInfo();

  const userInfos = useMemo<userInfosType | undefined>(():
    | userInfosType
    | undefined => {
    if (isSuccess && userInfosData) {
      return userInfosData;
    } else if (isError || !userInfosData) {
      redirect("/login");
    }
  }, [isError, isSuccess, userInfosData]);

  if (!userInfos) {
    return (
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <CustomLoading />
      </div>
    );
  }

  return (
    <ConnectedContext.Provider
      value={{
        userInfos,
        setUpdatedUserInfos,
      }}
    >
      {children}
    </ConnectedContext.Provider>
  );
};

export default ConnectedProvider;
