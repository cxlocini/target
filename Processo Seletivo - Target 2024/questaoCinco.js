function inverterString(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        array[i] = str[i];
    }
    
    let inicio = 0;
    let fim = array.length - 1;
    while (inicio < fim) {
        let temp = array[inicio];
        array[inicio] = array[fim];
        array[fim] = temp;
        
        inicio++;
        fim--;
    }
    
    let resultado = '';
    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
    }
    
    return resultado;
}

const stringOriginal = "Meu nome eh Rafaella e eu ficaria muito feliz de estagiar na Target ";
const stringInvertida = inverterString(stringOriginal);
console.log("String original: " + stringOriginal);
console.log("String invertida: " + stringInvertida);
