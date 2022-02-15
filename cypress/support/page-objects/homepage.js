class homepage{


   getsearchitem(){

    return cy.get('#small-searchterms')
   }

   getsearchbutton(){

      return cy.get('#small-search-box-form > .button-1')
  
   }


}

export default homepage;