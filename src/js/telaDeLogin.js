function entrar() {
  //Formulario do usuario
  let labelUser = document.querySelector("#labelText");
  let usuario = document.querySelector("#text");
  //Formulario da senha do Usuario
  let labelSenha = document.querySelector("#labelPassword");
  let senha = document.querySelector("#password");
  //Mensagem de erro
  let msgError = document.querySelector("#msgError");
  let listaUser = [];

  let userValid = {
    nome: "",
    senha: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));

  listaUser.forEach((item) => {
    if (usuario.value == item.nomeCadas && senha.value == item.userCadas) {
      userValid = {
        nome: item.nomeCadas,
        senha: item.userCadas,
      };
    }
  });
  if (usuario.value == userValid.nome && senha.value == userValid.senha) {
    setTimeout(() => {
      window.location = "./paginaCliente.html";
    }, 1000);
    let token = Math.random().toString(16).substring(2);
    localStorage.setItem("token", token);

    localStorage.setItem("userLogado", JSON.stringify(userValid));
  } else {
    labelUser.setAttribute("style", "color:red");
    usuario.setAttribute("style", "color:red");

    labelSenha.setAttribute("style", "color:red");
    senha.setAttribute("style", "color:red");

    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Senha ou login incorreto!!";
    usuario.focus();
  }
}
