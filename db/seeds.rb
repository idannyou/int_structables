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

c10 = Concept.new(
  title: "How to minimize the surface area of a cylinder?",
  description: "Using derivatives, I'll show you how to minimize the surface area of a cylinder given a constant volume.",
  equations: "",
  user_id: u1.id,
  publish: true,
  category_ids: [cat1.id]
)

c11 = Concept.new(
  title: "Related Rates",
  description:
  "I'll demonstrate how to use related rates to solve a fishing problem.",
  equations: "",
  user_id: u1.id,
  publish: true,
  category_ids: [cat1.id]
)

c12 = Concept.new(
  title: "How to Approximate the Area Under the Curve Using Geometry?",
   description:
    "I will show you how to approximate the area under a curve using basic geometry. For this example, we will look at the area of f(x) = x from x=0 to x=1.",
   equations: "",
   user_id: u1.id,
   publish: true,
   category_ids: [cat2.id]
)


#Image Seed

c1.images.new(image: 'http://www.vomzi.com/wp-content/uploads/2016/02/best-cute-gif-788.gif')
c1.images.new(image: File.open('app/assets/images/91558-babies-cute-baby.gif'))
c2.images.new(image: File.open('app/assets/images/11-cute-gif-222.gif'))
c3.images.new(image: File.open('app/assets/images/718448.gif'))
c10.images.new(image: File.open('app/assets/images/surface-area-of-cylinder-animation.gif'))
c11.images.new(image: File.open('app/assets/images/related_rates.jpg'))
c12.images.new(image: File.open('app/assets/images/Y = X.png'))

c1.save!
c2.save!
c3.save!
c10.save!
c11.save!

#Step Seed
s1= c1.steps.new(title:'Step 1', body:'Step 1 Body', order: 1.0, concept_id: c1.id)
s2= c1.steps.new(title:'Step 2', body:'Step 2 Body', order: 2.0, concept_id: c1.id)
s3= c1.steps.new(title:'Step 3', body:'Step 3 Body', order: 3.0, concept_id: c1.id)

# Optimization

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

#Optimization
s4.save!
s5.save!
s6.save!
s7.save!
s8.save!
s9.save!
s10.save!

#Related Rates
s11= c11.steps.new(
  body:
   "The height of the bridge is not moving.\n\nThe angle is moving! One can see that the angle gets bigger as the fish gets closer.\n\nThe line is also moving! As a matter of fact the rate is given in the problem. \\(\\frac{1ft}{s}\\)\n\nBecause there are moving parts, we have to create a coordinate system; ie., which way is positive? Which point should be the origin? \n\nLets assume going up and going away from the person is positive. Lets also assume the base of the bridge is the origin, because that's a stationary point. \n\nBecause going away from the person is positive, \\(\\frac{dx}{dt}=-\\frac{1ft}{s}\\).\n\n",
  order: 2.0,
  title: "Identify what is moving and what is stationary"
)

s12= c11.steps.new(
  body:
   "\\(\\frac{d\\theta}{dt}\\cos\\left(\\theta\\right)=h\\cdot\\left(-1\\right)\\cdot x^{-2}\\frac{dx}{dt}\\)\n\nWe can now plug in the variables from the problem to our equation to get what we are interested in.\n\n\\(\\frac{dx}{dt}=\\frac{-1ft}{s}\\)\n\n\\(h=15ft\\)\n\n\\(\\frac{d\\left(\\theta\\right)}{dt}=?\\)\n\n\\(x=25ft\\)\n\nBut, wait! What is \\(\\cos\\left(\\theta\\right)\\) from our equation?\n\nYou can solve for \\(\\theta\\) using:\n\n\\(\\sin\\left(\\theta\\right)=\\frac{h}{x}=\\frac{15ft}{25ft}\\)\n\n\\(\\theta=\\sin^{-1}\\left(\\frac{15ft}{25ft}\\right)\\)\n\n\\(\\theta\\approx.6435rad\\), so \n\n\\(\\cos\\left(.6435rad\\right)\\approx.8\\)",
  order: 5.0,
  title: "Plug it in!"
)

s13= c11.steps.new(
  body:
   "\\(\\frac{d\\theta}{dt}=\\frac{h\\cdot\\left(-1\\right)\\cdot x^{-2}\\frac{dx}{dt}}{\\cos\\left(\\theta\\right)}\\)\n\n\\(=\\frac{\\left(15ft\\cdot\\left(-1\\right)\\cdot\\left(25ft\\right)^{-2}\\cdot-\\frac{1ft}{s}\\right)}{.8}\\)\n\n\\(\\approx.03\\cdot\\frac{rad}{s}\\)\n\nThe answer makes sense, because the angle is getting wider, hence the positive answer!",
  order: 6.0,
  title: "Get answer"
)

s14= c11.steps.new(
body:
 "Now that we have the equation that 'Relates' the variables, we can simply take the derivative of the equation in respect to time.\n\nMake sure to only take the derivative of the moving variables in respect to time. Taking a derivative of a stationary variable in respect to time is 0; ie., \\(\\frac{dh}{dt}=0\\), because it is NOT MOVING!\n\n\\(\\sin\\left(\\theta\\right)=\\frac{h}{x}\\)\n\n\\(\\frac{d\\theta}{dt}\\cos\\left(\\theta\\right)=h\\cdot\\left(-1\\right)\\cdot x^{-2}\\frac{dx}{dt}\\)",
  order: 4.0,
  title: "Take the derivative in respect to time"
)

s15= c11.steps.new(
body:
  "The first step is to understand the problem! You can do that by drawing a picture.\n\nUsing that picture, come up with an equation that relates all the variables relevant to the problem.\n\nIn this case, we have \n\\(\\theta\\) : angle between the line and the water\n\\(x\\) : the distance of the line from the fish to the pole\n\\(h=15ft\\): the height of the bridge",
 order: 1.0,
 title: "Understand the Problem By Drawing the Picture"
)

s16= c11.steps.new(
  body:
   "Now we need to come up with an equation relating all those variables. Hmmmm... what relates the angle \\(\\theta\\), the hypotenuse \\(x\\), and the height of the bridge \\(h:15ft\\).\n\n\\(\\sin\\left(\\theta\\right)=\\frac{h}{x}\\)",
  order: 3.0,
  title: "Identify Equations"
)

s11.images.new(image: File.open('app/assets/images/related_rates copy.jpg'))

s11.save!
s12.save!
s13.save!
s14.save!
s15.save!
s16.save!

# Basic Integral

s17 = c12.steps.new(
  body:
   "Lets look at the function: \n\n\\(f\\left(x\\right)=x\\)\n\nWe can see that finding the area under this curve is simply finding the area of a triangle. We also know that the area of a triangle is: \n\n\\(Area=\\frac{1}{2}\\cdot B\\cdot H\\)\n\nwhere,\n\\(B: Base\\)\n\\(H: Height\\)",
  order: 1.0,
  title: "The Basics"
)
s18 = c12.steps.new(
  body:
   "Now we can plug the base and height into the triangle area formula.\n\n\\(Area=\\frac{1}{2}\\left(1\\cdot1\\right)\\)\n\nSo the area of \\(f\\left(x\\right)=x\\) from x=0 to x=1 is:\n\n\\(\\frac{1}{2}\\)",
  order: 3.0,
  title: "Using the Triangle Area Formula"
)
s19 = c12.steps.new(
  body:
   "\\(Base=1\\)\n\nThe height can be determined by finding the f(x) at the points of interest:\n\n\\(f\\left(1\\right)-f\\left(0\\right)\\)\n\n\\(=1-0\\)\n\n=\\(1\\)\n\nThe height is 1.",
  order: 2.0,
  title: "Base and Height of f(x) = x"
)

s17.save!
s18.save!
s19.save!
