const form = document.getElementById('form')

form.addEventListener('submit', e =>{
    e.preventDefault()

    const email = form['email'];
    const emailVal = email.value;
    const small = form['email'].parentNode.querySelector('small');

    if(emailVal === ''){
        email.classList.add('error')
        small.innerText = "Email field can not be empty";
        small.style.display = 'inline-block';
    }
    else if(!validateEmail(emailVal)){
        email.classList.add('error')
        small.innerText = "Invalid email address entered"
        small.style.display = 'inline-block';
    }
    else {
        email.classList.remove('error')
        small.style.display = 'none';
    }
})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}