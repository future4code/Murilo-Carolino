# ~~~ Exercícios de Fixação de Javascript - Treino 1 ~~~

### Enunciado
Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

Crie uma função que leia o número de carros vendidos por uma pessoa (qtdeCarrosVendidos, um número inteiro) e o valor total de suas vendas do mês (valorTotalVendas, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).

Retorne o salário final do mês do funcionário com base nesses valores.
[Link para teste do Treino 1](http://momentous-group.surge.sh/)

### Resolução:

``` function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salarioFixo = 2000
  let bonusPorCarro = 100
  let calculaSalario = (salarioFixo)+(bonusPorCarro*qtdeCarrosVendidos)+(0.05*valorTotalVendas)
  return calculaSalario
} ```