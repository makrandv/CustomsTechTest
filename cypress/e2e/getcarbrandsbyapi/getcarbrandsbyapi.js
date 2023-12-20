import{When,Then} from "cypress-cucumber-preprocessor/steps"

let apiResponseObj="";

When("I request list of named car brands from {string}",(resourceurl)=>{

     cy.request('GET',Cypress.env('apiurl')+resourceurl)
    .then((response) =>{
        apiResponseObj = response
    })
})

Then("I can see {string} car brand available",(carcount)=>{
    let count=0;
    apiResponseObj.body.Subcategories.forEach(element => {
        if(element.Name != "Other")
        {
            count++
        }
    });
    expect(count).to.equal(+carcount)
})
