// Email Template ID: template_y0lsp5m
// Email Service ID: service_b9m5wu4
// API Public Key: AvNJljhSLj-chplyU

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle? document.body.classList.remove("dark-theme"):document.body.classList += " dark-theme";
    contrastToggle = !contrastToggle;
}

// Function to send me an email from the Modal.
async function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    await emailjs.sendForm('service_b9m5wu4', 'template_y0lsp5m', event.target, 'AvNJljhSLj-chplyU');
    try {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }
    catch {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service temporarily unavailable. Please contact me directly on rdcassin@gmail.com");
    }
}

// Function for toggling the Modal to be able to send me an email.
function toggleModal() {
    isModalOpen? document.body.classList.remove("modal--open"):document.body.classList += " modal--open";
    isModalOpen = !isModalOpen;
}