/*function formataCPF(cpf){
                var semFormatacao = cpf.value;
                var formatado =  cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");

                cpf.value = formatado;
            } */

            var cpf = window.prompt("Digite o CPF: ");
            alert(cpf.substring(0,9));
            alert(cpf.substring(9,11));
            alert(calculaDV1(cpf.substring(0,9)));
            alert(calculaDV2(cpf.substring(0,10)));
            
        
            // Calcula o primeiro dígito depois do traço
            // XXX.XXX.XXX-1X
            function calculaDV1 (noveDigitos){
                var soma=0, valor=10;
                for(i=0;i<9;i++){
                    soma += noveDigitos.charAt(i)*valor;
                    valor--;
                }
                resto = soma % 11;
                if(resto<2){
                    return 0;
                }
                else {
                    return (11-resto);
                }
            }

            // Calcula o segundo digito depois do traço
            // XXX.XXX.XXX-10
            function calculaDV2 (dezDigitos){
                var soma=0, valor=11;
                for(i=0;i<10;i++){
                    soma += dezDigitos.charAt(i)*valor;
                    valor--;
                }
                resto = soma % 11;
                if(resto<2){
                    return 0;
                }
                else {
                    return (11-resto);
                }
            }

            var resultado = calculaDV1(cpf.substring(0,9)).toString() + calculaDV2(cpf.substring(0,10)).toString();
            alert("O resultado é: "+ resultado);
            
            function validarCPF(){
                if (resultado == cpf.substring(9,11)) {
                    return alert("CPF válido");
                } else {
                    return alert("CPF inválido");
                }
            }

            alert(validarCPF());