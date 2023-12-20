Feature: Search Cars and verify its details
As a customer, I want to search cars on TradeMe with given car brand and verify its details

Background: Launch TradeMe website
Given I open TradeMe website

Scenario Outline:
When I enter "<brand>" in Search field and click Search button
Then I see "<numberoflistings>" for the "<brand>"

Examples:
|searchType|brand       |numberoflistings|
|Car       |suzuki swift|1,458           |
|Car       |nissan leaf |934             |
|Car       |maruti zen  |0               |

Scenario Outline: 
When I enter "2013 Suzuki Swift Ddis" in Search field and click Search button
And I click on first entry from the List 
Then I can see header with "<KeyField>" and verify title displayed as "<KeyFieldValue>" for the selected car

Examples:
|KeyField      |KeyFieldValue                         |  
|ListingTitle  |2013 Suzuki Swift Ddis                |
|Description   |Great little fuel efficient run around|
|CarPrice      |$6,500                                |

Scenario Outline: 
When I enter "2013 Suzuki Swift Ddis" in Search field and click Search button
And I click on first entry from the List 
Then I can see car attribute "<CarAttribute>" and verify attribute value "<CarAttributeValue>" for the selected car

Examples:
|CarAttribute      |CarAttributeValue  |  
|vehicle-odometer  |149,245km          |
|vehicle-car       |Hatchback          |
|vehicle-fuel      |Diesel             |

Scenario Outline: 
When I enter "2013 Suzuki Swift Ddis" in Search field and click Search button
And I click on first entry from the List 
Then I can see car rating for "<CarRatingCategory>" and verify rating value "<GivenRating>" against "<TotalRating>" for the selected car

Examples:
|CarRatingCategory |GivenRating|TotalRating|
|Energy economy    |3.5        |6          |
|Overall safety    |2          |5          |
|Carbon emissions  |3.5        |6          |
|Driver Safety     |1          |5          |

Scenario Outline: 
When I enter "2013 Suzuki Swift Ddis" in Search field and click Search button
And I click on first entry from the List 
Then I can see Background Check for "<CheckType>" and verify check status as "<CheckStatus>" for the selected car

Examples:
|CheckType              |CheckStatus|
|Stolen vehicle check   |Passed     |
|Damaged import check   |NZ New     |
|Re-registered check    |Passed     |
|Money owing            |Passed     |