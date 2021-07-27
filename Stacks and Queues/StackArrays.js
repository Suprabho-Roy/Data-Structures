

class Stack {
    constructor(){
        this.array = [];
    }

    peek(){
        console.log(this.array[this.array.length-1]);
    }

    push(value){
        this.array.push(value);
        console.log(this);
    }

    pop(){
        this.array.pop();
        console.log(this);
    }
}

const myStack = new Stack;

myStack.push(23);
myStack.push(4);
myStack.push(43);
myStack.pop();
myStack.peek();