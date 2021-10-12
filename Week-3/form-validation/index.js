console.log('hello world');

const form = document.querySelector('form');
const inputs = Array.from(document.querySelectorAll('input'));

form.setAttribute('novalidate', '');

inputs.forEach((i) => {
  i.setAttribute('aria-invalid', false);
  i.addEventListener('invalid', () => {
    i.setAttribute('aria-invalid', true);
    console.log(i.validationMessage);
    const errorId = i.id + 'Error';
    const errorContainer = form.querySelector('#' + errorId);
    errorContainer.textContent = i.validationMessage;
  });
});

form.addEventListener('submit', (event) => {
  const allInputsValid = form.checkValidity();
  if (!allInputsValid) {
    event.preventDefault();
  }
});
