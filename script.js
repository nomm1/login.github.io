$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault(); // prevent form submission

    // perform form validation and login logic here

    // if login is successful, redirect to dashboard
    window.location.href = 'dashboard.html';
  });
});
