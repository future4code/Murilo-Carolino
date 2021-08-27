# Exercícios de Fixação de Javascript - Treino 2 🏋🏽‍♀️

### Enunciado
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.
[Link para teste do Treino 2](http://alluring-impulse.surge.sh/)

### Resolução:

```javascript
function calculaPrecoTotal(quantidade) {
  let maca = 1.30
  let macaDuzia = 1.00
  let custo
  
  if (quantidade < 12) {
    custo = maca * quantidade
  } else {
    custo = macaDuzia * quantidade
  }
  return custo
}
```
