describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://192.168.0.11:5173");
  });
  it("contains title Título 1", () => {
    cy.contains("Título 1").should("be.visible");
  });
  it("when click Título 1 the content is shown", () => {
    cy.contains("Título 1").click();
    cy.contains(
      "Asperiores, architecto. Qui explicabo debitis unde distinctio incidunt aspernatur totam voluptatibus. Dignissimos perferendis, nobis possimus doloribus voluptatem nihil, explicabo aperiam dolorum dolorem assumenda beatae repudiandae! Mollitia sequi quo ab quod blanditiis rem sunt omnis modi? Quod, vero soluta. Placeat atque reprehenderit ipsam."
    ).should("be.visible");
    cy.contains(
      "Beatae laudantium, inventore incidunt est facere excepturi porro accusantium reprehenderit neque ullam illo quibusdam. Delectus dicta reprehenderit officiis autem, eveniet ab laudantium obcaecati aperiam unde laboriosam, corporis qui, nostrum veniam. Quos provident minus nisi consequuntur. Repudiandae deleniti fugiat vel ratione, aut debitis ipsa, unde similique minima in natus optio laudantium saepe sed earum dolorum. Vero vel eos numquam incidunt beatae laborum quasi autem accusamus cumque natus sit quos saepe, voluptatibus expedita ad dolor quis neque explicabo dolore id ea magni rem voluptate facilis? Consequuntur natus voluptas inventore corrupti officia amet odit officiis."
    ).should("not.exist");
  });
  it("shows all contents when click on Open all", () => {
    cy.contains("Open all").click();
    cy.contains(
      "Asperiores, architecto. Qui explicabo debitis unde distinctio incidunt aspernatur totam voluptatibus. Dignissimos perferendis, nobis possimus doloribus voluptatem nihil, explicabo aperiam dolorum dolorem assumenda beatae repudiandae! Mollitia sequi quo ab quod blanditiis rem sunt omnis modi? Quod, vero soluta. Placeat atque reprehenderit ipsam."
    ).should("be.visible");
    cy.contains(
      "Beatae laudantium, inventore incidunt est facere excepturi porro accusantium reprehenderit neque ullam illo quibusdam. Delectus dicta reprehenderit officiis autem, eveniet ab laudantium obcaecati aperiam unde laboriosam, corporis qui, nostrum veniam. Quos provident minus nisi consequuntur. Repudiandae deleniti fugiat vel ratione, aut debitis ipsa, unde similique minima in natus optio laudantium saepe sed earum dolorum. Vero vel eos numquam incidunt beatae laborum quasi autem accusamus cumque natus sit quos saepe, voluptatibus expedita ad dolor quis neque explicabo dolore id ea magni rem voluptate facilis? Consequuntur natus voluptas inventore corrupti officia amet odit officiis."
    ).should("be.visible");
    cy.contains(
      "Odit consectetur, dolorem eum minima quo quae modi aperiam enim dicta molestias saepe vero architecto omnis. Itaque debitis, doloribus perspiciatis, fugit, amet facere consequatur rem autem impedit aspernatur labore! Dolore sit harum quod dolorum? Temporibus labore autem repellendus nulla, eligendi eos libero."
    ).should("be.visible");
  });
  it("login when type on name and password and click on login", () => {
    cy.get("#name").type("admin");
    cy.get("[placeholder='password']").type("password");
    cy.get("[data-cy='form-login'] [type='submit']").click();
    cy.contains("Hola admin").should("be.visible");
  });
});
