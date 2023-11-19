import { LinkedList, LinkedListNode } from "./LinkedList.js";
/**
 * A sorted linked list is a list that keeps its elements sorted. 
 * To keep all elements sorted, instead of applying a sorting algorithm, 
 * we will insert the element at its correct position so as to keep the list always sorted.
 */

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare (a, b) {
    if (a === b) return 0;
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {
    constructor(compareFn = defaultCompare){
        super();
        this.compareFn = compareFn;
    }



    // Inserting elements in order
    insert (value, index = 0) {
        if (this.isEmpty()) return super.insert(value, 0);

        const pos = this.getIndexNextSortedElement(value);
        return super.insert(value, pos);
    }

    // do not to rewrite the entire LinkedList class methods
    getIndexNextSortedElement(value){
        let current = this.head;
        let i = 0;
        for (; i < this.size(); i++) {
            const comp = this.compareFn(value, current.value);
            if (comp === Compare.LESS_THAN) return i;
            current = current.next;
        }
        return i;
    }


}


console.log('*******************************************');
console.log('Sorted Linked List Testing');

const mySortedLList = new SortedLinkedList();


let res = mySortedLList.insert(95);
mySortedLList.insert(3);
mySortedLList.insert(15);
mySortedLList.insert(55);
mySortedLList.insert(56);
mySortedLList.insert(94);


console.log('Origin Linked List:')
mySortedLList.prinList();


let val = 88;
let idx = 7;
mySortedLList.insert(val, idx);
console.log(`insert(${val}, ${idx})  result: ${res}`);
mySortedLList.prinList();
