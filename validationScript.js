    // JavaScript code for form validation
	// Prevent form from submitting
const form = document.getElementById("myForm");
const inputField = document.getElementById("inputField");

form.addEventListener("submit", function(event) {
      // Prevent form submission
        event.preventDefault();
      // Retrieve the input field value
        const inputValue = inputField.value;
      // Regular expression pattern for alphanumeric input
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
        if (alphanumericPattern.test(inputValue)) {
        // Valid input: display confirmation and submit the form
            alert("Form submitted successfully! Valid alphanumeric input.");
            form.reset();
        // Invalid input: display error message
        } else {
            alert("Error: Please enter alphanumeric characters only (letters and numbers).");
        }
});