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

    // Add a Node obj to the beginning of LinkedList
    prepend(value) {
        // make a new Node for the new head
        const newNode = new LinkedListNode(value, this.head);

        // set this.head pointer to new Node
        this.head = newNode;

        // if no tail (linkedList empty), make a new node a tail
        !this.tail && (this.tail = newNode);
        
        //return the value just was added
        return this;
    }

    // Add a Node obj to the end of LinkedList
    append (value) {
        const newNode = new LinkedListNode(value);
        
        // if LinkedList is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        const currentTail = this.tail;
        currentTail.next = newNode;
        
        // new Node become a new tail of Linked list
        this.tail = newNode;

        return this;
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
            } else {
                // move to the next node
                previous = current;
            }

            current = current.next;
        }

    }

    // print
    prinList () {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    

}

export {LinkedListNode, LinkedList};