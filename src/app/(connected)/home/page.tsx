"use client";

import { useLogout } from "@/api/auth/hooks/useLogout";
import Button from "@/components/Button";

const HomePage = () => {
  const { mutate } = useLogout();

  return (
    <>
      <form action="">
        <Button
          type="primary"
          onClick={() => {
            mutate();
          }}
        >
          Deconnexion
        </Button>
      </form>
    </>
  );
};

export default HomePage;
