// Calcula o primeiro dígito depois do traço
// XXX.XXX.XXX-1X
function calculaDV1 (noveDigitos){
    var soma=0, valor=10;
    // Uma explicação melhor para este algoritmo está no site https://www.geradorcpf.com/algoritmo_do_cpf.htm
    for(i=0;i<9;i++){
        soma += noveDigitos.charAt(i)*valor;
        valor--;
    }
    resto = soma % 11;
    if(resto<2){
        return 0;
    } else {
        return (11-resto);
    }
}

// Calcula o segundo digito depois do traço
// XXX.XXX.XXX-10
function calculaDV2 (dezDigitos){
    var soma=0, valor=11;
    // Uma explicação melhor para este algoritmo está no site https://www.geradorcpf.com/algoritmo_do_cpf.htm
    for(i=0;i<10;i++){
        soma += dezDigitos.charAt(i)*valor;
        valor--;
    }
    resto = soma % 11;
    if(resto<2){
        return 0;
    } else {
        return (11-resto);
    }
}

function validaCPF(){
    // Remove os pontos e traços, caso tenha
    var textoAtual = document.getElementById("pegarCPF").value;
    var cpf = textoAtual.replace(/[\.\-]/g,'');

    // Divide a string do CPF para o cálculo do primeiro digito depois do traço
    var primeiraParteAlgoritmo = cpf.substring(0,9);
    // Divide a string do CPF para o cálculo do segundo digito depois do traço
    var segundaParteAlgoritmo = cpf.substring(0,10);
    // Pega os digitos verificadores do CPF (Dois últimos)
    var digitoVerificador = cpf.substring(9,11);

    // Chama as duas funções de cálculo dos digitos e transforma o resultado em string para fazer uma concatenação - Ex.: 1 + 1 = 11
    var resultado = calculaDV1(primeiraParteAlgoritmo).toString() + calculaDV2(segundaParteAlgoritmo).toString();

    // Váriaveis para chamar no if else
    var cpfInvalido = document.getElementById("invalido");
    var cpfValido = document.getElementById("valido");

    // Compara o resultado das duas funções com o digito verificador, caso esteja correto, o display ficará visível no Html
    if (resultado == digitoVerificador) {
        cpfValido.style.display = "block";
        // Se o display "Invalido" estiver vísivel, então a condição vai torná-lo invisível novamente com o display none;
        if (cpfInvalido.style.display = "block") {
            cpfInvalido.style.display = "none";
        }
    } else {
        cpfInvalido.style.display = "block";
        // Se o display "Valido" estiver vísivel, então a condição vai torná-lo invisível novamente com o display none;
        if (cpfValido.style.display = "block") {
            cpfValido.style.display = "none";
        } else;
        return cpfInvalido;
    }
}

