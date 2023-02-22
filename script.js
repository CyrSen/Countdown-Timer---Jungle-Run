/* INITIALISATION / DECLARATION OF KEY VARIABLES | BEGINNING OF SECTION */

let countdown; // Variable named countdown gets declared.
const timerDisplay = document.querySelectorAll('.countdown-timer span'); //  This line selects all the four time elements (days, hours, minutes, seconds) inside the countdown-timer class  (in the index.html) by method of querySelectorAll, so they can be displayed later in the countdown timer.
const startButton = document.querySelector('.start-timer'); // This line and the next line select the buttons with the class of start-timer and stop-timer in the index.html so that they can be used later in combination with an event-listener to start a new countdown or stop it when this button is clicked. 
const stopButton = document.querySelector('.stop-timer'); 
const formInputs = document.querySelectorAll('.countdown-form input'); // This line selects all the input elements inside the element with the class of countdown-form in the index.html and assigns them to the formInputs constant variable so they can be used later to process the user-specified values for the four time elements. 
const displayDays = document.querySelector('#days-display'); // This line and the three lines that follow select the four time elements based on their ID in the index.html and assign each a constant variable, so that it can be used and manipulated later to show the remaining days, hour, minutes and seconds in the display in real time.
const displayHours = document.querySelector('#hours-display');
const displayMinutes = document.querySelector('#minutes-display');
const displaySeconds = document.querySelector('#seconds-display');

/* INITIALISATION / DECLARATION OF VARIABLES | END OF SECTION */



/* TIMER-FUNCTION | BEGINNING OF SECTION */

function timer(seconds) {  // This line declares a function named timer that takes seconds as only parameter.
	clearInterval(countdown); // This line clears any existing timer that is assigned to the countdown variable.
	const now = Date.now(); // This line and the next get the current time in milliseconds using Date.now() and calculate the time in milliseconds when the countdown will end based on the input seconds.
	const then = now + seconds * 1000; 
	displayTimeLeft(seconds); // This line calls a function named displayTimeLeft and passes in the seconds parameter.
	countdown = setInterval(() => { // This line assigns an interval timer to the countdown variable and executes an anonymous function every second.
		const secondsLeft = Math.round((then - Date.now()) / 1000); // This line calculates the remaining time in seconds by subtracting the current time in milliseconds from the end time in milliseconds, and then dividing the result by 1000 to convert it to seconds. The result is rounded to the nearest integer using Math.round().
		// check if we should stop the countdown (existing c't)
		if (secondsLeft < 0) { // This line and the two that follow check if the remaining time is less than zero, which means the countdown has ended. If it has ended, it clears the interval timer using clearInterval() and returns from the function.
			clearInterval(countdown);
			return;
		}                              
		// display the time left
		displayTimeLeft(secondsLeft); // This line calls the displayTimeLeft function and passes in the secondsLeft parameter.
	}, 1000); // This line sets the interval timer to execute the anonymous function every 1000 milliseconds, or every second.
}

/* TIMER-FUNCTION | END OF SECTION */



/* DISPLAY-OF-REMAINING-TIME-FUNCTION | BEGINNING OF SECTION */

/* Function description: The displayTimeLeft function takes a number of seconds as input and calculates the number of days, hours, minutes, and remaining seconds. It then updates the text content of four elements with the class timerDisplay to show the remaining time in the format dd hh mm ss, and updates the text content of four other elements (displayDays, displayHours, displayMinutes, and displaySeconds) to show the individual time units in a different format.
*/

function displayTimeLeft(seconds) {
	const days = Math.floor(seconds / (3600 * 24));
	const hours = Math.floor((seconds % (3600 * 24)) / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = Math.floor(seconds % 60);

	timerDisplay[0].textContent = `${days < 10 ? '0' : ''}${days}d `;
	timerDisplay[1].textContent = `${hours < 10 ? '0' : ''}${hours}h `;
	timerDisplay[2].textContent = `${minutes < 10 ? '0' : ''}${minutes}m `;
	timerDisplay[3].textContent = `${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}s `;

	displayDays.textContent = `${days < 10 ? '0' : ''}${days}d`;
	displayHours.textContent = `${hours < 10 ? '0' : ''}${hours}h`;
	displayMinutes.textContent = `${minutes < 10 ? '0' : ''}${minutes}m`;
	displaySeconds.textContent = `${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}s`;
}
/* DISPLAY-OF-REMAINING-TIME-FUNCTION | END OF SECTION */



/* START-TIMER-FUNCTION AND STOP-TIMER-FUNCTION | BEGINNING OF SECTION */

/* Function description: The startTimer function gets the user inputs from the four input fields (formInputs) and calculates the total number of seconds. If the inputs are not valid (i.e., not numbers), it displays an alert message and returns. Otherwise, it calls the timer function with the total number of seconds as input.
*/

function startTimer() {
	const seconds = formInputs[0].value * 86400 + formInputs[1].value * 3600 + formInputs[2].value * 60 + formInputs[3].value * 1;
	if (isNaN(seconds)) {
		alert('Please enter a valid time!');
		return;
	}
	timer(seconds);
}

/* 
Function description: The stopTimer function stops the countdown by clearing the interval (countdown) that was created by the timer function.
*/

function stopTimer() {
	clearInterval(countdown); 
}

/* Add event listeners */

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

/* START-TIMER-FUNCTION AND STOP-TIMER-FUNCTION | END OF SECTION */



/* VISUAL AND AUDIO FEEDBACK | SECTION BEGINNING */

function timer(seconds) {  // This is the function declaration that takes in a seconds parameter.
    // clear any existing timers
    clearInterval(countdown); // If a countdown has already been started, this clears it so that a new countdown can start fresh.
  
    const now = Date.now(); // This gets the current time in milliseconds.
    const then = now + seconds * 1000; // This calculates the time in milliseconds when the timer should stop counting down.
    displayTimeLeft(seconds); // This is a custom function that displays the initial time left on the countdown timer.
  
    countdown = setInterval(() => { // This sets up an interval that will run every second and updates the countdown timer accordingly.
      const secondsLeft = Math.round((then - Date.now()) / 1000); // This calculates the remaining time left in seconds by subtracting the current time from the target time and dividing by 1000 (to convert from milliseconds to seconds).
  
      if (secondsLeft < 0) {  // This checks if the countdown has ended.
        clearInterval(countdown); // This clears the interval to stop the countdown.
  
        document.querySelector('.countdown-timer').textContent = "Run!"; // This updates the text of the countdown timer to display "Run!" when the countdown is finished.
  
		const audio = new Audio('assets/jungle-run-01.mp3'); // This creates a new Audio object and specifies the source of the audio file.
		audio.play(); // This plays the audio file.
  
        return; // This returns from the function to stop any further execution.
      }
  
      displayTimeLeft(secondsLeft); // This custom function updates the time left on the countdown timer.
    }, 1000); // This specifies the interval to run every 1000 milliseconds (or every 1 second).
  }
  
/* VISUAL AND AUDIO FEEDBACK | SECTION END */
