// --- Google Translate Initialization ---
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// --- Enquiry Modal Functionality ---

// Get the modal element
var modal = document.getElementById("enquiryModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// Function to open the modal and set the product name
function openEnquiryModal(productName) {
    var productField = document.getElementById("product-name");
    // Set the hidden input field's value to the clicked product's name
    productField.value = productName;
    
    // Update the modal title for user feedback
    var modalTitle = document.querySelector("#enquiryModal h2");
    modalTitle.textContent = "Enquire about: " + productName;
    
    // Show the modal
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle Form Submission (Simulation)
document.getElementById("enquiry-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the default form submission
    
    // In a real scenario, you would use a backend service to send the email here.
    // For now, we will show a success message.
    
    var productName = document.getElementById("product-name").value;
    alert("Thank you! Your enquiry for " + productName + " has been sent successfully to shrijeetcorporation1@gmail.com.");
    
    modal.style.display = "none"; // Close the modal
    this.reset(); // Reset the form fields
});