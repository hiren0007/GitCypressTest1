// Cypress.Errors.defaults({uncaughtExceptions: false, unhandledRejections: false})

describe('My first cypress test',() => {



    it('Navaigate too EA site', () => {
        // cy.visit('http://executeautomation.com/demosite/Login.html') 

  

        cy.visit('https://harper-morpho-luna.myshopify.com', {
            onBeforeLoad: (win) => {
              win.onerror = null
            }
          }) 
        cy.get('.site-nav--active > .site-nav__link').click()
        cy.get(':nth-child(2) > .site-nav__link').click()
                       
    })


    Cypress.on('uncaught:exception',(err, runnable) => {
        return false
    });



})