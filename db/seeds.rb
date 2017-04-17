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
Comment.destroy_all

u1 = User.create(username: 'guest', password: 'guestguest')
u2 = User.create(username: 'testing', password: 'testing')
u3 = User.create(username: 'TurnUpCalc', password: ENV["password"])

#categories
cat1 = Category.create(name: 'Derivative');
cat2 = Category.create(name: 'Integral');
cat3 = Category.create(name: 'Limit');

#Concept Seed

c1 = Concept.new(title: 'Cute', description:'Cute', user_id: u1.id, publish: false)

c2 = Concept.new(title: 'Kinda Cute', description:'Mehhhhhh', user_id: u1.id, publish: false)

c3 = Concept.new(title: 'Sorta Cute', description:'Cool', user_id: u3.id, publish: false)

c10 = Concept.new(
  title: "How to minimize the surface area of a cylinder?",
  description: "Using derivatives, I'll show you how to minimize the surface area of a cylinder given a constant volume.",
  equations: "",
  user_id: u3.id,
  publish: true,
  category_ids: [cat1.id]
)

c11 = Concept.new(
  title: "Related Rates",
  description:
  "I'll demonstrate how to use related rates to solve a fishing problem.",
  equations: "",
  user_id: u3.id,
  publish: true,
  category_ids: [cat1.id]
)

c12 = Concept.new(
  title: "How to Approximate the Area Under the Curve Using Geometry?",
   description:
    "I will show you how to approximate the area under a curve using basic geometry. For this example, we will look at the area of f(x) = x from x=0 to x=1.",
   equations: "",
   user_id: u3.id,
   publish: true,
   category_ids: [cat2.id]
)

c13 = Concept.new(
  title: "What is a Slope?",
  description: "The slope of a line is the measure of the steepness of a line.",
  equations: "",
  user_id: u3.id,
  publish: true
)

c14 = Concept.new(
   title: "What is a Derivative? ",
   description:
    "A derivative measures the sensitivity of the change of a function relative to a variable. Derivative expands on the slope definition to achieve this measurement. So before we dive into derivatives, we need to understand what is a slope. Review 'What is a Slope?' before checking this concept out.",
   equations: "",
   user_id: u3.id,
   publish: true,
   category_ids: [cat1.id, cat3.id]
)

c15 = Concept.new(
  title: "Riemann Sum",
  description:
  "Using Riemann Sum, we will approximate the area under any curves.",
  equations: "",
  user_id: u3.id,
  publish: true,
  category_ids: [cat2.id, cat3.id]
)




#Image Seed

c1.images.new(image: 'http://www.vomzi.com/wp-content/uploads/2016/02/best-cute-gif-788.gif')
c1.images.new(image: File.open('app/assets/images/91558-babies-cute-baby.gif'))
c2.images.new(image: File.open('app/assets/images/11-cute-gif-222.gif'))
c3.images.new(image: File.open('app/assets/images/718448.gif'))

c10.images.new(image: File.open('app/assets/images/optimize_1.jpg'))
c11.images.new(image: File.open('app/assets/images/Related.jpg'))
c12.images.new(image: File.open('app/assets/images/approximate_integral.jpg'))

c13.images.new(image: File.open('app/assets/images/slope/slope.jpg'))

c14.images.new(image: File.open('app/assets/images/derivative/derivative.jpg'))
c15.images.new(image: File.open('app/assets/images/Riemann.jpg'))

c1.save!
c2.save!
c3.save!
c10.save!
c11.save!
c12.save!
c13.save!
c14.save!
c15.save!

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

s6.images.new(image: File.open('app/assets/images/surface-area-of-cylinder-animation.gif'))
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
s15.images.new(image: File.open('app/assets/images/related_rates.jpg'))

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

s17.images.new(image: File.open('app/assets/images/Y = X.png'))

s17.save!
s18.save!
s19.save!

# Basic Slope

s20 = c13.steps.new(
  body:
   "Lets look at the graph above. \n\nThe y-axis represent velocity, and the x-axis represent time.\n\nWe can clearly see that the slope is positive or we can determine that the slope is positive using the slope formula.\n\nLets select two points as needed by the slope formula. Lets pick x=2s and x=4s.\n\n\\(\\frac{f\\left(x_2\\right)-f\\left(x_1\\right)}{x_2-x_1}\\)\n\n\\(=\\frac{f\\left(4s\\right)-f\\left(2s\\right)}{4s-2s}\\)\n\n\\(\\frac{\\left(8\\cdot\\frac{m}{s}-4\\cdot\\frac{m}{s}\\right)}{4s-2s}\\)\n\nSo, the slope of the line is \\(=2\\cdot\\frac{m}{s^2}\\). \n\nThis means as the time increases by \\(1s\\) the velocity increases by \\(2\\cdot\\frac{m}{s}\\).",
  order: 2.0,
  title: "Slope Example"
)

s21 = c13.steps.new(
  body:
   "The slope of a line is determined by:\n\n\\(\\frac{\\left(y_2-y_1\\right)}{\\left(x_2-x_1\\right)}\\)\n\nor another way to write it:\n\n\\(\\frac{\\left(f\\left(x_2\\right)-f\\left(x_1\\right)\\right)}{\\left(x_2-x_1\\right)}\\)\n\nOr in plain english, the slope is the rise over run of a straight line. The slope tells us a lot about a line.\n\nA positive slope means that the f(x) increases as you increase x.\n\nA negative slope mean that the f(x) decreases as you increase x.\n\nLastly, a zero slope means that the f(x) does not increase or decrease as you increase x.",
  order: 1.0,
  title: "The Slope Equation"
)

s20.images.new(image: File.open('app/assets/images/slope/velocity line.gif'))

s21.images.new(image: File.open('app/assets/images/slope/Negative-slope.gif'))
s21.images.new(image: File.open('app/assets/images/slope/Positive-slope.gif'))
s21.images.new(image: File.open('app/assets/images/slope/Zero-slope.gif'))

s20.save!
s21.save!

# Basic Derivative

s22 = c14.steps.new(
body:
"The red lines shown in the graph above are known as Secant Lines. A secant line connects two points in a function. We can determine the slope of these secant lines by plugging the two end points to: \n\n\\(\\frac{f\\left(x_2\\right)-f\\left(x_1\\right)}{x_2-x_1}\\)\n\nThe slope of a secant line gives us some insight about the function. For example, the three red secant lines have positive slopes, indicating that the function in that range on average is increasing.\n\n",
order: 1.0,
title: "Secant Lines"
)

s22.images.new(image: File.open('app/assets/images/derivative/secant lines.png'))

s23 = c14.steps.new(
  body:
    "We can determine the slope of a Secant Line, because the two points are located in our \\(f\\left(x\\right)\\). The slope of the secant line gives us an average insight of our function within a range.\n\nWhat if we don't want an 'average' slope, but instead want the slope at a point in our \\(f\\left(x\\right)\\), like the blue line above. A line that is tangent to a point in \\(f\\left(x\\right)\\) is called a tangent line. By knowing the slope of a tangent line, one can accurately describe how \\(f\\left(x\\right)\\) is behaving exactly at that one point. ",
   order: 2.0,
   title: "Tangent Line"
)

s24 = c14.steps.new(
  body:
   "Recall that the line slope equation is defined as: \n\n\\(\\frac{f\\left(x_2\\right)-f\\left(x_1\\right)}{x_2-x_1}\\)\n\nThis equation requires TWO known points to determine the slope, but the Tangent line only has ONE point.\n\nWe know that the Tangent line is tangent to the function at one point, so we can arbitrarily create a second point and force the second point to be REALLY close to the point of interest, that is:\n\n\\(x_2-x_1\\approx0\\)  or\n\n\\(x_2-x_1\\to0\\)\n\nLets assign \\(x_2-x_1\\)  a variable, h.\n\n\\(h=x_2-x_1\\) or \\(x_1+h=x_2\\)\n\nSo, now the slope formula can be re-written as:\n\n\\(\\lim_{h\\to0}\\frac{f\\left(x_1+h\\right)-f\\left(x_1\\right)}{h}\\)\n Also known as the derivative!",
  order: 3.0,
  title: "The Slope of a Tangent Line or The Derivative"
)

s25 = c14.steps.new(
  body:
  "Lets find the slope of a line tangent to (1,1) of the function \\(f\\left(x\\right)=x^2\\)\n\n\\(\\lim_{h\\to0}\\frac{f\\left(x_1+h\\right)-f\\left(x_1\\right)}{h}\\)\n\n\\(=\\lim_{h\\to0}\\frac{f\\left(1+h\\right)-f\\left(x\\right)}{h}\\)\n\n\\(=\\lim_{h\\to0}\\frac{\\left(1+h\\right)^2-\\left(1\\right)}{h}\\)\n\n\\(=\\lim_{h\\to0}\\frac{1+2h+h^2-\\left(1\\right)}{h}\\)\n\n\\(=\\lim_{h\\to0}\\frac{2h+h^2}{h}\\)\n\n\\(=\\lim_{h\\to0}\\frac{h\\left(2+h\\right)}{h}\\)\n\n\\(=\\lim_{h\\to0}\\left(2+h\\right)\\)\n\n\\(=2\\)",
  order: 4.0,
  title: "The Slope of a Tangent Line Example"
)

s25.images.new(image: File.open('app/assets/images/derivative/tangent line.png'))

s22.save!
s23.save!
s24.save!
s25.save!
