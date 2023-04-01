export function validateInput(input) {
    const inputData = input.dataset.input;
    
    if (!input.validity.valid) {
        input.parentElement.classList.add("error");
        input.parentElement.querySelector("[data-error]").innerHTML = showErrorMessage(inputData, input);
    }
    
    else {
        input.parentElement.classList.remove("error");
        input.parentElement.querySelector("[data-error]").innerHTML = "";
    }
}

const errorTypes = ["valueMissing", "typeMismatch", "patternMismatch"]; // customError

const errorMessages = {
    name: {
        valueMissing: "O campo de nome não pode estar vazio."
    },

    email: {
        valueMissing: "O campo de email não pode estar vazio.",
        typeMismatch: "Email inválido. O email deve estar no formato: email@email.com",
        patternMismatch: "Email inválido. O email deve estar no formato: email@email.com"
    },

    subject: {
        valueMissing: "O campo de assunto não pode estar vazio."
    },

    message: {
        valueMissing: "O campo de mensagem não pode estar vazio."
    }
}

function showErrorMessage(inputData, input) {
    let message = "";

    errorTypes.forEach(error => {
        if (input.validity[error]) {
            message = errorMessages[inputData][error];
        }
    })
    
    return message;
}