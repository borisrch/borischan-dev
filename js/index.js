const emailField = document.getElementById('email');
const emailContainer = document.getElementById('email-container');
const textArea = document.getElementById('message');
const submit = document.getElementById('form-submit');
const success = document.getElementById('success');

emailField.onfocus = (e) => {
  emailContainer.classList.add('field-active');
}

emailField.addEventListener('focusout', (e) => {
  emailContainer.classList.remove('field-active');
});

textArea.onfocus = (e) => {
  textArea.classList.add('field-active');
}

textArea.addEventListener('focusout', (e) => {
  textArea.classList.remove('field-active');
});

const validateForm = (e) => {

  const emailConstraints = {
    from: {
      email: true
    }
  };

  if (validate({from: emailField.value}, emailConstraints) !== undefined) {
    return alert('Please enter a valid email.');
  }

  const messageConstraints = {
    length: {
      minimum: 20,
    }
  }

  if (textArea.value.length < 20) {
    return alert('Message too short.');
  }

  textArea.disabled = true;
  emailField.disabled = true;

  submit.removeEventListener('click', this);
  submit.parentElement.removeChild(submit);
  success.style.display = 'block';
}

submit.onclick = validateForm;