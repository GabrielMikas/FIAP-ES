//form
let password = document.getElementById("pswd");
let passwordConfirm = document.getElementById("pswdConfirm");
let userName = document.getElementById("userName");
let validDiv = document.getElementById("validationDiv");

//home
let passwordHome = document.getElementById("pwField");
let userHome = document.getElementById("emailField")
function clearForm(){
    password.innerText = "";
    passwordConfirm.innerText = "";
    userName.innerText = "";
}

function validation(){

     if(password.value === passwordConfirm.value){
      passwordConfirm.classList.remove("is-invalid")  
      validDiv.classList.remove("invalid-feedback")
      validDiv.classList.add("valid-feedback")
      passwordConfirm.classList.add("is-valid")
      validDiv.innerHTML = "Senha valida"
    } 
    else{  
        passwordConfirm.classList.remove("is-valid")
        validDiv.classList.remove("valid-feedback")
        passwordConfirm.classList.add("is-invalid")
        validDiv.classList.add("invalid-feedback")
        validDiv.innerHTML = "Senha invalida"
        
    }
}

function submitForm(){
    if((password.value === passwordConfirm.value) && userName.value !== "" && password.value !== ""){
        alert("Login criado")
        
    } else{
        alert("Por favor insira todas as informações")
    }
}
function submitHome(){
    if(passwordHome.value !== "" && userHome.value !== ""){
        alert("Login feito com sucesso!")
    } else{
        alert("Preencha os campos para realizar o login!")
    }
}

