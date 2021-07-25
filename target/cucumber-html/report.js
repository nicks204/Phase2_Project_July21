$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Login Functionality with correct username and passowrd",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should be landed on the Products Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Login Functionality with correct username and passowrd",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_launched_the_swag_labs_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should be landed on the Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should be Getting the \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce1",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_launched_the_swag_labs_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce1\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should be Getting the \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_getting_the_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});