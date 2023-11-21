class Queue {
    #count;
    #lowestCount;
    #items;
    constructor(){
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    isEmpty() {
        return this.size() == 0;
    }

    size() {
        return this.#count - this.#lowestCount;
    }

    clear() {
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    toString() {
        if (this.isEmpty()) return '';
        let retString = this.#items[this.#lowestCount];
        for (let i = this.#lowestCount + 1; i < this.#count; i++) {
            retString += ', ' + this.#items[i];
        }
        return retString;
    }

    enqueue (value) {
        this.#items[this.#count++] = value;
    }

    dequeue () {
        if (this.isEmpty()) return undefined;
        let res = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount++];
        return res;
    }

    peek () {
        if (this.isEmpty()) return undefined;
        return this.#items[this.#lowestCount];
    }

}


console.log('****************  Queue Class Test  ***********************')
const myQueue = new Queue();

console.log('myQueue.isEmpty()', myQueue.isEmpty());
console.log('myQueue.enqueue(2)', myQueue.enqueue(2));
console.log('myQueue.enqueue(4)', myQueue.enqueue(4));
console.log('myQueue.enqueue(1)', myQueue.enqueue(1));
console.log('myQueue.enqueue(7)', myQueue.enqueue(7));
console.log('myQueue.enqueue(10)', myQueue.enqueue(10));

console.log('myQueue.isEmpty()', myQueue.isEmpty());
console.log('myQueue.size()', myQueue.size());
console.log('myQueue.toString()', myQueue.toString());

console.log('myQueue.peek()', myQueue.peek());
console.log('myQueue.clear()', myQueue.clear());
console.log('myQueue.isEmpty()', myQueue.isEmpty());
console.log('', );
console.log('', );
console.log('', );
console.log('', );
console.log('', );
console.log('', );






class Deque {
    #count;
    #lowestCount;
    #items; // object to store elements in queue
    constructor(){
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    isEmpty () {
        return this.size() == 0;
    }

    size () {
        return this.#count - this.#lowestCount; // constrains #count >= #lowestCount
    }

    clear () {
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    toString () {
        if (this.isEmpty()) return '';
        // for (const [key, value] of Object.entries(this.#items)) {
        //     console.log(`Key: ${key}, Value: ${value}`);
        // }
        let retString = this.#items[this.#lowestCount];
        for (let i = this.#lowestCount + 1; i < this.#count; i++) {
            retString += ', ' + this.#items[i];
        }
        //console.log(retString)
        return retString;
        
    }


    addFront (value) {
        // this.#lowestCount--;
        this.#items[--this.#lowestCount] = value;
    }

    addBack (value) {
        this.#items[this.#count++] = value;
    }

    removeFront () {
        if (this.isEmpty()) return undefined;
        const res = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount++];
        //this.#lowestCount++;
        //console.log("res", typeof res);
        return res;
    }

    removeBack () {
        if (this.isEmpty()) return undefined;
        //this.#count--;
        const res = this.#items[--this.#count];
        delete this.#items[this.#count];
        return res;
    }

}



console.log('****************  Deque Class Test  ***********************')
const myDeque = new Deque();
console.log("myDeque.isEmpty()", myDeque.isEmpty());

console.log("myDeque.addFront(3)", myDeque.addFront(3));
console.log("myDeque.addFront(4)", myDeque.addFront(4));
console.log("myDeque.addFront(9)", myDeque.addFront(9));
console.log("myDeque.addFront(6)", myDeque.addFront(6));
console.log("myDeque.addFront(1)", myDeque.addFront(1));
console.log("myDeque.addBack(22)", myDeque.addBack(22));
console.log("myDeque.addBack(33)", myDeque.addBack(33));
console.log("myDeque.isEmpty()", myDeque.isEmpty());

console.log("myDeque.toString()", myDeque.toString());
console.log("myDeque.size()", myDeque.size());

console.log("myDeque.removeFront()", myDeque.removeFront());
console.log("myDeque.toString()", myDeque.toString());
console.log("myDeque.size()", myDeque.size());

console.log("myDeque.removeBack()", myDeque.removeBack());
console.log("myDeque.toString()", myDeque.toString());
console.log("myDeque.size()", myDeque.size());

console.log("*************************************************");
console.log("myDeque.clear()", myDeque.clear());
console.log("myDeque.size()", myDeque.size());
console.log("myDeque.isEmpty()", myDeque.isEmpty());
console.log("myDeque.addBack('John')", myDeque.addBack('John'));
console.log("myDeque.addBack('Jack')", myDeque.addBack('Jack'));
console.log("myDeque.toString()", myDeque.toString()); // John,Jack
console.log("myDeque.addBack('Camila')", myDeque.addBack('Camila'));
console.log("myDeque.toString()", myDeque.toString()); // John,Jack,Camila
console.log("myDeque.size()", myDeque.size()); // outputs 3
console.log("myDeque.isEmpty()", myDeque.isEmpty()); // outputs false
console.log("myDeque.removeFront()", myDeque.removeFront()); // remove John
console.log("myDeque.toString()", myDeque.toString()); // Jack,Camila
console.log("myDeque.removeBack()", myDeque.removeBack()); // Camila decides to leave
console.log("myDeque.toString()", myDeque.toString()); // Jack
console.log("myDeque.size()", myDeque.size());
console.log("myDeque.addFront(John)", myDeque.addFront('John')); // John comes back for information
console.log("myDeque.toString()", myDeque.toString()); // John,Jack
console.log("myDeque.size()", myDeque.size());




console.log('', );
console.log('', );
console.log('', );

// Solving problems using queues and deques
console.log('*************  Solving problems using queues and deques  *****************'); 
console.log('', );
console.log('************** The circular queue - HOT POTATO GAME **************');
/**
 * In this game, children are organized in a
circle, and they pass the hot potato to their neighbor as fast as they can. At a
certain point of the game, the hot potato stops being passed around the circle of
children, and the child that has the hot potato is removed from the circle. This
action is repeated until there is only one child left (the winner).
 */


function hotPotato(elementsList, num) {
    const queue = new Queue(); // {1}
    const elimitatedList = [];
    
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]); // list of names, and queue all of them
    }
    
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) { // Given a number, we need to iterate the queue
            // remove an item from the beginning, and add it to the end of the queue
            queue.enqueue(queue.dequeue()); // simulate the hot potato
        }
        // Once we reach the number, the person that has the hot potato is eliminated
        elimitatedList.push(queue.dequeue()); // removed from the queue
    }

    return {
        eliminated: elimitatedList,
        winner: queue.dequeue() // only one person left, this person is declared the winner
    };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated
    .forEach(name => {
        console.log(`${name} was eliminated from the Hot Potato game.`);
    });
console.log(`The winner is: ${result.winner}`);

console.log('', );
console.log('************** Palindrome checker **************');


function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
        (aString !== null && aString.length === 0)) { // {1}
        return false;
    }
    
    const deque = new Deque(); // {2}
    // transform all letters to lowercase and also remove all the spaces
    const lowerString = aString.toLocaleLowerCase().split(' ').join(''); // {3}
    let isEqual = true;
    let firstChar, lastChar;
    
    for (let i = 0; i < lowerString.length; i++) { // {4}
        deque.addBack(lowerString.charAt(i));// enqueue all characters of the string to the deque
    }
    // While have elements in the deque (if only one character is left, it is a palindrome) 
    while (deque.size() > 1 && isEqual) { // and the string is a palindrome
        firstChar = deque.removeFront(); // remove one element from the front
        lastChar = deque.removeBack(); // one from the back
        // both characters removed from the deque need to match
        if (firstChar !== lastChar) { // if do not match, 
            isEqual = false; // then the string is not a palindrome
        }
    }

    return isEqual;
}


console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));



















