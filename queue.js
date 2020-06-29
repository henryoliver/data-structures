// Factory functions approach (composition)
const queue = ({ queue = [] } = {}) => ({
    enqueue: (item) => queue.push(item),
    dequeue: () => queue.length && queue.shift(),
    peek: () => queue.length && queue[0],
    size: () => queue.length
});

const newQueue = queue();

console.debug(newQueue.enqueue(1));
console.debug(newQueue.enqueue(2));
console.debug(newQueue.enqueue(3));

console.debug(newQueue.dequeue());
console.debug(newQueue.dequeue());
console.debug(newQueue.dequeue());

console.debug(newQueue.peek());
console.debug(newQueue.size());

