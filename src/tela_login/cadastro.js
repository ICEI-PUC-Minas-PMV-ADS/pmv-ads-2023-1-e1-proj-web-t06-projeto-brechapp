function logar(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if(email == "brechapp@gmail.com" && password =="admin"){
    alert("Sucesso");
    location.href ="telalogado.html";
  }else{
    alert('Usuario ou senha incorretos');
  }
}
