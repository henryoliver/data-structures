class Stack:
    def __init__(self):
        self.stack = []
        self.minMaxStack = []

    # O(1) time | O(1) space
    def peek(self):
        if (len(self.stack)):
            return self.stack[-1]

        return None

    # O(1) time | O(1) space
    def pop(self):
        if (len(self.stack)):
            self.minMaxStack.pop()
            return self.stack.pop()

        return None

    # Procidure 
    # O(1) time | O(1) space
    def push(self, number):
        minNumber = number
        maxNumber = number

        if (len(self.minMaxStack)):
            lastMinMax = self.minMaxStack[-1]
            minNumber = min(lastMinMax[0], minNumber)
            maxNumber = max(lastMinMax[1], maxNumber)

        self.stack.append(number)
        self.minMaxStack.append((minNumber, maxNumber))

        print(self.stack)
        print(self.minMaxStack)

    # O(1) time | O(1) space
    def getMin(self):
        if (len(self.minMaxStack)):
            return self.minMaxStack[-1][0]

        return None

    # O(1) time | O(1) space
    def getMax(self):
        if (len(self.minMaxStack)):
            return self.minMaxStack[-1][1]

        return None

NewStack = Stack()
