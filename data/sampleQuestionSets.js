const questionSets = [];
questionSets.push(
    {
        "id": "generateGUID()",
        "title": "CSE101 Quiz",
        "questions": [
            {
                "id": generateGUID(),
                "name": "What is the time complexity of a binary search algorithm?",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "O(log n)",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "O(n)",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "O(n^2)",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "O(1)",
                        "isCorrect": false
                    }
                ],
                "isMultiSelect": false,
                "note": "This question tests knowledge of algorithmic efficiency."
            },
            {
                "id": generateGUID(),
                "name": "Which data structure is used to implement a LIFO (Last In, First Out) system?",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "Stack",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Queue",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "Array",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "Hash Table",
                        "isCorrect": false
                    }
                ],
                "isMultiSelect": false,
                "note": "This tests understanding of basic data structures."
            },
            {
                "id": generateGUID(),
                "name": "Select the features of Object-Oriented Programming (OOP):",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "Encapsulation",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Inheritance",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Abstraction",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Procedural Programming",
                        "isCorrect": false
                    }
                ],
                "isMultiSelect": true,
                "note": "This is a multi-select question testing knowledge of OOP principles."
            },
            {
                "id": generateGUID(),
                "name": "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "Bubble Sort",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Merge Sort",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "Quick Sort",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "Insertion Sort",
                        "isCorrect": true
                    }
                ],
                "isMultiSelect": true,
                "note": "Tests understanding of sorting algorithms and their complexities."
            },
            {
                "id": generateGUID(),
                "name": "What is the primary purpose of a compiler?",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "To translate high-level code into machine code",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "To execute the program directly",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "To interpret code line by line",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "To optimize code",
                        "isCorrect": false
                    }
                ],
                "isMultiSelect": false,
                "note": "A basic question about the role of compilers."
            },
            {
                "id": generateGUID(),
                "name": "In an array of size n, how is the position of the last element represented?",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "n-1",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "n",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "1",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "n+1",
                        "isCorrect": false
                    }
                ],
                "isMultiSelect": false,
                "note": "This question checks understanding of array indexing."
            },
            {
                "id": generateGUID(),
                "name": "What is the result of 8 >> 1 in binary?",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "4",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "16",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "8",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "2",
                        "isCorrect": false
                    }
                ],
                "isMultiSelect": false,
                "note": "Tests understanding of bitwise operations."
            },
            {
                "id": generateGUID(),
                "name": "Select the dynamic programming problems from the following:",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "Fibonacci sequence",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Knapsack problem",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Linear search",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "Binary search",
                        "isCorrect": false
                    }
                ],
                "isMultiSelect": true,
                "note": "This question tests knowledge of algorithm strategies."
            },
            {
                "id": generateGUID(),
                "name": "Which of the following is a characteristic of a linked list?",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "Dynamic size",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Fixed size",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "Contiguous memory allocation",
                        "isCorrect": false
                    },
                    {
                        "id": generateGUID(),
                        "name": "Efficient insertion and deletion",
                        "isCorrect": true
                    }
                ],
                "isMultiSelect": true,
                "note": "Tests understanding of linked list characteristics."
            },
            {
                "id": generateGUID(),
                "name": "Which of the following operations is the fastest in a hash table on average?",
                "options": [
                    {
                        "id": generateGUID(),
                        "name": "Search",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Insert",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Delete",
                        "isCorrect": true
                    },
                    {
                        "id": generateGUID(),
                        "name": "Traversal",
                        "isCorrect": false
                    }
                ],
                "isMultiSelect": true,
                "note": "Tests knowledge of average time complexities in hash table operations."
            }
        ],
        "note": "This question set covers fundamental topics in CSE101, including data structures, algorithms, and basic computer science principles. It is designed to assess foundational knowledge for introductory computer science students.",
        "tags": ["CSE101", "Computer Science", "Algorithms", "Data Structures"]
    }
)
