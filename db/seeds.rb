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
                image_url: 'https://cdn.instructables.com/FMS/9RZ3/IY4Q6YYL/FMS9RZ3IY4Q6YYL.RECTANGLE1.jpg',
                video_url: 'http://techslides.com/demos/sample-videos/small.mp4')

Concept.create(title: 'Testing2', description:'testing2testing2', user_id: 1,
                image_url: 'https://cdn.instructables.com/FPI/Q5ZP/IWWFIVO9/FPIQ5ZPIWWFIVO9.RECTANGLE1.jpg',
                video_url: 'http://techslides.com/demos/sample-videos/small.mp4')

Concept.create(title: 'Testing3', description:'testing3testing3', user_id: 1,
                image_url: 'https://cdn.instructables.com/FDF/M1WT/IY4QB9DD/FDFM1WTIY4QB9DD.RECTANGLE1.jpg',
                video_url: 'http://techslides.com/demos/sample-videos/small.mp4')

Concept.create(title: 'Testing4', description:'testing4testing4', user_id: 4,
                image_url: 'https://cdn.instructables.com/FT0/HCV7/IY3CX8LS/FT0HCV7IY3CX8LS.RECTANGLE1.jpg',
                video_url: 'http://techslides.com/demos/sample-videos/small.mp4')
