const produtos = [
  {
    id: 1,
    Titulo: "Bolsa",
    Preço: 100.0,
    Foto: "blusa1.png",
  },
  {
    id: 2,
    Titulo: "Tenis",
    Preço: 200.0,
    Foto: "blusa2.png",
  },
  {
    id: 3,
    Titulo: "Calça",
    Preço: 100.0,
    Foto: "blusa3.png",
  },
  {
    id: 4,
    Titulo: "Blusa",
    Preço: 90.0,
    Foto: "blusa4.png",
  },
  {
    id: 5,
    Titulo: "Vestido",
    Preço: 300.0,
    Foto: "blusa5.png",
  },
  {
    id: 6,
    Titulo: "Colar",
    Preço: 50.0,
    Foto: "",
  },
];

// localStorage.setItem("Produto", JSON.stringify(Produto));

// function buscq() {
//   let msgSucess = document.getElementById("Sucess");
//   let msgError = document.getElementById("msError");
//   let produto = [];

//   let validarProduto = {
//     Titulo: "",
//   };

//   produto = JSON.parse(localStorage.getItem("Produto"));

//   let valorPesquisa = document.getElementById("TxtBusca").value;

//   produto.forEach((item) => {
//     if (valorPesquisa === item.Titulo) {
//       validarProduto = {
//         Titulo: item.Titulo,
//       };
//     }
//   });

//   if (valorPesquisa === validarProduto.Titulo) {
//     msgSucess.setAttribute("style", "display: block ");
//     msgSucess.innerHTML = "Existe um produto com esse nome.";
//   } else {
//     msgError.setAttribute("style", "display: block");
//     msgError.innerHTML = "Não existe nenhum produto com esse nome.";
//   }
// }
function buscq() {
  let msgSucess = document.getElementById("Sucess");
  let msgError = document.getElementById("msError");
  let produto = [];

  let validarProduto = {
    Titulo: "",
  };

  let produtoFromLocalStorage = localStorage.getItem("Produto");

  if (produtoFromLocalStorage !== null) {
    produto = JSON.parse(produtoFromLocalStorage);

    produto.forEach((item) => {
      if (document.getElementById("search").value === item.Titulo) {
        validarProduto = {
          Titulo: item.Titulo,
        };
      }
    });
  }

  if (document.getElementById("search").value === validarProduto.Titulo) {
    msgSucess.setAttribute("style", "display: block");
    msgSucess.innerHTML = "Existe um produto com esse nome.";
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Não existe nenhum produto com esse nome.";

    document.getElementById("search").focus();
  }
}
