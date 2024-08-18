const form = document.getElementById("contact-form");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const queryTypeRadios = document.querySelectorAll('input[name="queryType"]');
const messageInput = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  // First Name Validation
  if (!firstNameInput.value.trim()) {
    document.getElementById("firstNameError").textContent =
      "This field must be completed.";
    firstNameInput.classList.add("error");
    isValid = false;
  } else {
    document.getElementById("firstNameError").textContent = "";
    firstNameInput.classList.remove("error");
  }

  // Last Name Validation
  if (!lastNameInput.value.trim()) {
    document.getElementById("lastNameError").textContent =
      "This field must be completed.";
    lastNameInput.classList.add("error");
    isValid = false;
  } else {
    document.getElementById("lastNameError").textContent = "";
    lastNameInput.classList.remove("error");
  }

  // Email Validation
  if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    emailInput.classList.add("error");
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
    emailInput.classList.remove("error");
  }

  // Query Type Validation
  let isQueryTypeSelected = false;
  for (const radio of queryTypeRadios) {
    if (radio.checked) {
      isQueryTypeSelected = true;
      break;
    }
  }
  if (!isQueryTypeSelected) {
    document.getElementById("queryTypeError").textContent =
      "Please select a query type.";
    isValid = false;
  } else {
    document.getElementById("queryTypeError").textContent = "";
  }

  // Message Validation
  if (!messageInput.value.trim()) {
    document.getElementById("messageError").textContent =
      "This field must be completed.";
    messageInput.classList.add("error");
    isValid = false;
  } else {
    document.getElementById("messageError").textContent = "";
    messageInput.classList.remove("error");
  }

  // Consent Validation
  if (!consentCheckbox.checked) {
    document.getElementById("consentError").textContent =
      "You must consent to being contacted.";
    isValid = false;
  } else {
    document.getElementById("consentError").textContent = "";
  }

  if (isValid) {
    // Submit the form
    form.submit();
    successMessage.classList.remove("hidden");
  }
});

function isValidEmail(email) {
  // Basic email validation pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// const form = document.getElementById("contact-form");
// const successMessage = document.getElementById("success-message");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstName = document.getElementById("firstName");
//   const lastName = document.getElementById("lastName");
//   const email = document.getElementById("email");
//   const queryType = document.querySelector('input[name="queryType"]:checked');
//   const message = document.getElementById("message");
//   const consent = document.getElementById("consent");

//   let isValid = true;

//   // First Name Validation
//   if (!firstName.value) {
//     document.getElementById("firstNameError").textContent =
//       "First name is required.";
//     isValid = false;
//   } else {
//     document.getElementById("firstNameError").textContent = "";
//   }

//   // Last Name Validation
//   if (!lastName.value) {
//     document.getElementById("lastNameError").textContent =
//       "Last name is required.";
//     isValid = false;
//   } else {
//     document.getElementById("lastNameError").textContent = "";
//   }

//   // Email Validation
//   if (!email.value || !isValidEmail(email.value)) {
//     document.getElementById("emailError").textContent =
//       "Please enter a valid email address.";
//     isValid = false;
//   } else {
//     document.getElementById("emailError").textContent = "";
//   }

//   // Query Type Validation
//   if (!queryType) {
//     document.getElementById("queryTypeError").textContent =
//       "Please select a query type.";
//     isValid = false;
//   } else {
//     document.getElementById("queryTypeError").textContent = "";
//   }

//   // Message Validation
//   if (!message.value) {
//     document.getElementById("messageError").textContent =
//       "Message is required.";
//     isValid = false;
//   } else {
//     document.getElementById("messageError").textContent = "";
//   }

//   // Consent Validation
//   if (!consent.checked) {
//     document.getElementById("consentError").textContent =
//       "You must consent to being contacted.";
//     isValid = false;
//   } else {
//     document.getElementById("consentError").textContent = "";
//   }

//   if (isValid) {
//     form.classList.add("hidden");
//     successMessage.classList.remove("hidden");
//   }
// });

// function isValidEmail(email) {
//   // Basic email validation pattern
//   const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
//   return emailRegex.test(email);
// }
