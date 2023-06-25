const titulo = document.getElementById('titulo');
const preco = document.getElementById('preco');
const descricao = document.getElementById('descricao');

const listaDeProdutos = JSON.parse(localStorage.getItem('listaDeProdutos') || '[]');

const cardProdutos = document.getElementById('tableProdutos');

for (let i = 0; i < listaDeProdutos.length; i++) {
  const produto = listaDeProdutos[i];

  const newRow = document.createElement('tr');
  newRow.setAttribute('class', 'mb-0 pb-0');

  newRow.innerHTML = `
    <td>
      <div class="col-12 mb-2 pt-2 ps-4 pe-4" id="card-view">
        <div class="col-12 mb-2 pt-2">
          <h4 class="text-center">${produto.Produto}</h4>
          <p class="text-center">${produto.Preco}</p>
          <p class="text-center">${produto.Descricao}</p>
          <br>
          <div class="crudBtn">
            <button type="button" data-toggle="modal" data-target="#sideModalTLInfo" id="editarIcon" onclick="editarInformacoes(${i})">
              <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" class="editarIcon" style="width: 1.2rem; height: 1.2rem">
            </button>
            <button type="button" id="deleteIcon" onclick="removerProduto(${i})">
              <img src="https://cdn.icon-icons.com/icons2/868/PNG/512/trash_bin_icon-icons.com_67981.png" style="width: 1.2rem; height: 1.2rem" class="deleteIcon">
            </button>
          </div>
        </div>
      </div>
    </td>
  `;

  cardProdutos.appendChild(newRow);
}

function removerProduto(index) {

  let confirmar = confirm('Tem certeza que deseja excluir?')

  if(confirmar){
    listaDeProdutos.splice(index, 1);
    localStorage.setItem('listaDeProdutos', JSON.stringify(listaDeProdutos));
    location.reload();
  
    alert('Produto removido com sucesso!');
  } else {}
}
