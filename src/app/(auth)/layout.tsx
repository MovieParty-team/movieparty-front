import DisconnectedProvider from "@/utils/DisconnectedProvider";
import { Suspense } from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <DisconnectedProvider>{children}</DisconnectedProvider>
    </Suspense>
  );
};

export default AuthLayout;
