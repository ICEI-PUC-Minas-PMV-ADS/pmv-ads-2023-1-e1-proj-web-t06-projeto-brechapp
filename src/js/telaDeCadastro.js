//
let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let senha = document.querySelector("#password");
let labelSenha = document.querySelector("#labelPassword");
let validSenha = false;

let msgError = document.querySelector("#msgError");
let msgSucesss = document.querySelector("#msgSucess");

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 3) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Usuario *Insira no minimo 3 caracteres";
    nome.setAttribute("style", "outline-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Usuario";
    nome.setAttribute("style", "outline-color: green");
    validNome = true;
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "Senha *Insira no minimo 6 caracteres";
    senha.setAttribute("style", "outline-color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = "Senha";
    senha.setAttribute("style", "outline-color: green");
    validSenha = true;
  }
});

function cadastrar() {
  if (validNome && validSenha) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nomeCadas: nome.value,
      userCadas: senha.value,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSucesss.setAttribute("style", "display: block");
    msgSucesss.innerHTML = "<strong>Cadastrando Usuario</strong>";
    msgError.setAttribute("style", "display: none");

    setTimeout(() => {
      window.location = "./telaDeLogin.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong> Preencha todos os campos corretamente</strong>";
    msgSucesss.setAttribute("style", "display: none");
  }
}
