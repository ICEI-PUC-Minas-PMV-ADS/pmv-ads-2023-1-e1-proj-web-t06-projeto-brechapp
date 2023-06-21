let produt = [];
let titulo = document.querySelector("#titulo");
let descricao = document.querySelector("#descricao");
let preco = document.querySelector("#preco");
var erro = document.querySelector(".error");
var validated = document.querySelector(".validated");
var concluir = document.querySelector(".concluir");

//Cadastro produtos locastorage
let nameprodut = document.getElementById("titulo");
let moneycash = document.getElementById("preco");
let categoriprodut = document.getElementById("acessiorios");
var photoprodut = document.getElementById("photo");
let descriçaoprodut = document.getElementById("descricao");
var concluid = document.getElementById("bottanenvio");
let photo = document.getElementById("photo");

//Variavel pro localstorage

function validarInput() {
  var mensagemErro = erro;
  var valorTitulo = titulo.value;
  var valorDesc = descricao.value;
  var valorPreco = preco.value;

  if (valorTitulo === "" && valorDesc === "" && valorPreco === "") {
    mensagemErro.textContent =
      "Os campos estão vazios. Por favor, preencha-os.";
    mensagemErro.style.display = "block";
  } else if (valorTitulo == "") {
    mensagemErro.textContent =
      "O campo TITULO está vazio. Por favor, preencha-o.";
    titulo.style.cssText = "border: 1px solid red;";
    mensagemErro.style.display = "block";
  } else if (valorDesc === "") {
    mensagemErro.textContent =
      "O campo DESCRIÇÃO está vazio. Por favor, preencha-o.";
    descricao.style.cssText = "border: 1px solid red;";
    mensagemErro.style.display = "block";
  } else if (valorPreco === "") {
    mensagemErro.textContent =
      "O campo PREÇO está vazio. Por favor, preencha-o.";
    preco.style.cssText = "border: 1px solid red;";
    mensagemErro.style.display = "block";
  } else if (valorTitulo > "" && valorDesc > "" && valorPreco > "") {
    mensagemErro.textContent = "";
    mensagemErro.style.display = "none";
    preco.style.cssText = "border: 1px solid black;";
    descricao.style.cssText = "border: 1px solid black;";
    titulo.style.cssText = "border: 1px solid black;";
    validated.textContent = "Concluído com Sucesso";
    validated.style.display = "block";
    setTimeout(() => {
      document.getElementById("titulo").value = "";
      document.getElementById("descricao").value = "";
      document.getElementById("preco").value = "";
      validated.style.display = "none";
    }, 2000);
  }

  let produt = {
    Titulo: nameprodut.value,
    Descriçao: descriçaoprodut.value,
    Preço: moneycash.value,
    Imagem: photoprodut.value,
  };
  produt_JSON = JSON.stringify(produt);
  localStorage.setItem("Produtos", produt_JSON);
}
