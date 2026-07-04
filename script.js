// Store the name that the user types
let userName = "";

// Find the input field, button, and message area on the page
let nameInput = document.getElementById("name-input");
let welcomeButton = document.getElementById("welcome-button");
let welcomeMessage = document.getElementById("welcome-message");

// Run this code when the button is clicked
welcomeButton.addEventListener("click", function() {
  // Get the name the user typed and save it
  userName = nameInput.value;

  // Show a fun personalized message
  welcomeMessage.textContent = "You are awesome, " + userName + "!";

  // Clear the input field for the next name
  nameInput.value = "";
});
