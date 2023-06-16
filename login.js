document.getElementById('submit-btn').addEventListener('click', function(){
    const emailId = document.getElementById("email-id")
    const emailValue = emailId.value;
    
    const passwordId = document.getElementById('password-id')
    const passwordValue = passwordId.value;
    
    if (emailValue == "th1212@gmail.com" && passwordValue == "tanvir123321") {
        window.location.href = 'bank.html'
    }else if (emailValue !== "th1212@gmail.com" && passwordValue !== "tanvir123321") {
        alert('invalid email and password')
    } else if(emailValue !== "th1212@gmail.com"){
      alert('invalid email')
    }else{
        alert('invalid password')
    }
        
    
    
})