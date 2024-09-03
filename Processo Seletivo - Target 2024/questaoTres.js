const fs = require('fs');


function calcularFaturamento(dados) {
    
    const valores = dados
        .filter(dia => dia.valor > 0)
        .map(dia => dia.valor);

    if (valores.length === 0) return { menor: 0, maior: 0, diasAcimaMedia: 0 };


    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    
    
    const soma = valores.reduce((acc, valor) => acc + valor, 0);
    const media = soma / valores.length;

   
    const diasAcimaMedia = valores.filter(valor => valor > media).length;

    return {
        menor,
        maior,
        diasAcimaMedia
    };
}


fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    try {
        const faturamento = JSON.parse(data);
        const resultados = calcularFaturamento(faturamento);

        console.log(`Menor valor de faturamento: ${resultados.menor}`);
        console.log(`Maior valor de faturamento: ${resultados.maior}`);
        console.log(`Número de dias com faturamento acima da média: ${resultados.diasAcimaMedia}`);
    } catch (e) {
        console.error('Erro ao processar o arquivo JSON:', e);
    }
});
