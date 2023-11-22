import { LinkedList, LinkedListNode } from "./LinkedList.js";

class DoublyLinkedListNode extends LinkedListNode {
    constructor(value, next, prev) {
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
            alert('new tail')
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
            if (this.count === 1) {  // only 1 item in list, count == 1; !this.head.next
                this.tail = undefined;
            } else {
                this.head.prev = undefined;
            }
        } else if (index === this.count - 1) { // delete tail
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = undefined;
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
console.log("myDLList.tail()", myDLList.tail);
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


idx = 7;
res = myDLList.removeAt(idx);
console.log(`remove at ${idx}, result = ${res}`);
console.log(myDLList.toString());



console.log('');
console.log('************ StackLinkedList Test *****************')
/**
 * The reason for using the doubly
linked list instead of the linked list is that for the stack, we will be inserting
elements at the end of the list ({2}) and also removing elements from the end of
the list ({3}). Our DoublyLinkedList class keeps a reference of the last element of the
list (tail), so it does not need to iterate throughout all the list elements to access
it; it has direct access to the first and last elements, decreasing the processing
effort, and keeping the cost at O(1), which is our original Stack implementation
 */

class StackLinkedList {
    #items;
    constructor () {
        this.#items = new DoublyLinkedList();
    }

    getTail () {
        return this.#items.tail;
    }

    isEmpty () {
        return this.#items.isEmpty();
    }

    size () {
        return this.#items.size();
    }

    clear ()  {
        return this.#items.clear();
    }

    toString () {
        return this.#items.toString();
    }
    
    push (value) {
        this.#items.insert(value); // must use insert of DoublyLList class
    }

    pop () {
        if (this.isEmpty()) return undefined;
        console.log("this.size()", this.size());
        return this.#items.removeAt(this.size() - 1);
    }

    peek () {
        if (this.isEmpty()) return undefined;
        return this.getElementAt(this.size() - 1).value;
    }

}


const mySLList = new StackLinkedList();
console.log("mySLList.push(17)", mySLList.push(17));
console.log("mySLList.getTail()", mySLList.getTail());
console.log("mySLList.push(3)", mySLList.push(3));
console.log("mySLList.getTail()", mySLList.getTail());
console.log("mySLList.push(22)", mySLList.push(22));
console.log("mySLList.push(77)", mySLList.push(77));
console.log("mySLList.push(88)", mySLList.push(88));
console.log("mySLList.isEmpty()", mySLList.isEmpty());
console.log("mySLList.toString()", mySLList.toString());
console.log("mySLList.pop()", mySLList.pop());
console.log("mySLList.getTail()", mySLList.getTail());


