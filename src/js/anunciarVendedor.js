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
  }

  const listaDeProdutos = JSON.parse(localStorage.getItem('listaDeProdutos') || '[]')
 
  const produto = {
       Produto: nameprodut.value,
       Descricao: descriçaoprodut.value,
       Preco: moneycash.value,    
     }
 
     listaDeProdutos.push(produto)
 
     localStorage.setItem('listaDeProdutos', JSON.stringify(listaDeProdutos))
     alert('Produto cadastrado com sucesso!')
 
   window.location.href = 'perfilLojaVendedor.html'
}
