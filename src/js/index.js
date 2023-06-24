var procurar = document.getElementById("TxtBusca");
var produtos = localStorage;
let msgSucess = document.getElementById("Sucess");
let msgError = document.getElementById("msError");
let postProduto = document.getElementById("section-container");

function busca() {
  var itemEncontrado = JSON.parse(localStorage.getItem(procurar.value));

  if (itemEncontrado) {
    let produtokey = JSON.parse(localStorage.getItem("key"));

    var nomeDoItem = itemEncontrado;
    console.log(nomeDoItem.Titulo);
    msgSucess.setAttribute("style", "display: block");
    msgSucess.innerHTML = "Existe um produto com esse nome.";
    postProduto.setAttribute("style", "display: none");

    setTimeout(() => {
      msgSucess.setAttribute("style", "display: none");
    }, 2000);
  } else {
    console.log(`O item ${procurar.value} não foi encontrado`);
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Não existe nenhum produto com esse nome.";
    setTimeout(() => {
      msgError.setAttribute("style", "display: none");
    }, 2000);
  }
  procurar.value = "";
}
