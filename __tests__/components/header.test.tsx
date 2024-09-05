import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import QueryProvider from "@/utils/QueryProvider";
import Header from "@/app/(connected)/_components/Header";

describe("Header", () => {
  beforeAll(() => {
    render(
      <QueryProvider>
        <Header />
      </QueryProvider>
    );
  });

  it("should render header Component", () => {
    expect(screen).toBeDefined();
  });
});
