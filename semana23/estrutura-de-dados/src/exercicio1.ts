export class NodeItem {

    constructor (
        public value: any,
        public next: NodeItem | null = null
    ) {}
}

export class LinkedList {

    constructor (
        public head: NodeItem | null = null
    ) {}

    public add(value: any): void {
        if (!this.head) {
            this.head = new NodeItem(value)
            return
        }

        let currentNode = this.head
        
        while (currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = new NodeItem(value)
    }

    public printList(): void {
        let node: NodeItem | null = this.head
        let i = 1

        while (node !== null) {
            console.log(`Elemento ${i}: `, node!.value)
            node = node!.next
            i++
        }

    }
}

const myArray = new LinkedList()

myArray.add(1)
console.log(myArray)
myArray.add(5)
console.log(myArray)
myArray.add(10)
console.log(JSON.stringify(myArray))

myArray.printList()
