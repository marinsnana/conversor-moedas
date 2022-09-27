function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor)

    var valorEmReal = valorEmDolar * 5;
    console.log(valorEmReal)

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado de dolar para real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterEuro() {
    var valorElemento = document.getElementById("valorEuro");
    var valorEuro = valorElemento.value;
    var valorEmEuro = parseFloat(valorEuro)

    var valorEmReal = valorEmEuro * 5;
    console.log(valorEmReal)

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertidoEuro = "O resultado de euro para real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertidoEuro
}

function ConverterLibra() {
    var valorElemento = document.getElementById("valorLibra");
    var valorLibra = valorElemento.value;
    var valorEmLibra = parseFloat(valorLibra)

    var valorEmReal = valorEmLibra * 6;
    console.log(valorEmReal)

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertidoLibra = "O resultado de libra para real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertidoLibra;
}