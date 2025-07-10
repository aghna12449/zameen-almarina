

const  handleFormSubmit = (event) =>{ 
    event.preventDefault(); // Prevent default form submission
  
    // Collect form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const residence = document.getElementById("residence").value;
    const nationality = document.getElementById("nationality").value;
    const message = document.getElementById("message").value;
  let propertyURL = ""

    const storedURL = localStorage.getItem("sharedPlotURL");

if (storedURL) {
  propertyURL = storedURL
  console.log("Retrieved URL from localStorage:", storedURL);
} else {
  console.log("No URL found in localStorage.");
  propertyURL= "N/A"
}
    //
    // Print values to console
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Residence:", residence);
    console.log("Nationality:", nationality);
    console.log("Message:", message);


   let obj=  {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phone": phone,
        "residence": residence,
        "nationality": nationality,
        "message": message,
        "propertyURL" : propertyURL
      }

     // Call the post function
      sendContactRequest(obj);

  }
  


// Function to send POST request 
const sendContactRequest=(obj) => {
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
        console.log("Success:", data);

    // ✅ Show toast
   // showToast();

        // Hide the form overlay
              const formWrapper = document.getElementById("formWrapper");
              if (formWrapper) {
               formWrapper.style.display = "none";
              }

          // Optional: Clear form inputs
          document.getElementById("callbackForm").reset();


      })
      .catch((error) => {
        console.error("Error:", error);
       });
  }


  const showToast=(message = "Message Sent Successfully") =>{
    const toast = document.getElementById("toast");
    toast.textContent = message;

    console.log("showToast", toast)
    toast.classList.add("show");
  
    // Hide after 3 seconds

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }


  // Attach event listener when DOM is loaded
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("callbackForm");
    if (form) {
      form.addEventListener("submit", handleFormSubmit);
    }
  });
  