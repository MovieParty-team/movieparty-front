"use client";

import Search from "@/components/Search";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { push } = useRouter();

  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout>();

  const handleSearch = (value: string) => {
    push(`/search?theater=${value}`);
  };

  return (
    <header>
      <h1 onClick={() => push("/")}>Movieparty</h1>
      <Search
        id="search"
        placeholder="Rechercher"
        onSearch={(e: any) => {
          if (debounceTimer) {
            clearTimeout(debounceTimer);
          }
          handleSearch(e);
        }}
        onChange={(e: any) => {
          if (debounceTimer) {
            clearTimeout(debounceTimer);
          }
          const { value } = e.target;
          if (value && value.length >= 3) {
            setDebounceTimer(
              setTimeout(() => {
                handleSearch(value);
              }, 700)
            );
          }
        }}
      />
    </header>
  );
}
