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

//export {LinkedListNode, LinkedList};


// export default để giúp các module chỉ chứa 1 thứ này được sử dụng dễ dàng hơn
/**
 * 
 * export default class User {
	constructor(name, sirname) {
		this.name = name;
		this.sirname = sirname;
	}
}

Hoặc có thể tách riêng export default ra khỏi khai báo cũng được:

class User {
	constructor(name, sirname) {
		this.name = name;
		this.sirname = sirname;
	}
}

export default User;
}

 * Và với những module được export default như vậy, chúng ta có thể import mà không cần đến dấu ngoặc nhọn:

import User from './user.js';

new User('foo', 'bar');



Một ví dụ dưới đây có lẽ hiếm gặp trong thực tế, nhưng hoàn toàn có thể thực hiện được về mặt kỹ thuật, một module export default và export thông thường cùng một lúc:
export default class Foo {
	constructor() {
		...
	}
}

export function bar() {
	...
}

Và nếu muốn import cả hai cùng một lúc, chúng ta có thể dùng cách này:

import {default as Foo, bar} from './script.js';

và nếu sử dụng import * thì default chính là thứ được export default:

import * as foo from './script.js';

foo.default;




export ... from ...
Đây là cú pháp cho phép chúng ta import một thứ và ngay lập tức export nó (có thể sử dụng tên khác), ví dụ:

export {foo} from './foo.js';

export {default as bar} from './bar.js';

Cú pháp này trên thực tế cực kỳ hữu tích nếu chúng ta tổ chức code theo kiểu như thế này: một thư mục sẽ chứa nhiều module, và trong đó sẽ có một số hàm cần được export ra ngoài để sử dụng, nhiều thành phần khác chỉ cần thiết giữa các module trong thư mục đó mà thôi.

Trong trường hợp này, thư mục đó như một package thu nhỏ, và chúng ta đơn giản chỉ cần thêm một file index.js trong đó sẽ export giống như ở trên những gì cần thiết, ngoài ra những thứ khác sẽ được giữ kín ở trong package đó mà thôi.

Thông thường, chúng ta sẽ import rồi sau đó export như thế này:

// index.js
import {login, logout} from './auth.js';
export {login, logout}

Với cú pháp ngắn gọn hơn, mọi việc dễ dàng hơn khá nhiều:

// index.js
export {login, logout} from './auth.js';

Tuy nhiên, với các thành phần được export default, mọi việc không đơn giản như vậy, chúng ta sẽ cần phải sử dụng đến từ khoá default:

// user.js
export default class User {
	...
}

// index.js
export {default as User} from './user.js';


Import động
Những phần trước chúng ta đã tìm hiểu cách các module export và import. Tuy nhiên, đó hoàn toàn là import tĩnh, mọi import là cố định và không thể thay đổi được.

Trong thực tế có nhiều tình huống chúng ta cần import một cách động hơn, nghĩa là import module này hay module kia tuỳ vào điều kiện nào đó. Tất nhiên là chúng ta có thể import cả hai module, còn dùng cái này thì tuỳ điều kiện, nhưng như vậy không hay.

Thế nhưng các cách import động như dưới đây đều không được phép bởi lỗi cú pháp

import ... from getModuleName();
// Lỗi, phải import từ string

if (...) {
	import ...
else {
	import ...
}
// Lỗi, import không được đặt trong block

Thế nhưng, rất may là từ khoá import lại có thể gọi như một hàm và nó sẽ trả về một promise, do đó chúng ta có thể dùng cách này để thực hiện import động:

import('./foo.js')
	.then(module => {
		// do something
	})

và nếu như trong một hàm async thì chúng ta có thể kết hợp với await:

let module = await import('./foo.js');
module.foo

Bằng cách này, chúng ta có thể thực hiện import động theo nhu cầu một cách khá dễ dàng:

async function() {
	let module;
	if (foo) {
		module = await import('./foo.js');
	} else {
		module = await import('./bar.js');
	}
}

Tuy nhiên, có điểm cần lưu ý rằng, việc gọi import trông như một hàm, nhưng thực tế, nó là một cú pháp đặc biệt của từ khoá này, chứ bản thân import không phải một hàm. Do đó, không thể sử dụng call hay apply được.
 */