"use client";

import API from "@/api/Api";
import CustomLoading from "@/components/CustomLoading";
import { useRouter } from "next/navigation";
import React, {
  FunctionComponent,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

interface userInfosType {
  uuid: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  bio: string;
  avatar: string;
  birthday: Date;
}

interface ConnectedContextType {
  userUuid: string;
  userInfos: userInfosType;
  setUserInfos: any;
}

export const ConnectedContext = createContext<ConnectedContextType | undefined>(
  undefined
);

interface IProps {
  children: ReactNode;
}

const ConnectedProvider: FunctionComponent<IProps> = ({ children }) => {
  const [userInfos, setUserInfos] = useState<userInfosType>();

  const router = useRouter();

  const fetchUserInfos = useCallback(async () => {
    try {
      const userUuidInStorage = localStorage.getItem("sub");

      if (userUuidInStorage) {
        console.log("userUuidInStorage", userUuidInStorage);
        const response = await API.get("/user", {
          params: { uuid: userUuidInStorage },
        });

        if (response.status === 200) {
          setUserInfos(response.data.provided);
        } else {
          localStorage.removeItem("uuid");
          router.push("/login");
        }
      } else {
        localStorage.removeItem("uuid"); // just in case
        router.push("/login");
      }
    } catch (error) {
      console.error("error :", error);
      localStorage.removeItem("uuid");
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    if (fetchUserInfos) {
      fetchUserInfos();
    }
  }, [fetchUserInfos]);

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
        setUserInfos,
        userUuid: localStorage.getItem("uuid")!,
      }}
    >
      {children}
    </ConnectedContext.Provider>
  );
};

export default ConnectedProvider;
