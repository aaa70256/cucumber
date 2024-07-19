Feature: todo demo test

  Scenario: add todo list
    Given I have the following todos:
      | title      | compeleted |
      | Atest todo | false      |
    And I navigate to the home page
    And the home page has loaded
    When I completed "A test todo"
    Then I see the following todos:
      | title       | completed |
      | A test todo | true      |
    And I see that I have "0 items left"