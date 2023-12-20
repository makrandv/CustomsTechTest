export class SearchPage
{

    performSearchbyBrand(brandName)
    {
        cy.get('#search').type(brandName)
        cy.get('button[type="Submit"]').click()
    }

    verifySearchListings(listingCount,brandName)
    {
        cy.get('h3.tm-search-header-result-count__heading').contains('Showing '+listingCount+' results for '+'\''+brandName+'\'')
    }

    selectNthItemfromSearchList(itemCount){
        cy.get('div.tm-motors-search-results-super-feature div.tm-carousel__item').eq(itemCount-1).click()
    }

}