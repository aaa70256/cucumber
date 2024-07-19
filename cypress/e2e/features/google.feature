Feature: Google Search
  Background:
    Given open my application
  @main
  Scenario: Home Page
    When Login infomation is "<userName>" and "<password>"
    Then click on submit button

    #版本問題JS無法寫And但feature沒影響
    And  verify title should be 'Login Successfully'

    @test
    Examples:
      | userName | password |
      | mercury  | mercury  |
