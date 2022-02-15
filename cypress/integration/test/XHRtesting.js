/// <reference types="Cypress" />

describe('XHR Testing scenario',function(){


    it('Test mock API', function() {

        cy.visit('https://demo.nopcommerce.com/25-virtual-gift-card')

        cy.intercept({
            method : 'POST',
            url : "https://demo.nopcommerce.com/addproducttocart/details/43/1"
   
        },

        {
            statusCode: 200,
            body: {
                "success": false,
                "message": [
                    "Enter valid sender name"
                ]
            }
        }).as("mockaddtocart")
        cy.get('#add-to-cart-button-43').click();
        cy.wait('@mockaddtocart')

        
    })

    })


