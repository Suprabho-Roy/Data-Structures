class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return;
                    }
                    currentNode = currentNode.left;
                } else{
                    //right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){

    }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree);








// JSON.stringify(traverse(tree.root));


// function traverse(node){
//     const tree = { value: node.value};
//     tree.left = node.left === null ? null :
//     traverse(node.left);
//     tree.right = node.right === null ? null :
//     traverse(node.right);

//     console.log(tree);
// }