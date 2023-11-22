//import { LinkedListNode, LinkedList } from "./LinkedList";
//import { LinkedList } from "./LinkedList";

//const node = new LinkedListNode(42);
// LINKED LIST
class LinkedListNode {
    constructor(value, next = undefined){
        this.value = value;
        this.next = next;
    }

    toString(callback){
        return callback ? callback(this.value) : `${this.value}`;
    }
}


class LinkedList {
    constructor () {
        this.count = 0; // stores the number of elements we have in the list
        this.head = undefined;
        this.tail = undefined;
    }

    isEmpty () {
        return this.count === 0;
    }

    size () {
        return this.count;
    }
/*
    getTail () {// ??????????
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            current = current.next;
        }
        this.tail = current;
        //return current || this.tail;
        return this.tail;
    }
*/
    // Add a Node obj to the beginning of LinkedList // shift()
    prepend(value) {
        // make a new Node for the new head
        const newNode = new LinkedListNode(value, this.head);

        // set this.head pointer to new Node
        this.head = newNode;

        // if no tail (linkedList empty), make a new node as tail
        !this.tail && (this.tail = newNode);
        
        // number of elements in the list
        this.count++;

        //return the value just was added
        return this;
    }

    // Add a Node obj to the end of LinkedList // push()
    push (value) {
        const newNode = new LinkedListNode(value);

        // number of elements in the list
        this.count++;
        
        // if LinkedList is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        let current = this.head;
        while (current.next) { // {5} get last item
            current = current.next;
        }        
        // new Node become a new tail of Linked list
        current.next = newNode;
        this.tail = newNode;

        return this;
    }


    // find a specific element value in the linked list
    indexOf (value) {
        if (!this.head) return -1;
        if (!this.head.next) {
            return this.head.value === value ? 0 : -1;
        }
        let current = this.head;
        let found = false;
        let index = 0;
        while (current.next) {
            if (current.value === value) {
                found = true;
            }
            current = current.next;
            index++;
        }

        return found ? index - 1 : -1;
    }


    // Looping through the list until we get to the desired position
    getElementAt (index) {
        if (index < 0 || index >= this.count) return undefined;
        let current = this.head;
        for (let i = 0; i < index && current != null; i++) {
            current = current.next;
        }
        return current;
    }



    // inserts a new element at a specified position in the list
    insert (value, index) {
        const newNode = new LinkedListNode(value);
        if (index < 0 || index > this.count) return false;
        let current = this.head;
        if (index === 0) {
            this.head = newNode;
            newNode.next = current;
        } else  {
            let previous = this.getElementAt(index - 1);
            current = previous.next;
            previous.next = newNode;
            newNode.next = current;
            if (index ===  this.count) this.tail = newNode;
        }
        // number of elements in the list
        this.count++;
        return true;
    }


    //find first item that matches the value
    find ({value = undefined, callback = undefined}) {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        while (current.next) {
            // If callback is specified then try to find node by callback
            if (callback && callback(current.value)) {
                return current;
            }

            // If value is specified then try to compare by value..
            if (value !== undefined && current.value === value) {
                return current;
            }

            current = current.next;
        }  

        return null;
    }


    // remove node at specified position
    removeAt (index) {
        if (index < 0 || index >= this.count) return undefined;

        let current = this.head;
        let previous = null;
        // if remove head
        if (index === 0) { 
            this.head = current.next;
            this.count--;
            return current.next.value;
        } else if (index === this.count) { // remove tail
            previous = this.getElementAt(index - 1);
            previous.next = null;
            this.tail = previous;
        }
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.next;
        }
        // link previous with current's next: skip it to remove
        previous.next = current.next;
        this.count--;
        return current.value;
    }





    // delete method finds items and removes it with the specified value
    deleteNodesByValue (value) {
        // if the list is empty, do nothing
        if (!this.head) return;

        // traverse the list and delete nodes with specified value
        
        let current = this.head;
        let previous = null;

        while (current) {
            if (current.value === value) {
                // update pointer to skip the node to be deleted
                if (previous) {
                    previous.next = current.next;
                } else {
                    // if the current (node) to be deleted is the head, update the head
                    this.head = current.next;
                }

                // if current is the tail so reset tail to previous
                if (current === this.tail) {
                    this.tail = previous;
                } 
            } else {
                // move to the next node
                previous = current;
            }

            current = current.next;
        }
        // number of elements in the list
        this.count--;
        
    }



    // unshift()
    deleteHead () {
        // empty list OR only 1 item list
        if (!this.head || !this.head.next) {
            this.head = null;
            this.tail = null;
            this.count = 0
            return;
        }

        this.head = this.head.next;
        this.count--;
    }


    // delete tail  // pop()
    deleteTail () {
        // empty list OR only 1 item list
        if (!this.head || !this.head.next) {
            this.head = null;
            this.tail = null;
            this.count = 0
            return;
        }

        // more than 1 items list
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        // Update the penultimate node's next pointer to null
        previous.next = null;
        this.count--;

    }


    


    // print
    prinList () {
        console.log( this.toArray().join(', ') );
    }
    
    // toArray
    toArray () {
        const arr = []
        let current = this.head;
        while (current) {
            //arr.push(current.value);   // Get ERROR when mapping array list
            arr.push(current); 
            current = current.next;
        }
        return arr;
    }


    /**
     * The toString method takes the LinkedList and prints out a string representation of the LinkedList.
    The method takes the LinkedList and first converts it to an array (using the toArray method
    described above). Then the map array method is called to process each LinkedListNode in the list. The
    toString method for each LinkedListNode is called and then the toString array method is called
    to print out the entire array of LinkedListNodes
     */
    toString (callback) {
        //return this.toArray().map(node => node.toString(callback)).toString();
        return this.toArray().map(node => node.toString(callback)).join(', ');
    }

}

export {LinkedListNode, LinkedList};




// Example:

const linkedList = new LinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(2);
linkedList.push(5);
linkedList.prepend(10);
linkedList.push(12);
linkedList.push(15);

console.log("**************************************");

console.log('Origin Linked List:')
linkedList.prinList();

let deleteValue = 10;
linkedList.deleteNodesByValue(deleteValue);

console.log(`After delete nodes by value = ${deleteValue} Linked List:`)
linkedList.prinList();

//console.log('Tail value is:');
console.log('Head value is:', linkedList.head.toString());
console.log('Tail value is:', linkedList.tail.toString());


console.log('After call deleteTail():');
linkedList.deleteTail();
linkedList.prinList();


console.log('After call deleteHead():');
linkedList.deleteHead();
linkedList.prinList();


console.log('After call toString(Without callback):'); // Without callback
console.log( linkedList.toString() );


// With callback (customizes the string representation):
console.log('With callback = data => `[Node: ${data}]`; (customizes the string representation):');
const customToString = data => `[Node: ${data}]`;
//console.log(linkedList.head.toString(customToString)); // Output: '[Node: 42]'

console.log( linkedList.toString(customToString) );


let value = 5;
//console.log(`indexOf(${value}) = `);
console.log(`indexOf(${value}) =`, linkedList.indexOf(value));

let idx = 10;
value = 55;
let res = linkedList.insert(value, idx);
console.log(`insert(${value}, ${idx}): result: ${res}`);
linkedList.prinList();