// FATORIAL
// função de fatorial: n! = n x (n-1)!
// function fatorial(n: number): number {
//   if (n <= 0) {
//     return 1
//   }
//   const calculo = n * fatorial(n-1)
//   console.log(`n = ${n}, valor = `, calculo)
//   return calculo
// }
// console.log(fatorial(3)) // resultado final é 120
// FIBONACCI
// função de fibonacci: f(n) = f(n-1) + f(n-2)
// function fibonacci(n: number): number {
//   if (n <= 2) {
//     return 1
//   }
//   return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(4))
// // IMPRIMIR CARACTER RECURSIVO
function imprimirCaracterRecursivo(texto, index) {
    if (!index) {
        index = 0;
    }
    if (index < texto.length) {
        console.log(texto[index]);
        imprimirCaracterRecursivo(texto, index + 1);
    }
}
imprimirCaracterRecursivo("ba.na.ni.nha");
// IMPRIMIR CARACTER ITERATIVO
// function imprimirCaracterIterativo(texto: string) {
//   for (let i = 0; i < texto.length; i++) {
//     console.log(texto[i])
//   }
//   for (let letra of texto) {
//     console.log(letra)
//   }
// }
// imprimirCaracterIterativo("Labenu")
