# frozen_string_literal: true

require 'test_helper'

module Api
  class GreetingsControllerTest < ActionDispatch::IntegrationTest
    test 'should get random' do
      get api_greetings_random_url
      assert_response :success
    end
  end
end
