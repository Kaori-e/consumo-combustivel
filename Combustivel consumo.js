// Programa para calcular o valor de uma viagem de carro

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm/kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto);



