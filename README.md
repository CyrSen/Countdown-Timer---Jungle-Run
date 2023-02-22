# Timer - Jungle Run

1. PROJECT TITLE: Countdown Timer with JavaScript

2. PROJECT DESCRIPTION: You need an online countdown timer that helps you controlling worktime and breaks, cooking, for power naps and so on. You want to create your own individual timer with your favourite design. For the timer you can use a special font to display numbers and digits. Use input fields to configure, and buttons to control the timer.

3. FUNCTIONALITY: The functionality of the countdown timer includes:
a) User Interface: The countdown timer a user interface that allows the user to set the countdown time by specifying the number of days, hours, minutes, and seconds. The user interface also includes a start button, and stop button. The refresh button of the browser is used to set the countdown timer back to zero, which also stops the alert sound and message.
b) Timing Functionality: The timer is programmed to countdown from the user-specified time, and update the user interface in real-time to display the remaining time.
c) Visual and Audio Feedback: The user interface provides visual feedback to the user by displaying the message "Run!" when the timer reaches zero. The countdown timer also includes audio feedback in the form of a sound effect "jungle-run", when the timer reaches zero.

4. TECHNOLOGIES: The technology stack used to implement the countdown timer includes HTML5, CSS3, Bootstrap 5, JavaScript and Git. A figma mockup was not made because the focus was on JavaScript.

5. HTML - BUILDING BLOCKS AND ELEMENTS
The html page is composed of three major building blocks: 1) Input fields for days, hours, minutes. 2) Start and stop buttons. 3) Display showing the time counting down. Important elements that were used: 1) the <form> tag to contain the input fields and buttons. 2) <input> tags with the type="number" attribute to create the input fields. 3) <button> tags to create the start and stop buttons. 4) <span> tags to display the countdown items for days, hours, minutes, and seconds.

6. CSS - BUILDING BLOCKS AND ELEMENTS
The background-image property to set the forest background. Bootstrap classes style the input fields and buttons. The font of the display corresponds to the lightest color that can be found in the background-image.

7. JAVASCRIPT - KEY STEPS AND METHODS
The basic flow runs in four steps: 
7.1) The first step is about getting the values entered in the input fields for days, hours, minutes, and seconds and converting them to seconds. Tools used are querySelector() to get the input field values, and basic math operations to convert the input field values to seconds.
7.2) The second step is to display the countdown items for days, hours, minutes, and seconds. This uses setInterval() to update the countdown timer every second, basic math operations to calculate the number of days, hours, minutes, and seconds left, and textContent to update the countdown items in the HTML.
7.3) The third step is handling the start and stop buttons by using addEventListener() to add a click event to the start and stop buttons, and by using clearInterval() to stop the countdown when the stop button is clicked.
7.4) In the last step, a message is displayed and a sound played once the timer reaches zero. An If-statement is used to check if the timer has reached zero. Once it reached zero, a message is displayed and a sound played using the textContent and audio asset.


8. RESOURCES: 
Github link: https://github.com/CyrSen/Countdown-Timer---Jungle-Run
Retrospective: https://docs.google.com/presentation/d/1HtQiewLaXxKYlKWeSjZD8MkpbWTyYyGblql2P0e_dNk/edit#slide=id.gc6f80d1ff_0_27

