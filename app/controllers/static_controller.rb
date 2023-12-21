class StaticController < ApplicationController
  def index
    @greeting = fetch_random_greeting
  end

  private

  def fetch_random_greeting
    response = RestClient.get('http://localhost:3000/api/greetings/random')
    data = JSON.parse(response.body)
    data['greeting']
  end
end
