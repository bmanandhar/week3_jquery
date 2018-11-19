console.log('Sanity...');
$(document).ready(function() {

    $(':button').click(function(){
        console.log("Button Clicked!!!");

        if ($('#name').html()== "") {
            $(this).siblings('#name').addClass('error');
            // $('#name').html() = "Please enter your full name.";
            return false;
        }

        if ($('#email').html()== "") {
            $(this).siblings('#email').addClass('error');
            // $('#email').html() = "Please enter your email address.";
            return false;
        }
    })
});