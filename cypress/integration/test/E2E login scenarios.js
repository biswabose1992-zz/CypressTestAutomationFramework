/// <reference types="Cypress" />
import devicedetailspage from '../../support/page-objects/devicedetailspage'
import homepage from '../../support/page-objects/homepage'
import cartpage from '../../support/page-objects/cartpage'
import userregistration from'../../support/page-objects/userregistrationpage'
import 'cypress-iframe'


import { identity } from 'lodash'

describe('E2E signup scenrios',  function(){

    beforeEach( ()=>  {
        //Actions performed before each test:Launch URL
       // cy.visit(Cypress.env('login_url'))
        //Fetch data from fixtures
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('Product Search & add to cart functionality', function() {
       //Enter test steps
       const home = new homepage()
       const devicedetails = new devicedetailspage()
       const cart= new cartpage()
       cy.visit(Cypress.env('login_url'))
       home.getsearchitem().should('be.empty').type(this.data.devicename)
       home.getsearchbutton().should('be.enabled').click();
       devicedetails.getdeviceetails().should('be.visible').click();
       devicedetails.getenternoifitems().should('be.visible').should('have.value','1').clear().type(this.data.totalqty);
       devicedetails.getaddtocartbutton().should('be.enabled').click();
       devicedetails.getclosebutton().should('be.visible').click();
       devicedetails.getshoppingcart().should('be.visible').click();
        //Assert the amount is correctly displayed: Use of custom command
       cy.verifyamount();
    })

    it('Registration functionality', function() {
        //Enter test steps
        const userregister= new userregistration();
        cy.visit(Cypress.env('login_url')+'register?returnUrl=%2F') 
        userregister.getgender().check().should('be.checked')
        userregister.getfirstname().should('be.empty').type(this.data.Firstname)
        userregister.getlasttname().should('be.empty').type(this.data.Lastname)
        userregister.getday().select(5).should('have.value',this.data.Date)
        userregister.getmonth().select(4).should('have.value',this.data.Month)
        userregister.getyear().select(5).should('have.value',this.data.Year)


        userregister.getcompmayname().should('be.empty').type(this.data.Company)
        userregister.getpassword().should('be.empty').type(this.data.Password)
        userregister.confirmpassword().should('be.empty').type(this.data.Confirmpassword)  
        
    })

    it('Login functionality', function() {

        cy.visit(Cypress.env('login_url'))
        //Custom commend for login functionality with different set of test data
        this.data.loginusers.forEach(function(element){

            Object.keys(element).forEach(function(key) {
            cy.login(key,element[key])

        })
 
    })
})

    it('Login functionality',  function() {

        /*Handle iFrames in Cypress
        */
         cy.visit("https://www.autotrader.co.uk/")
        const iframe= cy
        .get('#sp_message_iframe_576092')
        .its('0.contentDocument.body').should('be.visible').then(cy.wrap)
       
        iframe.contains('Accept All').click()
        // cy.frameLoaded('#sp_message_iframe_576092')
        // cy.iframe().contains('Accept All').click()
         cy.get('#postcode').clear().should('be.empty').type('M5 3DE').should('have.value','M5 3DE')
         cy.get('.atds-button--primary').should('be.enabled').click()
         cy.get('.deals-toggle > .atc-field__label').should('be.visible').click()
         cy.contains(' Wheelchair accessible (WAV)').should('be.visible').click()

        })

})
