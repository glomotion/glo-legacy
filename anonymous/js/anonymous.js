function validateForm(form) {
  var errors = document.getElementById('formerrors');
  var name = document.getElementById('name');
  var email = document.getElementById('email');

  var error_msg = '';

  if(name.value == '') {
    error_msg += 'Name is required<br />';
  } 

  if(email.value == '') {
    error_msg += 'Email is required<br />';
  }

  if(error_msg == '') {
    return true;
  } else {
    errors.innerHTML = error_msg;
    return false;
  }
}