describe('My first cypress test',() => {


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });    

    it('Navaigate too EA site', () => {
        // cy.visit('http://executeautomation.com/demosite/Login.html') 

        cy.visit('https://harper-morpho-luna.myshopify.com') 
        cy.get('body').click({ force: true })
        // cy.get('body > div.newsletter-popup-live > button').click()

        cy.get('.site-nav--active > .site-nav__link').click()
        // cy.get(':nth-child(2) > .site-nav__link').click() 
        // cy.get('Catalog').click()

        cy.contains('Catalog').click({ force: true })
        // cy.contains('Catalog').click()
        // cy.get('#SiteNav > li:nth-child(2) > a').dblclick()

        // cy.get(':nth-child(2) > .site-nav__link').click()
        // cy.get('#SiteNav > li:nth-child(2) > a').click()                      
    })
})