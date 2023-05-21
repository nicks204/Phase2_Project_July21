@LoginFature
Feature: Login Feature Scenarios
	
  Scenario: Verify Login Functionality with correct username and passowrd
    Given User has launched the Swag Labs Application
    When User enters username "standard_user"
    And User enters password "secret_sauce"
    And User clicks on Login button
    Then User Should be landed on the Products Page
    
  Scenario Outline: Verify the error message when we give incorrect username and password
    Given User has launched the Swag Labs Application
    When User enters username "<UserName>"
    And User enters password "<Password>"
    And User clicks on Login button
    Then User Should be Getting the "<Error>"

    Examples: 
      | UserName      | Password      | Error                                                                     |
      | standard_user | secret_sauce1 | Epic sadface: Username and password do not match any user in this service |
