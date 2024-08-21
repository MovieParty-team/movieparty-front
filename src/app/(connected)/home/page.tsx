"use client";

import { useLogout } from "@/api/iam/hooks/useLogout";

const QuickAccessPage = () => {
  const { mutate } = useLogout();

  return (
    <>
      <h1>Quick Access</h1>
      <form action="">
        <button
          type="submit"
          onClick={() => {
            mutate();
            window.location.reload();
          }}
        >
          se déconnecter
        </button>
      </form>
    </>
  );
};

export default QuickAccessPage;
