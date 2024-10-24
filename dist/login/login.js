// Get references to the form and input elements
const loginForm = document.getElementById('loginForm');
const emailInput = loginForm.querySelector('input[type="email"]');

// Event listener to show suggestions when the user focuses on the email input
emailInput.addEventListener('focus', showSuggestions);

// Event listener to handle form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;

    // Store email in localStorage if it's not already there
    let storedEmails = JSON.parse(localStorage.getItem('emails')) || [];
    if (!storedEmails.includes(email)) {
        storedEmails.push(email);
        localStorage.setItem('emails', JSON.stringify(storedEmails));
    }
    window.location.href='../home.html';

    // alert('Form submitted!');  // Placeholder for form submission logic
});

// Function to show suggestions for previously entered emails
function showSuggestions() {
    let storedEmails = JSON.parse(localStorage.getItem('emails')) || [];
    
    // Clear previous datalist if any
    let dataList = document.getElementById('emailSuggestions');
    if (dataList) {
        dataList.remove();
    }

    // Create a new datalist for suggestions
    dataList = document.createElement('datalist');
    dataList.id = 'emailSuggestions';
    storedEmails.forEach(email => {
        let option = document.createElement('option');
        option.value = email;
        dataList.appendChild(option);
    });

    // Append the datalist to the email input
    emailInput.setAttribute('list', 'emailSuggestions');
    document.body.appendChild(dataList);
}
