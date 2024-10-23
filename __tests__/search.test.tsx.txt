import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import QueryProvider from "@/utils/QueryProvider";
import SearchPage from "@/app/(connected)/search/page";

const theaterDataMock = [
  {
    provider_id: 1,
    data: {
      name: "CinéCool",
      zip: "75000",
      address: "10 rue de la paix",
      city: "Paris",
      thumbnail: "https://cinecool.com",
    },
  },
  {
    provider_id: 2,
    data: {
      name: "CinéPasCool",
      zip: "75673",
      address: "10 rue de la guerre",
      city: "Paris",
      thumbnail: "https://cinepascool.com",
    },
  },
  {
    provider_id: 3,
    data: {
      name: "ParisCiné",
      zip: "75200",
      address: "27 avenue de Montaigne",
      city: "Paris",
      thumbnail: "https://cinecool.com",
    },
  },
];

describe("Search", () => {
  beforeAll(() => {
    jest
      .spyOn(URLSearchParams.prototype, "get")
      .mockImplementation(() => "theater=CinéCool");
    render(
      <QueryProvider>
        <SearchPage />
      </QueryProvider>
    );
  });

  it("should render search Component", () => {
    expect(screen).toBeDefined();
  });

  it('should show "CinéCool" in the search result', () => {
    expect(screen.getByText("CinéCool")).toBeInTheDocument();
  });
});
