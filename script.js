function calcular(operacao) {
            const n1 = Number(document.getElementById('num1').value);
            const n2 = Number(document.getElementById('num2').value);
            const display = document.getElementById('resultado');

            // Criamos um objeto que mapeia a string da operação para o cálculo
            // Isso substitui o uso de "if" ou "switch"
            const operacoes = {
                'soma': n1 + n2,
                'sub': n1 - n2,
                'multi': n1 * n2,
                'div': n1 / n2
            };

            const resultadoFinal = operacoes[operacao];
            display.innerText = "O resultado é: " + resultadoFinal;
        }
