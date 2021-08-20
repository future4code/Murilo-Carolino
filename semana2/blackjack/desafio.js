/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo(a) ao jogo de Blackjack!')    
const carta1Usuario = comprarCarta()
const carta2Usuario = comprarCarta()
const carta1Computador = comprarCarta()
const carta2Computador = comprarCarta()
    
if(confirm("Quer iniciar uma nova rodada?")) {
   let cartasUsuario = [carta1Usuario, carta2Usuario]
   let cartasComputador = [carta1Computador, carta2Computador]

   if ((cartasUsuario[0].valor === cartasUsuario[1].valor) === 11) {
      console.log(`Você tirou dois ases (A) em suas primeiras cartas: ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}, será necessário sortear novamente duas cartas iniciais!`)
   } else {
   let somaCartasUsuario = (cartasUsuario[0].valor + cartasUsuario[1].valor)
   let somaCartasComputador = (cartasComputador[0].valor + cartasComputador[1].valor)
   let textoCartasUsuario = `${cartasUsuario[0].texto} ${cartasUsuario[1].texto}`
   let textoCartasComputador = `${cartasComputador[0].texto} ${cartasComputador[1].texto}`

   

   console.log(`Usuário - cartas: ${textoCartasUsuario} - pontuação ${somaCartasUsuario}`)
   console.log(`Computador - cartas: ${textoCartasComputador} - pontuação ${somaCartasComputador}`)
   if (somaCartasUsuario > somaCartasComputador) {
      console.log('O usuário ganhou!')
   } else if (somaCartasComputador > somaCartasUsuario) {
      console.log('O computador ganhou!')
   } else {
      console.log('Empate!')
   }
} 
} else {
   console.log('O jogo acabou!')}