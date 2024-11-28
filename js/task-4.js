document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const { email, password } = form.elements;

    
    if (!email.value.trim() || !password.value.trim()) {
      alert('All form fields must be filled in');
      return;
    }

    
    const formData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(formData);
    form.reset();
  });