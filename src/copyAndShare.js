const copyAndSharePLot = () => {
    const url = window.location.href;

    navigator.clipboard.writeText(url)
      .then(() => {
        console.log("Property link copied to clipboard", url)

        const msg = document.getElementById("copyMessage");
        msg.style.display = "inline";

       // Hide message after 2 seconds
        setTimeout(() => {
          msg.style.display = "none";
        }, 2000);

      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };