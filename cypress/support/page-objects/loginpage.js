class loginpage{
    
    getlogin(){

        return cy.get('.ico-login')
    }

    gettitle(){

        return cy.title()
    }
    
    getemail(){

        return cy.get('#Email')
    }

    getpassword(){

        return cy.get('#Password')
    }

    getloginbutton(){

        return cy.get('form > .buttons > .button-1')
    }
}
export default loginpage;