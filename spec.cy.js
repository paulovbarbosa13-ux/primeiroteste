describe('Verificando elementos adopet', () => {
  it('Visitano pagina de cadastro e criando um', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    cy.get('input[name="nome"]').type('Paulo Barbosa')
    cy.get('input[name="email"]').type('paulobarbosa@email.com.br');
    cy.get('input[name="password"]').type('Paulo123');
    cy.get('input[name="confirm_password"]').type('Paulo123');
    cy.contains('button', 'Cadastrar').click();
  })
})