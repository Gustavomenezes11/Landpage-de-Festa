function confirmaringresso(){
    const camponome = document.getElementById('inputname')
    const campoemail = document.getElementById('inputemail')
    const campoidade = document.getElementById('inputidade')
    const campoidentidade = document.getElementById('inputarquivo')

    // Validação dos inputs, sem preencher manda o usuario preencher//
    if(camponome.value && campoemail.value && campoidade.value && campoidentidade.value){
        alert('Dados preenchidos com sucesso!')
    } else {
        alert('Por favor, Preencha todos os campos para Prosseguir')
        return;
    }

    //Validação de idade, dependendo da idade o ingresso é cancelado//
    const idade = parseInt(campoidade.value)
    if(idade < 2004){
        alert('Ingresso Confirmado, vamos validar e dentro de 5 minutos vai chegar no seu email o QRCode para o pagamento!')
        location.reload();
    } else{
        alert('Ingresso cancelado. Motivo: Menor de Idade')
        location.reload();
    }

}