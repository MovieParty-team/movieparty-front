"use client";

import { useLogout } from "@/api/iam/hooks/useLogout";
import Button from "@/components/Button";

const QuickAccessPage = () => {
  const { mutate } = useLogout();

  return (
    <>
      <h1>Quick Access</h1>
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

export default QuickAccessPage;
