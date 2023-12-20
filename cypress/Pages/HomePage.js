export class HomePage
{
    LaunchUrl(){
        cy.visit(Cypress.env('weburl'))
    }
}