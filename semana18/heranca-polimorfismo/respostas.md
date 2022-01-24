# HERANÇA

## EXERCÍCIO 1

a. Da forma como a classe está criada não, mas caso editarmos essa classe e colocarmos um método getPassword conseguiremos imprimir o password também.

b. Apenas uma vez.

## EXERCÍCIO 2

a. Apenas uma vez.

b. Apenas uma vez também, pois só foi passado uma instancia para que ser adicionada a classe User.

## EXERCÍCIO 3

a. Não, pois o método para pegar a senha e imprimir não foi criada na classe User, mas caso seja criada, a instancia newCustomer poderia acessar sua senha.

# POLIMORFISMO

## EXERCÍCIO 1

a. Todas as propriedades foram possíveis imprimir pois não são privadas, entretanto a função calclateBill não apresenta o valor retornado, apenas uma mensagem "[Function: calculateBill]"

## EXERCÍCIO 2

a. Cannot create an instance of an abstract class

b. Criar uma nova classe que não seja abstract, para que se possa fazer a herança com a classe Place e assim criar uma instância referenciando a essa nova classe.

## EXERCÍCIO 3

a. Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

b. Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

c. Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

## EXERCÍCIO 4

a. Possui todos os atributos e metodos herdados da classe Residence e tambemm de Place, e da interface Client.

## EXERCÍCIO 5

a. Herda todos os métodos e atributos da classe Commerce e Place, assim como a interface Client.

b. A diferença é que cada classe tem um atributo original privado, como no caso CPF e CNPJ.

## EXERCÍCIO 6

a. Ela é filha da classe Industry, porque precisa herdar todos os atributos dela.

b. Ela implementa o Client, pois é uma interface própria para pegar todas os atributos da industria.

c. Pois os dados fornecidos atraves da interface client, e da classe Industry são valores qu enão precisam ser mutáveis.