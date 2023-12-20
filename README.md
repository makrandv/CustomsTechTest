**Introduction :**

Automated test solution is implementing behavioral driven testing (BDD) approach for verifying scenarios specified as part of assessment

Below are the scenarios covered :
1. Verify the count of car listing based on search criteria
2. Verify the key details (e.g. Title , car attributes, ratings , background check) of the car selected from the search list
3. Retrive and confirm count of the different car brands avaliable from TradeMe sandbox api

**Test automation tool:**
Cypress was used as test automation tool for both UI and api testing and to verify scenarios with BDD approach we have used cypress-cucumber-preprocessor plugin.

Below are npm dependencies needed
a. Cypress v13.6.1
b. Cypress-cucumber-preprocessor: v4.3.1
c. multiple-cucumber-html-reporter: v3.5.0

**Installation :**
Need Node.js with v20.10.0 installed

Clone the Git Repo locally the run below commands to install
npm init
npm install

**Execution:**
These command should install all the required dependencies and then feature files are ready for execution of scenarios using below command
npx cypress run (in headless mode)
or 
npx cypress open (to execute from the Cypress Runner)

Once the tests are executed below command can be used to generate HTML report from the JSON file

node cucumber-html-reports.js

**Approach:**
I have used production url of TradeMe for running UI tests as there was not much data avaliable on sandbox environment of TradeMe , however I have used sandbox url for API testing.

URL used for testing are configured under env variable in cypress.config.js and this will give the flexibility to run tests against any needed enviroment.

I have tried to implement Page Object model to seperate the responsbility of control identification and verification methods for easy maintainance of automation tests. I have created page objects for Homepage , Searchpage , Carpage for implementing seperation of responsibility

All the scenarios are data driven hence giving flexibility to add more data to increase coverage

**Assumption :**
Since we are interacting with live production data in TradeMe , hence there is possibility of test failures due to changes to examples we have used in the test , however I have tried to take specific examples to avoid failures as much as possible.

"Other" is not considered as named car brand hence excluded from the verification of name car brands from API results

**Future Enchancement :**

Below are few enchancements which I couldn't implement but will work towards it in future 
1. Adding tags to Feature files to execute scenarios based on tag - there is library @cypress/grep which can be used for the implementation
2. Adding capabilities to cover other search categories (e.g. Mobile , Laptop) using same scenarios and step definitions 

 
