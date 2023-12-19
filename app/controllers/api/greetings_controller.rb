# frozen_string_literal: true

module Api
  class GreetingsController < ApplicationController
    def random
      render json: { greeting: Message.order('RANDOM()').first&.content }
    end
  end
end
