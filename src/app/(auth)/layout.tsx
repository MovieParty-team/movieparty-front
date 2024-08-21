import DisconnectedProvider from "@/utils/DisconnectedProvider";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <DisconnectedProvider>{children}</DisconnectedProvider>;
};

export default AuthLayout;