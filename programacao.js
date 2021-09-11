
function verificar(event){
    event.preventDefault() //previne o envio do formulário
 
    //1. Obter o elemeto HTML e os dados digitados
    const txtIdade = document.getElementById("idade")
    const txtPeso = document.getElementById("peso")
    const divResultado = document.getElementById("resultado")

    //2. Realizar a verificação
    if((txtIdade.value >= 16 && txtIdade.value <= 69) 
        && txtPeso.value > 50){
            var resultado =  `<div class="alert alert-success" 
            role="alert">
            <h4 class="alert-heading">Parabéns!</h4>
            <p>😁 Você pode ser doador!</p>
            </div>`
    }else{
            var resultado = `<div class="alert alert-danger" 
            role="alert">
            <h4 class="alert-heading">Que pena!</h4>
            <p>😫 Você não pode ser doador!</p>
            </div>`
    }

    //3. Mostrar o resultado
    divResultado.innerHTML = resultado
 
}//fim do verificar