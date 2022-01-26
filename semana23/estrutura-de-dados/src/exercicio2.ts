import { LinkedList, NodeItem } from "./exercicio1"

class Stack {

    constructor (
        public list: LinkedList = new LinkedList()
    ) {}

    public isEmpty(): boolean {
        return this.list.head === null
    }

    public push(value: any): void {
        this.list.add(value)
    }

    public pop(): any {

        if (!this.isEmpty) {
            return null
        }

        let previousNode: NodeItem | null = null
        let currentNode: NodeItem | null = this.list.head

        while (currentNode!.next) {
            previousNode = currentNode
            currentNode = currentNode!.next
        }

        previousNode!.next = null

        return currentNode
    }

    public printList(): void {
        let node: NodeItem | null = this.list.head
        let i = 1

        while (node !== null) {
            console.log(`Elemento ${i}: `, node!.value)
            node = node!.next
            i++
        }

    }
    
}


const myStack = new Stack()

console.log("Is the list empty?", myStack.isEmpty())

myStack.push(30)
myStack.push(60)
myStack.push(90)

console.log(JSON.stringify(myStack))

const lastItem = myStack.pop()

console.log(lastItem)
console.log(JSON.stringify(myStack))

myStack.printList()