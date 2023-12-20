import{Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import { CarPage } from "../../Pages/CarPage"
import { SearchPage } from "../../Pages/SearchPage"
import { HomePage } from "../../Pages/HomePage"

const homePage = new HomePage
const searchPage = new SearchPage
const selectedCar = new CarPage

Given("I open TradeMe website",()=>{
    homePage.LaunchUrl()
})

When("I enter {string} in Search field and click Search button",(brandName)=>{
    searchPage.performSearchbyBrand(brandName)
})

Then("I see {string} for the {string}",(numberoflistings,brandName)=>{
    searchPage.verifySearchListings(numberoflistings,brandName)
})

And("I click on first entry from the List",()=>{
    searchPage.selectNthItemfromSearchList(1)
})

Then("I can see header with {string} and verify title displayed as {string} for the selected car",(KeyField,KeyFieldValue)=>{
    switch(KeyField)
    {
        case "ListingTitle":
            selectedCar.VerifyCarHeading(KeyFieldValue)
            break;
        case "Description":
            selectedCar.VerifyCarDescription(KeyFieldValue)
            break;
        case "CarPrice":
            selectedCar.VerifyCarPrice(KeyFieldValue)
            break;
    } 
    
})

Then("I can see car attribute {string} and verify attribute value {string} for the selected car",(CarAttribute,CarAttributeValue)=>{
    selectedCar.VerifyCarAttributes(CarAttribute,CarAttributeValue)
})

Then("I can see car rating for {string} and verify rating value {string} against {string} for the selected car",(CarRatingCategory,GivenRating,TotalRating)=>{
    selectedCar.VerifyCarRatings(CarRatingCategory,GivenRating,TotalRating)
})

Then("I can see Background Check for {string} and verify check status as {string} for the selected car",(CheckType,CheckStatus)=>{
    selectedCar.VerifyCarBackGroundCheck(CheckType,CheckStatus)
})