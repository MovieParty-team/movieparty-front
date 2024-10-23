"use client";

import { usePathname } from "next/navigation";
import Button from "./Button";

interface Props {
  message: string;
  className?: string;
}

export default function Error(props: Props) {
  const { message, className } = props;

  const pathname = usePathname();

  return (
    <div className={className ?? "flex flex-col justify-center items-center gap-5"}>
      <p>{message}</p>
      <Button type="primary" href={pathname}>
        Retour
      </Button>
    </div>
  );
}
