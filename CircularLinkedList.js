import { LinkedList, LinkedListNode } from "./LinkedList.js";


class CircularLinkedList extends LinkedList{
    constructor(){
        super()
        //this.tail.next = this.head;
    }



    insert (value, index = 0) {
        if ( index < 0 || index > this.size() ) return false;

        const newNode = new LinkedListNode(value);
        let current = this.head;
        if (index === 0) {
            if (!this.head) { // empty list
                // In this case, the last element of the list is the node we created 
                //  that will point to itself, because it is also the head.
                this.head = newNode;
                this.tail = newNode;
                newNode.next = this.head;// link the last node to the head
            } else {
                newNode.next = current;
                //this.tail = this.getElementAt(this.size() - 1);
                this.tail.next = newNode;
                this.head = newNode;
            }
        } else {
            const previous = this.getElementAt(index - 1);
            newNode.next = previous.next;
            previous.next = newNode;
            if (index === this.size()) this.tail = newNode; //if insert tail >> update tail
        }
        this.count++;
        return true;
    }


    // Removing elements from any position
    removeAt (index) {
        if (index  < 0 || index >= this.size() || this.size() === 0) return undefined;
        let current = this.head;
        if (index === 0) {
            if (this.size() === 1) {
                this.head = undefined;
                this.tail = undefined;
                this.count = 0;
            } else {
                this.head = current.next; // skip current head
                this.tail.next = this.head;// update new circular
            }
        } else {
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            previous.next = current.next;  // skip current
            if ( index === this.size() - 1 ) this.tail = previous; // update tail
        }
        this.count--;
        return current.value;
    }


    // toArray
    toArray () {
        const arr = []
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            arr.push(current); 
            current = current.next;
        }
        return arr;
    }

    /*
    toString (callback) {
        return this.toArray().map(node => node.toString(callback)).join(', ');
    }


    // print
    prinList () {
        console.log( this.toArray().join(', ') );
    }
    */
}

class CircularDoublyLinkedList extends LinkedList {
    constructor(){
        super();
        //this.tail.next = this.head;
    }
}


const myCircularLList = new CircularLinkedList();

console.log('*******************************************');
console.log('CircularLinkedList Testing');

let res = myCircularLList.insert(10);
myCircularLList.insert(12);
myCircularLList.insert(15);
myCircularLList.insert(1);
myCircularLList.insert(2);
myCircularLList.insert(3);
myCircularLList.insert(2);
myCircularLList.insert(5);

console.log('Origin Circular Linked List:')
myCircularLList.prinList();


let val = 77;
let idx = 10;
res = myCircularLList.insert(val, idx);

//console.log(`myCircularLList.size(): ${myCircularLList.size()}`)
console.log(`insert ${val} into position ${idx}, return: ${res}`);
myCircularLList.prinList();

val = 88;
idx = 8;
res = myCircularLList.insert(val, idx);

//console.log(`myCircularLList.size(): ${myCircularLList.size()}`)
console.log(`insert ${val} into position ${idx}, return: ${res}`);
myCircularLList.prinList();



















