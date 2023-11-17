import { LinkedList, LinkedListNode } from "./LinkedList.js";

class DoublyLinkedListNode extends LinkedListNode {
    constructor(value, next, prev = null) {
        super(value, next);
        this.prev = prev;
    }
}


class DoublyLinkedList extends LinkedList  {
    constructor(){
        super();
        this.tail = undefined;
    }


    insert (value, index = 0) {
        if (index < 0 || index > this.count) return false;
    
        const node = new DoublyLinkedListNode(value);
        let current = this.head;
        if (index === 0) {
            if (!this.head) {   // NEW 
                this.head = node;
                this.tail = node;
            } else {            // New head
                node.next = current;
                current.prev = node;
                this.head = node;
            }
        } else if (index === this.count) {  // NEW tail
            current = this.tail;
            this.tail = node;
            current.next = node;
            node.prev = current;
        } else { // insert node into between previous and current node
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            previous.next = node;
            node.prev = previous;
            node.next = current;
        }
        
        this.count++;
        return true;
    }
    

    removeAt (index) {
        if (index < 0 || index >= this.count || this.count === 0) return false;
        let current = this.head;
        if (index === 0) {  // delete head
            this.head = current.next;
            if (!this.head.next) {  // only 1 item in list, count == 0
                this.tail = undefined;
            } else {
                this.head.prev = undefined;
            }
        } else if (index === this.count - 1) { // delete tail
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            current = this.getElementAt(index);
            // Error can not setting property next ???? cause append
            const previous = current.prev;    // previous == undefined
            //const previous = this.getElementAt(index - 1);
            // link previous with current's next - skip it to remove
            //console.log(typeof previous);
            previous.next = current.next;
            current.next.prev = previous;
        }
        this.count--;
        return current.value;
    }


}




console.log('*******************************************');
console.log('DoublyLinkedList');

const myDLList = new DoublyLinkedList();

//myDLList.append(9); // use apppend of LinkedList will be no have PREV property
myDLList.insert(10);
myDLList.insert(14);
myDLList.insert(19);
myDLList.insert(92);
myDLList.insert(89);
myDLList.insert(19);
myDLList.insert(90);

console.log('My DoublyLinkedList');
console.log(myDLList.toString());

let val = 88
let idx = 5
let res = myDLList.insert(val, idx);
console.log(`insert ${val} at ${idx}, result = ${res}`);
console.log(myDLList.toString());


idx = 1;
res = myDLList.removeAt(idx);
console.log(`remove at ${idx}, result = ${res}`);
console.log(myDLList.toString());








