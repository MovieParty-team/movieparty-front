import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginPage from "@/app/(auth)/login/page";
import { describe } from "node:test";
import QueryProvider from "@/components/providers/QueryProvider";

describe("Login", () => {
  beforeAll(() => {
    render(
      <QueryProvider>
        <LoginPage />
      </QueryProvider>
    );
  });

  it("should render login page", () => {
    expect(screen).toBeDefined();
  });
});
