const resultado = document.querySelector("#resultado");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso")

const calcIMC = () => {
    //calculando IMC 
    if (altura.value != '' && peso.value != ''){
        let imc = (peso.value/ (altura.value * altura.value)).toFixed(2)
        let classification = ''
        if (imc < 18.5){
            classification = 'Abaixo do peso';
        }else if (imc < 24.9){
            classification = 'Peso normal'
        }else if (imc < 29.9){
            classification = 'Acima do peso'
        }else if (imc < 35.9){
            classification = 'Obesidade Grau I '
        }else if (imc < 39.9){
            classification = 'Obesidade Grau II'
        }else if (imc > 40){
            classification = 'Obesidade Grau III'
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})`
    }else{
        resultado.innerHTML = 'Preencha os campos'
    }
}