// Factory functions approach (composition)
const queue = ({ queue = [] } = {}) => ({
    enqueue: (item) => queue.push(item),
    dequeue: () => queue.shift(),
    peek: () => queue[0],
    size: () => queue.length
    isEmpty: () => queue.length === 0
});

const newQueue = queue();
