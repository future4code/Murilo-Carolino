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

    
let carta1Usuario = comprarCarta()
let carta2Usuario = comprarCarta()
let carta1Computador = comprarCarta()
let carta2Computador = comprarCarta()
let cartasUsuario = [carta1Usuario, carta2Usuario]
let cartasComputador = [carta1Computador, carta2Computador]

if(confirm("Bem vindo(a) ao jogo de Blackjack!"+ "\n" + "Quer iniciar uma nova rodada?")) {
   
// lembrar de aplicar while para que enquanto vir ases repetido continuar o processo.
   if ((cartasUsuario[0].valor === 11) && (cartasUsuario[1].valor === 11)) {
      console.log(`Você tirou dois ases (A) em suas primeiras cartas: ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}, será necessário sortear novamente duas cartas iniciais!`)
      carta1Usuario = comprarCarta()
      carta2Usuario = comprarCarta()
      cartasUsuario = [carta1Usuario, carta2Usuario]
      
   } else if ((cartasComputador[0].valor === 11) && (cartasComputador[1].valor === 11)) {
      console.log(`O computador tirou dois ases (A) em suas primeiras cartas: ${cartasComputador[0].texto} e ${cartasComputador[1].texto}, será necessário sortear novamente duas cartas iniciais!`)
      carta1Computador = comprarCarta()
      carta2Computador = comprarCarta()
      cartasComputador = [carta1Computador, carta2Computador]

   } else {
   let somaCartasUsuario = (cartasUsuario[0].valor + cartasUsuario[1].valor)
   let somaCartasComputador = (cartasComputador[0].valor + cartasComputador[1].valor)
   let textoCartasUsuario = `${cartasUsuario[0].texto} ${cartasUsuario[1].texto}`
   let textoCartasComputador = `${cartasComputador[0].texto} ${cartasComputador[1].texto}`
   let textoCartaInicialComputador = `${cartasComputador[0].texto}`

   while (confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${textoCartaInicialComputador}.` + "\n"  + 'Deseja comprar mais uma carta?')) {
      
      cartasUsuario.push(comprarCarta())
      somaCartasUsuario = (somaCartasUsuario + cartasUsuario[2].valor)
      textoCartasUsuario = textoCartasUsuario + `${cartasUsuario[2].texto}`
      if (somaCartasUsuario < 21 || somaCartasUsuario === 21) {
         if (confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${textoCartaInicialComputador}.` + '\n' +
         "Deseja comprar mais uma carta?")) {
            cartasUsuario.push(comprarCarta())
            somaCartasUsuario = (somaCartasUsuario + cartasUsuario[3].valor)
            textoCartasUsuario = textoCartasUsuario + `${cartasUsuario[3].texto}`
            if (somaCartasUsuario > 21) {
               alert(
                  `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                  `As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaCartasComputador}.`+ "\n" +
                  "O computador ganhou!"
                  )
            } else  {
               if (confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${textoCartaInicialComputador}.` + '\n' +
            "Deseja comprar mais uma carta?")) {
               cartasUsuario.push(comprarCarta())
               somaCartasUsuario = (somaCartasUsuario + cartasUsuario[4].valor)
               textoCartasUsuario = textoCartasUsuario + `${cartasUsuario[4].texto}`
               if (somaCartasUsuario > 21) {
                  alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaCartasComputador}.`+ "\n" +
                     "O computador ganhou!"
                     )}
               } else {
                  (confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${textoCartaInicialComputador}.` + '\n' +
               "Deseja comprar mais uma carta?")) 
                  cartasUsuario.push(comprarCarta())
                  somaCartasUsuario = (somaCartasUsuario + cartasUsuario[5].valor)
                  textoCartasUsuario = textoCartasUsuario + `${cartasUsuario[5].texto}`
               }
               if (somaCartasComputador < somaCartasUsuario) {
                  cartasComputador.push(comprarCarta())
                  console.log(somaCartasComputador)
                  somaCartasComputador = (somaCartasComputador + cartasComputador[2].valor)
                  console.log(somaCartasComputador)
                  textoCartasComputador = textoCartasComputador + `${cartasComputador[2].texto}`
                  if (somaCartasComputador === somaCartasUsuario) {
                     alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                     "O jogo empatou!")
                  } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
                     alert(
                        `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                        `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                        "O computador ganhou!")
                  } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
                     alert(
                        `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                        `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                        "O usuário ganhou!")
                  } else {
                     cartasComputador.push(comprarCarta())
                     somaCartasComputador = (somaCartasComputador + cartasComputador[3].valor)
                     textoCartasComputador = textoCartasComputador + `${cartasComputador[3].texto}`
                     if (somaCartasComputador === somaCartasUsuario) {
                        alert(
                        `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                        `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                        "O jogo empatou!")
                     } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
                        alert(
                           `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                           `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                           "O computador ganhou!")
                     } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
                        alert(
                           `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                           `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                           "O usuário ganhou!")
                     } else {
                     cartasComputador.push(comprarCarta())
                     somaCartasComputador = (somaCartasComputador + cartasComputador[4].valor)
                     textoCartasComputador = textoCartasComputador + `${cartasComputador[4].texto}`
                     if (somaCartasComputador === somaCartasUsuario) {
                        alert(
                        `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                        `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                        "O jogo empatou!")
                     } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
                        alert(
                           `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                           `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                           "O computador ganhou!")
                     } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
                        alert(
                           `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                           `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                           "O usuário ganhou!")
                     } 
               }
               }

            } 
            if (somaCartasComputador < somaCartasUsuario) {
               cartasComputador.push(comprarCarta())
               console.log(somaCartasComputador)
               somaCartasComputador = (somaCartasComputador + cartasComputador[2].valor)
               console.log(somaCartasComputador)
               textoCartasComputador = textoCartasComputador + `${cartasComputador[2].texto}`
               if (somaCartasComputador === somaCartasUsuario) {
                  alert(
                  `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                  `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                  "O jogo empatou!")
               } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
                  alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                     "O computador ganhou!")
               } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
                  alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                     "O usuário ganhou!")
               } else {
                  cartasComputador.push(comprarCarta())
                  somaCartasComputador = (somaCartasComputador + cartasComputador[3].valor)
                  textoCartasComputador = textoCartasComputador + `${cartasComputador[3].texto}`
                  if (somaCartasComputador === somaCartasUsuario) {
                     alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                     "O jogo empatou!")
                  } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
                     alert(
                        `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                        `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                        "O computador ganhou!")
                  } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
                     alert(
                        `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                        `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                        "O usuário ganhou!")
                  } else {
                  cartasComputador.push(comprarCarta())
                  somaCartasComputador = (somaCartasComputador + cartasComputador[4].valor)
                  textoCartasComputador = textoCartasComputador + `${cartasComputador[4].texto}`
                  if (somaCartasComputador === somaCartasUsuario) {
                     alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                     "O jogo empatou!")
                  } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
                     alert(
                        `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                        `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                        "O computador ganhou!")
                  } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
                     alert(
                        `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                        `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                        "O usuário ganhou!")
                  } 
            }
            }
         
         }
         if (somaCartasComputador < somaCartasUsuario) {
            cartasComputador.push(comprarCarta())
            console.log(somaCartasComputador)
            somaCartasComputador = (somaCartasComputador + cartasComputador[2].valor)
            console.log(somaCartasComputador)
            textoCartasComputador = textoCartasComputador + `${cartasComputador[2].texto}`
            if (somaCartasComputador === somaCartasUsuario) {
               alert(
               `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
               `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
               "O jogo empatou!")
            } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
               alert(
                  `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                  `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                  "O computador ganhou!")
            } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
               alert(
                  `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                  `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                  "O usuário ganhou!")
            } else {
               cartasComputador.push(comprarCarta())
               somaCartasComputador = (somaCartasComputador + cartasComputador[3].valor)
               textoCartasComputador = textoCartasComputador + `${cartasComputador[3].texto}`
               if (somaCartasComputador === somaCartasUsuario) {
                  alert(
                  `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                  `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                  "O jogo empatou!")
               } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
                  alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                     "O computador ganhou!")
               } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
                  alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                     "O usuário ganhou!")
               } else {
               cartasComputador.push(comprarCarta())
               somaCartasComputador = (somaCartasComputador + cartasComputador[4].valor)
               textoCartasComputador = textoCartasComputador + `${cartasComputador[4].texto}`
               if (somaCartasComputador === somaCartasUsuario) {
                  alert(
                  `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                  `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                  "O jogo empatou!")
               } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
                  alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                     "O computador ganhou!")
               } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
                  alert(
                     `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
                     `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
                     "O usuário ganhou!")
               } 
         }
         }
         
      } else if (somaCartasUsuario > 21) {
         alert(
            `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
            `As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaCartasComputador}.`+ "\n" +
            "O computador ganhou!"
            )
      }     
   }
   if (somaCartasComputador < somaCartasUsuario) {
      cartasComputador.push(comprarCarta())
      console.log(somaCartasComputador)
      somaCartasComputador = (somaCartasComputador + cartasComputador[2].valor)
      console.log(somaCartasComputador)
      textoCartasComputador = textoCartasComputador + `${cartasComputador[2].texto}`
      if (somaCartasComputador === somaCartasUsuario) {
         alert(
         `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
         `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
         "O jogo empatou!")
      } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
         alert(
            `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
            `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
            "O computador ganhou!")
      } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
         alert(
            `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
            `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
            "O usuário ganhou!")
      } else {
         cartasComputador.push(comprarCarta())
         somaCartasComputador = (somaCartasComputador + cartasComputador[3].valor)
         textoCartasComputador = textoCartasComputador + `${cartasComputador[3].texto}`
         if (somaCartasComputador === somaCartasUsuario) {
            alert(
            `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
            `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
            "O jogo empatou!")
         } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
            alert(
               `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
               `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
               "O computador ganhou!")
         } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
            alert(
               `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
               `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
               "O usuário ganhou!")
         } else {
         cartasComputador.push(comprarCarta())
         somaCartasComputador = (somaCartasComputador + cartasComputador[4].valor)
         textoCartasComputador = textoCartasComputador + `${cartasComputador[4].texto}`
         if (somaCartasComputador === somaCartasUsuario) {
            alert(
            `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
            `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
            "O jogo empatou!")
         } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
            alert(
               `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
               `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
               "O computador ganhou!")
         } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
            alert(
               `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
               `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
               "O usuário ganhou!")
         } 
   }
   }

   } else if (somaCartasComputador > somaCartasUsuario) {
      alert(
         `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
               `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
               "O computador ganhou!")

}}

} else {
   alert(
      `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
      `As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaCartasComputador}.`+ "\n" +
      "O computador ganhou!"
      )
}}  
if (somaCartasComputador < somaCartasUsuario) {
   cartasComputador.push(comprarCarta())
   console.log(somaCartasComputador)
   somaCartasComputador = (somaCartasComputador + cartasComputador[2].valor)
   console.log(somaCartasComputador)
   textoCartasComputador = textoCartasComputador + `${cartasComputador[2].texto}`
   if (somaCartasComputador === somaCartasUsuario) {
      alert(
      `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
      `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
      "O jogo empatou!")
   } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
      alert(
         `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
         `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
         "O computador ganhou!")
   } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
      alert(
         `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
         `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
         "O usuário ganhou!")
   } else {
      cartasComputador.push(comprarCarta())
      somaCartasComputador = (somaCartasComputador + cartasComputador[3].valor)
      textoCartasComputador = textoCartasComputador + `${cartasComputador[3].texto}`
      if (somaCartasComputador === somaCartasUsuario) {
         alert(
         `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
         `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
         "O jogo empatou!")
      } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
         alert(
            `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
            `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
            "O computador ganhou!")
      } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
         alert(
            `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
            `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
            "O usuário ganhou!")
      } else {
      cartasComputador.push(comprarCarta())
      somaCartasComputador = (somaCartasComputador + cartasComputador[4].valor)
      textoCartasComputador = textoCartasComputador + `${cartasComputador[4].texto}`
      if (somaCartasComputador === somaCartasUsuario) {
         alert(
         `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
         `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
         "O jogo empatou!")
      } else if ((somaCartasComputador > somaCartasUsuario) && (somaCartasComputador < 22)) {
         alert(
            `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
            `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
            "O computador ganhou!")
      } else if ((somaCartasComputador > 21) || (somaCartasUsuario > somaCartasComputador)) {
         alert(
            `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaCartasUsuario}` +".\n" +
            `As cartas do computador são ${textoCartasComputador} . A pontuação do computador é ${somaCartasComputador}.` +"\n" +
            "O usuário ganhou!")
      } 
}
}
}}} else {
   console.log('O jogo acabou!') }