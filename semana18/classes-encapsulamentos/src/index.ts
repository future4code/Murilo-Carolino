import app from "./app";

//EXERCÍCIO 1

/*
a) O construtor é um método da classe, que serve para criar, atualiazar e inicializar um objeto criado a partir de uma classe.
E através do mesmo, se tem acesso a classe, suas variáveis e métodos.
Para o caso do exemplo:

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

Podemos chamá-lo através de uma nova instancia referenciada usando new e o "nome da classe":

const newUser = new UserAccount("01234567891", "Murilo", 30)


b)
type Transaction = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

const newUser = new UserAccount("01234567891", "Murilo", 30)

// Apenas uma vez.

c) Só é possivel ter acesso dentro da própria class usando "THIS", entretanto conseguimos acéssa-las atraves de métodos públicos.
Como no caso de setters e getters. */

//EXERCÍCIO 2

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        console.log("Chamando o construtor da classe Transaction")
        this.description = description
        this.value = value
        this.date = date
    }

    public getDescription(): string {
        return this.description
    }
    public getValue(): number {
        return this.value
    }
    public getDate(): string {
        return this.date
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf(): string {
        return this.cpf
    }
    public getName(): string {
        return this.name
    }
    public getAge(): number {
        return this.age
    }
    public getBalance(): number {
        return this.balance
    }
    public getTransactions(): Transaction[] {
        return this.transactions
    }
    public setTransactions(newTransaction: Transaction): void {
        this.transactions.push(newTransaction)
    }
}

const newUser = new UserAccount(
    "01234567891",
    "Murilo",
    30
)
const newTransaction = new Transaction(
    "Pagar boleto",
    50,
    "06/12/2021"
)

newUser.setTransactions(newTransaction)
console.log(newUser.getTransactions())

//EXERCÍCIO 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }
    public getAccounts(): UserAccount[]{
        return this.accounts
    }
}

