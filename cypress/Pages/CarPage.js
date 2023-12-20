import { forEach } from "cypress/types/lodash"

export class CarDetails
{

VerifyCarHeading(carHeading)
{
    cy.get('h1.tm-motors-listing__title').contains(carHeading)
}

VerifyCarAttributies(attributesDetails)
{
    attributesDetails.forEach(attribute =>{
    cy.get('tg-icon[name='+attribute.attributeName+']').parent().parent().contains(attribute.attributeValue)
    })
}
 
VerifyCarRatings(ratingDetails)
{
    ratingDetails.forEach(rating =>{
        cy.get("div.tm-motors-listing-ratings__rating-card div.tm-motors-listing-ratings__title")
        .contains(rating.RatingName)
        .parent().get('div.tm-listing-rating-star__blue[aria-label='+rating.RatingValue+'out of '+rating.RatingValue+' stars')
        .should('be.visible')
    })
   
}

VerifyCarBackGroundCheck(backgroundCheckDetails)
{
    backgroundCheckDetails.forEach(checkDetail =>{
        cy.get("tm-background-check-box[checktitle='"+ checkDetail.CheckName+"']")
        .get('span.tm-background-check__status').contains(checkDetail.CheckStatus)
    })
}

VerifyCarDescription(carDescription)
{
    cy.get('div.tm-markdown').contains(carDescription)
}
      
VerifyCarPrice(carPrice)
{
    cy.get('div.tm-motors-pricing-box__price').contains(carPrice)
}

}



