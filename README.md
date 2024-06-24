# Landing Page Project

## Instructions

This project aims to give you real-world scenarios of manipulating the DOM. The functionality you will be using serves two purposes: to prepare you for appending dynamically added data to the DOM, and to show you how javascript can improve the usability of an otherwise static site. This project barely touches the surface of what is possible, but it does use some incredibly common events, methods, and logic.

For this project, refactor and test as much as possible while you are building. You should figure for every piece of functionality you add, you will likely spend just as much time testing and refactoring your code. If it takes you 3 hours to figure out the logic, it should likely take you another 3 hours determining that you wrote the best code possible. As your skills improve, this process will feel more natural. Make sure to remove any debugging code from your final submission.

#### The Project Contains:

#### css /

- styles.css

#### index.html

#### js /

- app.js

#### README.md

##### Each file contains it's modifications and comment above each step of modify.

- In CSS Style there is a lot of change done on the project to be the style you see on screen interface right now, also a lot of modifications to be responsive on all screen types.

- There's not a lot of modification done in the HTML File it was just adding 2 more sections (4 and 5) to the Page.

- The majority of the work was done on app.js, there is a lot of things done there:

        1. Building NavBar Using buildNav() function that executed by foreach loop and other helping methods to create elements and insert text to it and also appending.

        2. Working on scroll Behavior of page by using EventListener method to make the scroll smooth between sections.

        3. Adding Function using if statement and getBoundingClientRect Method to identify which section is on the viewport to give it a special class to be clearly viewed to the user that this is the actual section he wants, also it gives an active class to the Section button in the NavBar to be more clear what's the actual section the user selected.

        4.The addActiveSection Function is invoked in the Scroll event listener to be executed.

---
