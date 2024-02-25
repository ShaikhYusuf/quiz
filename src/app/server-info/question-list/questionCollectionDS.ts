export interface IQuestion {
  Id: number;
  question: string;
  optionList: string[];
  answer: number
};

export class QuestionCollectionDataStructure {

  get(): IQuestion[] {
    let questionList = [
      {
        "Id": 1,
        "question": "Which operation is used to add an element to the end of an array?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Searching",
          "Appending"
        ],
        "answer": 3
      },
      {
        "Id": 2,
        "question": "What is the time complexity of searching for an element in an unsorted array of size \\( n \\)?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 2
      },
      {
        "Id": 3,
        "question": "Which operation is used to remove an element from an array at a specified index?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Searching",
          "Extraction"
        ],
        "answer": 1
      },
      {
        "Id": 4,
        "question": "What is the maximum number of dimensions a multi-dimensional array can have in most programming languages?",
        "optionList": [
          "2",
          "3",
          "4",
          "There is no limit"
        ],
        "answer": 3
      },
      {
        "Id": 5,
        "question": "In a two-dimensional array, how many indices are required to access an element?",
        "optionList": [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        "answer": 1
      },
      {
        "Id": 6,
        "question": "Which of the following is an application of arrays?",
        "optionList": [
          "Implementing linked lists",
          "Storing key-value pairs",
          "Representing graphs",
          "Storing employee records"
        ],
        "answer": 3
      },
      {
        "Id": 7,
        "question": "What is the time complexity of inserting an element at the beginning of an array of size \\( n \\)?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 2
      },
      {
        "Id": 8,
        "question": "Which data structure is typically used to implement dynamic arrays?",
        "optionList": [
          "Linked list",
          "Stack",
          "Queue",
          "Tree"
        ],
        "answer": 0
      },
      {
        "Id": 9,
        "question": "How are elements typically accessed in a multi-dimensional array?",
        "optionList": [
          "Using pointers",
          "Using a hash function",
          "Using nested loops",
          "Using recursion"
        ],
        "answer": 2
      },
      {
        "Id": 10,
        "question": "What is the time complexity of searching for an element in a sorted array of size \\( n \\) using binary search?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 1
      },
      {
        "Id": 11,
        "question": "Which operation is used to modify an element at a specific index in an array?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Update",
          "Replacement"
        ],
        "answer": 2
      },
      {
        "Id": 12,
        "question": "What is the time complexity of deleting an element from the end of an array?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 0
      },
      {
        "Id": 13,
        "question": "Which of the following is NOT a limitation of arrays?",
        "optionList": [
          "Fixed size",
          "Inefficient for insertion and deletion operations",
          "Limited to one dimension",
          "Inefficient for searching"
        ],
        "answer": 3
      },
      {
        "Id": 14,
        "question": "What is the time complexity of inserting an element at the end of an array?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 0
      },
      {
        "Id": 15,
        "question": "In a two-dimensional array, what is the size of the array typically denoted by?",
        "optionList": [
          "Rows and columns",
          "Height and width",
          "Length and breadth",
          "X and Y coordinates"
        ],
        "answer": 0
      },
      {
        "Id": 16,
        "question": "What is the time complexity of accessing an element at a specific index in an array?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 0
      },
      {
        "Id": 17,
        "question": "Which of the following operations can be performed efficiently on an array?",
        "optionList": [
          "Insertion and deletion in the middle",
          "Dynamic resizing",
          "Storing heterogeneous data types",
          "Random access to elements"
        ],
        "answer": 3
      },
      {
        "Id": 18,
        "question": "What is the main advantage of using multi-dimensional arrays?",
        "optionList": [
          "Efficient memory utilization",
          "Fast insertion and deletion operations",
          "Simplicity in implementation",
          "Improved cache locality"
        ],
        "answer": 3
      },
      {
        "Id": 19,
        "question": "What is the time complexity of searching for an element in an array using linear search?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 2
      },
      {
        "Id": 20,
        "question": "Which of the following is NOT an advantage of using arrays?",
        "optionList": [
          "Random access to elements",
          "Efficient memory utilization",
          "Dynamic resizing",
          "Sequential storage of elements"
        ],
        "answer": 2
      },
      {
        "Id": 21,
        "question": "What operation is used to insert an element at a specific index in an array?",
        "optionList": [
          "Append",
          "Delete",
          "Insert",
          "Modify"
        ],
        "answer": 2
      },
      {
        "Id": 22,
        "question": "In a two-dimensional array, how are elements typically arranged?",
        "optionList": [
          "Linearly",
          "In a tree structure",
          "In rows and columns",
          "In a circular buffer"
        ],
        "answer": 2
      },
      {
        "Id": 23,
        "question": "What is the time complexity of inserting an element at the beginning of an array?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 2
      },
      {
        "Id": 24,
        "question": "Which data structure is an array most similar to?",
        "optionList": [
          "Linked list",
          "Stack",
          "Queue",
          "Tree"
        ],
        "answer": 0
      },
      {
        "Id": 25,
        "question": "How are elements in a multi-dimensional array typically accessed?",
        "optionList": [
          "Using pointers",
          "Using a hash function",
          "Using nested loops",
          "Using recursion"
        ],
        "answer": 2
      },
      {
        "Id": 26,
        "question": "What is the primary limitation of static arrays?",
        "optionList": [
          "Inability to store heterogeneous data types",
          "Fixed size",
          "Inefficient random access",
          "Lack of support for multi-dimensional arrays"
        ],
        "answer": 1
      },
      {
        "Id": 27,
        "question": "What is the time complexity of searching for an element in a sorted array of size \\( n \\) using linear search?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 2
      },
      {
        "Id": 28,
        "question": "Which operation is used to remove the last element from an array?",
        "optionList": [
          "Append",
          "Delete",
          "Remove",
          "Pop"
        ],
        "answer": 3
      },
      {
        "Id": 29,
        "question": "What is the main advantage of using dynamic arrays over static arrays?",
        "optionList": [
          "Faster random access",
          "Variable size",
          "Compact storage",
          "Simpler implementation"
        ],
        "answer": 1
      },
      {
        "Id": 30,
        "question": "What is the primary disadvantage of using dynamic arrays?",
        "optionList": [
          "Fixed size",
          "Inefficient random access",
          "Expensive resizing operations",
          "Limited to one dimension"
        ],
        "answer": 2
      },
      {
        "Id": 31,
        "question": "Which of the following operations is performed most efficiently on arrays?",
        "optionList": [
          "Insertion at the beginning",
          "Insertion at the end",
          "Deletion at the beginning",
          "Deletion at the end"
        ],
        "answer": 1
      },
      {
        "Id": 32,
        "question": "What is the time complexity of searching for an element in an unsorted array of size \\( n \\) using linear search?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 2
      },
      {
        "Id": 33,
        "question": "Which of the following statements about arrays is true?",
        "optionList": [
          "Elements in an array cannot be accessed randomly",
          "Arrays can only store primitive data types",
          "Arrays can have a fixed or variable size",
          "Arrays are limited to one dimension"
        ],
        "answer": 2
      },
      {
        "Id": 34,
        "question": "What is the time complexity of deleting an element from the middle of an array of size \\( n \\)?",
        "optionList": [
          "\\( O(1) \\)",
          "\\( O(\\log n) \\)",
          "\\( O(n) \\)",
          "\\( O(n^2) \\)"
        ],
        "answer": 2
      },
      {
        "Id": 35,
        "question": "Which of the following is NOT a common operation on arrays?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Merging",
          "Searching"
        ],
        "answer": 2
      },
      {
        "Id": 36,
        "question": "In a two-dimensional array, what is the size of each dimension typically denoted by?",
        "optionList": [
          "Rows and columns",
          "Height and width",
          "Length and breadth",
          "X and Y coordinates"
        ],
        "answer": 0
      },
      {
        "Id": 37,
        "question": "What is the primary advantage of using static arrays over dynamic arrays?",
        "optionList": [
          "Variable size",
          "Efficient resizing operations",
          "Compact storage",
          "Predictable performance"
        ],
        "answer": 3
      },
      {
        "Id": 38,
        "question": "Which of the following is a disadvantage of using arrays?",
        "optionList": [
          "Fixed size",
          "Inefficient random access",
          "Limited to one dimension",
          "Lack of sequential storage"
        ],
        "answer": 0
      },
      {
        "Id": 39,
        "question": "What is the primary advantage of using multi-dimensional arrays?",
        "optionList": [
          "Compact storage",
          "Variable size",
          "Improved cache locality",
          "Predictable performance"
        ],
        "answer": 2
      },
      {
        "Id": 40,
        "question": "What is the primary advantage of using arrays over other data structures?",
        "optionList": [
          "Flexibility",
          "Dynamic resizing",
          "Random access",
          "Ease of traversal"
        ],
        "answer": 2
      },
      {
        "Id": 41,
        "question": "In a two-dimensional array, how are elements typically accessed?",
        "optionList": [
          "Using pointers",
          "Using nested loops",
          "Using a hash function",
          "Using recursion"
        ],
        "answer": 1
      },
      {
        "Id": 42,
        "question": "Which of the following operations can be performed efficiently on arrays?",
        "optionList": [
          "Insertion and deletion in the middle",
          "Dynamic resizing",
          "Storing heterogeneous data types",
          "Random access to elements"
        ],
        "answer": 3
      },
      {
        "Id": 43,
        "question": "What operation is used to remove an element from an array at a specified index?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Replacement",
          "Modification"
        ],
        "answer": 1
      },
      {
        "Id": 44,
        "question": "In an array of size 10, what is the index of the last element?",
        "optionList": [
          "8",
          "9",
          "10",
          "11"
        ],
        "answer": 1
      },
      {
        "Id": 45,
        "question": "Which of the following data structures does not allow random access to elements?",
        "optionList": [
          "Array",
          "Linked list",
          "Queue",
          "Stack"
        ],
        "answer": 1
      },
      {
        "Id": 46,
        "question": "What is the term used to describe the process of increasing the size of a dynamic array when it reaches its capacity?",
        "optionList": [
          "Expansion",
          "Resizing",
          "Reallocation",
          "Growth"
        ],
        "answer": 2
      },
      {
        "Id": 47,
        "question": "Which of the following operations on arrays has a time complexity of \\( O(1) \\)?",
        "optionList": [
          "Searching",
          "Insertion at the beginning",
          "Deletion at the end",
          "Accessing an element by index"
        ],
        "answer": 3
      },
      {
        "Id": 48,
        "question": "What is the term used to describe the action of combining two or more arrays into a single array?",
        "optionList": [
          "Joining",
          "Appending",
          "Merging",
          "Concatenating"
        ],
        "answer": 3
      },
      {
        "Id": 49,
        "question": "Which of the following statements is true about dynamic arrays?",
        "optionList": [
          "They have a fixed size",
          "They are also known as static arrays",
          "They allow elements to be added or removed at any position",
          "They have a constant time complexity for resizing"
        ],
        "answer": 2
      },
      {
        "Id": 50,
        "question": "In a two-dimensional array, what does each row represent?",
        "optionList": [
          "A column",
          "An element",
          "A data structure",
          "A dimension"
        ],
        "answer": 1
      },
      {
        "Id": 51,
        "question": "What is the term used to describe the process of reducing the size of a dynamic array when it is less than half full?",
        "optionList": [
          "Compression",
          "Shrinking",
          "Contraction",
          "Reduction"
        ],
        "answer": 2
      },
      {
        "Id": 52,
        "question": "Which of the following operations on arrays has a time complexity of \\( O(n) \\)?",
        "optionList": [
          "Accessing an element by index",
          "Insertion at the end",
          "Deletion at the beginning",
          "Searching for an element"
        ],
        "answer": 3
      },
      {
        "Id": 53,
        "question": "In a multi-dimensional array, how many indices are required to access an element?",
        "optionList": [
          "One",
          "Two",
          "Three",
          "Depends on the number of dimensions"
        ],
        "answer": 3
      },
      {
        "Id": 54,
        "question": "Which of the following operations is NOT supported by static arrays?",
        "optionList": [
          "Insertion at the beginning",
          "Deletion at the end",
          "Changing the size dynamically",
          "Accessing elements by index"
        ],
        "answer": 2
      },
      {
        "Id": 55,
        "question": "What is the term used to describe the maximum number of elements that can be stored in an array?",
        "optionList": [
          "Capacity",
          "Size",
          "Length",
          "Dimension"
        ],
        "answer": 0
      },
      {
        "Id": 56,
        "question": "What is the term used to describe the position of an element in an array relative to the beginning?",
        "optionList": [
          "Position",
          "Index",
          "Offset",
          "Pointer"
        ],
        "answer": 1
      },
      {
        "Id": 57,
        "question": "Which of the following operations on arrays has a time complexity of \\( O(n^2) \\)?",
        "optionList": [
          "Accessing an element by index",
          "Insertion at the beginning",
          "Deletion at the end",
          "Searching for an element"
        ],
        "answer": 1
      },
      {
        "Id": 58,
        "question": "In a two-dimensional array, what does each column represent?",
        "optionList": [
          "A row",
          "An element",
          "A data structure",
          "A dimension"
        ],
        "answer": 0
      },
      {
        "Id": 59,
        "question": "What is the term used to describe the process of removing duplicate elements from an array?",
        "optionList": [
          "Deduplication",
          "Uniqueness",
          "Distinctification",
          "Elimination"
        ],
        "answer": 0
      },
      {
        "Id": 60,
        "question": "Which of the following is an advantage of using arrays over linked lists?",
        "optionList": [
          "Dynamic resizing",
          "Efficient insertion and deletion at arbitrary positions",
          "Contiguous memory allocation",
          "Simple implementation of dynamic data structures"
        ],
        "answer": 2
      },
      {
        "Id": 61,
        "question": "What is the term used to describe an array in which elements are stored in a circular fashion?",
        "optionList": [
          "Circular array",
          "Ring buffer",
          "Round array",
          "Circular buffer"
        ],
        "answer": 3
      },
      {
        "Id": 62,
        "question": "What is the term used to describe the process of arranging the elements of an array in ascending or descending order?",
        "optionList": [
          "Sorting",
          "Ordering",
          "Sequencing",
          "Arranging"
        ],
        "answer": 0
      },
      {
        "Id": 63,
        "question": "In a two-dimensional array, what does each dimension represent?",
        "optionList": [
          "Rows and columns",
          "Height and width",
          "Length and breadth",
          "X and Y coordinates"
        ],
        "answer": 0
      },
      {
        "Id": 64,
        "question": "Which of the following operations on arrays has a time complexity of \\( O(n \\log n) \\)?",
        "optionList": [
          "Accessing an element by index",
          "Insertion at the end",
          "Sorting",
          "Searching for an element"
        ],
        "answer": 2
      },
      {
        "Id": 65,
        "question": "What is the term used to describe the process of rearranging the elements of an array to reverse their order?",
        "optionList": [
          "Reversal",
          "Inversion",
          "Rotation",
          "Reflection"
        ],
        "answer": 0
      },
      {
        "Id": 66,
        "question": "Which of the following operations is NOT commonly performed on arrays?",
        "optionList": [
          "Traversal",
          "Insertion at a random position",
          "Deletion of specific elements",
          "Update of elements at specific indices"
        ],
        "answer": 1
      },
      {
        "Id": 67,
        "question": "What is the term used to describe the process of splitting an array into two or more smaller arrays?",
        "optionList": [
          "Division",
          "Segmentation",
          "Partitioning",
          "Subdivision"
        ],
        "answer": 2
      },
      {
        "Id": 68,
        "question": "In a circular buffer, how are elements typically accessed?",
        "optionList": [
          "Using pointers",
          "Using modular arithmetic",
          "Using nested loops",
          "Using recursion"
        ],
        "answer": 1
      },
      {
        "Id": 69,
        "question": "Which of the following data structures is often implemented using arrays?",
        "optionList": [
          "Stack",
          "Queue",
          "Linked list",
          "Binary tree"
        ],
        "answer": 0
      },
      {
        "Id": 70,
        "question": "What is the term used to describe an array in which elements are stored in a non-contiguous manner?",
        "optionList": [
          "Sparse array",
          "Dispersed array",
          "Distributed array",
          "Fragmented array"
        ],
        "answer": 0
      },
      {
        "Id": 71,
        "question": "What is the term used to describe the process of converting a multi-dimensional array into a one-dimensional array?",
        "optionList": [
          "Flattening",
          "Compression",
          "Concatenation",
          "Conversion"
        ],
        "answer": 0
      },
      {
        "Id": 72,
        "question": "What is the term used to describe the process of rearranging the elements of an array such that all the negative elements appear before all the positive elements?",
        "optionList": [
          "Reordering",
          "Shuffling",
          "Partitioning",
          "Segregating"
        ],
        "answer": 3
      },
      {
        "Id": 73,
        "question": "In a circular buffer, what happens when the write pointer reaches the end of the buffer?",
        "optionList": [
          "It stops writing new elements",
          "It overwrites the oldest element in the buffer",
          "It starts writing from the beginning of the buffer",
          "It reallocates memory for a larger buffer"
        ],
        "answer": 1
      },
      {
        "Id": 74,
        "question": "What is the term used to describe the process of finding the largest or smallest element in an array?",
        "optionList": [
          "Max/min computation",
          "Extremum determination",
          "Peak/valley detection",
          "Boundary identification"
        ],
        "answer": 0
      },
      {
        "Id": 75,
        "question": "What is the term used to describe an array in which each element is associated with a unique key?",
        "optionList": [
          "Dictionary",
          "Hash table",
          "Sparse array",
          "Tuple"
        ],
        "answer": 0
      },
      {
        "Id": 76,
        "question": "In a multi-dimensional array, how are elements typically accessed?",
        "optionList": [
          "Using pointers",
          "Using a hash function",
          "Using nested loops",
          "Using recursion"
        ],
        "answer": 2
      },
      {
        "Id": 77,
        "question": "What is the term used to describe an array in which elements are stored in sorted order?",
        "optionList": [
          "Sorted array",
          "Ordered array",
          "Sorted list",
          "Sequence array"
        ],
        "answer": 0
      },
      {
        "Id": 78,
        "question": "What is a characteristic feature of a singly linked list?",
        "optionList": [
          "Each node points to the previous node",
          "Each node points to the next node",
          "Each node contains multiple elements",
          "Each node is allocated a fixed amount of memory"
        ],
        "answer": 1
      },
      {
        "Id": 79,
        "question": "In a singly linked list, what is the reference in the last node typically set to?",
        "optionList": [
          "Null",
          "The first node",
          "The previous node",
          "The head of the list"
        ],
        "answer": 0
      },
      {
        "Id": 80,
        "question": "Which of the following operations on linked lists has a time complexity of \\( O(1) \\)?",
        "optionList": [
          "Traversal",
          "Deletion at the end",
          "Deletion at the beginning",
          "Insertion at the end"
        ],
        "answer": 2
      },
      {
        "Id": 81,
        "question": "What is a benefit of using a doubly linked list over a singly linked list?",
        "optionList": [
          "Reduced memory overhead",
          "Simpler implementation",
          "Faster traversal",
          "Ability to traverse in both directions"
        ],
        "answer": 3
      },
      {
        "Id": 82,
        "question": "In a circular linked list, what is the reference in the last node typically set to?",
        "optionList": [
          "Null",
          "The first node",
          "The previous node",
          "The head of the list"
        ],
        "answer": 1
      },
      {
        "Id": 83,
        "question": "Which of the following operations on linked lists has a time complexity of \\( O(n) \\)?",
        "optionList": [
          "Insertion at the beginning",
          "Deletion at the end",
          "Traversal",
          "Deletion at a specific position"
        ],
        "answer": 3
      },
      {
        "Id": 84,
        "question": "How are nodes connected in a doubly linked list?",
        "optionList": [
          "Each node points to the previous node",
          "Each node points to the next node",
          "Each node points to both the previous and next nodes",
          "Nodes are not connected in a doubly linked list"
        ],
        "answer": 2
      },
      {
        "Id": 85,
        "question": "What operation is used to add a new node to the end of a linked list?",
        "optionList": [
          "Insertion at the beginning",
          "Insertion at a specific position",
          "Insertion at the end",
          "Insertion after a specific node"
        ],
        "answer": 2
      },
      {
        "Id": 86,
        "question": "What is the primary advantage of using linked lists over arrays?",
        "optionList": [
          "Random access to elements",
          "Fixed size",
          "Dynamic size",
          "Contiguous memory allocation"
        ],
        "answer": 2
      },
      {
        "Id": 87,
        "question": "What is the term used to describe a linked list in which the last node points back to the first node?",
        "optionList": [
          "Circular linked list",
          "Singly linked list",
          "Doubly linked list",
          "Linear linked list"
        ],
        "answer": 0
      },
      {
        "Id": 88,
        "question": "What is a disadvantage of using circular linked lists?",
        "optionList": [
          "Inability to insert elements",
          "Lack of memory allocation",
          "Difficulty in traversal",
          "Difficulty in determining the end of the list"
        ],
        "answer": 3
      },
      {
        "Id": 89,
        "question": "In a doubly linked list, what operation is used to remove a node from the middle of the list?",
        "optionList": [
          "Deletion at the beginning",
          "Deletion at the end",
          "Deletion at a specific position",
          "Traversal"
        ],
        "answer": 2
      },
      {
        "Id": 90,
        "question": "What is a key characteristic of a circular linked list?",
        "optionList": [
          "Each node points to the next node",
          "Each node contains multiple elements",
          "The last node points to the first node",
          "The list has a fixed size"
        ],
        "answer": 2
      },
      {
        "Id": 91,
        "question": "Which of the following statements about linked lists is true?",
        "optionList": [
          "Linked lists have a fixed size",
          "Linked lists allow for constant-time random access",
          "Linked lists use contiguous memory allocation",
          "Linked lists support efficient insertion and deletion at arbitrary positions"
        ],
        "answer": 3
      },
      {
        "Id": 92,
        "question": "What operation is used to add a new node after a specific node in a linked list?",
        "optionList": [
          "Insertion at the beginning",
          "Insertion at a specific position",
          "Insertion at the end",
          "Insertion after a specific node"
        ],
        "answer": 3
      },
      {
        "Id": 93,
        "question": "In a circular linked list, what is the reference in the last node set to?",
        "optionList": [
          "Null",
          "The first node",
          "The previous node",
          "The head of the list"
        ],
        "answer": 1
      },
      {
        "Id": 94,
        "question": "What is the term used to describe a linked list in which each node points to the previous and next nodes?",
        "optionList": [
          "Doubly linked list",
          "Singly linked list",
          "Circular linked list",
          "Linear linked list"
        ],
        "answer": 0
      },
      {
        "Id": 95,
        "question": "In a doubly linked list, what operation is used to add a new node to the beginning of the list?",
        "optionList": [
          "Insertion at the end",
          "Insertion at the beginning",
          "Insertion after a specific node",
          "Traversal"
        ],
        "answer": 1
      },
      {
        "Id": 96,
        "question": "In a doubly linked list, what operation is used to add a new node after a specific node?",
        "optionList": [
          "Insertion at the beginning",
          "Insertion at a specific position",
          "Insertion at the end",
          "Insertion after a specific node"
        ],
        "answer": 3
      },
      {
        "Id": 97,
        "question": "In a stack, which operation adds an element to the top of the stack?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Remove"
        ],
        "answer": 0
      },
      {
        "Id": 98,
        "question": "Which operation removes the top element from a stack?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 1
      },
      {
        "Id": 99,
        "question": "What is the result of peeking into an empty stack?",
        "optionList": [
          "Error",
          "Null",
          "Undefined",
          "Exception"
        ],
        "answer": 0
      },
      {
        "Id": 100,
        "question": "How is a stack typically implemented using an array?",
        "optionList": [
          "FIFO (First-In-First-Out)",
          "LIFO (Last-In-First-Out)",
          "Random access",
          "Linked nodes"
        ],
        "answer": 1
      },
      {
        "Id": 101,
        "question": "In a stack implemented with an array, what happens when the stack is full and a push operation is attempted?",
        "optionList": [
          "The element is added at the bottom",
          "The element is added at the top",
          "The stack expands automatically",
          "An overflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 102,
        "question": "Which of the following is an advantage of using a linked list to implement a stack over an array?",
        "optionList": [
          "Constant-time access to elements",
          "More memory-efficient",
          "Dynamic size",
          "Easier implementation"
        ],
        "answer": 2
      },
      {
        "Id": 103,
        "question": "What is the time complexity of the push operation in a stack implemented using a linked list?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 104,
        "question": "In a stack, which operation retrieves the top element without removing it?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 2
      },
      {
        "Id": 105,
        "question": "What happens when a pop operation is performed on an empty stack?",
        "optionList": [
          "Error",
          "Null",
          "Undefined",
          "Exception"
        ],
        "answer": 0
      },
      {
        "Id": 106,
        "question": "In which scenario would a stack data structure be most appropriate?",
        "optionList": [
          "Storing sorted elements",
          "Implementing a queue",
          "Performing recursive function calls",
          "Representing a graph structure"
        ],
        "answer": 2
      },
      {
        "Id": 107,
        "question": "Which data structure can be used to reverse the order of elements in a list efficiently?",
        "optionList": [
          "Stack",
          "Queue",
          "Linked List",
          "Binary Tree"
        ],
        "answer": 0
      },
      {
        "Id": 108,
        "question": "What operation is used to remove an element from the top of a stack?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 1
      },
      {
        "Id": 109,
        "question": "Which of the following is a valid application of a stack?",
        "optionList": [
          "Sorting elements in ascending order",
          "Implementing a First-In-First-Out (FIFO) data structure",
          "Storing elements in a random order",
          "Evaluating arithmetic expressions"
        ],
        "answer": 3
      },
      {
        "Id": 110,
        "question": "What is the time complexity of the pop operation in a stack implemented using an array?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 111,
        "question": "In a stack implemented with an array, what happens when the stack is empty and a pop operation is attempted?",
        "optionList": [
          "The element is removed from the top",
          "The element is removed from the bottom",
          "The stack contracts automatically",
          "An underflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 112,
        "question": "Which operation is used to add an element to the top of a stack?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Remove"
        ],
        "answer": 0
      },
      {
        "Id": 113,
        "question": "What is the time complexity of the peek operation in a stack implemented using a linked list?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 114,
        "question": "What happens when a peek operation is performed on an empty stack?",
        "optionList": [
          "Error",
          "Null",
          "Undefined",
          "Exception"
        ],
        "answer": 0
      },
      {
        "Id": 115,
        "question": "In a stack, which operation removes an element from the top of the stack?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 1
      },
      {
        "Id": 116,
        "question": "What is the outcome of popping from an empty stack?",
        "optionList": [
          "Error",
          "Null",
          "Undefined",
          "Exception"
        ],
        "answer": 0
      },
      {
        "Id": 117,
        "question": "Which data structure can efficiently reverse the order of elements?",
        "optionList": [
          "Stack",
          "Queue",
          "Linked List",
          "Binary Tree"
        ],
        "answer": 0
      },
      {
        "Id": 118,
        "question": "What is the time complexity of the push operation in a stack implemented using an array?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 119,
        "question": "In a stack implemented with an array, what occurs when attempting to push onto a full stack?",
        "optionList": [
          "The element is added at the bottom",
          "The element is added at the top",
          "The stack expands automatically",
          "An overflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 120,
        "question": "What is the time complexity of the pop operation in a stack implemented using a linked list?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 121,
        "question": "In a stack implemented with a linked list, what happens when attempting to pop from an empty stack?",
        "optionList": [
          "The element is removed from the top",
          "The element is removed from the bottom",
          "The stack contracts automatically",
          "An underflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 122,
        "question": "What is the outcome of peeking into an empty stack?",
        "optionList": [
          "Error",
          "Null",
          "Undefined",
          "Exception"
        ],
        "answer": 0
      },
      {
        "Id": 123,
        "question": "Which operation retrieves the top element from a stack without removing it?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 2
      },
      {
        "Id": 124,
        "question": "In a stack implemented with a linked list, what is the time complexity of the push operation?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 125,
        "question": "In a stack, which operation adds an element to the top?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 0
      },
      {
        "Id": 126,
        "question": "What is the result of popping from an empty stack?",
        "optionList": [
          "Error",
          "Null",
          "Undefined",
          "Exception"
        ],
        "answer": 0
      },
      {
        "Id": 127,
        "question": "Which data structure is best suited for reversing the order of elements?",
        "optionList": [
          "Stack",
          "Queue",
          "Linked List",
          "Binary Tree"
        ],
        "answer": 0
      },
      {
        "Id": 128,
        "question": "Which operation removes an element from the top of a stack?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 1
      },
      {
        "Id": 129,
        "question": "In a stack implemented with an array, what happens when trying to pop from an empty stack?",
        "optionList": [
          "The element is removed from the top",
          "The element is removed from the bottom",
          "The stack contracts automatically",
          "An underflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 130,
        "question": "Which operation adds an element to the top of a stack?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 0
      },
      {
        "Id": 131,
        "question": "In a stack implemented with a linked list, what happens when trying to push onto a full stack?",
        "optionList": [
          "The element is added at the bottom",
          "The element is added at the top",
          "The stack expands automatically",
          "An overflow condition occurs"
        ],
        "answer": 1
      },
      {
        "Id": 132,
        "question": "In a stack, what operation is used to retrieve the top element without removing it?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 2
      },
      {
        "Id": 133,
        "question": "In a stack, what operation adds an element to the top?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 0
      },
      {
        "Id": 134,
        "question": "Which of the following operations retrieves the top element from a stack without removing it?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 2
      },
      {
        "Id": 135,
        "question": "In a stack, what operation retrieves the top element without removing it?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 2
      },
      {
        "Id": 136,
        "question": "What operation removes an element from the top of a stack?",
        "optionList": [
          "Push",
          "Pop",
          "Peek",
          "Insert"
        ],
        "answer": 1
      },
      {
        "Id": 137,
        "question": "In a stack implemented with an array, what occurs when attempting to pop from an empty stack?",
        "optionList": [
          "The element is removed from the top",
          "The element is removed from the bottom",
          "The stack contracts automatically",
          "An underflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 138,
        "question": "Which of the following is a type of queue that allows elements to be added and removed only from opposite ends?",
        "optionList": [
          "Linear queue",
          "Circular queue",
          "Priority queue",
          "Double-ended queue"
        ],
        "answer": 3
      },
      {
        "Id": 139,
        "question": "In a queue, which operation adds an element to the rear end?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Insert"
        ],
        "answer": 0
      },
      {
        "Id": 140,
        "question": "What is the time complexity of the enqueue operation in a queue implemented using an array?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 141,
        "question": "Which type of queue allows elements to wrap around to the beginning if the end of the queue is reached?",
        "optionList": [
          "Linear queue",
          "Circular queue",
          "Priority queue",
          "Double-ended queue"
        ],
        "answer": 1
      },
      {
        "Id": 142,
        "question": "What operation is used to remove an element from the front end of a queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Insert"
        ],
        "answer": 1
      },
      {
        "Id": 143,
        "question": "In a queue implemented with a linked list, what happens when trying to dequeue from an empty queue?",
        "optionList": [
          "The element is removed from the front",
          "The element is removed from the rear",
          "The queue contracts automatically",
          "An underflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 144,
        "question": "Which of the following is an advantage of using a linked list to implement a queue over an array?",
        "optionList": [
          "Constant-time access to elements",
          "More memory-efficient",
          "Dynamic size",
          "Easier implementation"
        ],
        "answer": 2
      },
      {
        "Id": 145,
        "question": "What operation retrieves the front element from a queue without removing it?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Insert"
        ],
        "answer": 2
      },
      {
        "Id": 146,
        "question": "Which type of queue assigns a priority to each element and removes the highest priority element first?",
        "optionList": [
          "Linear queue",
          "Circular queue",
          "Priority queue",
          "Double-ended queue"
        ],
        "answer": 2
      },
      {
        "Id": 147,
        "question": "In a queue implemented with an array, what happens when attempting to dequeue from an empty queue?",
        "optionList": [
          "The element is removed from the front",
          "The element is removed from the rear",
          "The queue contracts automatically",
          "An underflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 148,
        "question": "Which type of queue has a fixed size and cannot accommodate additional elements once full?",
        "optionList": [
          "Linear queue",
          "Circular queue",
          "Priority queue",
          "Double-ended queue"
        ],
        "answer": 0
      },
      {
        "Id": 149,
        "question": "In a circular queue, what happens when the rear pointer reaches the end of the array?",
        "optionList": [
          "It stops accepting new elements",
          "It wraps around to the beginning of the array",
          "It automatically resizes the array",
          "It throws an error"
        ],
        "answer": 1
      },
      {
        "Id": 150,
        "question": "What operation retrieves the front element from a queue and removes it?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Insert"
        ],
        "answer": 1
      },
      {
        "Id": 151,
        "question": "In a priority queue, which element would be removed first?",
        "optionList": [
          "The element with the lowest priority",
          "The element with the highest priority",
          "The element added last",
          "The element added first"
        ],
        "answer": 1
      },
      {
        "Id": 152,
        "question": "What is the time complexity of the dequeue operation in a queue implemented using an array?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 153,
        "question": "Which type of queue is suitable for scenarios where elements are processed based on their priority?",
        "optionList": [
          "Linear queue",
          "Circular queue",
          "Priority queue",
          "Double-ended queue"
        ],
        "answer": 2
      },
      {
        "Id": 154,
        "question": "In a queue implemented with a linked list, what happens when attempting to dequeue from an empty queue?",
        "optionList": [
          "The element is removed from the front",
          "The element is removed from the rear",
          "The queue contracts automatically",
          "An underflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 155,
        "question": "Which operation adds an element to the rear end of a queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Insert"
        ],
        "answer": 0
      },
      {
        "Id": 156,
        "question": "What is the primary advantage of using a circular queue over a linear queue?",
        "optionList": [
          "Faster enqueue operation",
          "Dynamic resizing",
          "Efficient memory usage",
          "Simpler implementation"
        ],
        "answer": 2
      },
      {
        "Id": 157,
        "question": "Which type of queue allows elements to be added and removed from both ends?",
        "optionList": [
          "Linear queue",
          "Circular queue",
          "Priority queue",
          "Double-ended queue"
        ],
        "answer": 3
      },
      {
        "Id": 158,
        "question": "Which of the following is a characteristic of a linear queue?",
        "optionList": [
          "Elements can be added or removed from any position",
          "Elements can only be added or removed from the rear and front ends",
          "Elements can only be added or removed from the front end",
          "Elements can only be added or removed from the rear end"
        ],
        "answer": 3
      },
      {
        "Id": 159,
        "question": "What operation is used to add an element to a queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Front",
          "Rear"
        ],
        "answer": 0
      },
      {
        "Id": 160,
        "question": "Which of the following is an application of a priority queue?",
        "optionList": [
          "Maintaining the order of elements based on their insertion time",
          "Sorting elements in ascending order",
          "Simulating processes in an operating system",
          "Implementing a stack data structure"
        ],
        "answer": 2
      },
      {
        "Id": 161,
        "question": "Which data structure is best suited for implementing a priority queue?",
        "optionList": [
          "Stack",
          "Queue",
          "Linked List",
          "Binary Heap"
        ],
        "answer": 3
      },
      {
        "Id": 162,
        "question": "In a circular queue, what happens when the rear pointer reaches the end of the queue?",
        "optionList": [
          "It stops",
          "It wraps around to the beginning of the queue",
          "It becomes null",
          "It throws an error"
        ],
        "answer": 1
      },
      {
        "Id": 163,
        "question": "Which of the following is a disadvantage of using an array to implement a queue?",
        "optionList": [
          "Dynamic size",
          "Constant-time access to elements",
          "Limited capacity",
          "Efficient memory usage"
        ],
        "answer": 2
      },
      {
        "Id": 164,
        "question": "Which type of queue allows elements to be added or removed from both ends?",
        "optionList": [
          "Linear queue",
          "Circular queue",
          "Priority queue",
          "Double-ended queue"
        ],
        "answer": 3
      },
      {
        "Id": 165,
        "question": "What operation is used to remove an element from the front of a queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Insert"
        ],
        "answer": 1
      },
      {
        "Id": 166,
        "question": "In a priority queue, which element is removed first?",
        "optionList": [
          "The element with the highest priority",
          "The element with the lowest priority",
          "The element that was added first",
          "The element that was added last"
        ],
        "answer": 0
      },
      {
        "Id": 167,
        "question": "What is the primary purpose of a circular queue?",
        "optionList": [
          "To store elements in a circular arrangement",
          "To enable elements to be added or removed from any position",
          "To avoid the overhead of resizing when adding elements",
          "To allow elements to be added or removed from both ends"
        ],
        "answer": 2
      },
      {
        "Id": 168,
        "question": "Which of the following is an advantage of using a circular queue over a linear queue?",
        "optionList": [
          "Dynamic size",
          "Efficient memory usage",
          "Constant-time access to elements",
          "Easier implementation"
        ],
        "answer": 1
      },
      {
        "Id": 169,
        "question": "What operation is used to add an element to the rear of a queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Insert"
        ],
        "answer": 0
      },
      {
        "Id": 170,
        "question": "In a queue, which operation removes an element from the front?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Insert"
        ],
        "answer": 1
      },
      {
        "Id": 171,
        "question": "What is the time complexity of the enqueue operation in a priority queue implemented using a binary heap?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 172,
        "question": "Which of the following is a disadvantage of using a linked list to implement a queue?",
        "optionList": [
          "Limited capacity",
          "Dynamic size",
          "Efficient memory usage",
          "Constant-time access to elements"
        ],
        "answer": 0
      },
      {
        "Id": 173,
        "question": "What is the time complexity of the dequeue operation in a priority queue implemented using a binary heap?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 174,
        "question": "In a circular queue, what happens when attempting to enqueue to a full queue?",
        "optionList": [
          "The element is added at the end",
          "The element is added at the beginning",
          "The queue expands automatically",
          "An overflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 175,
        "question": "Which of the following is not a type of queue?",
        "optionList": [
          "Linear queue",
          "Binary queue",
          "Circular queue",
          "Priority queue"
        ],
        "answer": 1
      },
      {
        "Id": 176,
        "question": "In a priority queue, elements with ______ priority are removed first.",
        "optionList": [
          "Lowest",
          "Highest",
          "Random",
          "Equal"
        ],
        "answer": 1
      },
      {
        "Id": 177,
        "question": "Which data structure is commonly used to implement a priority queue?",
        "optionList": [
          "Array",
          "Linked List",
          "Heap",
          "Stack"
        ],
        "answer": 2
      },
      {
        "Id": 178,
        "question": "In a circular queue, what is the condition for the queue to be full?",
        "optionList": [
          "Front equals rear",
          "Front is one less than rear",
          "Rear is one less than front",
          "Rear is one less than the maximum size"
        ],
        "answer": 1
      },
      {
        "Id": 179,
        "question": "Which operation in a queue returns the element at the front without removing it?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Size"
        ],
        "answer": 2
      },
      {
        "Id": 180,
        "question": "Which type of queue supports elements being added or removed from both ends?",
        "optionList": [
          "Linear queue",
          "Circular queue",
          "Priority queue",
          "Double-ended queue"
        ],
        "answer": 3
      },
      {
        "Id": 181,
        "question": "Which of the following is an application of a circular queue?",
        "optionList": [
          "Storing a list of sorted integers",
          "Implementing a stack",
          "Handling printer job scheduling",
          "Representing a binary search tree"
        ],
        "answer": 2
      },
      {
        "Id": 182,
        "question": "What happens when trying to dequeue from an empty queue?",
        "optionList": [
          "An overflow condition occurs",
          "The front pointer is moved",
          "The rear pointer is moved",
          "An underflow condition occurs"
        ],
        "answer": 3
      },
      {
        "Id": 183,
        "question": "Which operation is used to add an element to the rear of a queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Front",
          "Rear"
        ],
        "answer": 0
      },
      {
        "Id": 184,
        "question": "What is the time complexity of the enqueue operation in a circular queue?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 185,
        "question": "In a circular queue, what is the condition for the queue to be empty?",
        "optionList": [
          "Front equals rear",
          "Front is one less than rear",
          "Rear is one less than front",
          "Rear is one less than the maximum size"
        ],
        "answer": 0
      },
      {
        "Id": 186,
        "question": "Which operation in a queue returns the number of elements currently in the queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Size",
          "Capacity"
        ],
        "answer": 2
      },
      {
        "Id": 187,
        "question": "Which of the following operations is not supported by a priority queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Peek",
          "Sort"
        ],
        "answer": 3
      },
      {
        "Id": 188,
        "question": "In a circular queue, how can you differentiate between a full and empty condition?",
        "optionList": [
          "By checking if front equals rear",
          "By checking if front is one less than rear",
          "By checking if rear is one less than front",
          "By checking if rear is one less than the maximum size"
        ],
        "answer": 0
      },
      {
        "Id": 189,
        "question": "What is the space complexity of a circular queue with a maximum size of n?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 1
      },
      {
        "Id": 190,
        "question": "Which type of queue allows elements to be added or removed from any position?",
        "optionList": [
          "Linear queue",
          "Circular queue",
          "Priority queue",
          "Double-ended queue"
        ],
        "answer": 3
      },
      {
        "Id": 191,
        "question": "In a priority queue, elements are ordered based on their ______.",
        "optionList": [
          "Insertion order",
          "Priority level",
          "Randomness",
          "Value"
        ],
        "answer": 1
      },
      {
        "Id": 192,
        "question": "Which operation is used to add an element to the front of a queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Front",
          "Insert"
        ],
        "answer": 3
      },
      {
        "Id": 193,
        "question": "In a priority queue, what happens when two elements have the same priority level?",
        "optionList": [
          "They are added in random order",
          "The first one added is dequeued first",
          "The last one added is dequeued first",
          "Their order is determined by their values"
        ],
        "answer": 1
      },
      {
        "Id": 194,
        "question": "What is the primary advantage of using a circular queue?",
        "optionList": [
          "Dynamic size",
          "Efficient memory usage",
          "No need to check for full condition",
          "Constant-time access to elements"
        ],
        "answer": 2
      },
      {
        "Id": 195,
        "question": "In a circular queue, what happens when the rear pointer exceeds the maximum size?",
        "optionList": [
          "It stops",
          "It wraps around to the beginning of the queue",
          "It becomes null",
          "It throws an error"
        ],
        "answer": 1
      },
      {
        "Id": 196,
        "question": "Which of the following operations is supported by both linear and circular queues?",
        "optionList": [
          "Dequeue from the front",
          "Enqueue to the rear",
          "Peek at the front element",
          "Remove an element from any position"
        ],
        "answer": 1
      },
      {
        "Id": 197,
        "question": "What operation is used to add an element to the front of a queue?",
        "optionList": [
          "Enqueue",
          "Dequeue",
          "Front",
          "Insert"
        ],
        "answer": 3
      },
      {
        "Id": 198,
        "question": "What is the maximum number of children a node can have in a binary tree?",
        "optionList": [
          "2",
          "3",
          "1",
          "Unlimited"
        ],
        "answer": 0
      },
      {
        "Id": 199,
        "question": "In a binary search tree (BST), what is the property of the left subtree of a node?",
        "optionList": [
          "All elements are greater than the node",
          "All elements are less than the node",
          "All elements are equal to the node",
          "No elements are allowed"
        ],
        "answer": 1
      },
      {
        "Id": 200,
        "question": "What type of tree ensures that the heights of the left and right subtrees of every node differ by at most one?",
        "optionList": [
          "AVL tree",
          "Binary search tree",
          "Red-black tree",
          "B-tree"
        ],
        "answer": 0
      },
      {
        "Id": 201,
        "question": "Which of the following trees guarantees logarithmic time complexity for insertion, deletion, and search operations in the worst case?",
        "optionList": [
          "Binary search tree",
          "AVL tree",
          "Red-black tree",
          "Binary tree"
        ],
        "answer": 1
      },
      {
        "Id": 202,
        "question": "In a red-black tree, what color is the root node?",
        "optionList": [
          "Red",
          "Black",
          "Blue",
          "Green"
        ],
        "answer": 1
      },
      {
        "Id": 203,
        "question": "Which tree traversal visits the current node before its child nodes?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 1
      },
      {
        "Id": 204,
        "question": "In which tree traversal do you visit the left subtree, then the current node, and finally the right subtree?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 0
      },
      {
        "Id": 205,
        "question": "Which traversal algorithm can be used to get elements in non-decreasing order from a binary search tree?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 0
      },
      {
        "Id": 206,
        "question": "What operation is used to remove a node from a binary search tree?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Traversal",
          "Search"
        ],
        "answer": 1
      },
      {
        "Id": 207,
        "question": "Which of the following tree traversals is used to create a copy of a binary tree?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 1
      },
      {
        "Id": 208,
        "question": "What is the time complexity of inserting a node into a binary search tree with n nodes in the worst case?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 209,
        "question": "Which operation is used to visit all the nodes of a tree in a systematic way?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Traversal",
          "Search"
        ],
        "answer": 2
      },
      {
        "Id": 210,
        "question": "In which tree traversal algorithm is the root node visited last?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 2
      },
      {
        "Id": 211,
        "question": "Which tree traversal visits the child nodes before visiting the current node?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 1
      },
      {
        "Id": 212,
        "question": "Which traversal algorithm is used to evaluate the postfix expression of a binary expression tree?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 2
      },
      {
        "Id": 213,
        "question": "In a binary tree, what is the maximum number of nodes at height h?",
        "optionList": [
          "2^h - 1",
          "2^h",
          "h + 1",
          "h - 1"
        ],
        "answer": 1
      },
      {
        "Id": 214,
        "question": "Which of the following tree traversals starts from the root, visits the left subtree, then the right subtree?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 1
      },
      {
        "Id": 215,
        "question": "What operation is used to find a specific node in a binary search tree?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Traversal",
          "Search"
        ],
        "answer": 3
      },
      {
        "Id": 216,
        "question": "Which of the following trees is self-balancing and maintains balance during insertions and deletions?",
        "optionList": [
          "AVL tree",
          "Binary search tree",
          "Red-black tree",
          "Binary tree"
        ],
        "answer": 0
      },
      {
        "Id": 217,
        "question": "What is the time complexity of finding the minimum element in a binary search tree?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 218,
        "question": "Which of the following tree traversals visits the current node after visiting its children?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 2
      },
      {
        "Id": 219,
        "question": "What is the time complexity of finding the maximum element in a binary search tree?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 220,
        "question": "Which tree traversal algorithm is used to create a postfix expression from an expression tree?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 2
      },
      {
        "Id": 221,
        "question": "In a binary search tree, which operation is used to find the successor of a given node?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Successor",
          "Predecessor"
        ],
        "answer": 2
      },
      {
        "Id": 222,
        "question": "In a binary tree, what is the maximum number of edges between the root and any leaf node?",
        "optionList": [
          "Height",
          "Depth",
          "Breadth",
          "Level"
        ],
        "answer": 0
      },
      {
        "Id": 223,
        "question": "Which of the following statements is true regarding AVL trees?",
        "optionList": [
          "They do not require balancing",
          "They are always completely balanced",
          "They may require rotations to maintain balance",
          "They have a fixed height"
        ],
        "answer": 2
      },
      {
        "Id": 224,
        "question": "What is the height of a leaf node in a binary tree?",
        "optionList": [
          "0",
          "1",
          "-1",
          "It varies"
        ],
        "answer": 0
      },
      {
        "Id": 225,
        "question": "In a binary tree, what is the maximum number of nodes at depth d?",
        "optionList": [
          "2^d - 1",
          "2^d",
          "d + 1",
          "d - 1"
        ],
        "answer": 1
      },
      {
        "Id": 226,
        "question": "Which tree traversal visits the current node before visiting its children?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 1
      },
      {
        "Id": 227,
        "question": "Which of the following tree traversals starts from the root, visits the right subtree, then the left subtree?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Reverse inorder"
        ],
        "answer": 3
      },
      {
        "Id": 228,
        "question": "In a binary search tree, what property must be satisfied for all nodes in the left subtree of a node?",
        "optionList": [
          "They must be greater than the node",
          "They must be less than the node",
          "They must be equal to the node",
          "They can be any value"
        ],
        "answer": 1
      },
      {
        "Id": 229,
        "question": "Which tree traversal algorithm visits the left subtree, then the right subtree, and finally the current node?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 2
      },
      {
        "Id": 230,
        "question": "In a binary tree, what is the maximum number of leaf nodes at any level?",
        "optionList": [
          "0",
          "1",
          "2",
          "Unlimited"
        ],
        "answer": 2
      },
      {
        "Id": 231,
        "question": "Which of the following operations can be performed efficiently using a binary search tree?",
        "optionList": [
          "Finding the maximum element",
          "Finding the minimum element",
          "Finding the median element",
          "Finding the kth largest element"
        ],
        "answer": 3
      },
      {
        "Id": 232,
        "question": "In a binary tree, what is the maximum number of nodes at level l?",
        "optionList": [
          "2^l - 1",
          "2^l",
          "l + 1",
          "l - 1"
        ],
        "answer": 1
      },
      {
        "Id": 233,
        "question": "Which of the following trees is used for efficient searching, insertion, and deletion operations?",
        "optionList": [
          "AVL tree",
          "Binary search tree",
          "Red-black tree",
          "Binary tree"
        ],
        "answer": 1
      },
      {
        "Id": 234,
        "question": "What is the height of a binary tree with only one node?",
        "optionList": [
          "0",
          "1",
          "-1",
          "Undefined"
        ],
        "answer": 0
      },
      {
        "Id": 235,
        "question": "Which tree traversal algorithm visits the current node after visiting its left and right subtrees?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 2
      },
      {
        "Id": 236,
        "question": "In a binary search tree, which operation is used to find the predecessor of a given node?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Successor",
          "Predecessor"
        ],
        "answer": 3
      },
      {
        "Id": 237,
        "question": "In a binary tree, what is the maximum number of nodes at depth d if the tree is complete?",
        "optionList": [
          "2^d - 1",
          "2^d",
          "d + 1",
          "d - 1"
        ],
        "answer": 0
      },
      {
        "Id": 238,
        "question": "What is the minimum possible height of a binary tree with n nodes?",
        "optionList": [
          "0",
          "1",
          "log₂(n)",
          "n"
        ],
        "answer": 2
      },
      {
        "Id": 239,
        "question": "Which tree traversal algorithm can be used to create a sorted array from a binary search tree?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 0
      },
      {
        "Id": 240,
        "question": "What operation is used to find the depth of a given node in a binary tree?",
        "optionList": [
          "Depth",
          "Height",
          "Level",
          "Order"
        ],
        "answer": 0
      },
      {
        "Id": 241,
        "question": "In a binary search tree, which operation is used to find the minimum element?",
        "optionList": [
          "Min",
          "Max",
          "Find",
          "Search"
        ],
        "answer": 0
      },
      {
        "Id": 242,
        "question": "Which tree traversal algorithm visits the leaf nodes before visiting their parent nodes?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 2
      },
      {
        "Id": 243,
        "question": "What is the maximum number of nodes in a binary tree with height h?",
        "optionList": [
          "2^h",
          "2^h - 1",
          "h + 1",
          "h - 1"
        ],
        "answer": 0
      },
      {
        "Id": 244,
        "question": "Which of the following statements is true regarding red-black trees?",
        "optionList": [
          "They are always balanced",
          "They have a fixed height",
          "They may require recoloring and rotations to maintain balance",
          "They are only used in special cases"
        ],
        "answer": 2
      },
      {
        "Id": 245,
        "question": "What operation is used to find the depth of a binary tree?",
        "optionList": [
          "Depth",
          "Height",
          "Level",
          "Order"
        ],
        "answer": 1
      },
      {
        "Id": 246,
        "question": "Which tree traversal algorithm visits the current node between its left and right subtrees?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 1
      },
      {
        "Id": 247,
        "question": "In a binary search tree, what is the property of the right subtree of a node?",
        "optionList": [
          "All elements are greater than the node",
          "All elements are less than the node",
          "All elements are equal to the node",
          "No elements are allowed"
        ],
        "answer": 0
      },
      {
        "Id": 248,
        "question": "Which operation is used to find the maximum element in a binary search tree?",
        "optionList": [
          "Min",
          "Max",
          "Find",
          "Search"
        ],
        "answer": 1
      },
      {
        "Id": 249,
        "question": "In a binary tree, what is the maximum number of leaf nodes?",
        "optionList": [
          "0",
          "1",
          "2",
          "Unlimited"
        ],
        "answer": 2
      },
      {
        "Id": 250,
        "question": "Which of the following trees guarantees logarithmic time complexity for insertion, deletion, and search operations?",
        "optionList": [
          "AVL tree",
          "Binary search tree",
          "Red-black tree",
          "Binary tree"
        ],
        "answer": 0
      },
      {
        "Id": 251,
        "question": "What is the maximum possible height of a binary tree with n nodes?",
        "optionList": [
          "n",
          "log₂(n)",
          "n - 1",
          "log₂(n + 1)"
        ],
        "answer": 2
      },
      {
        "Id": 252,
        "question": "In a binary tree, what is the minimum number of nodes at level l?",
        "optionList": [
          "2^l - 1",
          "2^l",
          "l + 1",
          "l - 1"
        ],
        "answer": 0
      },
      {
        "Id": 253,
        "question": "Which of the following trees is not self-balancing?",
        "optionList": [
          "AVL tree",
          "Red-black tree",
          "Binary search tree",
          "B-tree"
        ],
        "answer": 2
      },
      {
        "Id": 254,
        "question": "What is the maximum possible height of a binary search tree with n nodes?",
        "optionList": [
          "n",
          "log₂(n)",
          "n - 1",
          "log₂(n + 1)"
        ],
        "answer": 1
      },
      {
        "Id": 255,
        "question": "In a binary search tree, what operation is used to find the maximum element?",
        "optionList": [
          "Min",
          "Max",
          "Find",
          "Search"
        ],
        "answer": 1
      },
      {
        "Id": 256,
        "question": "Which tree traversal algorithm visits the leaf nodes after visiting their parent nodes?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 2
      },
      {
        "Id": 257,
        "question": "In a binary tree, what is the maximum number of nodes at level l if the tree is complete?",
        "optionList": [
          "2^l - 1",
          "2^l",
          "l + 1",
          "l - 1"
        ],
        "answer": 1
      },
      {
        "Id": 258,
        "question": "What operation is used to find the successor of a given node in a binary search tree?",
        "optionList": [
          "Insertion",
          "Deletion",
          "Successor",
          "Predecessor"
        ],
        "answer": 2
      },
      {
        "Id": 259,
        "question": "In a binary tree, what is the maximum possible height if the tree is balanced?",
        "optionList": [
          "n",
          "log₂(n)",
          "n - 1",
          "log₂(n + 1)"
        ],
        "answer": 1
      },
      {
        "Id": 260,
        "question": "What is the time complexity of searching for an element in a binary search tree with n nodes in the worst case?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 261,
        "question": "In a binary tree, what is the maximum number of nodes at height h if the tree is complete?",
        "optionList": [
          "2^h",
          "2^h - 1",
          "h + 1",
          "h - 1"
        ],
        "answer": 1
      },
      {
        "Id": 262,
        "question": "Which tree traversal algorithm visits the current node after visiting its children?",
        "optionList": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 2
      },
      {
        "Id": 263,
        "question": "Which of the following trees maintains a balance factor to ensure balance?",
        "optionList": [
          "AVL tree",
          "Binary search tree",
          "Red-black tree",
          "Binary tree"
        ],
        "answer": 0
      },
      {
        "Id": 264,
        "question": "In a binary search tree, what is the maximum number of children a node can have?",
        "optionList": [
          "0",
          "1",
          "2",
          "Unlimited"
        ],
        "answer": 2
      },
      {
        "Id": 265,
        "question": "In a binary search tree, what is the property of the left subtree of a node?",
        "optionList": [
          "All elements are greater than the node",
          "All elements are less than the node",
          "All elements are equal to the node",
          "No elements are allowed"
        ],
        "answer": 1
      },
      {
        "Id": 266,
        "question": "What is a hash function used for in data structures?",
        "optionList": [
          "To encrypt data",
          "To retrieve data from memory",
          "To map data of arbitrary size to fixed-size values",
          "To sort data efficiently"
        ],
        "answer": 2
      },
      {
        "Id": 267,
        "question": "Which of the following is a property of a good hash function?",
        "optionList": [
          "Collisions are minimized",
          "Output is randomly generated",
          "Output size is variable",
          "Output is identical for similar inputs"
        ],
        "answer": 0
      },
      {
        "Id": 268,
        "question": "Which collision resolution technique uses linked lists to store collided elements?",
        "optionList": [
          "Linear probing",
          "Quadratic probing",
          "Chaining",
          "Double hashing"
        ],
        "answer": 2
      },
      {
        "Id": 269,
        "question": "In open addressing, what is done when a collision occurs?",
        "optionList": [
          "The collided elements are stored in separate buckets",
          "The hash function is rehashed",
          "The collided elements are stored in a linked list",
          "The next available slot in the hash table is found"
        ],
        "answer": 3
      },
      {
        "Id": 270,
        "question": "What is the purpose of a load factor in hashing?",
        "optionList": [
          "To determine the number of elements in the hash table",
          "To calculate the size of the hash table",
          "To measure the efficiency of the hash function",
          "To determine when to resize the hash table"
        ],
        "answer": 3
      },
      {
        "Id": 271,
        "question": "Which of the following is an advantage of open addressing over chaining?",
        "optionList": [
          "Better memory utilization",
          "Lower time complexity for insertion",
          "Avoidance of clustering",
          "Simplicity of implementation"
        ],
        "answer": 0
      },
      {
        "Id": 272,
        "question": "Which collision resolution technique rehashes the key by adding an offset to the initial hash value?",
        "optionList": [
          "Linear probing",
          "Quadratic probing",
          "Chaining",
          "Double hashing"
        ],
        "answer": 1
      },
      {
        "Id": 273,
        "question": "In chaining, how are collided elements stored?",
        "optionList": [
          "In contiguous memory locations",
          "In separate buckets",
          "In adjacent cells of the hash table",
          "In linked lists"
        ],
        "answer": 3
      },
      {
        "Id": 274,
        "question": "Which of the following is a disadvantage of using linear probing for collision resolution?",
        "optionList": [
          "Risk of clustering",
          "Complexity of implementation",
          "Poor memory utilization",
          "Higher time complexity for retrieval"
        ],
        "answer": 0
      },
      {
        "Id": 275,
        "question": "What is the primary disadvantage of using open addressing for collision resolution?",
        "optionList": [
          "Poor memory utilization",
          "Higher time complexity for insertion",
          "Limited applicability to small datasets",
          "Difficulty in implementing resizing"
        ],
        "answer": 0
      },
      {
        "Id": 276,
        "question": "Which of the following is not a typical hash function requirement?",
        "optionList": [
          "Deterministic",
          "Fast computation",
          "Fixed-size output",
          "Variable-size output"
        ],
        "answer": 3
      },
      {
        "Id": 277,
        "question": "Which technique involves finding an alternative location within the hash table when a collision occurs?",
        "optionList": [
          "Chaining",
          "Linear probing",
          "Quadratic probing",
          "Double hashing"
        ],
        "answer": 1
      },
      {
        "Id": 278,
        "question": "What data structure is commonly used to implement chaining in hashing?",
        "optionList": [
          "Linked list",
          "Array",
          "Stack",
          "Queue"
        ],
        "answer": 0
      },
      {
        "Id": 279,
        "question": "Which collision resolution technique involves rehashing with a different hash function when a collision occurs?",
        "optionList": [
          "Linear probing",
          "Quadratic probing",
          "Chaining",
          "Double hashing"
        ],
        "answer": 3
      },
      {
        "Id": 280,
        "question": "What is the primary purpose of a hash table?",
        "optionList": [
          "To sort data efficiently",
          "To store data in contiguous memory locations",
          "To provide constant-time access to elements",
          "To map keys to values for efficient retrieval"
        ],
        "answer": 3
      },
      {
        "Id": 281,
        "question": "Which of the following collision resolution techniques is known for its simplicity and ease of implementation?",
        "optionList": [
          "Chaining",
          "Linear probing",
          "Quadratic probing",
          "Double hashing"
        ],
        "answer": 0
      },
      {
        "Id": 282,
        "question": "What is the worst-case time complexity for searching in a hash table with chaining collision resolution?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 283,
        "question": "In open addressing, what is done when all slots in the hash table are occupied?",
        "optionList": [
          "The hash table is resized",
          "Collisions are ignored",
          "Elements are stored in a linked list",
          "The load factor is adjusted"
        ],
        "answer": 0
      },
      {
        "Id": 284,
        "question": "Which collision resolution technique involves storing collided elements in nearby slots within the hash table?",
        "optionList": [
          "Chaining",
          "Linear probing",
          "Quadratic probing",
          "Double hashing"
        ],
        "answer": 1
      },
      {
        "Id": 285,
        "question": "What is the primary purpose of a hash function in hashing?",
        "optionList": [
          "To determine the load factor",
          "To calculate the size of the hash table",
          "To map keys to indices in the hash table",
          "To store collided elements in linked lists"
        ],
        "answer": 2
      },
      {
        "Id": 286,
        "question": "Which of the following is a characteristic of a good hash function?",
        "optionList": [
          "Produces the same hash value for different inputs",
          "Produces a uniform distribution of hash values",
          "Requires a large number of hash collisions",
          "Generates hash values of variable length"
        ],
        "answer": 1
      },
      {
        "Id": 287,
        "question": "In open addressing, what is the significance of the load factor?",
        "optionList": [
          "It determines the number of slots in the hash table",
          "It affects the performance and efficiency of the hash table",
          "It determines the length of the linked lists in chaining",
          "It controls the resizing of the hash table"
        ],
        "answer": 1
      },
      {
        "Id": 288,
        "question": "Which collision resolution technique involves storing collided elements in linked lists?",
        "optionList": [
          "Linear probing",
          "Quadratic probing",
          "Chaining",
          "Double hashing"
        ],
        "answer": 2
      },
      {
        "Id": 289,
        "question": "Which of the following is not a common hash function?",
        "optionList": [
          "Division method",
          "Multiplication method",
          "Exponential method",
          "Folding method"
        ],
        "answer": 2
      },
      {
        "Id": 290,
        "question": "What is the primary disadvantage of using chaining for collision resolution?",
        "optionList": [
          "Higher memory overhead",
          "Poor time complexity for insertion",
          "Increased risk of hash collisions",
          "Difficulty in implementing resizing"
        ],
        "answer": 0
      },
      {
        "Id": 291,
        "question": "Which of the following is a probing technique used in open addressing?",
        "optionList": [
          "Separate chaining",
          "Linear probing",
          "Bucketing",
          "Reducing"
        ],
        "answer": 1
      },
      {
        "Id": 292,
        "question": "What is the worst-case time complexity for searching in a hash table with open addressing?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 293,
        "question": "Which of the following is a drawback of using open addressing for collision resolution?",
        "optionList": [
          "Increased memory overhead",
          "Inability to handle collisions efficiently",
          "Difficulty in implementing resizing",
          "Higher time complexity for retrieval"
        ],
        "answer": 2
      },
      {
        "Id": 294,
        "question": "In double hashing, what is the significance of the second hash function?",
        "optionList": [
          "It computes the load factor of the hash table",
          "It determines the length of the linked lists in chaining",
          "It provides an alternative hash value when a collision occurs",
          "It controls the resizing of the hash table"
        ],
        "answer": 2
      },
      {
        "Id": 295,
        "question": "Which of the following is an advantage of using open addressing for collision resolution?",
        "optionList": [
          "Better memory utilization",
          "Lower time complexity for insertion",
          "Avoidance of clustering",
          "Simplicity of implementation"
        ],
        "answer": 3
      },
      {
        "Id": 296,
        "question": "What is the primary purpose of collision resolution techniques in hashing?",
        "optionList": [
          "To eliminate hash collisions entirely",
          "To minimize the occurrence of hash collisions",
          "To increase the load factor of the hash table",
          "To maximize the efficiency of the hash function"
        ],
        "answer": 1
      },
      {
        "Id": 297,
        "question": "In which collision resolution technique are collided elements stored in adjacent slots?",
        "optionList": [
          "Chaining",
          "Linear probing",
          "Quadratic probing",
          "Double hashing"
        ],
        "answer": 1
      },
      {
        "Id": 298,
        "question": "What is the purpose of a hash function in hashing?",
        "optionList": [
          "To determine the load factor",
          "To calculate the size of the hash table",
          "To map keys to indices in the hash table",
          "To store collided elements in linked lists"
        ],
        "answer": 2
      },
      {
        "Id": 299,
        "question": "Which of the following collision resolution techniques is based on storing collided elements in separate data structures?",
        "optionList": [
          "Linear probing",
          "Quadratic probing",
          "Chaining",
          "Double hashing"
        ],
        "answer": 2
      },
      {
        "Id": 300,
        "question": "Which hashing technique resolves collisions by searching for the next empty slot in the hash table?",
        "optionList": [
          "Linear probing",
          "Quadratic probing",
          "Chaining",
          "Double hashing"
        ],
        "answer": 0
      },
      {
        "Id": 301,
        "question": "Which of the following is NOT a common method for computing hash codes?",
        "optionList": [
          "Division method",
          "Mid-square method",
          "Cube method",
          "Folding method"
        ],
        "answer": 2
      },
      {
        "Id": 302,
        "question": "In double hashing, what is the role of the second hash function?",
        "optionList": [
          "It generates hash codes for the stored elements.",
          "It determines the length of linked lists in chaining.",
          "It provides an alternative hash value in case of collisions.",
          "It controls the resizing of the hash table."
        ],
        "answer": 2
      },
      {
        "Id": 303,
        "question": "Which of the following collision resolution techniques requires more memory overhead?",
        "optionList": [
          "Linear probing",
          "Quadratic probing",
          "Chaining",
          "Double hashing"
        ],
        "answer": 2
      },
      {
        "Id": 304,
        "question": "What is the time complexity of searching in a hash table with chaining?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 305,
        "question": "Which collision resolution technique involves a step size that varies based on the original hash index?",
        "optionList": [
          "Linear probing",
          "Quadratic probing",
          "Chaining",
          "Double hashing"
        ],
        "answer": 1
      },
      {
        "Id": 306,
        "question": "What is the primary purpose of a load factor in hashing?",
        "optionList": [
          "To determine the number of slots in the hash table",
          "To calculate the size of the hash table",
          "To assess the performance of the hash table",
          "To control the resizing of the hash table"
        ],
        "answer": 2
      },
      {
        "Id": 307,
        "question": "In double hashing, what happens if the second hash function returns 0?",
        "optionList": [
          "It indicates a hash collision.",
          "It indicates an empty slot in the hash table.",
          "It triggers the resizing of the hash table.",
          "It is not possible for the second hash function to return 0."
        ],
        "answer": 1
      },
      {
        "Id": 308,
        "question": "Which of the following is NOT a common collision resolution technique?",
        "optionList": [
          "Linear probing",
          "Quadratic probing",
          "Exponential probing",
          "Double hashing"
        ],
        "answer": 2
      },
      {
        "Id": 309,
        "question": "What is the primary goal of collision resolution techniques in hashing?",
        "optionList": [
          "To eliminate hash collisions entirely",
          "To minimize the occurrence of hash collisions",
          "To maximize the load factor of the hash table",
          "To optimize the hash function for better performance"
        ],
        "answer": 1
      },
      {
        "Id": 310,
        "question": "What does time complexity measure in data structures?",
        "optionList": [
          "Memory usage",
          "Time taken for compilation",
          "Execution time with respect to input size",
          "Number of operations performed"
        ],
        "answer": 2
      },
      {
        "Id": 311,
        "question": "Which notation is commonly used to describe the upper bound of an algorithm's time complexity?",
        "optionList": [
          "Theta notation",
          "Big O notation",
          "Omega notation",
          "Little O notation"
        ],
        "answer": 1
      },
      {
        "Id": 312,
        "question": "What does Big O notation represent in the context of data structure analysis?",
        "optionList": [
          "Best-case scenario",
          "Average-case scenario",
          "Worst-case scenario",
          "Amortized analysis"
        ],
        "answer": 2
      },
      {
        "Id": 313,
        "question": "Which of the following statements about time complexity is true?",
        "optionList": [
          "Time complexity describes the exact time taken by an algorithm.",
          "Time complexity provides a lower bound on the execution time.",
          "Time complexity considers the impact of hardware on execution time.",
          "Time complexity helps in comparing algorithms in terms of their efficiency."
        ],
        "answer": 3
      },
      {
        "Id": 314,
        "question": "In Big O notation, O(n) represents:",
        "optionList": [
          "Constant time complexity",
          "Linear time complexity",
          "Quadratic time complexity",
          "Exponential time complexity"
        ],
        "answer": 1
      },
      {
        "Id": 315,
        "question": "Which of the following is true about the best-case time complexity of an algorithm?",
        "optionList": [
          "It represents the average time taken by the algorithm.",
          "It represents the lowest possible time taken by the algorithm.",
          "It is always the same as the worst-case time complexity.",
          "It is denoted using Big O notation."
        ],
        "answer": 1
      },
      {
        "Id": 316,
        "question": "What does space complexity measure in data structures?",
        "optionList": [
          "Execution time of an algorithm",
          "Number of operations performed by an algorithm",
          "Amount of memory used by an algorithm",
          "Size of the input data"
        ],
        "answer": 2
      },
      {
        "Id": 317,
        "question": "Which of the following is NOT considered while analyzing the time complexity of an algorithm?",
        "optionList": [
          "Input size",
          "Memory usage",
          "Number of operations",
          "Execution time"
        ],
        "answer": 1
      },
      {
        "Id": 318,
        "question": "Amortized analysis is used to:",
        "optionList": [
          "Find the best-case time complexity of an algorithm",
          "Analyze the average time complexity of an algorithm",
          "Determine the worst-case time complexity of an algorithm",
          "Analyze the time complexity of an algorithm over a sequence of operations"
        ],
        "answer": 3
      },
      {
        "Id": 319,
        "question": "What does Omega notation represent in the context of time complexity analysis?",
        "optionList": [
          "Upper bound",
          "Lower bound",
          "Exact time taken by an algorithm",
          "Average time taken by an algorithm"
        ],
        "answer": 1
      },
      {
        "Id": 320,
        "question": "Which of the following is true about the worst-case time complexity?",
        "optionList": [
          "It represents the highest possible time taken by the algorithm.",
          "It is always the same as the best-case time complexity.",
          "It is represented using Omega notation.",
          "It is not useful for analyzing algorithms."
        ],
        "answer": 0
      },
      {
        "Id": 321,
        "question": "What is the time complexity of an algorithm with O(1)?",
        "optionList": [
          "Constant time complexity",
          "Linear time complexity",
          "Quadratic time complexity",
          "Exponential time complexity"
        ],
        "answer": 0
      },
      {
        "Id": 322,
        "question": "When analyzing the time complexity of an algorithm, what is typically considered the primary factor?",
        "optionList": [
          "Number of input elements",
          "Size of the codebase",
          "Number of functions used",
          "Amount of memory used"
        ],
        "answer": 0
      },
      {
        "Id": 323,
        "question": "Which of the following represents the best-case time complexity of an algorithm?",
        "optionList": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 324,
        "question": "What does the term \"asymptotic analysis\" refer to in data structure analysis?",
        "optionList": [
          "Analysis of algorithms in terms of their worst-case scenarios",
          "Analysis of algorithms in terms of their average-case scenarios",
          "Analysis of algorithms as input size approaches infinity",
          "Analysis of algorithms with fixed input sizes"
        ],
        "answer": 2
      },
      {
        "Id": 325,
        "question": "What does the notation O(log n) represent in terms of time complexity?",
        "optionList": [
          "Constant time complexity",
          "Linear time complexity",
          "Logarithmic time complexity",
          "Quadratic time complexity"
        ],
        "answer": 2
      },
      {
        "Id": 326,
        "question": "Which of the following time complexities grows the fastest as the input size increases?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 3
      },
      {
        "Id": 327,
        "question": "Which notation is used to represent the upper bound of an algorithm's time complexity?",
        "optionList": [
          "Omega notation",
          "Big O notation",
          "Theta notation",
          "Little O notation"
        ],
        "answer": 1
      },
      {
        "Id": 328,
        "question": "What does the term \"average-case scenario\" refer to in time complexity analysis?",
        "optionList": [
          "The lowest possible time taken by an algorithm",
          "The highest possible time taken by an algorithm",
          "The time taken by an algorithm for an average input",
          "The time taken by an algorithm for specific inputs"
        ],
        "answer": 2
      },
      {
        "Id": 329,
        "question": "Which of the following is true about amortized analysis?",
        "optionList": [
          "It is only applicable to worst-case scenarios.",
          "It analyzes the average time complexity of an algorithm.",
          "It considers the cumulative effect of a sequence of operations.",
          "It is used to find the exact time taken by an algorithm."
        ],
        "answer": 2
      },
      {
        "Id": 330,
        "question": "In the context of time complexity analysis, what does the term \"worst-case scenario\" refer to?",
        "optionList": [
          "The scenario with the highest possible time taken by an algorithm.",
          "The scenario with the lowest possible time taken by an algorithm.",
          "The scenario with average time taken by an algorithm.",
          "The scenario with constant time taken by an algorithm."
        ],
        "answer": 0
      },
      {
        "Id": 331,
        "question": "Which notation is used to represent the lower bound of an algorithm's time complexity?",
        "optionList": [
          "Omega notation",
          "Big O notation",
          "Theta notation",
          "Little O notation"
        ],
        "answer": 0
      },
      {
        "Id": 332,
        "question": "What does the term \"space complexity\" refer to in data structure analysis?",
        "optionList": [
          "The amount of memory used by an algorithm.",
          "The number of input elements.",
          "The execution time of an algorithm.",
          "The size of the codebase."
        ],
        "answer": 0
      },
      {
        "Id": 333,
        "question": "Which of the following best describes amortized analysis?",
        "optionList": [
          "Analyzing the average time complexity of an algorithm.",
          "Analyzing the time complexity of an algorithm over a sequence of operations.",
          "Analyzing the worst-case time complexity of an algorithm.",
          "Analyzing the best-case time complexity of an algorithm."
        ],
        "answer": 1
      },
      {
        "Id": 334,
        "question": "What is the significance of \"best, average, and worst-case scenarios\" in time complexity analysis?",
        "optionList": [
          "They provide different perspectives on the performance of an algorithm.",
          "They represent different algorithms for the same problem.",
          "They determine the input size for the algorithm.",
          "They represent different implementations of the same algorithm."
        ],
        "answer": 0
      },
      {
        "Id": 335,
        "question": "In Big O notation, what does O(n^2) represent?",
        "optionList": [
          "Constant time complexity",
          "Linear time complexity",
          "Quadratic time complexity",
          "Logarithmic time complexity"
        ],
        "answer": 2
      },
      {
        "Id": 336,
        "question": "Which of the following is NOT considered when analyzing space complexity?",
        "optionList": [
          "Number of input elements",
          "Memory usage by variables",
          "Size of the codebase",
          "Execution time of an algorithm"
        ],
        "answer": 3
      },
      {
        "Id": 337,
        "question": "What is the purpose of analyzing the time complexity of an algorithm?",
        "optionList": [
          "To determine the size of the input data",
          "To compare the efficiency of different algorithms",
          "To calculate the number of operations performed",
          "To evaluate the memory usage of the algorithm"
        ],
        "answer": 1
      },
      {
        "Id": 338,
        "question": "Which of the following time complexities grows the slowest as the input size increases?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 339,
        "question": "In Big O notation, what does O(log n) represent?",
        "optionList": [
          "Constant time complexity",
          "Linear time complexity",
          "Logarithmic time complexity",
          "Quadratic time complexity"
        ],
        "answer": 2
      },
      {
        "Id": 340,
        "question": "What is the primary goal of analyzing space complexity?",
        "optionList": [
          "To determine the execution time of an algorithm",
          "To compare the memory usage of different algorithms",
          "To evaluate the efficiency of different algorithms",
          "To calculate the number of operations performed by an algorithm"
        ],
        "answer": 1
      },
      {
        "Id": 341,
        "question": "Which notation is used to represent the upper bound of the time complexity of an algorithm?",
        "optionList": [
          "Omega notation",
          "Big O notation",
          "Theta notation",
          "Little o notation"
        ],
        "answer": 1
      },
      {
        "Id": 342,
        "question": "Which of the following is true about the average-case time complexity?",
        "optionList": [
          "It represents the highest possible time taken by an algorithm.",
          "It is analyzed over a sequence of operations.",
          "It is not useful for analyzing algorithms.",
          "It considers the cumulative effect of a sequence of operations."
        ],
        "answer": 3
      },
      {
        "Id": 343,
        "question": "What is the purpose of analyzing the space complexity of an algorithm?",
        "optionList": [
          "To evaluate the efficiency of different algorithms",
          "To compare the execution time of different algorithms",
          "To determine the size of the input data",
          "To compare the memory usage of different algorithms"
        ],
        "answer": 3
      },
      {
        "Id": 344,
        "question": "What does the term \"worst-case scenario\" refer to in time complexity analysis?",
        "optionList": [
          "The lowest possible time taken by an algorithm",
          "The average time taken by an algorithm",
          "The highest possible time taken by an algorithm",
          "The time taken by an algorithm for specific inputs"
        ],
        "answer": 2
      },
      {
        "Id": 345,
        "question": "Which of the following is NOT a common factor considered in analyzing time complexity?",
        "optionList": [
          "Number of input elements",
          "Size of the codebase",
          "Number of functions used",
          "Amount of memory used"
        ],
        "answer": 3
      },
      {
        "Id": 346,
        "question": "What does the term \"asymptotic analysis\" aim to achieve in the context of algorithms?",
        "optionList": [
          "To analyze the performance of algorithms with fixed input sizes",
          "To analyze the performance of algorithms in terms of their best-case scenarios",
          "To analyze the performance of algorithms as input size approaches infinity",
          "To analyze the performance of algorithms in terms of their worst-case scenarios"
        ],
        "answer": 2
      },
      {
        "Id": 347,
        "question": "In Big O notation, what does O(n) represent?",
        "optionList": [
          "Constant time complexity",
          "Linear time complexity",
          "Quadratic time complexity",
          "Logarithmic time complexity"
        ],
        "answer": 1
      },
      {
        "Id": 348,
        "question": "What does the term \"average-case scenario\" represent in time complexity analysis?",
        "optionList": [
          "The lowest possible time taken by an algorithm",
          "The highest possible time taken by an algorithm",
          "The time taken by an algorithm for specific inputs",
          "The time taken by an algorithm for an average input"
        ],
        "answer": 3
      },
      {
        "Id": 349,
        "question": "Which of the following notations is used to represent the tight bound of the time complexity of an algorithm?",
        "optionList": [
          "Big O notation",
          "Omega notation",
          "Theta notation",
          "Little o notation"
        ],
        "answer": 2
      },
      {
        "Id": 350,
        "question": "What is the primary focus of analyzing the time complexity of an algorithm?",
        "optionList": [
          "To determine the execution time of an algorithm",
          "To compare the efficiency of different algorithms",
          "To calculate the number of operations performed",
          "To evaluate the memory usage of the algorithm"
        ],
        "answer": 1
      },
      {
        "Id": 351,
        "question": "Which of the following time complexities represents the best performance?",
        "optionList": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 352,
        "question": "In space complexity analysis, what does the term \"memory usage\" refer to?",
        "optionList": [
          "The size of the input data",
          "The amount of memory required by an algorithm",
          "The efficiency of different algorithms",
          "The execution time of an algorithm"
        ],
        "answer": 1
      },
      {
        "Id": 353,
        "question": "What is the primary objective of analyzing space complexity?",
        "optionList": [
          "To determine the execution time of an algorithm",
          "To evaluate the efficiency of different algorithms",
          "To compare the memory usage of different algorithms",
          "To calculate the number of operations performed by an algorithm"
        ],
        "answer": 2
      },
      {
        "Id": 354,
        "question": "Which of the following time complexities grows logarithmically as the input size increases?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 355,
        "question": "What does the term \"average-case scenario\" indicate in time complexity analysis?",
        "optionList": [
          "The lowest possible time taken by an algorithm",
          "The highest possible time taken by an algorithm",
          "The time taken by an algorithm for specific inputs",
          "The time taken by an algorithm for an average input"
        ],
        "answer": 3
      },
      {
        "Id": 356,
        "question": "Which notation represents the lower bound of the time complexity of an algorithm?",
        "optionList": [
          "Big O notation",
          "Omega notation",
          "Theta notation",
          "Little o notation"
        ],
        "answer": 1
      },
      {
        "Id": 357,
        "question": "What is the primary purpose of asymptotic analysis in algorithms?",
        "optionList": [
          "To analyze algorithms with fixed input sizes",
          "To analyze algorithms in terms of their average-case scenarios",
          "To analyze algorithms as input size approaches infinity",
          "To analyze algorithms in terms of their worst-case scenarios"
        ],
        "answer": 2
      },
      {
        "Id": 358,
        "question": "Which of the following time complexities represents the worst performance?",
        "optionList": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n^2)"
        ],
        "answer": 3
      }
    ];
    return questionList;
  }
}