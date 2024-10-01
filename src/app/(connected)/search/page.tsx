"use client";

import { useSearchParams } from "next/navigation";
import TheaterView from "./_components/TheaterView";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const theater = searchParams.get("theater") ?? "";

  return (
    <main>
      <h1>Recherche pour {theater}</h1>
      <TheaterView theater={theater} />
    </main>
  );
}
