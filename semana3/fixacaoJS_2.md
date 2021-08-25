```
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
