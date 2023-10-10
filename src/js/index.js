const card = document.querySelectorAll('.card')[0];
const sucess = document.querySelectorAll('.sucess')[0];

const input = document.getElementById('email');
const btn = document.getElementById('btn');
const txtValidation = document.querySelectorAll('.validation')[0];

const btnConfirm = document.getElementById('btnConfirm');

function validate() {
    if (input.value.trim() === '' || !input.value.includes('@')) {
        input.classList.add('denied');
        txtValidation.classList.remove('hide');
        return false;
    } else {
        input.classList.remove('denied');
        txtValidation.classList.add('hide');
        return true;
    }
}

function showDisplay() {
    if (!card.classList.contains('hide')) {
        card.classList.add('hide');
        sucess.classList.remove('hide');
    }
}

function hideSucess() {
    if (!sucess.classList.contains('hide')) {
        sucess.classList.add('hide');
    }
}

function emailSuccess () {
    const typedEmail = input.value;
    const span = document.getElementById('typedEmail');
    span.innerHTML = typedEmail;
}

btn.addEventListener('click', function(event) {
    check = validate();
    if (! check) {
        event.preventDefault();
    } else {
        showDisplay();
        emailSuccess();
        event.preventDefault();

    }
});

btnConfirm.addEventListener('click', hideSucess);
