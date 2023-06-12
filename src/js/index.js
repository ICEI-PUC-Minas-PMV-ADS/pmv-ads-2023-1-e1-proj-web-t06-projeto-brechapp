let navegacao = document.getElementById('TxtBusca')
function buscar(){
  if(navegacao >2){
    navegacao.setAttribute(localStorage.getItem(nameprodut))
    const result = nameprodut.filter(nameprodut => nameprodut.lenght > 2)

  }

}
