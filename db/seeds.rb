# frozen_string_literal: true

# db/seeds.rb
5.times do
  Message.create(content: Faker::Lorem.sentence)
end
