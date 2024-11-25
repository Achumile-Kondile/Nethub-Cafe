// Function to show the billing form with selected amount
function showBillingForm(service, amount) {
    console.log('Service selected:', service);
    console.log('Amount set:', amount);

    // Get modal element
    const modal = document.getElementById('billing-modal');
    if (!modal) {
        console.error('Modal element not found!');
        return;
    }

    // Set amount value
    document.getElementById('amount').value = amount;
    
    // Show the modal
    modal.style.display = 'flex';
}

// Function to close the billing form modal
function closeBillingForm() {
    const modal = document.getElementById('billing-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-password');
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Optional: Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('billing-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
