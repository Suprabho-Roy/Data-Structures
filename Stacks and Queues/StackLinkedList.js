class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        console.log(this.top);
    }

    push(value){
        const newNode = new Node(value);

        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
        console.log(this);
    }

    pop(){
        if(!this.top){
            console.log(null);
        }

        if(this.top === this.bottom){
            this.bottom = null;
        }

        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
    }
}

const myStack = new Stack;

myStack.push(23);
myStack.push(4);
myStack.push(43);
myStack.pop();
myStack.peek();