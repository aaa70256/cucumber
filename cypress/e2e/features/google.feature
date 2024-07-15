Feature: Google Search
  Background:
    Given open my application
  @main
  Scenario: Home Page
    When Login infomation is "<userName>" and "<password>"
    Then click on submit button
    Then verify title should be 'Login Successfully'

    @test
    Examples:
      | userName | password |
      | mercury  | mercury  |
