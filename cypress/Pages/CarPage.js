
export class CarPage
{

VerifyCarHeading(carHeading)
{
    cy.get('h1.tm-motors-listing__title').contains(carHeading)
}

VerifyCarAttributes(attributeName,attributeValue)
{
    cy.get('tg-icon[name='+attributeName+']').parent().parent().contains(attributeValue)
}
 
VerifyCarRatings(CarRatingCategory,GivenRating,TotalRating)
{
         cy.get("div.tm-motors-listing-ratings__card-top-section div.tm-motors-listing-ratings__title")
        .contains(CarRatingCategory)
        .siblings('tm-listing-ratings-star')
        .get("div.tm-listing-rating-star__blue[aria-label='"+GivenRating+" out of "+TotalRating+" stars'"+"]")
        .should('be.visible')
}

VerifyCarBackGroundCheck(CheckType,CheckStatus)
{
        cy.get("tm-background-check-box[checktitle='"+ CheckType+"']")
        .get('span.tm-background-check__status').contains(CheckStatus)
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



