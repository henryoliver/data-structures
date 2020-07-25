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

    # Procedure 
    # O(1) time | O(1) space
    def push(self, value):
        minNumber = value
        maxNumber = value

        if (len(self.minMaxStack)):
            lastMinMax = self.minMaxStack[-1]
            minNumber = min(lastMinMax[0], minNumber)
            maxNumber = max(lastMinMax[1], maxNumber)

        self.stack.append(value)
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
