# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Concept.destroy_all

User.create(username: 'guest', password: 'guestguest')

Concept.create(title: 'Testing', description:'testingtesting', user_id: 1,
                image_url: 'https://i.ytimg.com/vi/OMtl_jpy4oo/maxresdefault.jpg',
                video_url: 'http://techslides.com/demos/sample-videos/small.mp4')

Concept.create(title: 'Testing2', description:'testing2testing2', user_id: 1,
                image_url: 'https://i.ytimg.com/vi/OMtl_jpy4oo/maxresdefault.jpg',
                video_url: 'http://techslides.com/demos/sample-videos/small.mp4')

Concept.create(title: 'Testing3', description:'testing3testing3', user_id: 1,
                image_url: 'https://i.ytimg.com/vi/OMtl_jpy4oo/maxresdefault.jpg',
                video_url: 'http://techslides.com/demos/sample-videos/small.mp4')

Concept.create(title: 'Testing4', description:'testing4testing4', user_id: 4,
                image_url: 'https://i.ytimg.com/vi/OMtl_jpy4oo/maxresdefault.jpg',
                video_url: 'http://techslides.com/demos/sample-videos/small.mp4')
