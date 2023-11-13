import { LinkedListNode, LinkedList } from "./LinkedList";


//const node = new LinkedListNode(42);
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(2);
linkedList.append(5);

console.log('Origin Linked List:')
linkedList.prinList();

linkedList.deleteNodesByValue(2);

console.log('¥nAfter delete Linked List:')
linkedList.prinList();
