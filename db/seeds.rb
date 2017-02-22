# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Concept.destroy_all
Image.destroy_all

User.create(username: 'guest', password: 'guestguest')

#Concept Seed

c1 = Concept.new(title: 'Testing', description:'testingtesting', user_id: 1, publish: true)

c2 = Concept.new(title: 'Testing2', description:'testing2testing2', user_id: 1)

c3 = Concept.new(title: 'Testing3', description:'testing3testing3', user_id: 1)

c4 = Concept.new(title: 'Testing4', description:'testing4testing4', user_id: 4)

#Image Seed

c1.images.new()
c1.images.new()
c1.images.new()
c2.images.new()

c1.save!
c2.save!
