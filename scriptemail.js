// Grab the email input field and also the update div below it
// Why: to listen for changes in the input field, and show live updates in the update div!
const email = document.querySelector('.email');
const update = document.querySelector('.update');

// Listen to any change to the input we selected above
// Why: to validate the string as we type (on each keystroke)
email.addEventListener('input', inputEmail);

function inputEmail(e) {
  const input = e.target.value;
  // Check if the input is NOT blank first, and if it's not, make sure it matches our regex test
  // Why: because we don't want to start validating before the user has started typing; after that it's fair game
  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    update.textContent = 'Valid Email!';
    update.classList.add('success');
    update.classList.remove('failure');
  } else {
    update.textContent = 'Keep Going...';
    update.classList.remove('success');
    update.classList.add('failure');
  }
};


