beforeEach(() => {
  cy.visit("/");
});

describe("template spec", () => {
  it("Правильный логин", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });
  it("Пустое имя пользователя", () => {
    cy.login(null, "test");
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });
  it("Пустой пароль", () => {
    cy.login("test@test.com", null);
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });
}),

  describe("my tests", () => {
    beforeEach(() => {
      cy.login("test@test.com", "test");
      cy.book("Book2");
      cy.contains("Add to favorite").click();
    });
    it("Добавить в избранное", () => {
      cy.contains("Delete from favorite").should("be.visible");
    });

    it("Удалить из избранного", () => {
      cy.contains("Delete from favorite").click();
      cy.contains("Add to favorite").should("be.visible");
    });

    it("Книги в избранном", () => {
      cy.visit("./favorites");
      cy.contains("Delete from favorite").should("be.visible");
    });
  });
