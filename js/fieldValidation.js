const errorTypes = ['valueMissing', 'typeMismatch', 'patternMismatch'];
const valueMissingMessage = field => { return `O campo ${field} não pode estar vazio.` };
const invalidEmailMessage = 'Email inválido. O email deve estar no formato: email@email.com'

const errorMessages = {
  name: {
    valueMissing: valueMissingMessage('nome')
  },

  email: {
    valueMissing: valueMissingMessage('email'),
    typeMismatch: invalidEmailMessage,
    patternMismatch: invalidEmailMessage
  },

  subject: {
    valueMissing: valueMissingMessage('assunto')
  },

  message: {
    valueMissing: valueMissingMessage('mensagem')
  }
}

const showErrorMessage = (dataInput, input) => {
  let message = '';

  errorTypes.forEach(error => {
    if (input.validity[error]) {
      message = errorMessages[dataInput][error];
    }
  })

  return message;
}

const fieldValidation = (event) => {
  const field = event.target;
  const dataAttribute = field.dataset.input;
  const wrapper = field.parentElement;
  const span = wrapper.querySelector('span');

  if (!field.validity.valid) {
    wrapper.classList.add('error');
    span.innerText = showErrorMessage(dataAttribute, field);
  }

  else {
    wrapper.classList.remove('error');
    span.innerText = '';
    wrapper.classList.add('success');
    setTimeout(() => wrapper.classList.remove('success'), 1000);
  }
}

export default fieldValidation;
