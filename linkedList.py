class Node(dict):
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

    def __str__(self):
        return 'Node: [ data: {self.data} | next: {self.next} ]'.format(self = self)

class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    def append(self, value=''):
        node = Node(value)

        if (self.head == None):
            self.head = node
        else:
            currNode = self.head

            # Traverse linked list till its tail
            while (currNode.next != None):
                currNode = currNode.next

            currNode.next = node

        self.size += 1

    def prepend(self, value=''):
        self.head = Node(value, self.head)
        self.size += 1

    def insertAt(self, value='', index=0):
        if (index >= 0 and index <= self.size):
            node = Node(value)

            if (index == 0):
                node.next = self.head

                self.head = node
            else:
                currIndex = 0
                currNode = self.head

                while (currIndex < index):
                    currIndex += 1
                    prevNode = currNode
                    currNode = currNode.next

                node.next = currNode
                prevNode.next = node

            self.size += 1

    def removeAt(self, index=0):
        if (index >= 0 and index < self.size):
            currNode = self.head

            if (index == 0):
                self.head = currNode.next
            else:
                currIndex = 0

                while (currIndex < index):
                    currIndex += 1
                    prevNode = currNode
                    currNode = currNode.next

                prevNode.next = currNode.next

            self.size -= 1

            return print(f'Node removed: {currNode.data}')

    def getAt(self, index=0):
        if (index >= 0 and index < self.size):
            if (index == 0):
                return print(f'Node: {self.head.data}')
            else:
                currIndex = 0
                currNode = self.head

                while (currIndex < index):
                    currNode = currNode.next
                    currIndex += 1

                return print(f'Node at index {index} is: {currNode.data}')

    def getSize(self):
        return print(f'Linked list size: {self.size}')

    def printOut(self):
        linkedList = ''
        currNode = self.head

        # Traverse linked list till its tail
        while (currNode != None):
            linkedList += f'{currNode.data} -> '
            currNode = currNode.next

        linkedList += 'None'

        return print(f'Linked list: {linkedList}')


# NewLinkedList = LinkedList()
#
# NewLinkedList.append('Node 1')
# NewLinkedList.append('Node 2')
# NewLinkedList.append('Node 3')
# NewLinkedList.prepend('Node 0')
# NewLinkedList.getAt(2)
# NewLinkedList.getSize()
# NewLinkedList.printOut()
# NewLinkedList.removeAt(2)
# NewLinkedList.printOut()
# NewLinkedList.getSize()

