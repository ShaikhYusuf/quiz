export interface IQuestion {
  Id: number;
  question: string;
  optionList: string[];
  answer: number
};

export class QuestionCollectionAlgorithm {

  get(): IQuestion[] {

    let questionList = [
      {
        "Id": 1,
        "question": "Which of the following best describes time complexity analysis?",
        "optionList": [
          "It measures the amount of time an algorithm takes to execute.",
          "It measures the space an algorithm consumes during execution.",
          "It measures the number of iterations in an algorithm.",
          "It measures the number of comparisons in an algorithm."
        ],
        "answer": 0
      },
      {
        "Id": 2,
        "question": "What is the time complexity of an algorithm with a loop of n iterations, each containing a constant time operation?",
        "optionList": [
          "O(n)",
          "O(1)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 0
      },
      {
        "Id": 3,
        "question": "Which of the following statements is true regarding logarithmic time complexity?",
        "optionList": [
          "It grows linearly with the input size.",
          "It grows exponentially with the input size.",
          "It decreases as the input size increases.",
          "It grows slowly with the input size."
        ],
        "answer": 3
      },
      {
        "Id": 4,
        "question": "What is the time complexity of an algorithm that has nested loops, one iterating n times and the other iterating m times?",
        "optionList": [
          "O(n)",
          "O(m)",
          "O(n * m)",
          "O(n + m)"
        ],
        "answer": 2
      },
      {
        "Id": 5,
        "question": "Which of the following is an example of constant time complexity?",
        "optionList": [
          "Linear search",
          "Binary search",
          "Accessing an element in an array",
          "Bubble sort"
        ],
        "answer": 2
      },
      {
        "Id": 6,
        "question": "Space complexity analysis measures:",
        "optionList": [
          "The amount of time an algorithm takes to execute.",
          "The space an algorithm consumes during execution.",
          "The number of iterations in an algorithm.",
          "The number of comparisons in an algorithm."
        ],
        "answer": 1
      },
      {
        "Id": 7,
        "question": "What is the space complexity of an algorithm that creates an array of size n?",
        "optionList": [
          "O(n)",
          "O(1)",
          "O(log n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 8,
        "question": "Which of the following data structures typically has the highest space complexity?",
        "optionList": [
          "Arrays",
          "Linked lists",
          "Stacks",
          "Queues"
        ],
        "answer": 0
      },
      {
        "Id": 9,
        "question": "What is the space complexity of an algorithm that has a recursive function with a depth of n?",
        "optionList": [
          "O(n)",
          "O(log n)",
          "O(n^2)",
          "O(1)"
        ],
        "answer": 1
      },
      {
        "Id": 10,
        "question": "Which of the following is an example of linear space complexity?",
        "optionList": [
          "Binary search",
          "Quick sort",
          "Merge sort",
          "Selection sort"
        ],
        "answer": 2
      },
      {
        "Id": 11,
        "question": "What does Big O notation represent in asymptotic analysis?",
        "optionList": [
          "Upper bound",
          "Lower bound",
          "Exact bound",
          "None of the above"
        ],
        "answer": 0
      },
      {
        "Id": 12,
        "question": "Which notation represents the best-case time complexity of an algorithm?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "All of the above"
        ],
        "answer": 1
      },
      {
        "Id": 13,
        "question": "If a function f(n) is bounded both from above and below by g(n), which notation represents this relationship?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "None of the above"
        ],
        "answer": 2
      },
      {
        "Id": 14,
        "question": "What is the tightest upper bound of a function f(n) if f(n) = O(g(n))?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "None of the above"
        ],
        "answer": 0
      },
      {
        "Id": 15,
        "question": "Which notation represents the worst-case time complexity of an algorithm?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "All of the above"
        ],
        "answer": 0
      },
      {
        "Id": 16,
        "question": "Which case analysis provides a guarantee on the performance of an algorithm?",
        "optionList": [
          "Worst-case analysis",
          "Best-case analysis",
          "Average-case analysis",
          "None of the above"
        ],
        "answer": 0
      },
      {
        "Id": 17,
        "question": "In which case is the input that causes the algorithm to run slowest?",
        "optionList": [
          "Worst case",
          "Best case",
          "Average case",
          "None of the above"
        ],
        "answer": 0
      },
      {
        "Id": 18,
        "question": "Which case analysis is often used when dealing with randomized algorithms?",
        "optionList": [
          "Worst-case analysis",
          "Best-case analysis",
          "Average-case analysis",
          "None of the above"
        ],
        "answer": 2
      },
      {
        "Id": 19,
        "question": "Which case analysis is often used to evaluate the performance of an algorithm when the input is not skewed?",
        "optionList": [
          "Worst-case analysis",
          "Best-case analysis",
          "Average-case analysis",
          "None of the above"
        ],
        "answer": 2
      },
      {
        "Id": 20,
        "question": "Which case analysis provides an upper bound on the performance of an algorithm?",
        "optionList": [
          "Worst-case analysis",
          "Best-case analysis",
          "Average-case analysis",
          "None of the above"
        ],
        "answer": 0
      },
      {
        "Id": 21,
        "question": "What is the time complexity of a linear search algorithm?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 22,
        "question": "Which sorting algorithm typically has the worst-case time complexity of O(n^2)?",
        "optionList": [
          "Merge sort",
          "Quick sort",
          "Bubble sort",
          "Insertion sort"
        ],
        "answer": 2
      },
      {
        "Id": 23,
        "question": "Which of the following statements about time complexity analysis is false?",
        "optionList": [
          "It ignores constant factors.",
          "It provides an exact measurement of execution time.",
          "It measures the growth rate of an algorithm.",
          "It helps in comparing the efficiency of algorithms."
        ],
        "answer": 1
      },
      {
        "Id": 24,
        "question": "What is the time complexity of a binary search algorithm on a sorted array?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 25,
        "question": "Which of the following algorithms has the best time complexity for searching an element in a sorted array?",
        "optionList": [
          "Linear search",
          "Binary search",
          "Bubble sort",
          "Selection sort"
        ],
        "answer": 1
      },
      {
        "Id": 26,
        "question": "What is the space complexity of a recursive algorithm that has a depth of log n?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 27,
        "question": "Which data structure typically has the lowest space complexity for storing elements?",
        "optionList": [
          "Arrays",
          "Linked lists",
          "Hash tables",
          "Stacks"
        ],
        "answer": 1
      },
      {
        "Id": 28,
        "question": "Which of the following statements about space complexity analysis is true?",
        "optionList": [
          "It measures the amount of time an algorithm takes to execute.",
          "It measures the space an algorithm consumes during execution.",
          "It measures the number of iterations in an algorithm.",
          "It measures the number of comparisons in an algorithm."
        ],
        "answer": 1
      },
      {
        "Id": 29,
        "question": "What is the space complexity of an algorithm that creates a matrix of size n x n?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 2
      },
      {
        "Id": 30,
        "question": "Which of the following sorting algorithms typically has the highest space complexity?",
        "optionList": [
          "Merge sort",
          "Quick sort",
          "Bubble sort",
          "Insertion sort"
        ],
        "answer": 0
      },
      {
        "Id": 31,
        "question": "Which notation provides a lower bound on the growth rate of a function?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "All of the above"
        ],
        "answer": 1
      },
      {
        "Id": 32,
        "question": "Which of the following statements about Big Theta notation is true?",
        "optionList": [
          "It represents the worst-case scenario.",
          "It provides both upper and lower bounds.",
          "It is the same as Big O notation.",
          "It is used for average-case analysis."
        ],
        "answer": 1
      },
      {
        "Id": 33,
        "question": "If f(n) = Θ(g(n)), what can be said about the growth rate of f(n)?",
        "optionList": [
          "It grows faster than g(n).",
          "It grows slower than g(n).",
          "It grows at the same rate as g(n).",
          "It is not bounded by g(n)."
        ],
        "answer": 2
      },
      {
        "Id": 34,
        "question": "Which notation represents the average-case time complexity of an algorithm?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "None of the above"
        ],
        "answer": 3
      },
      {
        "Id": 35,
        "question": "Which of the following functions grows faster asymptotically: n^2 or 2^n?",
        "optionList": [
          "n^2",
          "2^n",
          "Both grow at the same rate",
          "None of the above"
        ],
        "answer": 1
      },
      {
        "Id": 36,
        "question": "Which of the following is true about best-case analysis?",
        "optionList": [
          "It provides an upper bound on the performance of an algorithm.",
          "It considers the input that makes the algorithm run the fastest.",
          "It is often used to analyze the performance of randomized algorithms.",
          "It is not useful in practice."
        ],
        "answer": 1
      },
      {
        "Id": 37,
        "question": "Which of the following sorting algorithms exhibits O(n) time complexity in the best-case scenario?",
        "optionList": [
          "Merge sort",
          "Quick sort",
          "Bubble sort",
          "Insertion sort"
        ],
        "answer": 3
      },
      {
        "Id": 38,
        "question": "Which case analysis provides a lower bound on the performance of an algorithm?",
        "optionList": [
          "Worst-case analysis",
          "Best-case analysis",
          "Average-case analysis",
          "None of the above"
        ],
        "answer": 0
      },
      {
        "Id": 39,
        "question": "Which of the following statements about average-case analysis is true?",
        "optionList": [
          "It provides a guarantee on the performance of an algorithm.",
          "It is useful when the input distribution is not known.",
          "It always gives the same result as worst-case analysis.",
          "It is only applicable to deterministic algorithms."
        ],
        "answer": 1
      },
      {
        "Id": 40,
        "question": "Which case analysis is used to analyze the performance of an algorithm on typical inputs?",
        "optionList": [
          "Worst-case analysis",
          "Best-case analysis",
          "Average-case analysis",
          "None of the above"
        ],
        "answer": 2
      },
      {
        "Id": 41,
        "question": "What is the time complexity of the following code snippet?\\nfor i in range(n):\\n    for j in range(n):\\n        print(i, j)\\n",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 2
      },
      {
        "Id": 42,
        "question": "Which of the following statements about time complexity analysis is correct?",
        "optionList": [
          "It measures the exact runtime of an algorithm.",
          "It considers the number of steps an algorithm takes relative to the size of its input.",
          "It focuses on the best-case scenario only.",
          "It is not influenced by the programming language used to implement the algorithm."
        ],
        "answer": 1
      },
      {
        "Id": 43,
        "question": "What is the time complexity of finding the maximum element in an unsorted array of size n?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n log n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 44,
        "question": "Which of the following algorithms has a time complexity of O(log n)?",
        "optionList": [
          "Linear search",
          "Bubble sort",
          "Merge sort",
          "Selection sort"
        ],
        "answer": 2
      },
      {
        "Id": 45,
        "question": "In time complexity analysis, which term describes the fastest growing function?",
        "optionList": [
          "Constant",
          "Logarithmic",
          "Linear",
          "Exponential"
        ],
        "answer": 3
      },
      {
        "Id": 46,
        "question": "What is the space complexity of the following code snippet?\\ndef some_function(n):\\n    data = [0] * n\\n    return data",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 1
      },
      {
        "Id": 47,
        "question": "Which of the following statements about space complexity analysis is correct?",
        "optionList": [
          "It measures the exact memory usage of an algorithm.",
          "It ignores the memory used by input parameters.",
          "It is unrelated to time complexity analysis.",
          "It is only concerned with the maximum memory used by an algorithm."
        ],
        "answer": 1
      },
      {
        "Id": 48,
        "question": "What is the space complexity of a recursive Fibonacci function?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(2^n)"
        ],
        "answer": 3
      },
      {
        "Id": 49,
        "question": "Which data structure typically has a space complexity of O(n)?",
        "optionList": [
          "Hash table",
          "Stack",
          "Linked list",
          "Array"
        ],
        "answer": 3
      },
      {
        "Id": 50,
        "question": "What is the space complexity of a depth-first search (DFS) algorithm on a graph with n vertices?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 1
      },
      {
        "Id": 51,
        "question": "Which of the following best describes Big O notation?",
        "optionList": [
          "It represents the average-case performance of an algorithm.",
          "It provides a lower bound on the growth rate of a function.",
          "It is used to express the tightest upper bound of an algorithm's runtime.",
          "It is equivalent to Big Theta notation."
        ],
        "answer": 2
      },
      {
        "Id": 52,
        "question": "If f(n) = O(g(n)), which of the following statements is true?",
        "optionList": [
          "f(n) grows slower than or at the same rate as g(n).",
          "f(n) grows faster than or at the same rate as g(n).",
          "f(n) grows strictly slower than g(n).",
          "f(n) and g(n) have no relationship."
        ],
        "answer": 0
      },
      {
        "Id": 53,
        "question": "Which notation is used to denote the average-case time complexity of an algorithm?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "None of the above"
        ],
        "answer": 3
      },
      {
        "Id": 54,
        "question": "Which of the following functions grows faster asymptotically: n! or 2^n?",
        "optionList": [
          "n!",
          "2^n",
          "Both grow at the same rate",
          "None of the above"
        ],
        "answer": 1
      },
      {
        "Id": 55,
        "question": "If f(n) = Ω(g(n)), what can be said about the growth rate of f(n)?",
        "optionList": [
          "It grows slower than or at the same rate as g(n).",
          "It grows faster than or at the same rate as g(n).",
          "It grows strictly slower than g(n).",
          "It grows strictly faster than g(n)."
        ],
        "answer": 1
      },
      {
        "Id": 56,
        "question": "Which of the following algorithms has the best-case time complexity of O(1)?",
        "optionList": [
          "Linear search",
          "Binary search",
          "Bubble sort",
          "Merge sort"
        ],
        "answer": 1
      },
      {
        "Id": 57,
        "question": "In which case is the input that causes the algorithm to run fastest?",
        "optionList": [
          "Worst case",
          "Best case",
          "Average case",
          "None of the above"
        ],
        "answer": 1
      },
      {
        "Id": 58,
        "question": "Which of the following sorting algorithms exhibits O(n^2) time complexity in the worst-case scenario?",
        "optionList": [
          "Merge sort",
          "Quick sort",
          "Bubble sort",
          "Insertion sort"
        ],
        "answer": 2
      },
      {
        "Id": 59,
        "question": "What is the time complexity of the following code snippet?\\nfor i in range(n):\\n    for j in range(i):\\n        print(i, j)",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 2
      },
      {
        "Id": 60,
        "question": "What is the time complexity of finding duplicates in an unsorted array of size n?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n log n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 61,
        "question": "Which of the following algorithms has a time complexity of O(1)?",
        "optionList": [
          "Insertion sort",
          "Selection sort",
          "Heap sort",
          "Constant-time algorithm"
        ],
        "answer": 3
      },
      {
        "Id": 62,
        "question": "In time complexity analysis, which term describes the slowest growing function?",
        "optionList": [
          "Constant",
          "Logarithmic",
          "Linear",
          "Exponential"
        ],
        "answer": 0
      },
      {
        "Id": 63,
        "question": "What is the space complexity of the following code snippet?\\ndef some_function(n):\\n    data = [0] * (2*n)\\n    return data",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 1
      },
      {
        "Id": 64,
        "question": "What is the space complexity of a recursive function that calculates the factorial of a number?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n!)"
        ],
        "answer": 2
      },
      {
        "Id": 65,
        "question": "Which data structure typically has a space complexity of O(log n)?",
        "optionList": [
          "Stack",
          "Linked list",
          "Binary tree",
          "Queue"
        ],
        "answer": 2
      },
      {
        "Id": 66,
        "question": "What is the space complexity of a breadth-first search (BFS) algorithm on a graph with n vertices?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 1
      },
      {
        "Id": 67,
        "question": "Which of the following best describes Big Omega notation?",
        "optionList": [
          "It represents the average-case performance of an algorithm.",
          "It provides an upper bound on the growth rate of a function.",
          "It is used to express the tightest lower bound of an algorithm's runtime.",
          "It is equivalent to Big Theta notation."
        ],
        "answer": 2
      },
      {
        "Id": 68,
        "question": "If f(n) = Ω(g(n)), which of the following statements is true?",
        "optionList": [
          "f(n) grows slower than or at the same rate as g(n).",
          "f(n) grows faster than or at the same rate as g(n).",
          "f(n) grows strictly slower than g(n).",
          "f(n) and g(n) have no relationship."
        ],
        "answer": 1
      },
      {
        "Id": 69,
        "question": "Which notation is used to denote the worst-case time complexity of an algorithm?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "None of the above"
        ],
        "answer": 0
      },
      {
        "Id": 70,
        "question": "Which of the following functions grows faster asymptotically: n^3 or 3^n?",
        "optionList": [
          "n^3",
          "3^n",
          "Both grow at the same rate",
          "None of the above"
        ],
        "answer": 1
      },
      {
        "Id": 71,
        "question": "Which of the following algorithms has the best-case time complexity of O(n)?",
        "optionList": [
          "Quick sort",
          "Merge sort",
          "Bubble sort",
          "Linear search"
        ],
        "answer": 3
      },
      {
        "Id": 72,
        "question": "Which of the following sorting algorithms exhibits O(n log n) time complexity in the worst-case scenario?",
        "optionList": [
          "Quick sort",
          "Merge sort",
          "Bubble sort",
          "Insertion sort"
        ],
        "answer": 0
      },
      {
        "Id": 73,
        "question": "Which case analysis is often used to analyze the performance of an algorithm on random inputs?",
        "optionList": [
          "Worst-case analysis",
          "Best-case analysis",
          "Average-case analysis",
          "None of the above"
        ],
        "answer": 2
      },
      {
        "Id": 74,
        "question": "What is the time complexity of the following code snippet?\\nfor i in range(n):\\n    print(\"Hello, World!\")\\n",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n log n)",
          "O(log n)"
        ],
        "answer": 1
      },
      {
        "Id": 75,
        "question": "What is the time complexity of a linear search algorithm on an unsorted array?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 76,
        "question": "Which of the following algorithms has the best-case time complexity of O(n log n)?",
        "optionList": [
          "Quick sort",
          "Bubble sort",
          "Insertion sort",
          "Selection sort"
        ],
        "answer": 0
      },
      {
        "Id": 77,
        "question": "In time complexity analysis, what does the term \"logarithmic\" represent?",
        "optionList": [
          "The time taken increases exponentially with the input size.",
          "The time taken increases linearly with the input size.",
          "The time taken increases logarithmically with the input size.",
          "The time taken remains constant regardless of the input size."
        ],
        "answer": 2
      },
      {
        "Id": 78,
        "question": "What is the space complexity of the following code snippet?\\ndef some_function(n):\\n    data = []\\n    for i in range(n):\\n        data.append(i)\\n    return data",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(n^2)",
          "O(log n)"
        ],
        "answer": 1
      },
      {
        "Id": 79,
        "question": "What is the space complexity of a recursive algorithm with a depth of n?",
        "optionList": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n!)"
        ],
        "answer": 2
      },
      {
        "Id": 80,
        "question": "Which data structure typically has the highest space complexity for storing n elements?",
        "optionList": [
          "Array",
          "Linked list",
          "Stack",
          "Queue"
        ],
        "answer": 0
      },
      {
        "Id": 81,
        "question": "What is the space complexity of a binary search algorithm?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "answer": 14
      },
      {
        "Id": 82,
        "question": "Which of the following notations provides the tightest bound for an algorithm's time complexity?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "None of the above"
        ],
        "answer": 2
      },
      {
        "Id": 83,
        "question": "If f(n) = Θ(g(n)), what can be inferred about the growth rates of f(n) and g(n)?",
        "optionList": [
          "f(n) grows faster than g(n).",
          "f(n) and g(n) grow at the same rate.",
          "f(n) grows slower than g(n).",
          "There is no relationship between the growth rates of f(n) and g(n)."
        ],
        "answer": 1
      },
      {
        "Id": 84,
        "question": "Which of the following notations represents the best-case time complexity of an algorithm?",
        "optionList": [
          "Big O",
          "Big Omega",
          "Big Theta",
          "None of the above"
        ],
        "answer": 1
      },
      {
        "Id": 85,
        "question": "What does it mean if f(n) = O(g(n))?",
        "optionList": [
          "f(n) grows faster than g(n).",
          "f(n) and g(n) grow at the same rate.",
          "f(n) grows slower than g(n).",
          "There is no relationship between the growth rates of f(n) and g(n)."
        ],
        "answer": 2
      },
      {
        "Id": 86,
        "question": "In which case does an algorithm perform at its peak efficiency?",
        "optionList": [
          "Worst case",
          "Best case",
          "Average case",
          "None of the above"
        ],
        "answer": 1
      },
      {
        "Id": 87,
        "question": "Which case analysis is most commonly used for analyzing the performance of an algorithm?",
        "optionList": [
          "Worst case",
          "Best case",
          "Average case",
          "None of the above"
        ],
        "answer": 0
      },
      {
        "Id": 88,
        "question": "Which of the following sorting algorithms typically has the best-case time complexity of O(n log n)?",
        "optionList": [
          "Bubble sort",
          "Insertion sort",
          "Merge sort",
          "Quick sort"
        ],
        "answer": 2
      },
      {
        "Id": 89,
        "question": "Which case analysis is useful for determining the expected performance of an algorithm when inputs are randomly distributed?",
        "optionList": [
          "Worst case",
          "Best case",
          "Average case",
          "None of the above"
        ],
        "answer": 2
      },
      {
        "Id": 90,
        "question": "What does the worst-case analysis of an algorithm provide?",
        "optionList": [
          "An upper bound on the algorithm's performance.",
          "A lower bound on the algorithm's performance.",
          "An average estimate of the algorithm's performance.",
          "None of the above."
        ],
        "answer": 0
      },
      {
        "Id": 91,
        "question": "What defines a brute force algorithm?",
        "optionList": [
          "It is an algorithm that makes use of randomization.",
          "It is an algorithm that relies on the principle of divide and conquer.",
          "It is an algorithm that exhaustively searches through all possible solutions.",
          "It is an algorithm that uses heuristics to find the optimal solution."
        ],
        "answer": 2
      },
      {
        "Id": 92,
        "question": "Which problem-solving strategy is often associated with brute force algorithms?",
        "optionList": [
          "Minimizing recursion depth",
          "Eliminating redundant computations",
          "Exhaustive search",
          "Dynamic programming"
        ],
        "answer": 2
      },
      {
        "Id": 93,
        "question": "Which of the following problems is typically solved using a brute force approach?",
        "optionList": [
          "Shortest path problem",
          "Travelling Salesman Problem (TSP)",
          "Knapsack problem",
          "Matrix chain multiplication"
        ],
        "answer": 1
      },
      {
        "Id": 94,
        "question": "What is the time complexity of a brute force solution for the traveling salesman problem (TSP) with n cities?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n!)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 95,
        "question": "In brute force algorithms, what is the primary drawback?",
        "optionList": [
          "Limited applicability",
          "High space complexity",
          "Exponential time complexity",
          "Lack of determinism"
        ],
        "answer": 2
      },
      {
        "Id": 96,
        "question": "Which technique does a divide and conquer algorithm employ?",
        "optionList": [
          "Iterative improvement",
          "Dynamic programming",
          "Recursion",
          "Greedy selection"
        ],
        "answer": 2
      },
      {
        "Id": 97,
        "question": "Which problem-solving approach involves breaking down a problem into subproblems of the same type?",
        "optionList": [
          "Divide and conquer",
          "Greedy algorithms",
          "Dynamic programming",
          "Backtracking"
        ],
        "answer": 0
      },
      {
        "Id": 98,
        "question": "Which of the following algorithms uses the divide and conquer strategy?",
        "optionList": [
          "Breadth-first search (BFS)",
          "Depth-first search (DFS)",
          "Binary search",
          "Topological sort"
        ],
        "answer": 2
      },
      {
        "Id": 99,
        "question": "What is the time complexity of merge sort, a divide and conquer algorithm, in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 100,
        "question": "Which problem can be efficiently solved using the divide and conquer approach?",
        "optionList": [
          "Knapsack problem",
          "Longest common subsequence problem",
          "Graph coloring problem",
          "Maximum flow problem"
        ],
        "answer": 1
      },
      {
        "Id": 101,
        "question": "What is the main characteristic of a greedy algorithm?",
        "optionList": [
          "It exhaustively searches through all possible solutions.",
          "It always produces the optimal solution.",
          "It makes locally optimal choices at each step with the hope of finding a global optimum.",
          "It relies on backtracking to explore solution space."
        ],
        "answer": 2
      },
      {
        "Id": 102,
        "question": "Which problem-solving strategy does a greedy algorithm follow?",
        "optionList": [
          "Divide and conquer",
          "Dynamic programming",
          "Backtracking",
          "Sequential improvement"
        ],
        "answer": 2
      },
      {
        "Id": 103,
        "question": "What is the primary advantage of greedy algorithms?",
        "optionList": [
          "They always find the global optimum solution.",
          "They are efficient and easy to implement.",
          "They can handle problems with large solution spaces.",
          "They are guaranteed to converge to the optimal solution."
        ],
        "answer": 1
      },
      {
        "Id": 104,
        "question": "Which of the following problems is typically solved using a greedy algorithm?",
        "optionList": [
          "Shortest path problem in a weighted graph",
          "Traveling Salesman Problem (TSP)",
          "Knapsack problem",
          "Longest common subsequence problem"
        ],
        "answer": 0
      },
      {
        "Id": 105,
        "question": "In which scenario can a greedy algorithm fail to produce the optimal solution?",
        "optionList": [
          "When the problem exhibits overlapping subproblems",
          "When the problem has a single optimal solution",
          "When the problem involves a series of choices leading to a final solution",
          "When the problem has a globally optimal solution at each step"
        ],
        "answer": 2
      },
      {
        "Id": 106,
        "question": "What is the primary characteristic of dynamic programming?",
        "optionList": [
          "It relies on making locally optimal choices at each step.",
          "It explores all possible solutions through exhaustive search.",
          "It stores and reuses solutions to subproblems.",
          "It involves dividing the problem into smaller subproblems."
        ],
        "answer": 2
      },
      {
        "Id": 107,
        "question": "Which problem-solving strategy does dynamic programming resemble?",
        "optionList": [
          "Greedy algorithms",
          "Divide and conquer",
          "Brute force algorithms",
          "Backtracking"
        ],
        "answer": 1
      },
      {
        "Id": 108,
        "question": "What is the time complexity of dynamic programming algorithms?",
        "optionList": [
          "Exponential",
          "Polynomial",
          "Logarithmic",
          "Linear"
        ],
        "answer": 1
      },
      {
        "Id": 109,
        "question": "In dynamic programming, what does memoization involve?",
        "optionList": [
          "Storing the results of already solved subproblems",
          "Repeating the computation of subproblems",
          "Exploring all possible solutions exhaustively",
          "Making greedy choices at each step"
        ],
        "answer": 0
      },
      {
        "Id": 110,
        "question": "Which of the following problems can be efficiently solved using dynamic programming?",
        "optionList": [
          "Traveling Salesman Problem (TSP)",
          "Knapsack problem",
          "Longest common subsequence problem",
          "Graph coloring problem"
        ],
        "answer": 2
      },
      {
        "Id": 111,
        "question": "What is the fundamental principle of backtracking algorithms?",
        "optionList": [
          "Making locally optimal choices",
          "Storing solutions to subproblems",
          "Exploring all possible solutions",
          "Dividing the problem into smaller subproblems"
        ],
        "answer": 2
      },
      {
        "Id": 112,
        "question": "Which problem-solving approach does backtracking closely resemble?",
        "optionList": [
          "Greedy algorithms",
          "Dynamic programming",
          "Divide and conquer",
          "Brute force algorithms"
        ],
        "answer": 3
      },
      {
        "Id": 113,
        "question": "What is the primary characteristic of a backtracking algorithm?",
        "optionList": [
          "It always finds the optimal solution.",
          "It prunes the search space to improve efficiency.",
          "It backtracks to previous choices if the current path leads to a dead end.",
          "It breaks down the problem into smaller subproblems."
        ],
        "answer": 2
      },
      {
        "Id": 114,
        "question": "Which of the following problems is typically solved using backtracking?",
        "optionList": [
          "Shortest path problem",
          "Knapsack problem",
          "Longest common subsequence problem",
          "Matrix chain multiplication"
        ],
        "answer": 1
      },
      {
        "Id": 115,
        "question": "What is the time complexity of backtracking algorithms in the worst-case scenario?",
        "optionList": [
          "Exponential",
          "Polynomial",
          "Logarithmic",
          "Linear"
        ],
        "answer": 0
      },
      {
        "Id": 116,
        "question": "What distinguishes randomized algorithms from deterministic algorithms?",
        "optionList": [
          "Randomized algorithms guarantee an optimal solution.",
          "Randomized algorithms involve making random choices during computation.",
          "Randomized algorithms avoid making decisions based on probabilities.",
          "Randomized algorithms follow a predetermined sequence of steps."
        ],
        "answer": 1
      },
      {
        "Id": 117,
        "question": "Which of the following problems can be efficiently solved using a randomized algorithm?",
        "optionList": [
          "Traveling Salesman Problem (TSP)",
          "Knapsack problem",
          "Matrix multiplication",
          "Shortest path problem"
        ],
        "answer": 2
      },
      {
        "Id": 118,
        "question": "What is the primary advantage of randomized algorithms?",
        "optionList": [
          "They always produce the optimal solution.",
          "They are faster than deterministic algorithms.",
          "They are more predictable in terms of performance.",
          "They can handle problems with large solution spaces."
        ],
        "answer": 3
      },
      {
        "Id": 119,
        "question": "Which problem-solving strategy does a randomized algorithm employ?",
        "optionList": [
          "Divide and conquer",
          "Greedy selection",
          "Random sampling",
          "Backtracking"
        ],
        "answer": 2
      },
      {
        "Id": 120,
        "question": "What is the primary challenge associated with randomized algorithms?",
        "optionList": [
          "Determining the optimal solution",
          "Achieving reproducibility of results",
          "Controlling the randomness and analyzing performance",
          "Handling problems with small solution spaces"
        ],
        "answer": 2
      },
      {
        "Id": 121,
        "question": "Which of the following problems is typically solved using a brute force algorithm?",
        "optionList": [
          "Finding the shortest path in a weighted graph",
          "Sorting a list of integers",
          "Computing the Fibonacci sequence",
          "Solving systems of linear equations"
        ],
        "answer": 0
      },
      {
        "Id": 122,
        "question": "What is the primary drawback of brute force algorithms?",
        "optionList": [
          "They have high space complexity",
          "They are not applicable to complex problems",
          "They have exponential time complexity",
          "They cannot handle dynamic inputs"
        ],
        "answer": 2
      },
      {
        "Id": 123,
        "question": "Which of the following problems is an example of a combinatorial optimization problem that can be solved using a brute force algorithm?",
        "optionList": [
          "Sorting a list of integers",
          "Finding the shortest path in a weighted graph",
          "Computing the factorial of a number",
          "Finding the maximum element in an array"
        ],
        "answer": 1
      },
      {
        "Id": 124,
        "question": "What is the time complexity of a brute force algorithm for finding all subsets of a set with n elements?",
        "optionList": [
          "O(n)",
          "O(2^n)",
          "O(n!)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 125,
        "question": "In which scenario is a brute force algorithm preferable over other approaches?",
        "optionList": [
          "When the problem size is small",
          "When the problem has overlapping subproblems",
          "When the problem exhibits optimal substructure",
          "When the problem has a polynomial-time solution"
        ],
        "answer": 0
      },
      {
        "Id": 126,
        "question": "Which of the following problems can be efficiently solved using a divide and conquer algorithm?",
        "optionList": [
          "Sorting a list of integers",
          "Finding the maximum element in an array",
          "Solving systems of linear equations",
          "Calculating the factorial of a number"
        ],
        "answer": 0
      },
      {
        "Id": 127,
        "question": "What is the primary advantage of divide and conquer algorithms?",
        "optionList": [
          "They have lower space complexity compared to other approaches",
          "They are easier to implement and debug",
          "They can exploit parallelism to improve performance",
          "They have logarithmic time complexity for many problems"
        ],
        "answer": 2
      },
      {
        "Id": 128,
        "question": "Which of the following problems is an example of a problem that naturally lends itself to a divide and conquer approach?",
        "optionList": [
          "Finding the shortest path in a weighted graph",
          "Sorting a list of integers",
          "Computing the Fibonacci sequence",
          "Finding the maximum element in an array"
        ],
        "answer": 1
      },
      {
        "Id": 129,
        "question": "What is the time complexity of merge sort, a classic example of a divide and conquer algorithm, for sorting n elements?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 130,
        "question": "What does the \"divide\" step in divide and conquer algorithms involve?",
        "optionList": [
          "Combining the solutions to subproblems",
          "Breaking the problem into smaller subproblems",
          "Making locally optimal choices",
          "Reusing previously computed solutions"
        ],
        "answer": 1
      },
      {
        "Id": 131,
        "question": "What is the primary characteristic of a greedy algorithm?",
        "optionList": [
          "It always produces the optimal solution",
          "It explores all possible solutions exhaustively",
          "It makes locally optimal choices at each step",
          "It relies on backtracking to find the solution"
        ],
        "answer": 2
      },
      {
        "Id": 132,
        "question": "Which of the following problems can be efficiently solved using a greedy algorithm?",
        "optionList": [
          "Knapsack problem",
          "Traveling Salesman Problem (TSP)",
          "Longest common subsequence problem",
          "Matrix chain multiplication"
        ],
        "answer": 0
      },
      {
        "Id": 133,
        "question": "What is the time complexity of Dijkstra's algorithm, a classic example of a greedy algorithm, for finding the shortest path in a weighted graph?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 134,
        "question": "What is the primary advantage of dynamic programming?",
        "optionList": [
          "It always produces the optimal solution",
          "It is faster than brute force algorithms",
          "It can handle problems with large solution spaces",
          "It is easy to implement and understand"
        ],
        "answer": 2
      },
      {
        "Id": 135,
        "question": "What is memoization in the context of dynamic programming?",
        "optionList": [
          "Storing the results of already solved subproblems",
          "Repeating the computation of subproblems",
          "Exploring all possible solutions exhaustively",
          "Making greedy choices at each step"
        ],
        "answer": 0
      },
      {
        "Id": 136,
        "question": "What is the primary challenge associated with backtracking algorithms?",
        "optionList": [
          "Determining the optimal solution",
          "Achieving reproducibility of results",
          "Controlling the randomness and analyzing performance",
          "Handling problems with small solution spaces"
        ],
        "answer": 2
      },
      {
        "Id": 137,
        "question": "Which of the following problems can be efficiently solved using a brute force algorithm?",
        "optionList": [
          "Finding the shortest path in a weighted graph",
          "Sorting a list of integers",
          "Calculating the Fibonacci sequence",
          "Solving systems of linear equations"
        ],
        "answer": 1
      },
      {
        "Id": 138,
        "question": "What is the primary disadvantage of brute force algorithms?",
        "optionList": [
          "They require extensive computational resources",
          "They are difficult to implement",
          "They often result in incorrect solutions",
          "They cannot handle large problem instances"
        ],
        "answer": 0
      },
      {
        "Id": 139,
        "question": "Which of the following problems can be solved using a brute force algorithm with a time complexity of O(2^n)?",
        "optionList": [
          "Finding the maximum element in an array",
          "Generating all permutations of a set",
          "Calculating the factorial of a number",
          "Sorting a list of integers"
        ],
        "answer": 1
      },
      {
        "Id": 140,
        "question": "What is the primary advantage of brute force algorithms?",
        "optionList": [
          "They are easy to implement",
          "They guarantee the optimal solution",
          "They have low space complexity",
          "They can handle complex optimization problems"
        ],
        "answer": 0
      },
      {
        "Id": 141,
        "question": "Which of the following problems is an example of a problem that can be solved using brute force algorithms but may not be practical for large problem instances?",
        "optionList": [
          "Sorting a list of integers",
          "Traveling Salesman Problem (TSP)",
          "Calculating the Fibonacci sequence",
          "Solving systems of linear equations"
        ],
        "answer": 1
      },
      {
        "Id": 142,
        "question": "What is the time complexity of binary search, a classic example of a divide and conquer algorithm, for searching a sorted array of n elements?",
        "optionList": [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(2^n)"
        ],
        "answer": 0
      },
      {
        "Id": 143,
        "question": "What does the \"conquer\" step in divide and conquer algorithms involve?",
        "optionList": [
          "Combining the solutions to subproblems",
          "Breaking the problem into smaller subproblems",
          "Making locally optimal choices",
          "Reusing previously computed solutions"
        ],
        "answer": 0
      },
      {
        "Id": 144,
        "question": "What is the time complexity of Prim's algorithm, a classic example of a greedy algorithm, for finding the minimum spanning tree of a graph with n vertices?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 145,
        "question": "What is the primary characteristic of brute force algorithms?",
        "optionList": [
          "They always produce the optimal solution.",
          "They make use of randomization.",
          "They rely on divide and conquer principles.",
          "They exhaustively search through all possible solutions."
        ],
        "answer": 3
      },
      {
        "Id": 146,
        "question": "What is the primary operation performed in each pass of the Bubble Sort algorithm?",
        "optionList": [
          "Selection",
          "Insertion",
          "Swapping adjacent elements",
          "Merging subarrays"
        ],
        "answer": 2
      },
      {
        "Id": 147,
        "question": "What is the worst-case time complexity of the Bubble Sort algorithm for sorting n elements?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 148,
        "question": "Which of the following sorting algorithms is known for its simplicity but is inefficient on large lists?",
        "optionList": [
          "Merge Sort",
          "Quick Sort",
          "Bubble Sort",
          "Radix Sort"
        ],
        "answer": 2
      },
      {
        "Id": 149,
        "question": "In Bubble Sort, after the first pass, the largest element will be found at which position?",
        "optionList": [
          "First",
          "Last",
          "Middle",
          "Any position"
        ],
        "answer": 1
      },
      {
        "Id": 150,
        "question": "What is the primary disadvantage of the Bubble Sort algorithm?",
        "optionList": [
          "High space complexity",
          "Unstable sorting",
          "Worst-case time complexity",
          "Inefficiency on large lists"
        ],
        "answer": 3
      },
      {
        "Id": 151,
        "question": "What is the primary operation performed in each pass of the Selection Sort algorithm?",
        "optionList": [
          "Insertion",
          "Merging subarrays",
          "Swapping adjacent elements",
          "Finding the minimum element"
        ],
        "answer": 3
      },
      {
        "Id": 152,
        "question": "What is the worst-case time complexity of the Selection Sort algorithm for sorting n elements?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 153,
        "question": "Which of the following sorting algorithms exhibits poor performance even on small lists?",
        "optionList": [
          "Merge Sort",
          "Quick Sort",
          "Selection Sort",
          "Radix Sort"
        ],
        "answer": 2
      },
      {
        "Id": 154,
        "question": "In Selection Sort, after the first pass, the smallest element will be found at which position?",
        "optionList": [
          "First",
          "Last",
          "Middle",
          "Any position"
        ],
        "answer": 0
      },
      {
        "Id": 155,
        "question": "What is the primary advantage of the Selection Sort algorithm?",
        "optionList": [
          "Stability in sorting",
          "Low space complexity",
          "Ease of implementation",
          "Fast performance on large lists"
        ],
        "answer": 2
      },
      {
        "Id": 156,
        "question": "What is the primary operation performed in each iteration of the Insertion Sort algorithm?",
        "optionList": [
          "Swapping adjacent elements",
          "Finding the minimum element",
          "Shifting elements to make room for insertion",
          "Merging subarrays"
        ],
        "answer": 2
      },
      {
        "Id": 157,
        "question": "What is the worst-case time complexity of the Insertion Sort algorithm for sorting n elements?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 158,
        "question": "Which of the following sorting algorithms works efficiently for small datasets or nearly sorted arrays?",
        "optionList": [
          "Merge Sort",
          "Quick Sort",
          "Insertion Sort",
          "Radix Sort"
        ],
        "answer": 2
      },
      {
        "Id": 159,
        "question": "In Insertion Sort, after the first pass, the sorted subarray consists of how many elements?",
        "optionList": [
          "1",
          "n-1",
          "n",
          "0"
        ],
        "answer": 0
      },
      {
        "Id": 160,
        "question": "What is the primary advantage of the Insertion Sort algorithm?",
        "optionList": [
          "Stability in sorting",
          "Low space complexity",
          "Ease of implementation",
          "Fast performance on large lists"
        ],
        "answer": 2
      },
      {
        "Id": 161,
        "question": "Which of the following sorting algorithms uses the divide-and-conquer strategy?",
        "optionList": [
          "Bubble Sort",
          "Selection Sort",
          "Merge Sort",
          "Insertion Sort"
        ],
        "answer": 2
      },
      {
        "Id": 162,
        "question": "What is the worst-case time complexity of the Merge Sort algorithm for sorting n elements?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 163,
        "question": "Which step in the Merge Sort algorithm combines two sorted arrays into a single sorted array?",
        "optionList": [
          "Merge",
          "Split",
          "Sort",
          "Partition"
        ],
        "answer": 0
      },
      {
        "Id": 164,
        "question": "Merge Sort exhibits which of the following properties?",
        "optionList": [
          "In-place sorting",
          "Stability in sorting",
          "Worst-case time complexity of O(n^2)",
          "Unstable sorting"
        ],
        "answer": 1
      },
      {
        "Id": 165,
        "question": "What is the primary advantage of the Merge Sort algorithm?",
        "optionList": [
          "Low space complexity",
          "Fast performance on nearly sorted arrays",
          "In-place sorting",
          "Ease of implementation"
        ],
        "answer": 0
      },
      {
        "Id": 166,
        "question": "What is the worst-case time complexity of the Quick Sort algorithm for sorting n elements?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 167,
        "question": "Which step in the Quick Sort algorithm divides the array into two subarrays?",
        "optionList": [
          "Merge",
          "Split",
          "Partition",
          "Sort"
        ],
        "answer": 2
      },
      {
        "Id": 168,
        "question": "Quick Sort exhibits which of the following properties?",
        "optionList": [
          "In-place sorting",
          "Stability in sorting",
          "Worst-case time complexity of O(n^2)",
          "Unstable sorting"
        ],
        "answer": 0
      },
      {
        "Id": 169,
        "question": "What is the primary advantage of the Quick Sort algorithm?",
        "optionList": [
          "Low space complexity",
          "Fast performance on nearly sorted arrays",
          "Stability in sorting",
          "Ease of implementation"
        ],
        "answer": 1
      },
      {
        "Id": 170,
        "question": "Which data structure is essential for the Heap Sort algorithm?",
        "optionList": [
          "Stack",
          "Queue",
          "Heap",
          "Linked List"
        ],
        "answer": 2
      },
      {
        "Id": 171,
        "question": "What is the worst-case time complexity of the Heap Sort algorithm for sorting n elements?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 172,
        "question": "Which step in the Heap Sort algorithm transforms an array into a max-heap or min-heap?",
        "optionList": [
          "Heapify",
          "Sort",
          "Partition",
          "Merge"
        ],
        "answer": 0
      },
      {
        "Id": 173,
        "question": "Heap Sort exhibits which of the following properties?",
        "optionList": [
          "In-place sorting",
          "Stability in sorting",
          "Worst-case time complexity of O(n^2)",
          "Unstable sorting"
        ],
        "answer": 0
      },
      {
        "Id": 174,
        "question": "What is the primary advantage of the Heap Sort algorithm?",
        "optionList": [
          "Low space complexity",
          "Fast performance on nearly sorted arrays",
          "Stability in sorting",
          "Ease of implementation"
        ],
        "answer": 0
      },
      {
        "Id": 175,
        "question": "What is the main characteristic of the bubble sort algorithm?",
        "optionList": [
          "It repeatedly compares adjacent elements and swaps them if they are in the wrong order.",
          "It divides the array into two subarrays and recursively sorts them.",
          "It selects the smallest element from the unsorted portion and swaps it with the first element.",
          "It builds the final sorted array by incrementally merging sorted subarrays."
        ],
        "answer": 0
      },
      {
        "Id": 176,
        "question": "What is the time complexity of the bubble sort algorithm in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 177,
        "question": "What does the selection sort algorithm do in each iteration?",
        "optionList": [
          "It repeatedly swaps adjacent elements if they are in the wrong order.",
          "It selects the smallest element from the unsorted portion and swaps it with the first element.",
          "It divides the array into two subarrays and recursively sorts them.",
          "It builds the final sorted array by incrementally merging sorted subarrays."
        ],
        "answer": 1
      },
      {
        "Id": 178,
        "question": "What is the time complexity of the selection sort algorithm in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 179,
        "question": "How does the insertion sort algorithm work?",
        "optionList": [
          "It repeatedly swaps adjacent elements if they are in the wrong order.",
          "It selects the smallest element from the unsorted portion and swaps it with the first element.",
          "It builds the final sorted array by incrementally merging sorted subarrays.",
          "It inserts each element into its proper place in a sorted subarray."
        ],
        "answer": 3
      },
      {
        "Id": 180,
        "question": "What is the time complexity of the insertion sort algorithm in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 181,
        "question": "What is the main characteristic of the merge sort algorithm?",
        "optionList": [
          "It repeatedly swaps adjacent elements if they are in the wrong order.",
          "It selects the smallest element from the unsorted portion and swaps it with the first element.",
          "It divides the array into two subarrays and recursively sorts them.",
          "It builds the final sorted array by incrementally merging sorted subarrays."
        ],
        "answer": 2
      },
      {
        "Id": 182,
        "question": "What is the time complexity of the merge sort algorithm in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 183,
        "question": "What does the quick sort algorithm do in each iteration?",
        "optionList": [
          "It repeatedly swaps adjacent elements if they are in the wrong order.",
          "It selects the smallest element from the unsorted portion and swaps it with the first element.",
          "It divides the array into two subarrays and recursively sorts them.",
          "It partitions the array into two parts based on a pivot element and recursively sorts them."
        ],
        "answer": 3
      },
      {
        "Id": 184,
        "question": "What is the time complexity of the quick sort algorithm in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 185,
        "question": "What is the primary data structure used in the heap sort algorithm?",
        "optionList": [
          "Linked list",
          "Queue",
          "Stack",
          "Binary heap"
        ],
        "answer": 3
      },
      {
        "Id": 186,
        "question": "What is the time complexity of the heap sort algorithm in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 187,
        "question": "How does the radix sort algorithm sort elements?",
        "optionList": [
          "It repeatedly swaps adjacent elements if they are in the wrong order.",
          "It divides the array into two subarrays and recursively sorts them.",
          "It distributes elements into buckets based on their digits, from the least significant to the most significant.",
          "It selects the smallest element from the unsorted portion and swaps it with the first element."
        ],
        "answer": 2
      },
      {
        "Id": 188,
        "question": "What is the time complexity of the radix sort algorithm in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 189,
        "question": "Under what condition is counting sort particularly efficient?",
        "optionList": [
          "When the range of input elements is significantly smaller than the number of elements to be sorted.",
          "When the input elements are already partially sorted.",
          "When the input elements are distributed uniformly across a large range.",
          "When the input elements are distinct integers."
        ],
        "answer": 0
      },
      {
        "Id": 190,
        "question": "What is the time complexity of counting sort?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(k), where k is the range of input elements"
        ],
        "answer": 3
      },
      {
        "Id": 191,
        "question": "What is the primary characteristic of the bucket sort algorithm?",
        "optionList": [
          "It repeatedly swaps adjacent elements if they are in the wrong order.",
          "It selects the smallest element from the unsorted portion and swaps it with the first element.",
          "It divides the array into two subarrays and recursively sorts them.",
          "It distributes elements into a finite number of buckets and sorts each bucket individually."
        ],
        "answer": 3
      },
      {
        "Id": 192,
        "question": "What is the time complexity of bucket sort in the average case?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "It depends on the sorting algorithm used to sort the elements within each bucket."
        ],
        "answer": 1
      },
      {
        "Id": 193,
        "question": "In the bubble sort algorithm, what happens during each pass through the array?",
        "optionList": [
          "The largest element bubbles up to its correct position.",
          "The smallest element is moved to the beginning of the array.",
          "Adjacent elements are compared and swapped if they are in the wrong order.",
          "Elements are divided into subarrays for further sorting."
        ],
        "answer": 2
      },
      {
        "Id": 194,
        "question": "What is the best-case time complexity of the bubble sort algorithm?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 0
      },
      {
        "Id": 195,
        "question": "How does the selection sort algorithm sort elements?",
        "optionList": [
          "By repeatedly swapping adjacent elements if they are in the wrong order.",
          "By selecting the smallest element from the unsorted portion and moving it to the sorted portion.",
          "By partitioning the array into two subarrays based on a pivot element.",
          "By recursively dividing the array and sorting each partition."
        ],
        "answer": 1
      },
      {
        "Id": 196,
        "question": "What is the worst-case time complexity of the selection sort algorithm?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 197,
        "question": "In the insertion sort algorithm, how are elements inserted into the sorted portion of the array?",
        "optionList": [
          "By swapping adjacent elements until the array is sorted.",
          "By selecting the smallest element from the unsorted portion and moving it to the sorted portion.",
          "By comparing each element with its adjacent element and swapping if necessary.",
          "By shifting elements to the right until the correct position for insertion is found."
        ],
        "answer": 3
      },
      {
        "Id": 198,
        "question": "What is the average-case time complexity of the insertion sort algorithm?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 199,
        "question": "How does the merge sort algorithm work?",
        "optionList": [
          "By repeatedly swapping adjacent elements if they are in the wrong order.",
          "By selecting the smallest element from the unsorted portion and moving it to the sorted portion.",
          "By dividing the array into two subarrays, sorting each subarray, and then merging them.",
          "By partitioning the array into two subarrays based on a pivot element."
        ],
        "answer": 2
      },
      {
        "Id": 200,
        "question": "What is the space complexity of the merge sort algorithm?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 201,
        "question": "What is the main advantage of the quick sort algorithm over other sorting algorithms?",
        "optionList": [
          "It has a lower space complexity.",
          "It is stable.",
          "It is not affected by the initial order of the elements.",
          "It has an average-case time complexity of O(n log n)."
        ],
        "answer": 3
      },
      {
        "Id": 202,
        "question": "What is the worst-case time complexity of the quick sort algorithm?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 203,
        "question": "Which data structure is used in the heap sort algorithm?",
        "optionList": [
          "Linked list",
          "Stack",
          "Queue",
          "Binary heap"
        ],
        "answer": 3
      },
      {
        "Id": 204,
        "question": "What is the time complexity of the heap sort algorithm?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 205,
        "question": "In radix sort, how are elements sorted?",
        "optionList": [
          "By recursively partitioning the array into smaller subarrays.",
          "By distributing elements into buckets based on a range of values.",
          "By comparing adjacent elements and swapping if necessary.",
          "By distributing elements into buckets based on digits."
        ],
        "answer": 3
      },
      {
        "Id": 206,
        "question": "What is the time complexity of radix sort?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(nk), where k is the number of digits in the largest element.",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 207,
        "question": "When is counting sort particularly efficient?",
        "optionList": [
          "When the input elements are distributed uniformly across a large range.",
          "When the input elements are already partially sorted.",
          "When the input elements are distinct integers.",
          "When the range of input elements is significantly smaller than the number of elements to be sorted."
        ],
        "answer": 0
      },
      {
        "Id": 208,
        "question": "How does bucket sort work?",
        "optionList": [
          "By recursively partitioning the array into smaller subarrays.",
          "By distributing elements into a finite number of buckets and sorting each bucket individually.",
          "By comparing adjacent elements and swapping if necessary.",
          "By selecting the smallest element from the unsorted portion and moving it to the sorted portion."
        ],
        "answer": 1
      },
      {
        "Id": 209,
        "question": "What is the primary disadvantage of the bubble sort algorithm?",
        "optionList": [
          "It has a high space complexity.",
          "It is not stable.",
          "It has a time complexity of O(n log n) in the worst-case scenario.",
          "It has a time complexity of O(n^2) in the worst-case scenario."
        ],
        "answer": 3
      },
      {
        "Id": 210,
        "question": "Which of the following statements is true about bubble sort?",
        "optionList": [
          "It is always faster than quicksort.",
          "It is always faster than insertion sort.",
          "It is adaptive, meaning it can take advantage of existing order in its input.",
          "It is not a comparison-based sorting algorithm."
        ],
        "answer": 2
      },
      {
        "Id": 211,
        "question": "What is the main disadvantage of selection sort?",
        "optionList": [
          "It has a high space complexity.",
          "It is not stable.",
          "It has a time complexity of O(n^2) in the best-case scenario.",
          "It has a time complexity of O(n log n) in the worst-case scenario."
        ],
        "answer": 1
      },
      {
        "Id": 212,
        "question": "Which of the following statements is true about selection sort?",
        "optionList": [
          "It always maintains the relative order of equal elements.",
          "It performs better than merge sort on small arrays.",
          "It is not an in-place sorting algorithm.",
          "It is particularly efficient for sorting linked lists."
        ],
        "answer": 3
      },
      {
        "Id": 213,
        "question": "What is the primary advantage of insertion sort?",
        "optionList": [
          "It has a low space complexity.",
          "It is not affected by the initial order of the elements.",
          "It has a time complexity of O(n log n) in the worst-case scenario.",
          "It has a time complexity of O(n) in the worst-case scenario."
        ],
        "answer": 0
      },
      {
        "Id": 214,
        "question": "Which of the following statements is true about insertion sort?",
        "optionList": [
          "It is not stable.",
          "It is an adaptive sorting algorithm.",
          "It performs poorly on partially sorted arrays.",
          "It has a time complexity of O(n^2) in the best-case scenario."
        ],
        "answer": 1
      },
      {
        "Id": 215,
        "question": "What is the primary advantage of merge sort?",
        "optionList": [
          "It has a low space complexity.",
          "It is not affected by the initial order of the elements.",
          "It is an in-place sorting algorithm.",
          "It has a time complexity of O(n) in the worst-case scenario."
        ],
        "answer": 0
      },
      {
        "Id": 216,
        "question": "Which of the following statements is true about merge sort?",
        "optionList": [
          "It is not a stable sorting algorithm.",
          "It is particularly efficient for sorting small arrays.",
          "It has a time complexity of O(n^2) in the worst-case scenario.",
          "It divides the array into three subarrays in each recursive step."
        ],
        "answer": 3
      },
      {
        "Id": 217,
        "question": "What is the main disadvantage of quick sort?",
        "optionList": [
          "It has a high space complexity.",
          "It is not stable.",
          "It is not an in-place sorting algorithm.",
          "It has a time complexity of O(n) in the worst-case scenario."
        ],
        "answer": 1
      },
      {
        "Id": 218,
        "question": "Which of the following statements is true about quick sort?",
        "optionList": [
          "It always maintains the relative order of equal elements.",
          "It has a time complexity of O(n^2) in the best-case scenario.",
          "It performs better than merge sort on linked lists.",
          "It is not affected by the initial order of the elements."
        ],
        "answer": 2
      },
      {
        "Id": 219,
        "question": "What is the primary advantage of heap sort?",
        "optionList": [
          "It is an adaptive sorting algorithm.",
          "It has a time complexity of O(n log n) in the worst-case scenario.",
          "It is particularly efficient for partially sorted arrays.",
          "It has a low space complexity."
        ],
        "answer": 1
      },
      {
        "Id": 220,
        "question": "Which of the following statements is true about heap sort?",
        "optionList": [
          "It is not an in-place sorting algorithm.",
          "It is not a comparison-based sorting algorithm.",
          "It performs better than quicksort on small arrays.",
          "It is not affected by the initial order of the elements."
        ],
        "answer": 0
      },
      {
        "Id": 221,
        "question": "What is the main disadvantage of radix sort?",
        "optionList": [
          "It has a high space complexity.",
          "It is not stable.",
          "It has a time complexity of O(n^2) in the worst-case scenario.",
          "It is not an in-place sorting algorithm."
        ],
        "answer": 3
      },
      {
        "Id": 222,
        "question": "Which of the following statements is true about radix sort?",
        "optionList": [
          "It sorts elements by comparing adjacent elements and swapping if necessary.",
          "It is particularly efficient for sorting large arrays with few unique keys.",
          "It has a time complexity of O(n log n) in the worst-case scenario.",
          "It is not affected by the initial order of the elements."
        ],
        "answer": 1
      },
      {
        "Id": 223,
        "question": "In counting sort, what is the purpose of the auxiliary array used?",
        "optionList": [
          "To store the sorted elements",
          "To count the occurrences of each element in the input array",
          "To determine the pivot element for partitioning",
          "To keep track of the indices of elements in the sorted array"
        ],
        "answer": 1
      },
      {
        "Id": 224,
        "question": "Bucket sort divides the input array into equal-sized intervals, called buckets. What determines the number of buckets used?",
        "optionList": [
          "The length of the input array",
          "The maximum value in the input array",
          "The minimum value in the input array",
          "The sum of all elements in the input array"
        ],
        "answer": 1
      },
      {
        "Id": 225,
        "question": "Which of the following statements about bucket sort is true?",
        "optionList": [
          "Bucket sort is a comparison-based sorting algorithm.",
          "Bucket sort has a time complexity of O(n^2) in the worst-case scenario.",
          "Bucket sort is stable.",
          "Bucket sort is particularly efficient when the input array is uniformly distributed."
        ],
        "answer": 3
      },
      {
        "Id": 226,
        "question": "Which of the following sorting algorithms typically has the best time complexity in the worst-case scenario?",
        "optionList": [
          "Bubble sort",
          "Merge sort",
          "Quick sort",
          "Selection sort"
        ],
        "answer": 1
      },
      {
        "Id": 227,
        "question": "Which sorting algorithm is known for its efficient performance on small datasets and partially sorted arrays?",
        "optionList": [
          "Merge sort",
          "Heap sort",
          "Insertion sort",
          "Radix sort"
        ],
        "answer": 2
      },
      {
        "Id": 228,
        "question": "In which of the following scenarios is it most appropriate to use quick sort over merge sort?",
        "optionList": [
          "When the dataset is large and nearly sorted",
          "When the dataset contains many duplicate elements",
          "When the dataset is small and memory is limited",
          "When stability in sorting is required"
        ],
        "answer": 0
      },
      {
        "Id": 229,
        "question": "Which sorting algorithm is commonly used as a subroutine in more advanced algorithms like Timsort?",
        "optionList": [
          "Insertion sort",
          "Quick sort",
          "Radix sort",
          "Bubble sort"
        ],
        "answer": 0
      },
      {
        "Id": 230,
        "question": "In which of the following scenarios would counting sort be most suitable?",
        "optionList": [
          "Sorting a list of names alphabetically",
          "Sorting a list of integers in a small range",
          "Sorting a list of floating-point numbers",
          "Sorting a list of dates in chronological order"
        ],
        "answer": 1
      },
      {
        "Id": 231,
        "question": "Bucket sort is often used in:",
        "optionList": [
          "Sorting linked lists",
          "Implementing priority queues",
          "External sorting of large datasets",
          "Cryptography applications"
        ],
        "answer": 2
      },
      {
        "Id": 232,
        "question": "Which of the following describes the process of bubble sort?",
        "optionList": [
          "Swapping adjacent elements until the array is sorted.",
          "Selecting the smallest element and moving it to the beginning.",
          "Dividing the array into two subarrays and recursively sorting them.",
          "Merging two sorted subarrays into one."
        ],
        "answer": 0
      },
      {
        "Id": 233,
        "question": "What is the time complexity of bubble sort in the best-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 0
      },
      {
        "Id": 234,
        "question": "What does selection sort repeatedly do to sort an array?",
        "optionList": [
          "Swaps adjacent elements until the array is sorted.",
          "Selects the smallest element and moves it to the beginning.",
          "Divides the array into two subarrays and recursively sorts them.",
          "Merges two sorted subarrays into one."
        ],
        "answer": 1
      },
      {
        "Id": 235,
        "question": "What is the time complexity of selection sort in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 236,
        "question": "How does insertion sort algorithm work?",
        "optionList": [
          "Swapping adjacent elements until the array is sorted.",
          "Selecting the smallest element and moving it to the beginning.",
          "Inserting each element into its correct position in a sorted subarray.",
          "Merging two sorted subarrays into one."
        ],
        "answer": 2
      },
      {
        "Id": 237,
        "question": "What is the time complexity of insertion sort in the average-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 238,
        "question": "What is the main step involved in the merge sort algorithm?",
        "optionList": [
          "Swapping adjacent elements until the array is sorted.",
          "Selecting the smallest element and moving it to the beginning.",
          "Dividing the array into two subarrays and recursively sorting them.",
          "Merging two sorted subarrays into one."
        ],
        "answer": 3
      },
      {
        "Id": 239,
        "question": "What is the space complexity of merge sort?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 240,
        "question": "What is the primary characteristic of the quick sort algorithm?",
        "optionList": [
          "Swapping adjacent elements until the array is sorted.",
          "Selecting the smallest element and moving it to the beginning.",
          "Dividing the array into two subarrays based on a pivot element.",
          "Merging two sorted subarrays into one."
        ],
        "answer": 2
      },
      {
        "Id": 241,
        "question": "What is the time complexity of quick sort in the worst-case scenario?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 242,
        "question": "What data structure is used in heap sort?",
        "optionList": [
          "Linked list",
          "Queue",
          "Stack",
          "Binary heap"
        ],
        "answer": 3
      },
      {
        "Id": 243,
        "question": "What is the time complexity of heap sort?",
        "optionList": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 244,
        "question": "How does radix sort sort elements?",
        "optionList": [
          "Swapping adjacent elements until the array is sorted.",
          "Distributing elements into buckets based on digits.",
          "Dividing the array into two subarrays and recursively sorting them.",
          "Merging two sorted subarrays into one."
        ],
        "answer": 1
      },
      {
        "Id": 245,
        "question": "What is the primary characteristic of the linear search algorithm?",
        "optionList": [
          "It requires the list to be sorted.",
          "It divides the list into two halves at each step.",
          "It sequentially checks each element in the list.",
          "It uses recursion to search for an element."
        ],
        "answer": 2
      },
      {
        "Id": 246,
        "question": "What is the time complexity of linear search in the worst-case scenario?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 247,
        "question": "How does the binary search algorithm work?",
        "optionList": [
          "It sequentially checks each element in the list.",
          "It repeatedly divides the list into two halves and compares the target value with the middle element.",
          "It uses a stack to search for an element.",
          "It performs a depth-first traversal of the search space."
        ],
        "answer": 1
      },
      {
        "Id": 248,
        "question": "What is the time complexity of binary search in the worst-case scenario?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 1
      },
      {
        "Id": 249,
        "question": "In depth-first search (DFS), which data structure is typically used to keep track of visited nodes?",
        "optionList": [
          "Stack",
          "Queue",
          "Priority Queue",
          "Heap"
        ],
        "answer": 0
      },
      {
        "Id": 250,
        "question": "What is the main principle behind depth-first search (DFS)?",
        "optionList": [
          "Exploring all neighboring nodes before moving to the next level.",
          "Exploring the search space in a breadth-first manner.",
          "Exploring as far as possible along each branch before backtracking.",
          "Exploring nodes based on their priority."
        ],
        "answer": 2
      },
      {
        "Id": 251,
        "question": "In breadth-first search (BFS), which data structure is typically used to keep track of visited nodes?",
        "optionList": [
          "Stack",
          "Queue",
          "Priority Queue",
          "Heap"
        ],
        "answer": 1
      },
      {
        "Id": 252,
        "question": "What is the main principle behind breadth-first search (BFS)?",
        "optionList": [
          "Exploring all neighboring nodes before moving to the next level.",
          "Exploring the search space in a depth-first manner.",
          "Exploring as far as possible along each branch before backtracking.",
          "Exploring nodes based on their priority."
        ],
        "answer": 0
      },
      {
        "Id": 253,
        "question": "What is the primary characteristic of the A* search algorithm?",
        "optionList": [
          "It guarantees finding the shortest path in a graph.",
          "It uses dynamic programming to find the optimal solution.",
          "It combines breadth-first and depth-first search techniques.",
          "It uses heuristics to guide the search towards the most promising paths."
        ],
        "answer": 3
      },
      {
        "Id": 254,
        "question": "What is the time complexity of the A* search algorithm?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "It depends on the heuristic function."
        ],
        "answer": 3
      },
      {
        "Id": 255,
        "question": "In linear search, what is the best-case scenario for finding an element in a list?",
        "optionList": [
          "The element is the first element in the list.",
          "The element is in the middle of the list.",
          "The element is the last element in the list.",
          "The element is not present in the list."
        ],
        "answer": 0
      },
      {
        "Id": 256,
        "question": "What is the primary advantage of linear search?",
        "optionList": [
          "It has a time complexity of O(log n).",
          "It works efficiently on unsorted arrays.",
          "It requires the list to be sorted.",
          "It always finds the target element in one iteration."
        ],
        "answer": 1
      },
      {
        "Id": 257,
        "question": "Which of the following data structures is NOT suitable for implementing binary search?",
        "optionList": [
          "Array",
          "Linked list",
          "Binary search tree",
          "Heap"
        ],
        "answer": 1
      },
      {
        "Id": 258,
        "question": "What is the difference between iterative and recursive binary search?",
        "optionList": [
          "Iterative binary search uses recursion, while recursive binary search uses iteration.",
          "Iterative binary search avoids using extra space, while recursive binary search may use additional stack space.",
          "Iterative binary search always requires a sorted array, while recursive binary search can work on unsorted arrays.",
          "There is no difference; both methods follow the same algorithm."
        ],
        "answer": 1
      },
      {
        "Id": 259,
        "question": "Which traversal order does depth-first search (DFS) follow in a binary tree?",
        "optionList": [
          "Preorder",
          "Inorder",
          "Postorder",
          "Level order"
        ],
        "answer": 0
      },
      {
        "Id": 260,
        "question": "In DFS, what happens when a dead end is reached during traversal?",
        "optionList": [
          "The algorithm halts.",
          "The algorithm backtracks to the nearest unexplored node with alternative paths.",
          "The algorithm switches to breadth-first search.",
          "The algorithm marks the dead-end node and continues traversal."
        ],
        "answer": 1
      },
      {
        "Id": 261,
        "question": "Which traversal order does breadth-first search (BFS) follow in a binary tree?",
        "optionList": [
          "Preorder",
          "Inorder",
          "Postorder",
          "Level order"
        ],
        "answer": 3
      },
      {
        "Id": 262,
        "question": "What is the primary advantage of breadth-first search (BFS) over depth-first search (DFS)?",
        "optionList": [
          "BFS typically requires less memory.",
          "BFS guarantees finding the shortest path in weighted graphs.",
          "BFS is easier to implement recursively.",
          "BFS has a lower time complexity."
        ],
        "answer": 1
      },
      {
        "Id": 263,
        "question": "What is the heuristic function used for in A* search?",
        "optionList": [
          "To determine the search direction.",
          "To prioritize nodes for exploration based on an estimate of their distance to the goal.",
          "To detect cycles in the search space.",
          "To handle tie-breaking situations."
        ],
        "answer": 1
      },
      {
        "Id": 264,
        "question": "In A* search, what is the significance of the \"f-score\" of a node?",
        "optionList": [
          "It represents the cost of reaching the node from the start node.",
          "It represents the actual distance of the node from the goal node.",
          "It is the sum of the node's g-score and h-score.",
          "It is used to prioritize nodes for exploration."
        ],
        "answer": 2
      },
      {
        "Id": 265,
        "question": "What happens if the target element is not found in the list during linear search?",
        "optionList": [
          "The algorithm returns the index of the last element in the list.",
          "The algorithm returns -1 to indicate that the element was not found.",
          "The algorithm returns the index of the first element in the list.",
          "The algorithm returns the index of the middle element in the list."
        ],
        "answer": 1
      },
      {
        "Id": 266,
        "question": "In linear search, what is the average-case time complexity for finding an element in a list of size n?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 267,
        "question": "Which condition must be satisfied for binary search to work correctly?",
        "optionList": [
          "The list must be sorted in ascending order.",
          "The list must contain only positive integers.",
          "The list must contain at least 100 elements.",
          "The list must be stored in a linked list data structure."
        ],
        "answer": 0
      },
      {
        "Id": 268,
        "question": "What is the primary difference between binary search and linear search?",
        "optionList": [
          "Binary search requires the list to be sorted, while linear search does not.",
          "Binary search always returns the index of the target element, while linear search may not.",
          "Binary search has a time complexity of O(log n), while linear search has a time complexity of O(n).",
          "Binary search is a recursive algorithm, while linear search is iterative."
        ],
        "answer": 2
      },
      {
        "Id": 269,
        "question": "Which data structure is typically used to implement DFS?",
        "optionList": [
          "Queue",
          "Stack",
          "Priority queue",
          "Binary search tree"
        ],
        "answer": 1
      },
      {
        "Id": 270,
        "question": "In DFS, which type of traversal does the algorithm perform?",
        "optionList": [
          "Breadth-first",
          "Depth-first",
          "Inorder",
          "Level order"
        ],
        "answer": 1
      },
      {
        "Id": 271,
        "question": "What is the primary advantage of BFS over DFS?",
        "optionList": [
          "BFS requires less memory.",
          "BFS guarantees finding the shortest path in weighted graphs.",
          "BFS has a lower time complexity.",
          "BFS can handle cyclic graphs more efficiently."
        ],
        "answer": 1
      },
      {
        "Id": 272,
        "question": "Which data structure is typically used to implement BFS?",
        "optionList": [
          "Queue",
          "Stack",
          "Priority queue",
          "Binary search tree"
        ],
        "answer": 0
      },
      {
        "Id": 273,
        "question": "In A* search, what is the role of the g-score?",
        "optionList": [
          "It represents the actual distance from the start node to the current node.",
          "It represents the estimated distance from the current node to the goal node.",
          "It is the sum of the node's actual distance and heuristic distance.",
          "It is used to prioritize nodes for exploration."
        ],
        "answer": 0
      },
      {
        "Id": 274,
        "question": "Which of the following is a valid heuristic function for A* search?",
        "optionList": [
          "Counting the number of nodes visited so far",
          "Calculating the Euclidean distance between nodes",
          "Randomly selecting nodes for exploration",
          "Assigning a fixed value to all nodes"
        ],
        "answer": 1
      },
      {
        "Id": 275,
        "question": "Which of the following statements is true regarding linear search?",
        "optionList": [
          "It is a divide-and-conquer algorithm.",
          "It works efficiently only on sorted arrays.",
          "It has a time complexity of O(log n).",
          "It sequentially checks each element in the list until the target element is found."
        ],
        "answer": 3
      },
      {
        "Id": 276,
        "question": "What is the main advantage of binary search over linear search?",
        "optionList": [
          "Binary search has a lower space complexity.",
          "Binary search has a lower time complexity in all cases.",
          "Binary search does not require the list to be sorted.",
          "Binary search is easier to implement."
        ],
        "answer": 1
      },
      {
        "Id": 277,
        "question": "Which of the following is a prerequisite for applying binary search?",
        "optionList": [
          "The list must be sorted.",
          "The list must contain only positive integers.",
          "The list must be stored in a linked list data structure.",
          "The list must have fewer than 100 elements."
        ],
        "answer": 0
      },
      {
        "Id": 278,
        "question": "In DFS, what happens if the algorithm encounters a visited node?",
        "optionList": [
          "The algorithm halts.",
          "The algorithm backtracks to the previous unvisited node.",
          "The algorithm skips the node and moves to the next unvisited neighbor.",
          "The algorithm switches to breadth-first search."
        ],
        "answer": 1
      },
      {
        "Id": 279,
        "question": "Which of the following data structures is typically used to implement DFS?",
        "optionList": [
          "Queue",
          "Stack",
          "Priority Queue",
          "Binary Tree"
        ],
        "answer": 1
      },
      {
        "Id": 280,
        "question": "In BFS, which data structure is used to keep track of visited nodes?",
        "optionList": [
          "Queue",
          "Stack",
          "Priority Queue",
          "Binary Tree"
        ],
        "answer": 0
      },
      {
        "Id": 281,
        "question": "What is the primary advantage of using A* search algorithm?",
        "optionList": [
          "It guarantees finding the shortest path in all cases.",
          "It is always faster than other search algorithms.",
          "It can be applied to any type of graph.",
          "It combines the advantages of both BFS and DFS."
        ],
        "answer": 0
      },
      {
        "Id": 282,
        "question": "In A* search, what is the role of the h-score?",
        "optionList": [
          "It represents the actual distance from the start node to the current node.",
          "It represents the estimated distance from the current node to the goal node.",
          "It is the sum of the node's actual distance and heuristic distance.",
          "It is used to prioritize nodes for exploration."
        ],
        "answer": 1
      },
      {
        "Id": 283,
        "question": "What is the worst-case time complexity of linear search?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 284,
        "question": "What is the time complexity of linear search in the best-case scenario?",
        "optionList": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n^2)"
        ],
        "answer": 0
      },
      {
        "Id": 285,
        "question": "What is the time complexity of the Naive String Matching algorithm?",
        "optionList": [
          "O(n)",
          "O(m)",
          "O(n * m)",
          "O(n^2)"
        ],
        "answer": 2
      },
      {
        "Id": 286,
        "question": "Which string matching algorithm uses hashing to compare patterns with substrings?",
        "optionList": [
          "Naive String Matching",
          "Rabin-Karp Algorithm",
          "Knuth-Morris-Pratt Algorithm",
          "Boyer-Moore Algorithm"
        ],
        "answer": 1
      },
      {
        "Id": 287,
        "question": "What is the dynamic programming approach commonly used to find the Longest Common Subsequence (LCS)?",
        "optionList": [
          "Bellman-Ford Algorithm",
          "Dijkstra's Algorithm",
          "Floyd-Warshall Algorithm",
          "Needleman-Wunsch Algorithm"
        ],
        "answer": 3
      },
      {
        "Id": 288,
        "question": "What is the time complexity of the dynamic programming solution for finding the Longest Common Subsequence (LCS)?",
        "optionList": [
          "O(n)",
          "O(n^2)",
          "O(n * m)",
          "O(2^n)"
        ],
        "answer": 2
      },
      {
        "Id": 289,
        "question": "Which algorithm is commonly used to find the Longest Increasing Subsequence (LIS)?",
        "optionList": [
          "Breadth-First Search (BFS)",
          "Depth-First Search (DFS)",
          "Bellman-Ford Algorithm",
          "Dynamic Programming"
        ],
        "answer": 3
      },
      {
        "Id": 290,
        "question": "What is the time complexity of the dynamic programming solution for finding the Longest Increasing Subsequence (LIS)?",
        "optionList": [
          "O(n)",
          "O(n^2)",
          "O(n * log n)",
          "O(2^n)"
        ],
        "answer": 1
      },
      {
        "Id": 291,
        "question": "Edit distance measures the similarity between two strings by counting the minimum number of ___________ operations required to transform one string into the other.",
        "optionList": [
          "Insertion and deletion",
          "Insertion and replacement",
          "Deletion and replacement",
          "Insertion, deletion, and replacement"
        ],
        "answer": 3
      },
      {
        "Id": 292,
        "question": "Which dynamic programming algorithm is commonly used to calculate the edit distance between two strings?",
        "optionList": [
          "Bellman-Ford Algorithm",
          "Dijkstra's Algorithm",
          "Floyd-Warshall Algorithm",
          "Levenshtein Distance Algorithm"
        ],
        "answer": 3
      },
      {
        "Id": 293,
        "question": "Which of the following is a meta-character used in regular expressions to match any single character?",
        "optionList": [
          "*",
          "?",
          ".",
          "+"
        ],
        "answer": 2
      },
      {
        "Id": 294,
        "question": "In regular expressions, what does the meta-character \"^\" represent when placed at the beginning of a pattern?",
        "optionList": [
          "It matches the end of a string.",
          "It matches the start of a string.",
          "It matches one or more occurrences of the preceding character.",
          "It matches zero or one occurrence of the preceding character."
        ],
        "answer": 1
      },
      {
        "Id": 295,
        "question": "What is the primary advantage of the Knuth-Morris-Pratt (KMP) algorithm over the naive string matching algorithm?",
        "optionList": [
          "KMP algorithm has a lower time complexity.",
          "KMP algorithm works better with small patterns.",
          "KMP algorithm does not require preprocessing.",
          "KMP algorithm guarantees finding all occurrences of the pattern."
        ],
        "answer": 0
      },
      {
        "Id": 296,
        "question": "Which of the following string matching algorithms has the best average-case time complexity?",
        "optionList": [
          "Naive String Matching",
          "Rabin-Karp Algorithm",
          "Knuth-Morris-Pratt Algorithm",
          "Boyer-Moore Algorithm"
        ],
        "answer": 3
      },
      {
        "Id": 297,
        "question": "What is the Longest Common Subsequence (LCS) of \"ABCD\" and \"ACBAD\"?",
        "optionList": [
          "\"ABD\"",
          "\"ACD\"",
          "\"ABCD\"",
          "\"AD\""
        ],
        "answer": 0
      },
      {
        "Id": 298,
        "question": "Which dynamic programming algorithm is used to find the Longest Common Subsequence (LCS)?",
        "optionList": [
          "Floyd-Warshall Algorithm",
          "Needleman-Wunsch Algorithm",
          "Dijkstra's Algorithm",
          "Bellman-Ford Algorithm"
        ],
        "answer": 1
      },
      {
        "Id": 299,
        "question": "What is the length of the Longest Increasing Subsequence (LIS) of the sequence [10, 9, 2, 5, 3, 7, 101, 18]?",
        "optionList": [
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": 2
      },
      {
        "Id": 300,
        "question": "Which dynamic programming approach is commonly used to find the Longest Increasing Subsequence (LIS)?",
        "optionList": [
          "Bottom-up approach",
          "Top-down approach",
          "Memoization",
          "Greedy approach"
        ],
        "answer": 0
      },
      {
        "Id": 301,
        "question": "What is the edit distance between the strings \"kitten\" and \"sitting\"?",
        "optionList": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 2
      },
      {
        "Id": 302,
        "question": "Which dynamic programming algorithm is commonly used to compute the edit distance between two strings?",
        "optionList": [
          "Levenshtein Distance Algorithm",
          "Dijkstra's Algorithm",
          "Floyd-Warshall Algorithm",
          "A* Search Algorithm"
        ],
        "answer": 0
      },
      {
        "Id": 303,
        "question": "What does the meta-character \"$\" represent in regular expressions?",
        "optionList": [
          "It matches the start of a string.",
          "It matches the end of a string.",
          "It matches any single character.",
          "It specifies zero or more occurrences of the preceding character."
        ],
        "answer": 1
      },
      {
        "Id": 304,
        "question": "In regular expressions, what does the meta-character \"?\" represent?",
        "optionList": [
          "It matches zero or one occurrence of the preceding character.",
          "It matches one or more occurrences of the preceding character.",
          "It matches any single character.",
          "It matches the end of a string."
        ],
        "answer": 0
      },
      {
        "Id": 305,
        "question": "What is the time complexity of the Rabin-Karp Algorithm for pattern matching?",
        "optionList": [
          "O(n)",
          "O(m)",
          "O(n * m)",
          "O(n + m)"
        ],
        "answer": 3
      },
      {
        "Id": 306,
        "question": "Which of the following is a disadvantage of the Rabin-Karp Algorithm?",
        "optionList": [
          "It cannot handle large texts efficiently.",
          "It requires preprocessing of the pattern.",
          "It has a high space complexity.",
          "It may produce false positives."
        ],
        "answer": 3
      },
      {
        "Id": 307,
        "question": "What is the main idea behind the Knuth-Morris-Pratt (KMP) Algorithm?",
        "optionList": [
          "It uses hashing to compare patterns with substrings.",
          "It preprocesses the pattern to avoid unnecessary character comparisons.",
          "It utilizes backtracking to find all occurrences of a pattern.",
          "It employs dynamic programming to compute the edit distance between strings."
        ],
        "answer": 1
      },
      {
        "Id": 308,
        "question": "Which of the following scenarios is the Knuth-Morris-Pratt (KMP) Algorithm particularly efficient for?",
        "optionList": [
          "When the pattern is very short.",
          "When the text is very long.",
          "When the pattern contains repeating characters.",
          "When the text and pattern are both random sequences of characters."
        ],
        "answer": 2
      },
      {
        "Id": 309,
        "question": "What is the Longest Common Subsequence (LCS) of \"ABCD\" and \"DCBA\"?",
        "optionList": [
          "\"A\"",
          "\"D\"",
          "\"AD\"",
          "\"ACD\""
        ],
        "answer": 1
      },
      {
        "Id": 310,
        "question": "Which dynamic programming algorithm is commonly used to find the Longest Common Subsequence (LCS)?",
        "optionList": [
          "Needleman-Wunsch Algorithm",
          "Dijkstra's Algorithm",
          "Bellman-Ford Algorithm",
          "Floyd-Warshall Algorithm"
        ],
        "answer": 0
      },
      {
        "Id": 311,
        "question": "Which of the following scenarios is the Longest Common Subsequence (LCS) problem commonly used for?",
        "optionList": [
          "Finding similarities between DNA sequences.",
          "Sorting arrays efficiently.",
          "Calculating the shortest path in a graph.",
          "Implementing data compression algorithms."
        ],
        "answer": 0
      },
      {
        "Id": 312,
        "question": "What is the length of the Longest Increasing Subsequence (LIS) of the sequence [3, 4, -1, 0, 6, 2, 3]?",
        "optionList": [
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": 2
      },
      {
        "Id": 313,
        "question": "What is the edit distance between the strings \"intention\" and \"execution\"?",
        "optionList": [
          "2",
          "3",
          "5",
          "6"
        ],
        "answer": 3
      },
      {
        "Id": 314,
        "question": "What is the primary application of the Levenshtein Distance Algorithm?",
        "optionList": [
          "Finding the longest common subsequence between two strings.",
          "Calculating the edit distance between two strings.",
          "Matching patterns in a text.",
          "Identifying palindromes in a string."
        ],
        "answer": 1
      },
      {
        "Id": 315,
        "question": "What does the meta-character \".\" represent in regular expressions?",
        "optionList": [
          "It matches the start of a string.",
          "It matches the end of a string.",
          "It matches any single character.",
          "It specifies zero or more occurrences of the preceding character."
        ],
        "answer": 2
      },
      {
        "Id": 316,
        "question": "What does the meta-character \"*\" represent in regular expressions?",
        "optionList": [
          "It matches zero or one occurrence of the preceding character.",
          "It matches one or more occurrences of the preceding character.",
          "It matches any single character.",
          "It matches the end of a string."
        ],
        "answer": 1
      },
      {
        "Id": 317,
        "question": "Which of the following quantifiers in regular expressions matches zero or more occurrences of the preceding character?",
        "optionList": [
          "+",
          "?",
          "*",
          "."
        ],
        "answer": 2
      },
      {
        "Id": 318,
        "question": "What is a capturing group in regular expressions?",
        "optionList": [
          "A group of characters enclosed in square brackets.",
          "A group of characters enclosed in curly braces.",
          "A group of characters enclosed in parentheses.",
          "A group of characters preceded by a backslash."
        ],
        "answer": 2
      },
      {
        "Id": 319,
        "question": "Which meta-character is used in regular expressions to specify alternative patterns?",
        "optionList": [
          "|",
          "^",
          "$",
          "*"
        ],
        "answer": 0
      },
      {
        "Id": 320,
        "question": "What does the meta-character \"+\" represent in regular expressions?",
        "optionList": [
          "It matches zero or one occurrence of the preceding character.",
          "It matches one or more occurrences of the preceding character.",
          "It matches any single character.",
          "It matches the end of a string."
        ],
        "answer": 1
      },
      {
        "Id": 321,
        "question": "In regular expressions, what does the meta-character \"{}\" represent?",
        "optionList": [
          "It matches a specified number of occurrences of the preceding character.",
          "It matches zero or one occurrence of the preceding character.",
          "It matches any single character.",
          "It matches the end of a string."
        ],
        "answer": 0
      },
      {
        "Id": 322,
        "question": "Which of the following meta-characters in regular expressions matches the end of a string?",
        "optionList": [
          "\\",
          "|",
          "^",
          "$"
        ],
        "answer": 3
      },
      {
        "Id": 323,
        "question": "What does the meta-character \"\\\" represent in regular expressions?",
        "optionList": [
          "It escapes the following character, treating it as a literal.",
          "It specifies alternative patterns.",
          "It matches any single character.",
          "It marks the beginning of a capturing group."
        ],
        "answer": 0
      },
      {
        "Id": 324,
        "question": "Which of the following meta-characters in regular expressions matches the start of a string?",
        "optionList": [
          "\\",
          "|",
          "^",
          "$"
        ],
        "answer": 2
      },
      {
        "Id": 325,
        "question": "What does the meta-character \"|\" represent in regular expressions?",
        "optionList": [
          "It escapes the following character, treating it as a literal.",
          "It specifies alternative patterns.",
          "It matches any single character.",
          "It marks the beginning of a capturing group."
        ],
        "answer": 1
      },
      {
        "Id": 326,
        "question": "In regular expressions, what does the meta-character \"[\" represent?",
        "optionList": [
          "It matches the start of a string.",
          "It specifies alternative patterns.",
          "It marks the beginning of a character class.",
          "It marks the end of a character class."
        ],
        "answer": 2
      },
      {
        "Id": 327,
        "question": "What does the meta-character \"]\" represent in regular expressions?",
        "optionList": [
          "It matches the start of a string.",
          "It specifies alternative patterns.",
          "It marks the beginning of a character class.",
          "It marks the end of a character class."
        ],
        "answer": 3
      },
      {
        "Id": 328,
        "question": "What does the meta-character \"^\" represent in a character class in regular expressions?",
        "optionList": [
          "It escapes the following character, treating it as a literal.",
          "It specifies the start of a character class.",
          "It matches any single character.",
          "It negates the character class."
        ],
        "answer": 3
      },
      {
        "Id": 329,
        "question": "What does the meta-character \"-\" represent in a character class in regular expressions?",
        "optionList": [
          "It escapes the following character, treating it as a literal.",
          "It specifies the start of a character class.",
          "It matches any single character.",
          "It specifies a range of characters."
        ],
        "answer": 3
      },
      {
        "Id": 330,
        "question": "In regular expressions, what does the meta-character \".\" represent?",
        "optionList": [
          "It matches the start of a string.",
          "It specifies a range of characters.",
          "It matches any single character except newline.",
          "It marks the beginning of a capturing group."
        ],
        "answer": 2
      },
      {
        "Id": 331,
        "question": "In regular expressions, what does the meta-character \"|\" represent?",
        "optionList": [
          "It matches the start of a string.",
          "It specifies alternative patterns.",
          "It marks the beginning of a character class.",
          "It marks the end of a character class."
        ],
        "answer": 1
      },
      {
        "Id": 332,
        "question": "What does the meta-character \"^\" represent in regular expressions?",
        "optionList": [
          "It escapes the following character, treating it as a literal.",
          "It specifies the start of a string.",
          "It matches any single character.",
          "It marks the beginning of a capturing group."
        ],
        "answer": 1
      },
      {
        "Id": 333,
        "question": "Which of the following algorithms is most suitable for finding multiple occurrences of a pattern in a text efficiently?",
        "optionList": [
          "Naive String Matching",
          "Rabin-Karp Algorithm",
          "Knuth-Morris-Pratt Algorithm",
          "Boyer-Moore Algorithm"
        ],
        "answer": 3
      },
      {
        "Id": 334,
        "question": "What is the worst-case time complexity of the Rabin-Karp Algorithm?",
        "optionList": [
          "O(n)",
          "O(m)",
          "O(n * m)",
          "O(n + m)"
        ],
        "answer": 2
      },
      {
        "Id": 335,
        "question": "The Knuth-Morris-Pratt (KMP) algorithm is based on which concept?",
        "optionList": [
          "Dynamic Programming",
          "Hashing",
          "Prefix function",
          "Sliding window"
        ],
        "answer": 2
      }
    ];
    return questionList;
  }
}