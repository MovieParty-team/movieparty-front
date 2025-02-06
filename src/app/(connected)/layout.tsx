import CustomLoading from "@/components/CustomLoading";
import ConnectedProvider from "@/components/providers/ConnectedProvider";
import { Suspense } from "react";
import Header from "./_components/Header";

export default function ConnectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<CustomLoading />}>
      <ConnectedProvider>
        <Header />
        {children}
      </ConnectedProvider>
    </Suspense>
  );
}
