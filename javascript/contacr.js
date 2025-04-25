document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
  

    function setValidationState(input, isValid) {
      input.classList.toggle("valid", isValid);
      input.classList.toggle("invalid", !isValid);
    }
  
  
    function validateName() {
      const namePattern = /^[a-zA-Z\s]+$/;
      const isValid = namePattern.test(nameInput.value.trim());
      setValidationState(nameInput, isValid);
      return isValid;
    }
  
 
    function validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailPattern.test(emailInput.value.trim());
      setValidationState(emailInput, isValid);
      return isValid;
    }
  
  
    function validateMessage() {
      const isValid = messageInput.value.trim().length > 0;
      setValidationState(messageInput, isValid);
      return isValid;
    }
  
    
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);
  
   
  });
  