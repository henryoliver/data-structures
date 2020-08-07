// Queue - FIFO (first-in first-out)

// Factory functions approach (composition)
const factoryQueueNode = ({ data = null, next = null } = {}) => ({ data, next });

const factoryQueue = ({ first = null, last = null, size = 0 } = {}) => ({
    enqueue: (item) => {
        const node = factoryQueueNode({ data: item });

        if (last !== null) {
            last.next = node;
        }

        last = node;

        if (first === null) {
            first = last;
        }

        size++;
    },
    dequeue: () => {
        if (first === null) {
            console.error('Queue is already empty');
        } else {
            const item = first.data;

            first = first.next;

            if (first === null) {
                last = null;
            }

            size--;

            return item;
        }
    },
    peek: () => {
        if (first === null) {
            console.warn('Queue is empty');
        } else {
            return first;
        }
    },
    isEmpty: () => size === 0,
});

export { factoryQueue };
