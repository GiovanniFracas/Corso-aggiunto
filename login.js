$(() => {
    localStorage.clear();

    $('#login').on('click', function () {

        let nome = $('#userName').val();
        let password = $('#userPassword').val();
        let email = $('#userEmail').val();

        if (nome == '' || password == '' || email == '') {
            alert('Compila i campi richiesti')

        } else if (!ValidateEmail(email)) {
            alert('Inserisci una mail valida')
        } 

        else if (!validatePassword(password)) {
            alert('Inserisci almeno 6 caratteri e un numero')


        } else {
            $("#login").addClass('disabled');
            $('.bar').append('<div class="in"></div>');
            setTimeout("location.href = 'corsi.html';", 5000);
            localStorage.setItem('nome', nome);
   

        }
    })
    function ValidateEmail(mail) {
    var regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
      //Matching the given phone number with regular expression
      let result = mail.match(regex);
      return result;
    }

    function validatePassword(password) {
        if (password.length < 6) {
            return false;
        } else if (password.length > 50) {
            return false;
        } else if (password.search(/\d/) == -1) {
            return false;
        } else if (password.search(/[a-zA-Z]/) == -1) {
            return false;
        } else if (password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
            return false;
        }
        return true;
    }


})