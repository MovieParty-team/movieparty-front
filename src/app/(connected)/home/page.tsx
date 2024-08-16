"use client";

const QuickAccessPage = () => {
  return (
    <>
      <h1>Quick Access</h1>
      <form action="">
        <button
          type="submit"
          onClick={() => {
            localStorage.removeItem("sub");
            // TODO: also call the logout endpoint to clean the session
          }}
        >
          se déconnecter
        </button>
      </form>
    </>
  );
};

export default QuickAccessPage;
