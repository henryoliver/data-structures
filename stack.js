// Stack LIFO (last-in first-out)

// Classical inheritance approach
class ClassStack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push(value) {
        let min = value;
        let max = value;

        if (this.count) {
            const previousItem = this.storage[this.count - 1];

            min = Math.min(value, previousItem.min);
            max = Math.max(value, previousItem.max);
        }

        this.storage[this.count] = { value, min, max };
        this.count++;
    }

    pop() {
        if (this.count) {
            this.count--;
            delete this.storage[this.count];
        }
    }

    peek() {
        if (this.count) {
            return this.storage[this.count - 1].value;
        }
    }

    getMin() {
        if (this.count) {
            return this.storage[this.count - 1].min;
        }
    }

    getMax() {
        if (this.count) {
            return this.storage[this.count - 1].max;
        }
    }
}

const newClassStack = new ClassStack();

// Prototypal inheritance approach
function PrototypalStack() {
    (this.count = 0), (this.storage = {});
}

PrototypalStack.prototype.push = function (value) {
    let min = value;
    let max = value;

    if (this.count) {
        const previousItem = this.storage[this.count - 1];

        min = Math.min(value, previousItem.min);
        max = Math.max(value, previousItem.max);
    }

    this.storage[this.count] = { value, min, max };
    this.count++;
};
PrototypalStack.prototype.pop = function () {
    if (this.count) {
        delete this.storage[this.count];
        this.count--;
    }
};
PrototypalStack.prototype.peek = function () {
    if (this.count) {
        console.log(this.storage[this.count - 1]);
    }
};
PrototypalStack.prototype.getMin = function () {
    if (this.count) {
        console.log(this.storage[this.count - 1].min);
    }
};
PrototypalStack.prototype.getMax = function () {
    if (this.count) {
        console.log(this.storage[this.count - 1].max);
    }
};

const newPrototypalStack = new PrototypalStack();

// Prototypal inheritance Object.create approach
const objectCreateStack = {
    init: {
        count: { value: 0, writable: true },
        storage: { value: {}, writable: true },
    },
    push: function (value) {
        let min = value;
        let max = value;

        if (this.count) {
            const previousItem = this.storage[this.count - 1];

            min = Math.min(value, previousItem.min);
            max = Math.max(value, previousItem.max);
        }

        this.storage[this.count] = { value, min, max };
        this.count++;
    },
    pop: function () {
        if (this.count) {
            delete this.storage[this.count];
            this.count--;
        }
    },
    peek: function () {
        if (this.count) {
            console.log(this.storage[this.count - 1]);
        }
    },
    getMin: function () {
        if (this.count) {
            console.log(this.storage[this.count - 1].min);
        }
    },
    getMax: function () {
        if (this.count) {
            console.log(this.storage[this.count - 1].max);
        }
    },
};

const newObjectCreateStack = Object.create(objectCreateStack, objectCreateStack.init);

// Factory functions approach (composition)
const factoryStackNode = ({ data = null, next = null } = {}) => ({ data, next });

const factoryStack = ({ top = null, size = 0 } = {}) => ({
    push: (item) => {
        const node = factoryStackNode({ data: item });

        node.next = top;
        top = node;

        size++;
    },
    pop: () => {
        if (top === null) { 
            console.error('Stack is already empty');
        } else {
            const item = top.data;

            top = top.next;

            size--;

            return item;
        }
    },
    peek: () => {
        if (top === null) {
            console.warn('Stack is empty');
        } else {
            return top;
        }
    },
    isEmpty: () => size === 0
});

export { factoryStack };
