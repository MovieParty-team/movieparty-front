describe("Search Paris", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    //   log in as admin@admin.com, password
    cy.get("#email").type("admin@admin.com");
    cy.get("#password").type("password");
    cy.get("#login").click();

    //   search for theater
    cy.url().should("include", "/home");

    cy.get("#search").type("paris");
    cy.url().should("include", "/search?theater=paris");
  });
});
