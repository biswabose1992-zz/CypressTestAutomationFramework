class devicedetailspage{
    
   getdeviceetails(){

    return cy.get('h2.product-title > a')
   
    }
    
    getenternoifitems(){

        return cy.get('#product_enteredQuantity_20')
    }
    
   
    getaddtocartbutton(){

        return cy.get('#add-to-cart-button-20')
     }
  
     getshoppingcart(){
  
        return cy.get('.cart-label')
     }

    getclosebutton(){

        return cy.get('.close')
    }

    getdeviceprice(){

        return cy.get('tbody > tr > .unit-price > span')
    }

    gettotalcartvalue(){

        return  cy.get('.value-summary > strong')
    }

}
export default devicedetailspage;