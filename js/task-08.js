const loginForm = document.querySelector('.login-form');

const userData = {};

loginForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please, fill all the fields of form!');
    } else {
        userData.key = email.value;
        userData.value = password.value;
    }

    console.log(userData);

    event.currentTarget.reset();
}