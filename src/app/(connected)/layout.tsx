import CustomLoading from "@/components/CustomLoading";
import ConnectedProvider from "@/utils/ConnectedProvider";
import { Suspense } from "react";

const ConnectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<CustomLoading />}>
      <ConnectedProvider>{children}</ConnectedProvider>
    </Suspense>
  );
};

export default ConnectedLayout;
