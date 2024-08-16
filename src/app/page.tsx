"use client";

import { redirect } from "next/navigation";
export default function Home() {
  if (localStorage.getItem("uuid")) {
    redirect("/quickAccess");
  }

  redirect("/login");
}
