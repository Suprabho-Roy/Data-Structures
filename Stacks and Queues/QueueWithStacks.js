class Queue{
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(value){
        while(this.s1.length != 0){
            this.s2.push(this.s1.pop());
        }

        this.s1.push(value);

        while(this.s2.length != 0){
            this.s1.push(this.s2.pop());
        }
    }

    dequeue(){
        if(this.s1.length === 0){
            console.log('Queue is Empty');
        }

        let x = this.s1[this.s1.length - 1];
        this.s1.pop();
        console.log(x);
    }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();