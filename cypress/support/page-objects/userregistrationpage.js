class userregistration{
 
    getgender(){
 
    return  cy.get('#gender-male')
    }
 
    getfirstname(){
 
        return cy.get('#FirstName')
    }

    getlasttname(){

    return cy.get('#LastName')
    } 

    getday(){

        return cy.get('[name="DateOfBirthDay"]')
    } 

    getmonth(){

    return cy.get('[name="DateOfBirthMonth"]')
    }     
 
    getyear(){

        return cy.get('[name="DateOfBirthYear"]')
    } 

    getcompmayname(){

        return cy.get('#Company')
    } 

    getpassword(){

        return cy.get('#Password')
    }  

    confirmpassword(){

        return cy.get('#ConfirmPassword')
    } 
}
 
 export default userregistration;