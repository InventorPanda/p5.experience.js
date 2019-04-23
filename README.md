# p5.experience.js
Extensive library for p5.js that adds additional event-listening functionality for creating canvas-based web applications. 

## The core concept of p5.experience.js
p5.experience.js introduces with the uxElement a new concept to p5: 

It is now possible to create event-listeners to p5-sketches. 

At the moment there are **5** possible shapes:
* Rectangle
* Square
* Triangle
* Ellipse
* Circle

To every of those shapes, an event listener can be assigned. There are three types of listeners: 

* Mouse is pressed ('press')
* Mouse clicked ('click')
* Mouse is hovering ('hover')

## Getting started
To build your first web-application with p5.experience.js you just need to add the uxShape that you want to your setup function:

```javascript
function setup() {
  uxRect(100, 100, 50, 50);
}
```

p5.experience.js now creates an uxElement for you in the background. You don´t have to draw the object to the canvas, the library takes care of that for you. It kind of works like a DOM-element in HTML.

Let´s add a simple mouse-input to that uxShape!

```javascript
function setup() {
  uxRect(100, 100, 50, 50).uxEvent('click', trigger());
}

function trigger() {
  console.log('uxRect just got clicked!');
}
```
You now have created a rectangle, that calls the trigger() function when it gets clicked.

Let´s take some control over our app! You can assign your uxElements to variables like that:

```javascript
let one;

function setup() {
  one = uxRect(100, 100, 50, 50)
  one.uxEvent('click', trigger());
}

function trigger() {
  console.log('uxRect just got clicked!')
}
```

Well done, you now created your first simple Web-Application with p5.experience.js! You can now look up all the possible functions and object-properties, to build wonderful interfaces.

## Reference

The reference contains the following functions & methods: 

*Shapes*
* uxRect()
* uxSquare()
* uxTriangle()for
* uxCircle()
* uxEllipse()

*Shape Manipulation*
* uxFillColor()
* uxnoFill()
* uxStroke()
* uxStrokeWeight()
* uxNoStroke()]

*Event Handling*
* .uxEvent()
* .uxRender()

### *Shapes*

uxShape-Functions return an object. Those can be assigned to variables.

The following properties can be changed every uxShape:
  * *.shape*
  * *.uxFill*
  * *.uxStrokeColor*
  * *.uxStrokeWeight*

### uxRect()
```javascript
uxRect(x, y, w, h, [corners])
```

### uxSquare()
```javascript
uxSquare(x, y, s, [corners])
```

### uxTriangle()
```javascript
uxTriangle(x1, y1, x2, y2, x3, y4)
```

### uxCircle()
```javascript
uxCircle(x, y, d)
```

### uxEllipse()
```javascript
uxCircle(x, y, w, h)
```

### *Shape Manipulation*

### uxFill()
```javascript
uxFill(color)
```

This function works like the p5.js fill-function. For more information see [p5 fill reference](https://p5js.org/reference/#/p5/fill)
This function can only be called in setup() and is for uxShapes only. 

### uxNoFill()
```javascript
uxNoFill()
```

This function works like the p5.js noFill-function. Just call it and every uxShapes that get´s created after will have no fill.
This function can only be called in setup() and is for uxShapes only. 

### uxStroke()
```javascript
uxStroke(color)
```

This function works like the p5.js stroke-function. For more information see [p5 stroke reference](https://p5js.org/reference/#/p5/stroke)
This function can only be called in setup() and is for uxShapes only. 

### uxNoStroke()
```javascript
uxNoStroke()
```

This function works like the p5.js noStroke-function. Just call it and every uxShape that get´s created after will have no stroke.
This function can only be called in setup() and is for uxShapes only.  

### uxStrokeWeight()
```javascript
uxStrokeWeight(weight)
```

This function works like the p5.js strokeWeight-function. For more information see [p5 strokeWeight reference](https://p5js.org/reference/#/p5/strokeweight)
This function can only be called in setup() and is for uxShapes only.  

### *Event Handling*

### .uxEvent()
```javascript
.inp('inputType', callback)
```

This method gets added to an uxShape and sets the event listener for this exact shape. The callback-function gets called, when the user interacts with the element. 

There are three types of inputs: 
* *click* User needs to click on the shape (callback gets called after releasing the left mouse-button)
* *press* User needs to press on the shape (callback gets called when the user clicks on shape)
* *hover* User needs to hover over shape to call callback-function

This function can only be called in setup() and is for uxShapes only.  

### .uxRender()
```javascript
.place()
```

This method disables the automatic drawing of the chosen element and draws it where .uxRender() gets called. You can call this method anywhere in draw to display the uxShape exactly where you want it.
