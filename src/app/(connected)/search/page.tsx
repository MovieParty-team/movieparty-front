"use client";

import useSearchTheater from "@/api/theater/hooks/useSearchTheater";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import TheaterView from "./_components/TheaterView";

interface PageProps {
  searchQuery?: string;
}

export default function SearchPage(props: PageProps) {
  const searchParams = useSearchParams();

  const theater = searchParams.get("theater") ?? "";

  return (
    <main>
      <h1>Recherche pour {theater}</h1>
      <TheaterView theater={theater} />
    </main>
  );
}
