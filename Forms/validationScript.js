    // JavaScript code for form validation


    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("myForm");
        const inputField = document.getElementById("inputField");
        const message = document.getElementById("message"); 
    
        const alphanumericPattern = /^[a-zA-Z0-9]+$/; 
    
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 
    
            const inputValue = inputField.value.trim(); 
    
            if (inputValue === "") {
                message.textContent = "Error: Input cannot be empty.";
                message.style.color = "red";
            } else if (!alphanumericPattern.test(inputValue)) {
                message.textContent = "Error: Please enter only alphanumeric characters.";
                message.style.color = "red";
            } else {
                message.textContent = "Success! Your input is valid.";
                message.style.color = "green";
    
                setTimeout(() => {
                    alert("Form submitted successfully!");
                    form.reset();
                    message.textContent = ""; 
                }, 500);
            }
        });
    });