const handleFormSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission

  // Collect form values
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const placeOfResidency = document.getElementById("placeOfResidency").value;
const countryCode = document.getElementById("countryCodeSelect").value;
const phoneNumber = document.getElementById("phoneNumber").value;
const emailAddress = document.getElementById("emailAddress").value;
const nationality = document.getElementById("nationality").value;
const preferredLanguage = document.getElementById("preferredLanguage").value;


  let propertyURL = "";

  const storedURL = localStorage.getItem("sharedPlotURL");

  if (storedURL) {
    propertyURL = storedURL;
    console.log("Retrieved URL from localStorage:", storedURL);
  } else {
    console.log("No URL found in localStorage.");
    propertyURL = "N/A";
  }

  let unitDetails = window.unitDetails
  let obj = {
    plotNumber:unitDetails.plot_number,
    firstName: firstName,
    lastName: lastName,
    email: emailAddress,
    phone: phoneNumber,
    countryCode: countryCode,
    residence: placeOfResidency,
    nationality: nationality,
    preferredLanguage: preferredLanguage,
    unitDetails: unitDetails,
    propertyURL: propertyURL,
  };

  // Call the post function
  sendContactRequest(obj);
};

// Function to send POST request
const sendContactRequest = (obj) => {
  const formWrapper = document.getElementById("formWrapper");

  fetch("https://erth-al-marina.zameengeomatics.com/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }
      return response.json();
    })
    .then((data) => {
      showToast((isSucces = true), (message = "Message Sent Successfully"));

      // Hide the form overlay

      if (formWrapper) {
        formWrapper.style.display = "none";
      }

      // Optional: Clear form inputs
      document.getElementById("callbackForm").reset();
    })
    .catch((error) => {
      showToast(
        (isSucces = false),
        (message = "Failed to send message. Please try again.")
      );

      if (formWrapper) {
        formWrapper.style.display = "none";
      }
    });
};

const showToast = (isSucces, message) => {
  const toastEl = document.getElementById("displayToast");

  // Set the message text
  const toastBody = toastEl.querySelector(".toast-body");
  if (toastBody) toastBody.textContent = message;

  if (isSucces) {
    toastEl.classList.remove("bg-danger");
    toastEl.classList.add("bg-primary"); // Or "bg-success" if you prefer
  } else {
    toastEl.classList.remove("bg-primary");
    toastEl.classList.add("bg-danger");
  }
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
  // Create and show the Bootstrap toast
  setTimeout(() => {
    toast.hide();
  }, 3000);
};

// Attach event listener when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("callbackForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
});
