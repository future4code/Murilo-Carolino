class Queue {

    constructor (
        public items: any[] = [],
        public length: number = 0
    ) {}

    public isEmpty(): boolean {
        return this.items.length === 0
    }

    public enqueue(value: any): void {
        this.items[this.items.length] = value
        this.length++
    }

    public dequeue(): any {
        const firstItem = this.items[0]

        for (let i = 0; i < this.items.length; i++) {
            this.items[i] = this.items[i+1]
        }

        this.items.length--
        this.length--

        return firstItem
    }

    public printArray() {
        
        for (let i = 0; i < this.items.length; i++) {
            console.log(`Elemento ${i+1}: `, this.items[i])
        }
    }
}

const myQueue = new Queue()

console.log("Is the queue empty?", myQueue.isEmpty())

myQueue.enqueue(2)
myQueue.enqueue(5)
myQueue.enqueue(7)

console.log(myQueue)

const removedItem = myQueue.dequeue()

console.log(removedItem)
console.log(myQueue)

myQueue.printArray()
