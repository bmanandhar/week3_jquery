console.log('js/main.js works Fine!')
$(document).ready(function() {
    $('button').on('submit', function(e){
        e.preventDefault();
    });  
    let
        errorMessage = 'Please enter ';
        nameError = 'your full name.';
        emailError = 'an email address.';
        subjectError = 'a subject';

        name = `${$('.name').html().length}`;
        email = `${$('.email').html().length}`;
        subject = `${$('.subject').html().length}`;
        console.log('Hey0!', name);

        if (name == 0) {
            console.log(errorMessage + nameError);
            $('name').append(`${errorMessage+nameError}`);

        }

        if (email == 0) {
            console.log(errorMessage + emailError);
            $('email').append(`${errorMessage+emailError}`);

        }
        if (subject == 0) {
            console.log(errorMessage + subjectError);
            $('subject').append(`${errorMessage+subjectError}`);

        }



});
