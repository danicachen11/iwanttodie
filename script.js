// Activate Hamburger button
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
	hamburger.addEventListener('click', () => {
  	mobileMenu.classList.toggle('active');
  });
}



// "Book A Vist" Button Modal
const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

if (modal && openModal && closeModal) {
	openModal.onclick = () => modal.classList.add('show');
	closeModal.onclick = () => modal.classList.remove('show');

	modal.addEventListener('click', (e) => {
  	if(e.target === modal) modal.classList.remove('show');
	});
}




// Submitting Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  //validations
  // if either name or email not valid
  if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
    formMessage.textContent = "Please enter both name and email.";
    formMessage.style.color = "red";
  } else if (!emailInput.value.includes("@")) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
    //show if valid input
  } else {
    formMessage.textContent = "Thank you for subscribing!";
    formMessage.style.color = "green";
    newsletterForm.reset();
  }
});


