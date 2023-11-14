//import { LinkedListNode, LinkedList } from "./LinkedList";
//import { LinkedList } from "./LinkedList";

//const node = new LinkedListNode(42);
// LINKED LIST
class LinkedListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }

    toString(callback){
        return callback ? callback(this.value) : `${this.value}`;
    }
}


class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    // Add a Node obj to the beginning of LinkedList // shift()
    prepend(value) {
        // make a new Node for the new head
        const newNode = new LinkedListNode(value, this.head);

        // set this.head pointer to new Node
        this.head = newNode;

        // if no tail (linkedList empty), make a new node as tail
        !this.tail && (this.tail = newNode);
        
        //return the value just was added
        return this;
    }

    // Add a Node obj to the end of LinkedList // push()
    append (value) {
        const newNode = new LinkedListNode(value);
        
        // if LinkedList is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }        
        // new Node become a new tail of Linked list
        current.next = newNode;
        this.tail = newNode;

        return this;
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

    }



    // unshift()
    deleteHead () {
        // empty list OR only 1 item list
        if (!this.head || !this.head.next) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = this.head.next;
    }


    // delete tail  // pop()
    deleteTail () {
        // empty list OR only 1 item list
        if (!this.head || !this.head.next) {
            this.head = null;
            this.tail = null;
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
            //arr.push(current.value);   // Get error when mapping array list
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

//export {LinkedListNode, LinkedList};




// Example:

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(2);
linkedList.append(5);
linkedList.prepend(10);

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