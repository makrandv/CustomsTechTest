Feature: Verify the number of the named car brands available from TradeMe api

Scenario Outline: 
When I request list of named car brands from "<resourceurl>"
Then I can see "<carbrandcount>" car brand available

Examples:
|resourceurl             |carbrandcount|
|Categories/UsedCars.json|80           |