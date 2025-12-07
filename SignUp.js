
    const form = document.getElementById("SignUp");

    const errorMessage = document.getElementById("SignUpError");

    const Username = document.getElementById('Username')

    const email = document.getElementById('email')

    const pwd = document.getElementById('pwd')

    const pass = document.getElementById('pass')

    form.addEventListener('submit', (e) =>{
    let messages = []

    if (Username.value === ""||Username.value == null){
    messages.push("User Name is required")
}
    if (!email.includes('@')||!email.includes('.')){
     messages.push("Email is not valid")
}
    if (pwd.value < 6){
   messages.push("Password is to short most be longer then 6 characters")
}
    if (!pass == pwd){
        messages.push("most match password")
    }
    if (messages.length > 0){
        e.preventDefault()
        errorMessage.innerText = messages.join(", ");
    }

})