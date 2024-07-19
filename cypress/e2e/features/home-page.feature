Feature: Home page

  Scenario: See my existing todos
    Given I navigate to the home page
    Then I see the home page

    Given I have the following todos:
      | title             | completed |
      | A test todo       | false     |
      | Another test todo | true      |
    Then I see the following todo:
      | title             | completed |
      | A test todo       | false     |
      | Another test todo | true      |
    And I see that I have "1 item left!"



