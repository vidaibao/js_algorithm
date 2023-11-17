import { LinkedList } from "./LinkedList";
/**
 * A sorted linked list is a list that keeps its elements sorted. 
 * To keep all elementssorted, instead of applying a sorting algorithm, 
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

}