const form = document.querySelector('form');
const nome = form.querySelector('#nome');
const email = form.querySelector('#email');
const assunto = form.querySelector('#assunto');
const mensagem = form.querySelector('#mensagem');

function validarForm(evento) {
  evento.preventDefault();

  const nomeValido = validarNome();
  const emailValido = validarEmail();
  const assuntoValido = validarAssunto();
  const mensagemValida = validarMensagem();

  if (nomeValido && emailValido && assuntoValido && mensagemValida) {
    window.location.replace('/pages/form-enviado.html');
  }
}

function validarNome() {
  const nomeValue = nome.value;

  if (nomeValue === '') {
    validarErro(nome, 'Preencha o nome');
    return false;
  } else if (nomeValue.length > 50) {
    validarErro(nome, 'Esse campo deve conter, no máximo, 50 caracteres');
    return false;
  } else {
    validarEnvio(nome);
    return true;
  }
}

function validarEmail() {
  const emailValue = email.value;

  function validarRegex(email) {
    const regex = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
    return regex.test(email);
  }

  const ehValido = validarRegex(emailValue);

  if (emailValue === '') {
    validarErro(email, 'Preencha o email');
    return false;
  } else if (!ehValido) {
    validarErro(email, 'Informe um email válido');
    return false;
  } else {
    validarEnvio(email);
    return true;
  }
}

function validarAssunto() {
  const assuntoValue = assunto.value;

  if (assuntoValue === '') {
    validarErro(assunto, 'Preencha o assunto');
    return false;
  } else if (assuntoValue.length > 50) {
    validarErro(assunto, 'Esse campo deve conter, no máximo, 50 caracteres');
    return false;
  } else {
    validarEnvio(assunto);
    return true;
  }
}

function validarMensagem () {
  const mensagemValue = mensagem.value;

  if (mensagemValue === '') {
    validarErro(mensagem, 'Escreva uma mensagem');
    return false;
  } else if (mensagemValue.length > 300) {
    validarErro(mensagem, 'Esse campo deve conter, no máximo, 300 caracteres');
    return false;
  }
  else {
    validarEnvio(mensagem);
    return true;
  }
}

function validarErro(input, mensagem) {
  const containerInput = input.parentElement;
  const mensagemErro = containerInput.querySelector('.mensagem-erro');

  input.style.borderColor = 'red';
  mensagemErro.style.display = 'block';
  mensagemErro.innerText = mensagem;
}

function validarEnvio(input) {
  const containerInput = input.parentElement;
  const mensagemErro = containerInput.querySelector('.mensagem-erro');

  input.style.borderColor = 'transparent';
  mensagemErro.style.display = 'none';
}

form.addEventListener('submit', validarForm);