//form
let password = document.getElementById("pswd");
let passwordConfirm = document.getElementById("pswdConfirm");
let userName = document.getElementById("userName");
let validDiv = document.getElementById("validationDiv");
let checkbox = document.getElementById("checkValidate");
//home
let passwordHome = document.getElementById("pwField");
let userHome = document.getElementById("emailField")
function clearForm(){
    password.innerText = "";
    passwordConfirm.innerText = "";
    userName.innerText = "";
}
function submitForm(){
    if((password.value === passwordConfirm.value) && userName.value !== "" && password.value !== "" && checkbox.checked){
        alert("Login criado")
        return
    } 
        alert("Por favor insira todas as informações")
}
function submitHome(){
    if(passwordHome.value !== "" && userHome.value !== ""){
        alert("Login feito com sucesso!")
    } else{
        alert("Preencha os campos para realizar o login!")
    }
}
function passwordValidation(){
    password.classList.remove("is-invalid")
    password.classList.add("is-valid")
    if(password.value === ""){
        password.classList.remove("is-valid")
        password.classList.add("is-invalid")
    }
}
function userValidation(){
    userName.classList.remove("is-invalid")
    userName.classList.add("is-valid")
    if(userName.value === ""){
        userName.classList.remove("is-valid")
        userName.classList.add("is-invalid")
    }
}
function checkboxValidation(){
    if(checkbox.checked){
        checkbox.classList.remove("is-invalid")
        checkbox.classList.add("is-valid")
        return
    }
        checkbox.classList.remove("is-valid")
        checkbox.classList.add("is-invalid")
}
function validation(){

     if(passwordConfirm.value === password.value){

      passwordConfirm.classList.remove("is-invalid")  
      validDiv.classList.remove("invalid-feedback")

      validDiv.classList.add("valid-feedback")
      passwordConfirm.classList.add("is-valid")

      validDiv.innerHTML = "Senha valida"
      return 
    } 
        
        passwordConfirm.classList.remove("is-valid")
        validDiv.classList.remove("valid-feedback")

        passwordConfirm.classList.add("is-invalid")
        validDiv.classList.add("invalid-feedback")

        validDiv.innerHTML = "Senha invalida"
        console.log("Teste", passwordConfirm)
        console.log("Teste", validDiv)
    
}


