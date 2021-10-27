window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre() {
  var elemento = document.getElementById('nombre');
  if (elemento.value == '') {
    alert('El campo nombre no puede estar vacío.');
    return false;
  }
  return true;
}



function valida_apellido() {
    var elemento = document.getElementById('apellido');
    if (elemento.value == '') {
      alert('El campo apellido no puede estar vacío.');
      return false;
    }
    return true;
  }

  function valida_email() {
    var elemento = document.getElementById('email');
    if (elemento.value == '') {
      alert('Debe colocar su correo electrónico.');
      return false;
    }
    return true;
  }

 

  function valida_contraseña() {
    var elemento = document.getElementById('contraseña');
    if (elemento.value == '') {
      alert('Por favor, escriba su contraseña.');
      return false;
    }
    return true;
  }

  function valida_check() {
    var campo_check = document.getElementById('check');
    if(!campo_check.checked){
      alert('Haga click en el recuadro para confirmar.');
      return false;
    }
    return true;
  }
  

function validate(e) {
  if (valida_nombre() && valida_apellido() && valida_email() && valida_contraseña() && valida_check() && confirm ('Pulse aceptar si desea enviar el formulario')){
    return true;
  }
  return false;
}