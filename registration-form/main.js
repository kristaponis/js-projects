const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


// showError function shows custom error message
// when form field has some error
function showError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message
}

// showSuccess function shows success outline
// when form field has passed validation
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// emailValidation function
function checkEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(input.value.trim()).toLowerCase())
    if (re) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

// checkRequired function checks if required fields are correct
function checkRequired(inputArray) {
    inputArray.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${input.id.charAt(0).toUpperCase() + 
            input.id.slice(1)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

// checkLength function checks input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id.charAt(0).toUpperCase() +
        input.id.slice(1)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${input.id.charAt(0).toUpperCase() +
        input.id.slice(1)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

// checkPassword function matches passwords
function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}


// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()

    checkRequired([username, email, password, password2])
    checkLength(username, 3, 20)
    checkLength(password, 6, 20)
    checkLength(password2, 6, 20)
    checkEmail(email)
    checkPassword(password, password2)
})
