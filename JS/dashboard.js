const userDataString = localStorage.getItem("userData");
const userData = JSON.parse(userDataString);
let pageTitle = document.querySelector('.title');

const currentUser = userData[0];

const usernameElement = document.getElementById('username');
usernameElement.textContent = currentUser.name;

document.addEventListener("DOMContentLoaded", function() {
  const accountData= [
    { title: "Orders", description: "View and manage your previous orders." },
    { title: "Profile", description: "View and edit your profile information." },
    { title: "Billing", description: "Manage and update your billing information." },
  ];

  const profileData = [
    { title: "Settings", description: "Change your profile settings here." },
    { title: "Profile", description: "View and edit your profile information." },
    { title: "Security", description: "Manage your account security settings." },
  ];

  const ordersData = [
    { title: "Order 1", description: "Details about Order 1." },
    { title: "Order 2", description: "Details about Order 2." },
    { title: "Order 3", description: "Details about Order 3." },
  ];

  const billingData = [
    { title: "Address", description: "Manage your billing address." },
    { title: "Card Details", description: "Update your payment card information." },
    { title: "Payment History", description: "View your payment history." },
  ];

  const generateGridItems = (data) => {
    const grid = document.getElementById("content-grid");
    grid.innerHTML = "";

    data.forEach(item => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      grid.appendChild(gridItem);
    });
  };

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target;
      if (target === "profile-tab") {
        generateGridItems(profileData);
      } 
      if (target === "account-tab") {
          generateGridItems(accountData);
        }
      // else if (target === "orders-tab") {
      //   generateGridItems(ordersData);
      // } 
      else if (target === "billing-tab") {
        generateGridItems(billingData);
      }
    });
  });
});

