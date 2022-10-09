// Programa para calcular o valor de uma viagem de carro

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const combustivelTipo = 'Etanol';
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm/kmPorLitro;

if(combustivelTipo === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto);
} else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto);
}



