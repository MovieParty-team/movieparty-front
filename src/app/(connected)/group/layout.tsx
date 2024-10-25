"use client";

import CustomLoading from "@/components/CustomLoading";
import { Suspense, useMemo } from "react";
import GroupNav from "./_components/GroupNav";

export default function ConnectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const windowSize = useMemo(() => {
    const width = window.innerWidth;
    switch (true) {
      case width <= 640:
        return "mobile";
      case width <= 1024:
        return "tablet";
      case width <= 1280:
        return "laptop";
      case width <= 1536:
        return "desktop";
      default:
        return "desktop";
    }
  }, [window.innerWidth]);

  return (
    <Suspense fallback={<CustomLoading />}>
      <div className="md:flex md:flex-row">
        {windowSize !== "mobile" && <GroupNav className="md:basis-1/4" />}
        {children}
      </div>
    </Suspense>
  );
}
