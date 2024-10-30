import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import QueryProvider from "@/components/providers/QueryProvider";
import HomePage from "@/app/(connected)/home/page";

describe("Home", () => {
  beforeAll(() => {
    render(
      <QueryProvider>
        <HomePage />
      </QueryProvider>
    );
  });

  it("should render home page", () => {
    expect(screen).toBeDefined();
  });
});
