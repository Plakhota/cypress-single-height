/// <reference types="cypress" />

// This test case spec contains everything needed to run a full visual test against the ACME bank site.
// The file `applitools.config.js` specifies how to run this test against multiple browsers in Applitools Ultrafast Grid.

// This "describe" method contains related test cases with per-test setup and cleanup.
// In this example, there is only one test.
const address = 'https://www.victorinox.com/uk/en/Damast-Limited-Edition/cms/sak-limited-edition-damast';
const isfully = false;

describe('Check app that is repsonsive to height', () => {

    // This method performs setup before each test.
    beforeEach(() => {

        // Open Eyes to start visual testing.
        // Each test should open its own Eyes for its own snapshots.
        cy.eyesOpen({
            appName: 'ACME Bank',                       // The name of the app under test
            testName: Cypress.currentTest.title, 
                   
        });

        

        cy.visit(address)

        cy.get('#onetrust-pc-btn-handler').click()



    })

    it('DOM taken with height 100', () => {
        
       
        cy.viewport(500, 100)

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: isfully
        });
        
       
    })

    it('DOM taken with height 200', () => {
        
       
        cy.viewport(500, 200)

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: isfully
        });
        
       
    })

    it('DOM taken with height 500', () => {
        
       
        cy.viewport(500, 500)

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: isfully
        });
        
       
    })

    it('DOM taken with height 600', () => {
        
       
        cy.viewport(500, 600)

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: isfully
        });
        
       
    })

    
    it('DOM taken with height 700', () => {
        
       
        cy.viewport(500, 700)

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: isfully
        });
        
       
    })

    it('DOM taken with height 800', () => {
        
        // Open Eyes to start visual testing.
       // Each test should open its own Eyes for its own snapshots.
     
       cy.viewport(500, 800)

       // Verify the full login page loaded correctly.
       cy.eyesCheckWindow({
           tag: "Login page",
           target: 'window',
           fully: isfully
       });
       
      
   })
   
    
    it('DOM taken with height 900', () => {
        
       
        cy.viewport(500, 900)

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: isfully
        });
        
       
    })
    
    it('DOM taken with height 1000', () => {
        
       
        cy.viewport(500, 1000)

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: isfully
        });
        

       
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()

       
    })
})
