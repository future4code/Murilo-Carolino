# Exercícios de Fixação de Javascript - Treino 3 🏋🏽‍♀️


### Enunciado
Você foi contratado/a para fazer o sistema de cálculo de notas de uma escola. Crie uma função que receba 3 parâmetros: nota da primeira prova (`p1`), nota da segunda prova (`p2`) e nota dos exercícios (`ex`).

Seus sistema deve calcular a média ponderada desses três valores, onde os exercícios tem peso 1, a primeira prova tem peso 2 e a segunda prova tem peso 3.

Ao final, você deve retornar um conceito (A, B, C, D):

Se a média for maior ou igual a 9, retorne o conceito A
Se a média for menor que nove e maior ou igual a 7.5, retorne B
Se a média for menor que 7.5 e maior ou igual a 6, retorne C
Se a média for menor que 6, retorne D
[Link para teste do Treino 3](http://assorted-bean.surge.sh/)

### Resolução:

```javascript
function calculaNota(ex, p1, p2) {
  let mediaPonderada = ((ex*1)+(p1*2)+(p2*3))/(1+2+3)
  
  if (mediaPonderada >= 9) {
    return 'A'
  } else if (mediaPonderada < 9 && mediaPonderada >= 7.5) {
    return 'B'
  } else if (mediaPonderada < 7.5 && mediaPonderada >= 6) {
    return 'C'
  } else if (mediaPonderada < 6) {
    return 'D'
  }
}
```