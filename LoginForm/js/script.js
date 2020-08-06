submitLogin = (ls) => {
    console.log(ls.parentNode);

    if(ls.querySelector('#login-email').value != '' && ls.querySelector('#login-password').value != ''){
        ls.parentNode.style.display = 'none';
        document.querySelector('.welcome').style.display = 'flex';
    }

    else {

    }
    
 
    
}

submitRegister = (rs) => {
    fullName = rs.querySelector('#full-name');
    username = rs.querySelector('#username');
    email = rs.querySelector('#email');
    password = rs.querySelector('#password')
    confirmPass = rs.querySelector('#confirm-password');
    if(fullName.value != '' && username.value != '' && email.value != '' && password.value != '' && confirmPass.value != '') {
        if(password.value == confirmPass.value) {
            rs.parentNode.style.display = 'none';
            document.querySelector('.welcome').style.display = 'flex'; 
        }
         
    }

}


document.querySelector('.login').addEventListener('submit', function(event) {
        event.preventDefault();
        submitLogin(event.target);
    });

document.querySelector('.registration').addEventListener('submit', function(event) {
        event.preventDefault();
        submitRegister(event.target);
    });
