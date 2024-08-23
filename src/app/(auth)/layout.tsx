import CustomLoading from "@/components/CustomLoading";
import DisconnectedProvider from "@/utils/DisconnectedProvider";
import { Suspense } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<CustomLoading />}>
      <DisconnectedProvider>{children}</DisconnectedProvider>
    </Suspense>
  );
}
