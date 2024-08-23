import CustomLoading from "@/components/CustomLoading";
import ConnectedProvider from "@/utils/ConnectedProvider";
import { Suspense } from "react";

export default function ConnectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<CustomLoading />}>
      <ConnectedProvider>{children}</ConnectedProvider>
    </Suspense>
  );
}
