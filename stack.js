// Stack

/*
Pseudo Code

Create Stack class/constructor
    create and set count to 0
    create sotrage object

Create push method on Stack prototype
    Add the given value into storage w/ a key of current count
    Increment count

Create pop method on Stack prototype
    Check to see if stack is empty
        if so, return undefined
    Decrement count
    Save element at top of stack to a var (to later return)
    Delete that element from storage
    Return saved element

Create size method on Stack prototype
  Return count
*/

const stackMethods = {
    push(value) {
        this.storage[this.count] = value;
        this.count++;

        return this.storage;
    },
    pop(value) {
        if (this.count) {
            const result = this.storage[this.count];

            this.count--;
            delete this.storage[this.count];

            return result;
        }
    },
    size() {
        return this.count;
    },
    peek() {},
    empty() {}
};

const newStack = Object.create(stackMethods, { 
    count: { value: 0, writable: true }, 
    storage: { value: {}, writable: true } 
});

console.log(newStack.push('First Thing'));
console.log(newStack.push('Second Thing'));
console.log(newStack.size());












