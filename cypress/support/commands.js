import loginpage from '../support/page-objects/loginpage'
import devicedetailspage from '../support/page-objects/devicedetailspage'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Custom command for login
Cypress.Commands.add('login', (email, password) => {
    
    const login= new loginpage()
    login.getlogin().click()
    login.gettitle().should('equal',"nopCommerce demo store. Login")
    login.getemail().should('be.empty').type(email).should('have.value',email)
    login.getpassword().should('be.empty').type(password).should('have.value',password)
    login.getloginbutton().should('be.enabled').click()

}) 

Cypress.Commands.add('verifyamount', () => {
   
    const devicedetails= new devicedetailspage()
    devicedetails.getdeviceprice().then(function(value){

        devicedetails.gettotalcartvalue().then(function(totalcart){

            const sum= totalcart.text().split("$")
            var Carttotal= Number(sum[1].trim())            
            const price =value.text()
            var truevalue= price.split("$")
            const test=Number(truevalue[1].trim())
            const totalamount= test* this.data.totalqty
            expect(totalamount).to.equal(Carttotal)
            
        })
    })

}) 

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
