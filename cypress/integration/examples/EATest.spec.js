describe('My first cypress test',() => {

    it('Navaigate too EA site', () => {
        // cy.visit('http://executeautomation.com/demosite/Login.html') 

        cy.visit('https://harper-morpho-luna.myshopify.com') 
        cy.get('.site-nav--active > .site-nav__link').click()
        cy.get(':nth-child(2) > .site-nav__link').click()
                       
    })
})