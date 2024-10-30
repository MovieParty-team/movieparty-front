import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RegisterPage from "@/app/(auth)/register/page";
import { describe } from "node:test";
import QueryProvider from "@/components/providers/QueryProvider";

describe("Register", () => {
  beforeAll(() => {
    render(
      <QueryProvider>
        <RegisterPage />
      </QueryProvider>
    );
  });

  it("should render register page", () => {
    expect(screen).toBeDefined();
  });
});
