
$(document).ready(function() {

    $('#contact-form').submit(function(e) {
        var name = $('#inputname').val();
        var senderEmail = $('#inputemail').val();
        var phone = $('#inputphone').val();
        var subject = $('#inputsubject').val();
        var messageBody = $('#submitted-message').val();

        var message =
            '\n\SUBJECT: ' + subject +
            '\n\nMESSAGE: ' + messageBody +
            '\n\nCONTACT INFORMATION SENT' +
            '\nName: ' + name +
            '\nEmail: ' + senderEmail +
            '\nPhone: ' + phone;

        if (name && senderEmail && subject && message) {
            $.ajax({
                url: 'https://formspree.io/mvobzlpg',
                method: 'POST',
                data: { message: message },
                dataType: 'json'
            });

            e.preventDefault();
            $(this).get(0).reset();
            swal({
                title: "Message sent",
                 text: "Your message has been successfully sent",
                 icon: "success",
                 buttons: {
                    cancel: "OK",
                  },
            });

        } else {
            swal({
                title: "Unkwown error",
                 text: "Your message could not be sent, but remember you can always reach me out on LinkedIn.",
                 icon: "error",
                 buttons: {
                    cancel: "OK",
                  },
            });
        }

    });
})
