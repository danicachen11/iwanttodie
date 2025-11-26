// Activate Hamburger button
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});

// Submitting Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', e => {
  e.preventDefault();

  //validations
  if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
    formMessage.textContent = "Please enter both name and email.";
    formMessage.style.color = "red";
  } else if (!emailInput.value.includes("@")) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thank you for subscribing!";
    formMessage.style.color = "green";
    newsletterForm.reset();
  }
});
