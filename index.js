//Sim Mago, as notas é pra você.





//(1) Crie um programa que possua duas variáveis com os valores 199,3 e 120 e realize a soma de ambas.

let x = 199.3;
let y = 120;

z = x+y;

console.log(z); //<- Aqui eu tive uma leve dor de cabela pra entender que "" interpreta string.

//(2) Crie um vetor contendo 10 números e faça a média de todos os valores.

let numeros = [1,2,3,4,5,6,7,8,9,10]
let somaDosNumeros = 0;
for (var i = 0; i<numeros.length;i++){
    somaDosNumeros+=numeros[i];
}

//resultado = (somaDosNumeros/10);
//console.log(resultado); //Essa parte do código foi montado em cima do conhecimento de quantos números tem no array

resultado = somaDosNumeros/numeros.length;
console.log(resultado); //<-- Esse trecho eu tive que pesquisar, isso é como seria se eu não soubesse quantos numeros tem no array, mesmo assim não sei se está montado certo

//(3)Pegue os mesmos 10 números do exercício anterior e mostre no console apenas os números primos.












