Feature: Google Search

  Background:
    Given open my application

  Scenario: Home Page
    When I log in as Following
      | userName | password |
      | mercury  | mercury  |
    Then click on submit button
    Then verify title should be 'Login Successfully'

# Scenario: Home Page
#   When I log in as Following
#     | userName | password |
#     | mercury  | mercury  |
#   Then click on submit button
#   Then verify title should be 'Login Successfully'
