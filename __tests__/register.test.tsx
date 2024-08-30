import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RegisterPage from "@/app/(auth)/register/page";
import { describe } from "node:test";
import QueryProvider from "@/utils/QueryProvider";

describe("Login", () => {
  beforeAll(() => {
    render(
      <QueryProvider>
        <RegisterPage />
      </QueryProvider>
    );
  });

  it("should render login page", () => {
    expect(screen).toBeDefined();
  });
});
