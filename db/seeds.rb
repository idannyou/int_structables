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
User.destroy_all
Category.destroy_all

u1 = User.create(username: 'guest', password: 'guestguest')
u2 = User.create(username: 'testing', password: 'testing')

#categories
cat1 = Category.create(name: 'Derivative');
cat2 = Category.create(name: 'Integral');
cat3 = Category.create(name: 'Limit');

#Concept Seed

c1 = Concept.new(title: 'Cute', description:'Cute', user_id: u1.id, publish: false)

c2 = Concept.new(title: 'Kinda Cute', description:'Mehhhhhh', user_id: u1.id, publish: false)

c3 = Concept.new(title: 'Sorta Cute', description:'Cool', user_id: u1.id, publish: false)

c4 = Concept.new(title: 'Not Cute', description:'Ewwwwwww', user_id: u2.id, publish: false)

c5 = Concept.new(title: 'Mad Cute', description:'Woahhhhh', user_id: u2.id, publish: false)

c6 = Concept.new(title: 'Funny Cute', description:'hahahhahha', user_id: u2.id, publish: false)

c7 = Concept.new(title: 'LAWL Cute', description:'LMFAO', user_id: u2.id, publish: false)

c8 = Concept.new(title: 'Ok Cute', description:'KAWAAAIIIIIIIII', user_id: u2.id, publish: false)

c9 = Concept.new(title: 'Not So Cute', description:'NOT!', user_id: u1.id, publish: false)

c10 = Concept.new(
  title: "How to minimize the surface area of a cylinder?",
  description: "Using derivatives, I'll show you how to minimize the surface area of a cylinder given a constant volume.",
  equations: "",
  user_id: u1.id,
  publish: false,
  category_ids: [cat1.id, cat3.id]
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
  body:
   "\\(-2V*r^{-2}+4\\pi\\cdot r=0\\)\n\nIsolate r:\n\n\\(r^3=\\frac{2V}{4\\cdot\\pi}\\)\n\nIf we assume V = 1, then we get:\n\n\\(r=\\left(\\frac{1}{2\\pi}\\right)^{\\frac{1}{3}}\\approx.54\\)\n",
  order: 6.0,
  title: "Set the derivative to 0"
)
s5= c10.steps.new(
  body: "\\(SA=\\frac{2\\pi rV}{\\pi r^2}+2\\pi\\cdot r^2\\)\n\n\\(=2\\cdot\\frac{V}{r}+2\\pi\\cdot r^2\\)\n",
  order: 4.0,
  title: "Plug the isolated height equation into the surface area equation"
)

s6= c10.steps.new(
  body:
   "We will also need the surface area equation. \n\nThe surface area of a cylinder is defined by:\n \\(SA = 2πrh+2πr^2 \\), where \\(r\\) is the radius.",
  order: 2.0,
  title: "The surface area of a cylinder"
)

s7= c10.steps.new(
  body: "First we need the equation for the volume of a cylinder.\n\nThe volume of a cylinder is:\n\n\\(V=πr^2h\\)\n",
  order: 1.0,
  title: "The volume of a cylinder"
)

s8= c10.steps.new(
  body: "By substituting 1 for V, we can graph the function and see that the lowest Surface Area is near .54.",
  order: 7.0,
  title: "Graph of surface area function"
)

s9= c10.steps.new(
  body: "\\(\\frac{dSA}{dr}=-2V*r^{-2}+4\\pi r\\)",
  order: 5.0,
  title: "Take the derivative of the surface area in respect to the radius"
)

s10= c10.steps.new(
  body: "Isolate the height from the volume equation:\n\n\\(h=\\frac{V}{\\pi\\cdot r^2}\\)",
  order: 3.0,
  title: "Isolate the height"
)




s1.images.new(image: File.open('app/assets/images/cutest-panda-gifs-babies.gif'))
s2.images.new(image: File.open('app/assets/images/super-cute-heart-kitty-illustration-valentine-animated-gif.gif'))
s3.images.new(image: File.open('app/assets/images/heroImage.jpg'))
s8.images.new(image: File.open('app/assets/images/Surface Area 1.png'))

s1.save!
s2.save!
s3.save!
s4.save!
s5.save!
s6.save!
s7.save!
s8.save!
s9.save!
s10.save!
