// Classical inheritance approach
class ClassLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value = '') {
        const node = { data: value, next: null };

        if (this.head === null) {
            this.head = node;
        } else {
            let currNode = this.head;

            // Traverse linked list till its tail
            while (currNode.next !== null) {
                currNode = currNode.next;
            }

            currNode.next = node;
        }

        this.size++;
    }

    prepend(value = '') {
        const node = { data: value, next: this.head };

        this.head = node;
        this.size++;
    }

    insertAt(value = '', index = 0) {
        if (index >= 0 && index <= this.size) {
            const node = { data: value, next: null };

            if (index === 0) {
                node.next = this.head;

                this.head = node;
            } else {
                let prevNode;
                let currIndex = 0;
                let currNode = this.head;

                while (currIndex < index) {
                    currIndex++;
                    prevNode = currNode;
                    currNode = currNode.next;
                }

                node.next = currNode;
                prevNode.next = node;
            }

            this.size++;
        }
    }

    removeAt(index = 0) {
        if (index >= 0 && index <= this.size) {
            let currNode = this.head;

            if (index === 0) {
                this.head = currNode.next;
            } else {
                let prevNode;
                let currIndex = 0;

                while (currIndex < index) {
                    currIndex++;
                    prevNode = currNode;
                    currNode = currNode.next;
                }

                prevNode.next = currNode.next;
            }

            this.size--;

            return currNode.data;
        }
    }

    getAt(index = 0) {
        if (index >= 0 && index <= this.size) {
            if (index === 0) {
                return this.head;
            } else {
                let currIndex = 0;
                let currNode = this.head;

                while (currIndex < index) {
                    currNode = currNode.next;
                    currIndex++;
                }

                return currNode;
            }
        }
    }

    getSize() {
        return this.size;
    }
}

const newClassLinkedList = new ClassLinkedList();


// Prototypal inheritance approach
function PrototypalLinkedList() {
    this.head = null;
    this.size = 0;
}

PrototypalLinkedList.prototype.append = function(value = '') {
    const node = { data: value, next: null };

    if (this.head === null) {
        this.head = node;
    } else {
        let currNode = this.head;

        // Traverse linked list till its tail
        while (currNode.next !== null) {
            currNode = currNode.next;
        }

        currNode.next = node;
    }

    this.size++;
}

PrototypalLinkedList.prototype.prepend = function(value = '') {
    const node = { data: value, next: this.head };

    this.head = node;
    this.size++;
}

PrototypalLinkedList.prototype.insertAt = function(value = '', index = 0) {
    if (index >= 0 && index <= this.size) {
        const node = { data: value, next: null };

        if (index === 0) {
            node.next = this.head;

            this.head = node;
        } else {
            let prevNode;
            let currIndex = 0;
            let currNode = this.head;

            while (currIndex < index) {
                currIndex++;
                prevNode = currNode;
                currNode = currNode.next;
            }

            node.next = currNode;
            prevNode.next = node;
        }

        this.size++;
    }
}

PrototypalLinkedList.prototype.removeAt = function(index = 0) {
    if (index >= 0 && index <= this.size) {
        let currNode = this.head;

        if (index === 0) {
            this.head = currNode.next;
        } else {
            let prevNode;
            let currIndex = 0;

            while (currIndex < index) {
                currIndex++;
                prevNode = currNode;
                currNode = currNode.next;
            }

            prevNode.next = currNode.next;
        }

        this.size--;

        return currNode.data;
    }
}

PrototypalLinkedList.prototype.getAt = function(index = 0) {
    if (index >= 0 && index <= this.size) {
        if (index === 0) {
            return this.head;
        } else {
            let currIndex = 0;
            let currNode = this.head;

            while (currIndex < index) {
                currNode = currNode.next;
                currIndex++;
            }

            return currNode;
        }
    }
}

PrototypalLinkedList.prototype.getSize = function() {
    return this.size;
}

const newPrototypalLinkedList = new PrototypalLinkedList();


// Prototypal inheritance Object.create approach
const objectCreateLinkedList = {
    init: {
        head: { value: null, writable: true }, 
        size: { value: 0, writable: true }
    },
    append: function(value = '') {
        const node = { data: value, next: null };

        if (this.head === null) {
            this.head = node;
        } else {
            let currNode = this.head;

            // Traverse linked list till its tail
            while (currNode.next !== null) {
                currNode = currNode.next;
            }

            currNode.next = node;
        }

        this.size++;
    },
    prepend: function(value = '') {
        const node = { data: value, next: this.head };

        this.head = node;
        this.size++;
    },
    insertAt: function(value = '', index = 0) {
        if (index >= 0 && index <= this.size) {
            const node = { data: value, next: null };

            if (index === 0) {
                node.next = this.head;

                this.head = node;
            } else {
                let prevNode;
                let currIndex = 0;
                let currNode = this.head;

                while (currIndex < index) {
                    currIndex++;
                    prevNode = currNode;
                    currNode = currNode.next;
                }

                node.next = currNode;
                prevNode.next = node;
            }

            this.size++;
        }
    },
    removeAt: function(index = 0) {
        if (index >= 0 && index <= this.size) {
            let currNode = this.head;

            if (index === 0) {
                this.head = currNode.next;
            } else {
                let prevNode;
                let currIndex = 0;

                while (currIndex < index) {
                    currIndex++;
                    prevNode = currNode;
                    currNode = currNode.next;
                }

                prevNode.next = currNode.next;
            }

            this.size--;

            return currNode.data;
        }
    },
    getAt: function(index = 0) {
        if (index >= 0 && index <= this.size) {
            if (index === 0) {
                return this.head;
            } else {
                let currIndex = 0;
                let currNode = this.head;

                while (currIndex < index) {
                    currNode = currNode.next;
                    currIndex++;
                }

                return currNode;
            }
        }
    },
    getSize: function() {
        return console.log(`The size of this linked list is: ${this.size}`);
    },
    printOut: function() {
        return console.log(JSON.stringify(this.head));
    }
};

const newObjectCreateLinkedList = Object.create(objectCreateLinkedList, objectCreateLinkedList.init);


// Factory functions approach (composition)
const factoryLinkedListNode = ({ 
    data = null, 
    next = null 
} = {}) => ({ data, next });

const factoryLinkedList = ({ head = null, size = 0 } = {}) => ({
    append: (value = '') => {
        const node = factoryLinkedListNode({ data: value });

        if (head === null) {
            head = node;
        } else {
            let currNode = head;

            // Traverse linked list till its tail
            while (currNode.next !== null) {
                currNode = currNode.next;
            }

            currNode.next = node;
        }

        size++;
    },
    prepend: (value = '') => {
        const node = factoryLinkedListNode({ data: value, next: head });

        head = node;
        size++;
    },
    insertAt: (value = '', index = 0) => {
        if (index >= 0 && index <= size) {
            const node = factoryLinkedListNode({ data: value });

            if (index === 0) {
                node.next = head;

                head = node;
            } else {
                let prevNode;
                let currIndex = 0;
                let currNode = head;

                while (currIndex < index) {
                    currIndex++;
                    prevNode = currNode;
                    currNode = currNode.next;
                }

                node.next = currNode;
                prevNode.next = node;
            }

            size++;
        }
    },
    removeAt: (index = 0) => {
        if (index >= 0 && index <= size) {
            let currNode = head;

            if (index === 0) {
                head = currNode.next;
            } else {
                let prevNode;
                let currIndex = 0;

                while (currIndex < index) {
                    currIndex++;
                    prevNode = currNode;
                    currNode = currNode.next;
                }

                prevNode.next = currNode.next;
            }

            size--;

            return currNode.data;
        }
    },
    getAt: (index = 0) => {
        if (index >= 0 && index <= size) {
            if (index === 0) {
                return head;
            } else {
                let currIndex = 0;
                let currNode = head;

                while (currIndex < index) {
                    currNode = currNode.next;
                    currIndex++;
                }

                return currNode;
            }
        }
    },
    getHead: () => head,
    getSize: () => size,
    printOut: () => {
        console.log(JSON.stringify(head));
        console.log(`The size of this linked list is: ${size}`);
    }
});

export { factoryLinkedListNode, factoryLinkedList };
