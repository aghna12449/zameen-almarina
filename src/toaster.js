function showToast(message = "Message Sent Successfully") {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
  
    // Hide after 3 seconds
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }