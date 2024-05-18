document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Client-side validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    if (!validatePhoneNumber(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    // Display a confirmation modal or toast message
    alert('Registration successful!');
    
    // Process the form data (e.g., send to server)
  });
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePhoneNumber(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  }