# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Concept.destroy_all
Image.destroy_all
Step.destroy_all

User.create(username: 'guest', password: 'guestguest')

#Concept Seed

c1 = Concept.new(title: 'Cute', description:'Cute', user_id: 1, publish: true)

c2 = Concept.new(title: 'Kinda Cute', description:'Mehhhhhh', user_id: 1, publish: true)

c3 = Concept.new(title: 'Sorta Cute', description:'Cool', user_id: 1, publish: true)

c4 = Concept.new(title: 'Not Cute', description:'Ewwwwwww', user_id: 4, publish: true)

c5 = Concept.new(title: 'Mad Cute', description:'Woahhhhh', user_id: 4, publish: true)

c6 = Concept.new(title: 'Funny Cute', description:'hahahhahha', user_id: 4, publish: true)

c7 = Concept.new(title: 'LAWL Cute', description:'LMFAO', user_id: 4, publish: false)

c8 = Concept.new(title: 'Ok Cute', description:'KAWAAAIIIIIIIII', user_id: 4, publish: true)

c9 = Concept.new(title: 'Not So Cute', description:'NOT!', user_id: 1, publish: false)

c10 = Concept.new(
  title: "How to minimize the surface area of a cylinder?",
  description: "Using derivatives, I'll show you how to minimize the surface area of a cylinder.",
  equations: "",
  user_id: 1,
  image_url: nil,
  video_url: nil,
  publish: false
)

#Image Seed

c1.images.new(image: 'http://www.vomzi.com/wp-content/uploads/2016/02/best-cute-gif-788.gif')
c1.images.new(image: File.open('app/assets/images/91558-babies-cute-baby.gif'))
c2.images.new(image: File.open('app/assets/images/11-cute-gif-222.gif'))
c3.images.new(image: File.open('app/assets/images/718448.gif'))
c4.images.new(image: File.open('app/assets/images/4447706-cute-wallpapers.jpg'))
c5.images.new(image: File.open('app/assets/images/babyasian.gif'))
c6.images.new(image: File.open('app/assets/images/bears-cute-gif-Favim.com-4009131.gif'))
c8.images.new(image: File.open('app/assets/images/cute-kitty-animated-gif-25.gif'))
c10.images.new(image: File.open('app/assets/images/surface-area-of-cylinder-animation.gif'))



c1.save!
c2.save!
c3.save!
c4.save!
c5.save!
c6.save!
c8.save!
c10.save!

#Step Seed
s1= c1.steps.new(title:'Step 1', body:'Step 1 Body', order: 1.0, concept_id: c1.id)
s2= c1.steps.new(title:'Step 2', body:'Step 2 Body', order: 2.0, concept_id: c1.id)
s3= c1.steps.new(title:'Step 3', body:'Step 3 Body', order: 3.0, concept_id: c1.id)
s4= c10.steps.new(
  body: "The volume \\(V\\) of a cylinder is:\n\n\\(V=πr^2h\\)",
  order: 1.0,
  concept_id: c10.id,
  title: "The volume of a cylinder"
)
s5= c10.steps.new(
  body: "The surface area of a cylinder (\\(SA\\)) is defined by:\n \\(SA = 2πrh+2πr^2 \\), where \\(r\\) is the radius.",
  order: 2.0,
  concept_id: c10.id,
  title: "The surface area of a cylinder"
)


s1.images.new(image: File.open('app/assets/images/cutest-panda-gifs-babies.gif'))
s2.images.new(image: File.open('app/assets/images/super-cute-heart-kitty-illustration-valentine-animated-gif.gif'))
s3.images.new(image: File.open('app/assets/images/heroImage.jpg'))

s1.save!
s2.save!
s3.save!
s4.save!
s5.save!
