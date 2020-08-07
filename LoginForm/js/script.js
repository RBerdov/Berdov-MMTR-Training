const newUser = {
    fullName: '',
    username: '',
    email: '',
    password: ''
}

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
        newUser.fullName = fullName.value;
        newUser.username = username.value;
        newUser.email = email.value;
        newUser.password = password.value;
        if(newUser.password == confirmPass.value) {
            console.log(newUser);
            rs.parentNode.style.display = 'none';
            document.querySelector('.welcome').style.display = 'flex'; 
            document.querySelector('.welcome__title').textContent = 'Welcome, ' + newUser.username + '!';
            document.querySelector('#welcome-full-name').textContent = 'Your full name: ' + newUser.fullName;
            document.querySelector('#welcome-email').textContent = 'Your email: ' + newUser.email;
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
