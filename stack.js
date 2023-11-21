class Stack {
    #items;
    #count;
    constructor () {
        this.#items = {};
        this.#count = 0;
    }

    isEmpty(){
        return this.#count == 0;
    }

    clear() {
        this.#items = {};
        this.#count = 0;
    }

    size () {
        return this.#count;
    }

    push (value) {
        this.#items[this.#count++] = value;
    }


    pop () {
        if (this.isEmpty()) return undefined;
        this.#count--;
        const result = this.#items[this.#count];
        delete this.#items[this.#count];
        return result;
    }


    peek () {
        if (this.isEmpty()) return undefined;
        return this.#items[this.#count - 1];
    }

    
    toString () {
        if (this.isEmpty()) return '';
        let res = this.#items[0];
        for (let i = 1; i < this.#count; i++) {
            res += ',' + this.#items[i];
        }
        return res;
    }
    

    toArray () {
        let res = [];
        for (let i = 0; i < this.#count; i++) {
            res.push(this.#items[i]);
        }
        return res;
    }

    printStack () {
        Object.entries(this.#items).forEach(([key, value]) => {
            console.log(`Item ${key}: ${value}`);
          });
    }
}





const myStacked = new Stack();

myStacked.push(4);
myStacked.push(6);
myStacked.push(8);
myStacked.push(18);
myStacked.push(25);

console.log("myStacked.printStack():");
myStacked.printStack();

console.log("myStacked.size():", myStacked.size());
console.log("myStacked.pop():", myStacked.pop());

console.log("myStacked.size():", myStacked.size());
console.log("myStacked.push(55):", myStacked.push(55));

console.log("myStacked.peek():", myStacked.peek());
console.log("myStacked.printStack():");
myStacked.printStack();

console.log("myStacked.toArray():", myStacked.toArray());
console.log("myStacked.toArray().toString():", myStacked.toArray().toString());
// test private field
// myStacked.count = 0;
// console.log("myStacked.count:", myStacked.count);
// console.log("myStacked.size():", myStacked.size());


// Converting decimal numbers to binary
console.log("****************************************************");
console.log("********************Converting decimal numbers to binary******************");


function remModulus (num1, base) {
    return [ Math.floor(num1 / base), Math.floor(num1 % base) ];
}

// const [div, rem] = remModulus(23, 2);
// console.log("div, rem:", div, rem);

function decimalToBinaryStr (num) {
    let result = new Stack();
    while (num > 0) {
        const [div, rem] = remModulus(num, 2)
        num = div;
        result.push(rem);
    }
    let binaryString = '';
    while (!result.isEmpty()) {
        binaryString += result.pop();
    }
    return binaryString;
}
let decNum = 23;
console.log(`Convert decNum ${decNum} to binary string: ${decimalToBinaryStr(decNum)}`);
decNum = 233;
console.log(`Convert decNum ${decNum} to binary string: ${decimalToBinaryStr(decNum)}`);
decNum = 1000;
console.log(`Convert decNum ${decNum} to binary string: ${decimalToBinaryStr(decNum)}`);



// The base converter algorithm
console.log("********************The base converter algorithm********************");

function baseConverter(decNum, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let baseString = '';

    if (base < 2 || base > 36) return '';
    
    let number = decNum;
    while (number > 0) {
        const rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

decNum = 233; let base = 2
console.log(`decNum ${decNum} to base ${base} string: ${baseConverter(decNum, base)}`);
decNum = 1000; base = 2
console.log(`Convert decNum ${decNum} to base ${base} string: ${baseConverter(decNum, base)}`);

decNum = 100345; base = 8
console.log(`Convert decNum ${decNum} to base ${base} string: ${baseConverter(decNum, base)}`);
decNum = 100345; base = 16
console.log(`Convert decNum ${decNum} to base ${base} string: ${baseConverter(decNum, base)}`);
decNum = 100345; base = 35
console.log(`Convert decNum ${decNum} to base ${base} string: ${baseConverter(decNum, base)}`);










