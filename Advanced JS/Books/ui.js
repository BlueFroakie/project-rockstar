class UI {
    constructor() {
      this.tableBody = document.querySelector("#book-list");
    }
  
    // Display books in UI
    showBooks(newBook) {
      const newRow = document.createElement("tr");
      this.tableBody.innerHTML =  `
        <td>${newBook.title}</td>
        <td>${newBook.author}</td>
        <td>${newBook.ISBN}</td>
        <td></td>
        `;
      this.tableBody.appendChild(newRow);
    }
  
    // Clear Profile
    clearProfile() {
      this.profile.innerHTML = "";
    }
  
    // Show Alert Message
    showAlert(message, className) {
      // Clear any remaining alerts
      this.clearAlert();
      // Create Div
      const div = document.createElement("div");
      // Add Classes
      div.className = className;
      // add text
      div.appendChild(document.createTextNode(message));
      // Get parent
      const container = document.querySelector(".searchContainer");
      // Get Search Box
      const search = document.querySelector(".search");
      // Insert alert
      container.insertBefore(div, search);
  
      // Set timeout after 3 secs
      setTimeout(() => {
        this.clearAlert();
      }, 3000);
    }
    // Clear Alert Message
    clearAlert() {
      const currentAlert = document.querySelector(".alert");
      if (currentAlert) {
        currentAlert.remove();
      }
    }
  }