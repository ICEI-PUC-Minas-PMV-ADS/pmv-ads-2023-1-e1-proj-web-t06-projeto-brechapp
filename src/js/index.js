let produtos = JSON.parse(localStorage.getItem("Produtos")) || [];
let produtosEncontrados = produtos.filter((p) =>
  p.Titulo.toLowesCase().includes(p.toLowesCase())
);
function buscq() {
  let msgSucess = document.getElementById("Sucess");
  let msgError = document.getElementById("msError");
  let p = document.getElementById("TxtBusca") || "";

  if ((p = produtos)) {
    msgSucess.setAttribute("style", "display: block");
    msgSucess.innerHTML = "Existe um produto com esse nome.";
    setTimeout(() => {
      msgSucess.setAttribute("style", "display: none");
    }, 2000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Não existe nenhum produto com esse nome.";
    setTimeout(() => {
      msgError.setAttribute("style", "display: none");
    }, 2000);

    document.getElementById("search").focus();
  }
}
