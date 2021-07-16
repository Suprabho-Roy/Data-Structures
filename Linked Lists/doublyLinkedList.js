class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        };

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode != null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(array);
    }

    insert(index, value){
        if(index >= this.length){
            this.append(value);
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        };

        const leader = this.traverseToIndex(index-1);

        const follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;
        follower.prev = newNode;

        newNode.next = follower;

        this.length++;

    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove(index){
        const leader = this.traverseToIndex(index-1);
        let nodeToDelete = leader.next;
        const nextNode = nodeToDelete.next;
        nextNode.prev = leader;
        leader.next = nextNode;

        this.length--;
    }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);





myLinkedList.printList();

myLinkedList.insert(2, 99);

myLinkedList.printList();

myLinkedList.remove(3);

myLinkedList.printList();