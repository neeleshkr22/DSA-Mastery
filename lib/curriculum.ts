export interface CodeExample {
  language: string;
  code: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExamples: CodeExample[];
  keyPoints: string[];
  visualizations?: string[];
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface PracticeProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  constraints: string[];
  examples: { input: string; output: string }[];
  solution: CodeExample;
  explanation: string;
  // Enhanced interview-prep fields
  whySolve?: string;          // Why this problem is important / what pattern it teaches
  companies?: string[];        // Companies known to ask this
  hints?: string[];            // Progressive hints before revealing solution
  timeComplexity?: string;     // e.g. "O(n log n)"
  spaceComplexity?: string;    // e.g. "O(1)"
  tags?: string[];             // e.g. ['Array', 'Two Pointer', 'Sliding Window']
  approach?: string;           // Brute-force first, then optimal — the thinking process
  oaFrequency?: 'Very High' | 'High' | 'Medium' | 'Low'; // How often in OA rounds
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  lessons: Lesson[];
  quizzes: Quiz[];
  problems: PracticeProblem[];
  // Enhanced fields
  interviewImportance?: 'Critical' | 'High' | 'Medium' | 'Low';
  interviewTips?: string[];
  companyFocus?: string[];  // Companies that heavily test this topic
}

export interface Level {
  id: number;
  title: string;
  description: string;
  topics: Topic[];
}

export const LEVEL_0_EXPANDED = true; // Placeholder for additional levels

export const curriculum: Level[] = [
  {
    id: 0,
    title: 'Level 0: C++ Fundamentals',
    description: 'Master C++ basics from scratch. Learn syntax, data types, operators, and control flow.',
    topics: [
      {
        id: 'basics-intro',
        name: 'Introduction to C++',
        description: 'Get started with C++ programming language basics',
        lessons: [
          {
            id: 'lesson-0-1',
            title: 'What is C++ and Why Learn It?',
            description: 'Introduction to C++ and its importance in DSA',
            content: `C++ is a powerful, compiled programming language known for its performance and efficiency. It's the preferred language for competitive programming and DSA because:
            
• High Performance: Direct memory access and minimal overhead
• Competitive Programming: Used in all major programming contests
• Job Interviews: DSA questions are typically solved in C++
• Control: Fine-grained control over memory and execution

In this course, we'll learn C++ systematically, building from basics to advanced concepts, always with a focus on DSA applications.`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, DSA World!" << endl;
    return 0;
}`,
                explanation: 'This is the classic "Hello World" program. Every C++ program needs a main() function where execution starts.'
              }
            ],
            keyPoints: [
              'C++ is compiled, making it fast and efficient',
              'Used extensively in competitive programming',
              'Provides direct memory management',
              'Perfect for learning DSA concepts deeply'
            ]
          },
          {
            id: 'lesson-0-2',
            title: 'Setting Up Your Environment',
            description: 'Install and configure C++ development environment',
            content: `To start coding in C++, you need:

1. A C++ Compiler (converts code to machine instructions)
2. An IDE or Text Editor (for writing code)
3. Optional: Online Judge for practice

The most common setup is:
- Compiler: GCC (g++) or Clang
- IDE: Code::Blocks, Dev-C++, Visual Studio, or CLion
- Alternative: Use online platforms like Codeforces, HackerRank for immediate practice`,
            codeExamples: [
              {
                language: 'bash',
                code: `# Check if g++ is installed
g++ --version

# Compile a C++ file
g++ -o program program.cpp

# Run the program
./program`,
                explanation: 'Basic commands to compile and run C++ programs from the command line'
              }
            ],
            keyPoints: [
              'GCC (g++) is the most popular free compiler',
              'Visual Studio Code + Extensions is lightweight',
              'Online platforms provide instant compilation',
              'Learn the compilation process'
            ]
          }
        ],
        quizzes: [
          {
            id: 'quiz-0-1-1',
            question: 'What is the primary advantage of C++ for DSA?',
            options: ['Easy syntax', 'High performance and control', 'Automatic memory management', 'Built-in DSA libraries'],
            correctAnswer: 1,
            explanation: 'C++ provides high performance due to being compiled and gives programmers direct control over memory, which is crucial for efficient DSA implementations.'
          }
        ],
        problems: []
      },
      {
        id: 'datatypes',
        name: 'Data Types and Variables',
        description: 'Learn primitive data types, variable declaration, and memory concepts',
        lessons: [
          {
            id: 'lesson-0-3',
            title: 'Variables and Primitive Data Types',
            description: 'Understanding how to store and manipulate data',
            content: `A variable is a named storage location that holds a value. Data types define what kind of value a variable can store.

Primitive Data Types in C++:
• int: Integer numbers (-2,147,483,648 to 2,147,483,647)
• float: Decimal numbers (single precision, ~6-7 decimal places)
• double: Decimal numbers (double precision, ~15 decimal places)
• char: Single character ('a', 'b', '1', etc.)
• bool: True or false

Size matters! Understanding memory helps write efficient code.`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    int age = 25;           // integer
    double height = 5.9;    // decimal
    char grade = 'A';       // character
    bool isPassed = true;   // boolean
    
    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Grade: " << grade << endl;
    cout << "Passed: " << isPassed << endl;
    
    return 0;
}`,
                explanation: 'Declaration and use of different primitive data types'
              },
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    cout << "Size of char: " << sizeof(char) << " byte" << endl;
    cout << "Size of bool: " << sizeof(bool) << " byte" << endl;
    
    return 0;
}`,
                explanation: 'Use sizeof() to check memory size of different data types'
              }
            ],
            keyPoints: [
              'Variables store data in memory locations',
              'Different types use different amounts of memory',
              'int is the most commonly used type',
              'double is preferred over float for precision',
              'Choose data types based on your needs to optimize memory'
            ]
          },
          {
            id: 'lesson-0-4',
            title: 'Operators and Expressions',
            description: 'Learn arithmetic, logical, and comparison operators',
            content: `Operators are symbols that perform operations on variables and values.

Arithmetic Operators: +, -, *, /, %
Comparison Operators: ==, !=, <, >, <=, >=
Logical Operators: && (AND), || (OR), ! (NOT)
Assignment Operators: =, +=, -=, *=, /=

Understanding operator precedence is crucial - operations follow specific order of evaluation.`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    // Arithmetic operators
    cout << "a + b = " << (a + b) << endl;      // 13
    cout << "a - b = " << (a - b) << endl;      // 7
    cout << "a * b = " << (a * b) << endl;      // 30
    cout << "a / b = " << (a / b) << endl;      // 3
    cout << "a % b = " << (a % b) << endl;      // 1
    
    return 0;
}`,
                explanation: 'Arithmetic operators in action'
              },
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    int x = 5;
    
    cout << "x == 5: " << (x == 5) << endl;     // 1 (true)
    cout << "x > 3: " << (x > 3) << endl;       // 1 (true)
    cout << "x < 5: " << (x < 5) << endl;       // 0 (false)
    
    bool result = (x > 3) && (x < 10);
    cout << "Result: " << result << endl;        // 1 (true)
    
    return 0;
}`,
                explanation: 'Comparison and logical operators'
              }
            ],
            keyPoints: [
              'Modulo (%) gives remainder and is used frequently in DSA',
              'Comparison operators return true (1) or false (0)',
              'Logical operators combine multiple conditions',
              'Integer division truncates decimals',
              'Operator precedence: *, /, % before +, -'
            ]
          }
        ],
        quizzes: [
          {
            id: 'quiz-0-2-1',
            question: 'What is the output of 10 / 3 in C++?',
            options: ['3.33', '3', '3.0', 'Error'],
            correctAnswer: 1,
            explanation: 'When dividing two integers, C++ performs integer division and truncates the decimal part. 10 / 3 = 3'
          },
          {
            id: 'quiz-0-2-2',
            question: 'What does the modulo operator (%) do?',
            options: ['Divides two numbers', 'Returns remainder after division', 'Calculates percentage', 'Returns quotient'],
            correctAnswer: 1,
            explanation: 'The modulo operator (%) returns the remainder of division. For example, 10 % 3 = 1'
          }
        ],
        problems: [
          {
            id: 'problem-0-1',
            title: 'Simple Arithmetic Calculator',
            difficulty: 'Easy',
            description: 'Write a program that takes two integers and prints their sum, difference, product, and quotient.',
            constraints: [
              'Input will be two positive integers a and b (1 ≤ a, b ≤ 1000)',
              'For division, show the integer quotient',
              'Print results with clear labels'
            ],
            examples: [
              {
                input: '10 3',
                output: 'Sum: 13\nDifference: 7\nProduct: 30\nQuotient: 3'
              }
            ],
            solution: {
              language: 'cpp',
              code: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    
    cout << "Sum: " << (a + b) << endl;
    cout << "Difference: " << (a - b) << endl;
    cout << "Product: " << (a * b) << endl;
    cout << "Quotient: " << (a / b) << endl;
    
    return 0;
}`,
              explanation: 'Simple arithmetic operations'
            },
            explanation: 'This problem tests basic arithmetic operations and output formatting.'
          }
        ]
      },
      // ── STL Basics ──────────────────────────────────────────────────────
      {
        id: 'stl-basics',
        name: 'C++ STL Basics — vectors, pairs & strings',
        description: 'The Standard Template Library is your toolbox. Master it to solve problems 3× faster.',
        interviewImportance: 'Critical',
        interviewTips: [
          'Always use vector<int> instead of raw arrays in interviews — cleaner and safer.',
          'auto keyword saves typing and prevents type-mismatch bugs.',
          'Range-based for loops (for(auto x : v)) are preferred in modern C++.',
          'Know the difference between v.size() (unsigned) and (int)v.size() — casting matters!',
          'string behaves like a vector<char> — you can use the same algorithms on it.',
        ],
        companyFocus: ['Google', 'Amazon', 'Meta', 'Microsoft'],
        lessons: [
          {
            id: 'lesson-stl-1',
            title: 'Why STL? The Secret Weapon of Competitive Programmers',
            description: 'Understand what STL is and why it makes you 10× more productive',
            content: `The C++ Standard Template Library (STL) is a collection of ready-made, highly optimized data structures and algorithms built into the language.

Before STL, programmers had to write their own linked list, stack, sort, etc. — hundreds of lines that could have bugs. With STL, all of that is one line.

The 4 pillars of STL:
1. Containers — store data (vector, map, set, queue, stack, etc.)
2. Algorithms — operate on data (sort, find, lower_bound, etc.)
3. Iterators — traverse containers (begin(), end(), etc.)
4. Functors — customizable behavior (comparators, lambdas)

WHY does this matter for interviews?
• 80% of DSA problems need nothing more than vector, map, set, and sort.
• Interviewers expect you to know and USE STL — writing your own sort is wasted time.
• Many OA platforms (HackerRank, LeetCode) test whether you know STL idioms.

The mental model: Think of STL containers as smart, safe, fast versions of data structures you'd otherwise have to implement yourself.`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>  // The magic header — includes EVERYTHING
using namespace std;

int main() {
    // This single header gives you access to ALL of STL
    // vector, map, set, sort, lower_bound, etc.

    vector<int> v = {5, 3, 1, 4, 2};
    sort(v.begin(), v.end());   // sort in O(n log n)

    for (auto x : v) {
        cout << x << " ";       // Prints: 1 2 3 4 5
    }

    return 0;
}`,
                explanation: '#include <bits/stdc++.h> includes all STL headers at once. This is a GCC extension used in competitive programming and interviews. In production code, you include specific headers like <vector> or <algorithm>.'
              },
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // The auto keyword — let the compiler figure out the type
    auto x = 42;           // int
    auto y = 3.14;         // double
    auto s = "hello";      // const char*

    vector<int> v = {1, 2, 3, 4, 5};

    // Range-based for loop — cleanest way to iterate
    for (auto num : v) {
        cout << num << " ";
    }

    // With reference — modify elements in-place
    for (auto& num : v) {
        num *= 2;
    }

    // Print modified vector: 2 4 6 8 10
    for (auto num : v) cout << num << " ";

    return 0;
}`,
                explanation: 'auto saves typing and avoids type errors. for(auto x : v) is the modern, clean way to iterate. Use auto& when you want to modify elements or avoid copying large objects.'
              }
            ],
            keyPoints: [
              'STL = containers + algorithms + iterators — your interview toolkit',
              '#include <bits/stdc++.h> includes all STL (use in competitive programming)',
              'auto keyword reduces code and prevents type errors',
              'Range-based for loops are cleaner than index-based loops',
              'STL is implemented with templates — works with any data type',
            ]
          },
          {
            id: 'lesson-stl-2',
            title: 'vector<T> — The Dynamic Array You Need to Master',
            description: 'Deep dive into vector: the most important STL container',
            content: `vector is a dynamic array that can grow and shrink. It's backed by a contiguous block of memory (like a raw array) so random access is O(1), but it can resize itself automatically.

Mental Model: Think of vector as a smart array with superpowers.

CRITICAL OPERATIONS to memorize:
• push_back(x)     — add to end         → O(1) amortized
• pop_back()       — remove from end    → O(1)
• v[i], v.at(i)    — access by index    → O(1)
• v.front(), v.back() — first/last element
• v.size()         — number of elements  → O(1)
• v.empty()        — true if size == 0  → O(1)
• v.clear()        — remove all         → O(n)
• insert(pos, val) — insert anywhere    → O(n) — SLOW, avoid in tight loops
• erase(pos)       — erase anywhere     → O(n) — SLOW
• v.resize(n)      — resize to n elements
• v.reserve(n)     — pre-allocate memory (performance optimization)
• sort(v.begin(), v.end())  — sort the vector
• reverse(v.begin(), v.end()) — reverse it

INTERVIEW TIP: v.size() returns size_t (unsigned). Comparing it with -1 or a negative int gives bugs! Always cast: (int)v.size().`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // ── Creating vectors ──────────────────────────────
    vector<int> v1;                    // empty
    vector<int> v2(5, 0);             // 5 zeros: {0,0,0,0,0}
    vector<int> v3 = {3, 1, 4, 1, 5}; // initializer list
    vector<int> v4(v3);               // copy of v3

    // ── Adding elements ───────────────────────────────
    v1.push_back(10);
    v1.push_back(20);
    v1.push_back(30);
    // v1 = {10, 20, 30}

    // ── Accessing ─────────────────────────────────────
    cout << v1[0]      << endl;  // 10 (no bounds check)
    cout << v1.at(1)   << endl;  // 20 (throws exception if OOB)
    cout << v1.front() << endl;  // 10 (first element)
    cout << v1.back()  << endl;  // 30 (last element)

    // ── Size & capacity ───────────────────────────────
    cout << v1.size()  << endl;  // 3
    cout << v1.empty() << endl;  // 0 (false)

    // ── Remove last ───────────────────────────────────
    v1.pop_back();               // removes 30, v1 = {10, 20}

    // ── INTERVIEW GOTCHA: size() is unsigned! ─────────
    vector<int> empty_v;
    // WRONG: empty_v.size() - 1 = 18446744073709551615 (overflow!)
    // RIGHT:
    if (!empty_v.empty()) {
        cout << empty_v.size() - 1 << endl;
    }

    return 0;
}`,
                explanation: 'The fundamentals of vector creation and access. Note the gotcha with size() being unsigned — this is a common source of bugs in interviews!'
              },
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9, 3};

    // ── Sorting ───────────────────────────────────────
    sort(v.begin(), v.end());          // ascending: 1 2 3 5 8 9
    sort(v.rbegin(), v.rend());        // descending: 9 8 5 3 2 1

    // Custom comparator (sort by absolute value):
    sort(v.begin(), v.end(), [](int a, int b) {
        return abs(a) < abs(b);
    });

    // ── Searching ─────────────────────────────────────
    sort(v.begin(), v.end());           // must be sorted for binary search

    // lower_bound: first element >= target
    auto it = lower_bound(v.begin(), v.end(), 5);
    if (it != v.end()) {
        cout << "First >= 5: " << *it << endl;
        cout << "Index: " << (it - v.begin()) << endl;
    }

    // upper_bound: first element > target
    auto it2 = upper_bound(v.begin(), v.end(), 5);
    cout << "First > 5: " << *it2 << endl;

    // ── Useful algorithms ─────────────────────────────
    cout << *min_element(v.begin(), v.end()) << endl;  // minimum
    cout << *max_element(v.begin(), v.end()) << endl;  // maximum
    cout << accumulate(v.begin(), v.end(), 0) << endl; // sum

    reverse(v.begin(), v.end());        // reverse in-place

    // ── 2D vector (matrix) ────────────────────────────
    int rows = 3, cols = 4;
    vector<vector<int>> matrix(rows, vector<int>(cols, 0));
    matrix[1][2] = 42;

    return 0;
}`,
                explanation: 'Sorting with custom comparators (lambda functions), binary search with lower_bound/upper_bound, and 2D vectors for matrix problems. These patterns appear constantly in interviews.'
              },
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // ── Performance: reserve() ────────────────────────
    // When you know the size, reserve to avoid reallocations
    vector<int> v;
    v.reserve(1000000);  // allocate memory upfront
    for (int i = 0; i < 1000000; i++) {
        v.push_back(i);  // no reallocation needed — much faster
    }

    // ── pair<> inside vector ──────────────────────────
    vector<pair<int,int>> edges = {{1,2}, {3,4}, {0,5}};
    sort(edges.begin(), edges.end());  // sorts by first, then second

    for (auto [u, v] : edges) {  // structured bindings (C++17)
        cout << u << " -> " << v << endl;
    }

    // ── Erase-remove idiom ────────────────────────────
    vector<int> nums = {1, 2, 3, 2, 4, 2, 5};
    // Remove all 2s efficiently:
    nums.erase(remove(nums.begin(), nums.end(), 2), nums.end());
    // nums = {1, 3, 4, 5}

    // ── Count occurrences ─────────────────────────────
    vector<int> data = {1, 2, 2, 3, 2, 1};
    int cnt = count(data.begin(), data.end(), 2);  // 3

    return 0;
}`,
                explanation: 'Power techniques: reserve() for performance, pairs in vectors for edge lists (graphs), the erase-remove idiom, and count(). These are the patterns that separate good candidates from great ones.'
              }
            ],
            keyPoints: [
              'vector is the most used STL container — master it completely',
              'push_back is O(1) amortized — safe to use in loops',
              'insert() and erase() at arbitrary positions are O(n) — avoid in performance-critical code',
              'Always cast size() to int when subtracting: (int)v.size()',
              'lower_bound and upper_bound work in O(log n) on sorted vectors',
              'Use reserve() when you know the final size — 2-3x speedup for large inputs',
            ]
          },
          {
            id: 'lesson-stl-3',
            title: 'string — Not Just Characters',
            description: 'Master C++ strings — they work like vectors and have powerful built-in methods',
            content: `In C++, std::string is essentially a vector<char> with extra capabilities. You can use most vector operations on strings.

Key insight for interviews: Strings are one of the most common problem types. Mastering string operations = solving a huge category of problems.

Essential string operations:
• s.length(), s.size()       — length (same result)
• s[i], s.at(i)              — character access
• s.substr(pos, len)         — extract substring
• s.find(target)             — find substring (returns npos if not found)
• s.find(target, startPos)   — find from position
• to_string(number)          — convert int/double to string
• stoi(s), stoll(s)          — string to int/long long
• s + t                      — concatenation (creates new string)
• s += t, s += 'c'           — append (modifies in-place, more efficient)
• sort(s.begin(), s.end())   — sort characters alphabetically
• reverse(s.begin(), s.end()) — reverse string

INTERVIEW PATTERNS:
• Palindrome check: reverse and compare
• Anagram check: sort both strings and compare
• Character frequency: use array[26] or unordered_map<char,int>`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    string s = "Hello, World!";

    // ── Basic operations ──────────────────────────────
    cout << s.length() << endl;           // 13
    cout << s[0] << endl;                 // 'H'
    cout << s.substr(7, 5) << endl;       // "World"

    // ── Finding ───────────────────────────────────────
    size_t pos = s.find("World");
    if (pos != string::npos) {
        cout << "Found at index: " << pos << endl;  // 7
    }

    // ── Modifying ────────────────────────────────────
    string t = "DSA";
    t += " Master";         // "DSA Master"
    t += '!';               // "DSA Master!"

    // ── Conversion ───────────────────────────────────
    int n = 42;
    string ns = to_string(n);    // "42"
    int back = stoi("123");      // 123
    long long big = stoll("9999999999");  // for large numbers

    // ── Iterating over characters ─────────────────────
    string word = "hello";
    for (char c : word) {
        cout << (char)(c - 32) << "";  // "HELLO" (uppercase)
    }
    // Better: use toupper()
    for (char& c : word) {
        c = toupper(c);
    }
    cout << word << endl;  // "HELLO"

    return 0;
}`,
                explanation: 'Core string operations. Note: string::npos is a special value (-1 as unsigned) that indicates "not found". Always check for npos before using the position.'
              },
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// Pattern 1: Check if palindrome
bool isPalindrome(string s) {
    int l = 0, r = s.size() - 1;
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++; r--;
    }
    return true;
}

// Pattern 2: Check if anagram
bool isAnagram(string s, string t) {
    if (s.size() != t.size()) return false;
    sort(s.begin(), s.end());
    sort(t.begin(), t.end());
    return s == t;
}

// Pattern 3: Character frequency
map<char, int> charFrequency(string s) {
    map<char, int> freq;
    for (char c : s) freq[c]++;
    return freq;
}

// Pattern 4: Count vowels (classic interview)
int countVowels(string s) {
    string vowels = "aeiouAEIOU";
    int count = 0;
    for (char c : s) {
        if (vowels.find(c) != string::npos) count++;
    }
    return count;
}

int main() {
    cout << isPalindrome("racecar") << endl;   // 1 (true)
    cout << isPalindrome("hello")   << endl;   // 0 (false)
    cout << isAnagram("listen", "silent") << endl;  // 1 (true)
    cout << countVowels("Hello World") << endl;     // 3
    return 0;
}`,
                explanation: 'Classic string patterns that appear in 30%+ of string interview problems. Palindrome with two pointers, anagram via sorting, character frequency — memorize these templates.'
              }
            ],
            keyPoints: [
              'string behaves like a vector<char> — sort, reverse, and algorithms all work',
              'substr(pos, len) — extracts len characters starting at pos',
              'find() returns string::npos if not found — always check before using result',
              'to_string() and stoi() are your bridge between numbers and strings',
              'For character frequency: array<int,26> freq = {} is faster than unordered_map',
            ]
          },
          {
            id: 'lesson-stl-4',
            title: 'pair<> and tuple<> — Grouping Multiple Values',
            description: 'pairs and tuples let you group related values without creating a struct',
            content: `pair<T1,T2> holds exactly two values of potentially different types.
tuple<T1,T2,...> holds any number of values.

WHY they matter: Pairs are everywhere in C++ — maps store key-value as pairs, sort works on pairs naturally, graph edges are pairs, etc.

Key operations:
• make_pair(a, b) or {a, b}  — create a pair
• p.first, p.second           — access elements
• auto [a, b] = p             — structured binding (C++17) — cleaner!
• sort works on pairs: sorts by .first, then .second
• pair supports == < > comparisons out of the box

Common use cases:
1. Return two values from a function
2. Store (value, index) to sort while remembering original position
3. Graph edges as {weight, node}
4. Coordinate pairs {x, y}`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// Function returning two values using pair
pair<int,int> minmax_element(vector<int>& v) {
    int mn = *min_element(v.begin(), v.end());
    int mx = *max_element(v.begin(), v.end());
    return {mn, mx};  // shorthand for make_pair(mn, mx)
}

int main() {
    // Creating pairs
    pair<int, string> p1 = {42, "hello"};
    auto p2 = make_pair(3.14, true);

    // Accessing
    cout << p1.first << " " << p1.second << endl;  // 42 hello

    // C++17 structured binding — much cleaner
    auto [num, str] = p1;
    cout << num << " " << str << endl;

    // Pairs in vectors — common interview pattern
    vector<pair<int,int>> v = {{3,1}, {1,5}, {2,3}, {1,2}};
    sort(v.begin(), v.end());  // sorts by .first, then .second
    // Result: {1,2}, {1,5}, {2,3}, {3,1}

    // Sort by second element (custom comparator)
    sort(v.begin(), v.end(), [](auto& a, auto& b) {
        return a.second < b.second;  // sort by value
    });

    // Classic trick: sort with original index preserved
    vector<int> nums = {50, 20, 80, 10, 60};
    vector<pair<int,int>> indexed;
    for (int i = 0; i < nums.size(); i++) {
        indexed.push_back({nums[i], i});
    }
    sort(indexed.begin(), indexed.end());
    // indexed[0] = {10, 3} — smallest value was at index 3

    // minmax example
    vector<int> data = {3, 1, 4, 1, 5, 9};
    auto [mn, mx] = minmax_element(data);
    cout << "Min: " << mn << ", Max: " << mx << endl;

    return 0;
}`,
                explanation: 'Pairs are incredibly versatile. The (value, index) pattern for sorting while preserving index is a classic interview technique. Structured bindings make code much more readable.'
              }
            ],
            keyPoints: [
              'pair<T1,T2> is the most common "return two things" pattern',
              'auto [a, b] = p — structured bindings make pair access elegant',
              'sort on vector<pair<>> sorts by first, then second — very useful',
              'The (value, index) pair trick preserves original positions after sorting',
              'tuple extends pair to any number of elements: get<0>(t), get<1>(t)',
            ]
          }
        ],
        quizzes: [
          {
            id: 'quiz-stl-1',
            question: 'What does v.size() - 1 return if v is empty?',
            options: ['-1', '0', 'A very large number (overflow)', 'Throws an exception'],
            correctAnswer: 2,
            explanation: 'v.size() returns size_t (unsigned integer). 0 - 1 on an unsigned type wraps around to the maximum value (~18 quintillion on 64-bit). Always check v.empty() first or cast to int.'
          },
          {
            id: 'quiz-stl-2',
            question: 'What is the time complexity of lower_bound() on a sorted vector?',
            options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
            correctAnswer: 1,
            explanation: 'lower_bound() uses binary search on sorted containers, achieving O(log n). It returns an iterator to the first element >= target.'
          },
          {
            id: 'quiz-stl-3',
            question: 'Which is more efficient for appending to a string?',
            options: ['s = s + "text"  (creates new string)', 's += "text"  (appends in place)', 'Both are identical', 'Neither — use push_back'],
            correctAnswer: 1,
            explanation: 's = s + "text" creates a brand new string and copies all existing data — O(n) per append. s += "text" appends in-place — amortized O(1). In a loop, s += is dramatically faster.'
          },
        ],
        problems: [
          {
            id: 'problem-stl-1',
            title: 'Two Sum',
            difficulty: 'Easy',
            description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target. You may assume exactly one solution exists.',
            constraints: [
              '2 ≤ nums.length ≤ 10^4',
              '-10^9 ≤ nums[i] ≤ 10^9',
              'Exactly one valid answer exists',
            ],
            examples: [
              { input: 'nums = [2,7,11,15], target = 9', output: '[0, 1]' },
              { input: 'nums = [3,2,4], target = 6', output: '[1, 2]' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;  // value -> index

    for (int i = 0; i < (int)nums.size(); i++) {
        int complement = target - nums[i];

        if (seen.count(complement)) {
            return {seen[complement], i};
        }

        seen[nums[i]] = i;
    }

    return {};  // never reached (problem guarantees a solution)
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    auto result = twoSum(nums, target);
    cout << result[0] << " " << result[1] << endl;  // 0 1
    return 0;
}`,
              explanation: 'Use a hash map to store each number and its index. For each new number, check if its complement (target - num) already exists in the map. This gives O(n) time vs O(n²) brute force.'
            },
            explanation: 'Classic hash map problem. The key insight: instead of checking all pairs (O(n²)), use a hash map to answer "have I seen target-nums[i]?" in O(1). This reduces time from O(n²) to O(n).',
            whySolve: 'Two Sum is the canonical introduction to hash maps in interviews. It teaches the fundamental trade-off: use O(n) extra space to achieve O(n) time instead of O(n²) time. This hash-map-for-O(1)-lookup pattern appears in 30%+ of interview problems.',
            companies: ['Google', 'Amazon', 'Meta', 'Microsoft', 'Apple', 'Uber', 'Netflix'],
            hints: [
              'Can you do it in O(n²) first? Try nested loops.',
              'For each number, what number would it need to pair with to reach target?',
              'If you could look up "have I seen X before?" in O(1), the problem becomes trivial. What data structure does O(1) lookup?',
            ],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            tags: ['Array', 'Hash Map'],
            approach: 'Brute force: nested loops checking all pairs → O(n²). Optimal: one pass with hash map — for each element, check if complement exists → O(n).',
            oaFrequency: 'Very High',
          },
          {
            id: 'problem-stl-2',
            title: 'Sort Characters By Frequency',
            difficulty: 'Medium',
            description: 'Given a string s, sort it in decreasing order based on the frequency of characters. Characters with higher frequency come first.',
            constraints: [
              '1 ≤ s.length ≤ 5 × 10^5',
              's consists of uppercase/lowercase English letters and digits',
            ],
            examples: [
              { input: 's = "tree"', output: '"eert" or "eetr"' },
              { input: 's = "cccaaa"', output: '"cccaaa" or "aaaccc"' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

string frequencySort(string s) {
    // Step 1: Count character frequencies
    unordered_map<char, int> freq;
    for (char c : s) freq[c]++;

    // Step 2: Create (frequency, char) pairs and sort descending
    vector<pair<int,char>> sorted_chars;
    for (auto& [c, f] : freq) {
        sorted_chars.push_back({f, c});
    }
    sort(sorted_chars.rbegin(), sorted_chars.rend()); // descending

    // Step 3: Build result string
    string result;
    for (auto& [f, c] : sorted_chars) {
        result += string(f, c);  // append character f times
    }

    return result;
}

int main() {
    cout << frequencySort("tree")   << endl;  // "eert"
    cout << frequencySort("cccaaa") << endl;  // "cccaaa"
    return 0;
}`,
              explanation: 'Use unordered_map for O(1) frequency counting, then sort by frequency. string(f, c) creates a string of f copies of character c.'
            },
            explanation: 'This problem combines frequency counting (hash map) with sorting by custom criteria. The key STL patterns: unordered_map for counting, pair for associating frequency with character, custom sort, and string constructor string(n, c).',
            whySolve: 'This problem tests your ability to combine multiple STL tools: hash maps, pairs, sorting. It is a common pattern — count, then sort by count — that appears in many frequency-based problems.',
            companies: ['Amazon', 'Google', 'Meta'],
            hints: [
              'Count frequency of each character.',
              'To sort characters by frequency, associate each character with its count.',
              'Use vector<pair<int,char>> and sort descending.',
            ],
            timeComplexity: 'O(n + k log k)',
            spaceComplexity: 'O(k)',
            tags: ['String', 'Hash Map', 'Sorting'],
            oaFrequency: 'High',
          },
        ]
      }
    ]
  },
  // Level 1: Control Flow
  {
    id: 1,
    title: 'Level 1: Control Flow & Functions',
    description: 'Master if-else statements, loops, and functions for structured programming.',
    topics: [
      {
        id: 'control-flow',
        name: 'Conditional Statements',
        description: 'Learn if-else, switch statements, and decision making',
        lessons: [
          {
            id: 'lesson-1-1',
            title: 'If-Else Statements',
            description: 'Making decisions in your code',
            content: `Conditional statements allow your program to make decisions based on conditions.

The if-else structure:
- if: Execute code if condition is true
- else if: Execute code if previous conditions are false and this is true
- else: Execute code if all previous conditions are false

Use comparison operators to create conditions that evaluate to true or false.`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    int score = 75;
    
    if (score >= 90) {
        cout << "Grade: A" << endl;
    }
    else if (score >= 80) {
        cout << "Grade: B" << endl;
    }
    else if (score >= 70) {
        cout << "Grade: C" << endl;
    }
    else {
        cout << "Grade: F" << endl;
    }
    
    return 0;
}`,
                explanation: 'Grading system using if-else statements'
              }
            ],
            keyPoints: [
              'Conditions must be in parentheses',
              'Use {} for multiple statements in a block',
              'else if can be chained multiple times',
              'else is optional',
              'Nested if-else statements are allowed'
            ]
          }
        ],
        quizzes: [
          {
            id: 'quiz-1-1-1',
            question: 'What does the else clause execute?',
            options: ['Only if the if condition is true', 'Only if the if condition is false', 'Always after the if block', 'Never'],
            correctAnswer: 1,
            explanation: 'The else clause executes only when the if condition is false'
          }
        ],
        problems: [
          {
            id: 'problem-1-1',
            title: 'Maximum of Two Numbers',
            difficulty: 'Easy',
            description: 'Write a program to find the maximum of two numbers.',
            constraints: ['Input: Two integers a and b'],
            examples: [
              {
                input: '10 20',
                output: '20'
              },
              {
                input: '50 30',
                output: '50'
              }
            ],
            solution: {
              language: 'cpp',
              code: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    
    if (a > b) {
        cout << a << endl;
    }
    else {
        cout << b << endl;
    }
    
    return 0;
}`,
              explanation: 'Compare two numbers using if-else'
            },
            explanation: 'Simple conditional logic to find the maximum'
          }
        ]
      },
      {
        id: 'loops',
        name: 'Loops',
        description: 'Learn for, while, and do-while loops for repetition',
        lessons: [
          {
            id: 'lesson-1-2',
            title: 'For Loops',
            description: 'Repeat code a specific number of times',
            content: `A for loop repeats a block of code a known number of times.

Syntax: for (initialization; condition; increment/decrement)

1. Initialization: Set starting value
2. Condition: Check before each iteration
3. Increment/Decrement: Update counter after each iteration

This is the most common loop when you know how many times to iterate.`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    // Print numbers 1 to 5
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // Print numbers 5 to 1
    for (int i = 5; i >= 1; i--) {
        cout << i << " ";
    }
    
    return 0;
}`,
                explanation: 'Basic for loops counting up and down'
              },
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    
    // Sum of 1 to 10
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    
    cout << "Sum: " << sum << endl;  // Output: 55
    
    return 0;
}`,
                explanation: 'Using loops to calculate sum'
              }
            ],
            keyPoints: [
              'for loop is best when iteration count is known',
              'Variable declared in loop exists only in loop scope',
              'Loop counter can increment or decrement',
              'Nested loops are common in DSA',
              'Loop must eventually terminate'
            ]
          },
          {
            id: 'lesson-1-3',
            title: 'While and Do-While Loops',
            description: 'Repeat code while condition is true',
            content: `While loop repeats while a condition is true. Use when iteration count is unknown.

while (condition) { ... }

Do-while loop executes at least once, then checks condition:

do { ... } while (condition);

Key difference: do-while always runs at least once.`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    int i = 0;
    
    while (i < 5) {
        cout << i << " ";
        i++;
    }
    // Output: 0 1 2 3 4
    
    return 0;
}`,
                explanation: 'Basic while loop'
              },
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

int main() {
    int num;
    
    do {
        cout << "Enter a positive number: ";
        cin >> num;
    } while (num <= 0);
    
    cout << "You entered: " << num << endl;
    
    return 0;
}`,
                explanation: 'do-while for input validation - runs at least once'
              }
            ],
            keyPoints: [
              'while loop checks condition first',
              'do-while always executes at least once',
              'Infinite loops happen if condition never becomes false',
              'Use break to exit loop early',
              'Use continue to skip to next iteration'
            ]
          }
        ],
        quizzes: [],
        problems: [
          {
            id: 'problem-1-2',
            title: 'Print Multiplication Table',
            difficulty: 'Easy',
            description: 'Print the multiplication table for a given number.',
            constraints: ['Input: One integer n (1 ≤ n ≤ 100)'],
            examples: [
              {
                input: '5',
                output: '5 × 1 = 5\n5 × 2 = 10\n5 × 3 = 15\n5 × 4 = 20\n5 × 5 = 25\n5 × 6 = 30\n5 × 7 = 35\n5 × 8 = 40\n5 × 9 = 45\n5 × 10 = 50'
              }
            ],
            solution: {
              language: 'cpp',
              code: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= 10; i++) {
        cout << n << " × " << i << " = " << (n * i) << endl;
    }
    
    return 0;
}`,
              explanation: 'Simple for loop to print multiplication table'
            },
            explanation: 'Practice loops with known iteration count'
          }
        ]
      },
      {
        id: 'functions',
        name: 'Functions',
        description: 'Write reusable code with functions',
        lessons: [
          {
            id: 'lesson-1-4',
            title: 'Introduction to Functions',
            description: 'Break code into reusable blocks',
            content: `A function is a reusable block of code that performs a specific task.

Benefits of functions:
• Code Reusability: Write once, use many times
• Modularity: Break complex problems into smaller pieces
• Maintainability: Easier to debug and modify
• Readability: Code organization improves clarity

Function syntax:
return_type function_name(parameters) {
    // code
    return value;
}`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

// Function declaration (prototype)
int add(int a, int b);

int main() {
    int result = add(5, 3);
    cout << "Result: " << result << endl;  // Output: 8
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`,
                explanation: 'Function declaration, call, and definition'
              },
              {
                language: 'cpp',
                code: `#include <iostream>
using namespace std;

// Function with no return value
void printNumber(int n) {
    cout << "Number: " << n << endl;
}

// Function returning value
int square(int x) {
    return x * x;
}

int main() {
    printNumber(5);              // Call void function
    int result = square(4);      // Call function and store return
    cout << result << endl;      // Output: 16
    return 0;
}`,
                explanation: 'Functions with and without return values'
              }
            ],
            keyPoints: [
              'Functions must be declared before use (prototype)',
              'Return type specifies what the function returns',
              'void means function doesn\'t return anything',
              'Parameters are inputs to the function',
              'return statement exits function and sends value back'
            ]
          }
        ],
        quizzes: [],
        problems: [
          {
            id: 'problem-1-3',
            title: 'Check Prime Number',
            difficulty: 'Medium',
            description: 'Write a function to check if a number is prime.',
            constraints: ['Input: One integer n (2 ≤ n ≤ 10000)'],
            examples: [
              {
                input: '17',
                output: 'Prime'
              },
              {
                input: '20',
                output: 'Not Prime'
              }
            ],
            solution: {
              language: 'cpp',
              code: `#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n < 2) return false;
    
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    
    if (isPrime(n)) {
        cout << "Prime" << endl;
    } else {
        cout << "Not Prime" << endl;
    }
    
    return 0;
}`,
              explanation: 'Prime checking function using loop and division'
            },
            explanation: 'Create a reusable function to check prime numbers'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Level 2: Arrays, Strings & Core Patterns',
    description: 'The most-tested category in FAANG interviews. Master arrays, strings, two pointers, sliding window, and prefix sums — the patterns that solve 50%+ of interview problems.',
    topics: [
      {
        id: 'arrays-core',
        name: 'Arrays — Deep Dive & Core Patterns',
        description: 'Prefix sums, two pointers, sliding window — the 3 patterns that solve most array problems.',
        interviewImportance: 'Critical',
        companyFocus: ['Google', 'Amazon', 'Meta', 'Microsoft', 'Adobe'],
        interviewTips: [
          'ALWAYS clarify: can the array be empty? Can elements be negative? Can they repeat?',
          'Two-pointer pattern: use when you need pairs/triplets with a target sum.',
          'Sliding window: use when the question mentions "contiguous subarray/substring".',
          'Prefix sums: precompute so any range sum is O(1). Classic trade-off: O(n) space for O(1) queries.',
          'When stuck, think: what if I sort first? Sorting changes the problem!',
          'Common mistake: off-by-one errors in window boundaries. Trace through a small example.',
        ],
        lessons: [
          {
            id: 'lesson-2-1',
            title: 'Prefix Sums — The Key to Range Queries',
            description: 'Precompute cumulative sums to answer range queries in O(1)',
            content: `Prefix sum is one of the most elegant and powerful techniques in competitive programming.

The idea: precompute an array prefix[] where prefix[i] = sum of elements from index 0 to i.

Then: sum(l, r) = prefix[r] - prefix[l-1]  ← answered in O(1)!

Without prefix sum: answering Q range sum queries takes O(Q × N).
With prefix sum: build in O(N), then answer each query in O(1) → O(N + Q) total.

When to use it:
• "Find sum of elements between index l and r" — prefix sum
• "Count subarrays with sum = k" — prefix sum + hash map
• "Find number of 0s and 1s balanced" — treat 0 as -1, find prefix sum = 0
• "Running total" — any problem with "sum up to point i"

IMPORTANT: prefix[0] = arr[0]. prefix[i] = prefix[i-1] + arr[i].
Be careful with 0-indexed vs 1-indexed — bugs come from this!`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> arr = {3, 1, 4, 1, 5, 9, 2, 6};
    int n = arr.size();

    // Build prefix sum array
    vector<int> prefix(n + 1, 0);  // 1-indexed for convenience
    for (int i = 1; i <= n; i++) {
        prefix[i] = prefix[i-1] + arr[i-1];
    }

    // Query: sum from index l to r (1-indexed, inclusive)
    auto rangeSum = [&](int l, int r) {
        return prefix[r] - prefix[l-1];
    };

    cout << rangeSum(1, 3) << endl;  // 3+1+4 = 8
    cout << rangeSum(3, 6) << endl;  // 4+1+5+9 = 19
    cout << rangeSum(1, 8) << endl;  // total = 31

    // ── Classic problem: number of subarrays with sum = k ──
    // Without prefix: O(n²). With prefix + hashmap: O(n)
    int k = 5;
    unordered_map<int, int> seen;
    seen[0] = 1;  // empty prefix has sum 0
    int runningSum = 0, count = 0;

    for (int x : arr) {
        runningSum += x;
        // If (runningSum - k) was seen before, then
        // subarray from there to here sums to k
        if (seen.count(runningSum - k)) {
            count += seen[runningSum - k];
        }
        seen[runningSum]++;
    }

    cout << "Subarrays with sum " << k << ": " << count << endl;

    return 0;
}`,
                explanation: 'Prefix sum construction + range queries + the classic "subarray sum equals k" pattern using prefix sum + hash map. This O(n) technique replaces an O(n²) brute force.'
              },
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// 2D Prefix Sum — for matrix range queries
// Builds in O(rows × cols), queries in O(1)
struct PrefixSum2D {
    vector<vector<int>> psum;
    int R, C;

    PrefixSum2D(vector<vector<int>>& mat) {
        R = mat.size(); C = mat[0].size();
        psum.assign(R+1, vector<int>(C+1, 0));

        for (int i = 1; i <= R; i++)
            for (int j = 1; j <= C; j++)
                psum[i][j] = mat[i-1][j-1]
                           + psum[i-1][j]
                           + psum[i][j-1]
                           - psum[i-1][j-1];
    }

    // Sum of rectangle (r1,c1) to (r2,c2) — 1-indexed
    int query(int r1, int c1, int r2, int c2) {
        return psum[r2][c2] - psum[r1-1][c2]
                            - psum[r2][c1-1]
                            + psum[r1-1][c1-1];
    }
};

int main() {
    vector<vector<int>> mat = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    PrefixSum2D ps(mat);
    cout << ps.query(1,1,2,2) << endl;  // 1+2+4+5 = 12
    cout << ps.query(2,2,3,3) << endl;  // 5+6+8+9 = 28
    return 0;
}`,
                explanation: '2D prefix sum for matrix problems. The inclusion-exclusion formula is key: add top-left, subtract top, subtract left, add overlap that was double-subtracted.'
              }
            ],
            keyPoints: [
              'prefix[i] = sum of arr[0..i]. Range sum(l,r) = prefix[r] - prefix[l-1] in O(1)',
              '"Subarray sum = k" uses prefix sum + hash map in O(n)',
              '2D prefix sums enable O(1) rectangle sum queries on matrices',
              'Always handle edge case: prefix[0] = 0 (empty prefix) for clean code',
              'Very common in OA rounds and Google interviews',
            ]
          },
          {
            id: 'lesson-2-2',
            title: 'Two Pointers — Elegant O(n) Solutions',
            description: 'Use two pointers to eliminate nested loops and reduce O(n²) to O(n)',
            content: `Two Pointers is a technique where you use two indices that move through the array, often in opposite directions or at different speeds.

When to use:
• Array is SORTED (or you can sort it) + you're looking for pairs/triplets
• Checking palindrome
• Removing duplicates from sorted array
• Merging sorted arrays

The core intuition: Instead of trying all pairs (O(n²)), use the sorted order to make smart decisions about which pointer to move.

Pattern 1 — Opposite ends:
• left starts at 0, right starts at n-1
• Move pointers based on current sum vs target
• Example: Two Sum (sorted), Container with Most Water, 3Sum

Pattern 2 — Fast & Slow pointers:
• Used for linked lists (detect cycle, find middle)
• Also useful for removing duplicates in-place

Pattern 3 — Same direction:
• Both pointers start at 0, move right at different speeds
• Used in sliding window problems`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// Pattern 1: Two Sum II (sorted array) — O(n) two pointer
vector<int> twoSumSorted(vector<int>& arr, int target) {
    int l = 0, r = (int)arr.size() - 1;

    while (l < r) {
        int sum = arr[l] + arr[r];
        if (sum == target) return {l+1, r+1};  // 1-indexed
        else if (sum < target) l++;  // need bigger sum → move left right
        else r--;                    // need smaller sum → move right left
    }
    return {};
}

// Pattern 2: Remove Duplicates from Sorted Array — O(n) in-place
int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    int slow = 0;  // points to last unique element
    for (int fast = 1; fast < (int)nums.size(); fast++) {
        if (nums[fast] != nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}

// Pattern 3: 3Sum — find all triplets summing to 0
// Trick: fix first element, then use two pointers for the rest
vector<vector<int>> threeSum(vector<int> nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> result;
    int n = nums.size();

    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;  // skip duplicates!

        int l = i + 1, r = n - 1;
        while (l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                result.push_back({nums[i], nums[l], nums[r]});
                while (l < r && nums[l] == nums[l+1]) l++;  // skip dupes
                while (l < r && nums[r] == nums[r-1]) r--;  // skip dupes
                l++; r--;
            } else if (sum < 0) l++;
            else r--;
        }
    }
    return result;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 6};
    auto res = twoSumSorted(arr, 6);
    cout << res[0] << " " << res[1] << endl;  // 1 3

    vector<int> nums = {-1, 0, 1, 2, -1, -4};
    auto triplets = threeSum(nums);
    for (auto& t : triplets)
        cout << t[0] << " " << t[1] << " " << t[2] << endl;

    return 0;
}`,
                explanation: 'Three core two-pointer patterns. Note the duplicate-skipping in 3Sum — a common interview pitfall. The key insight: sorted array + two pointers = O(n) vs O(n²).'
              }
            ],
            keyPoints: [
              'Sort first when using two pointers from opposite ends',
              'Two pointers replaces O(n²) brute force with O(n) elegant solution',
              '3Sum pattern: fix one element, two-pointer the rest — O(n²) total',
              'Fast/slow pointer detects cycles in O(n) time O(1) space',
              'Skip duplicates carefully in problems like 3Sum to avoid redundant answers',
            ]
          },
          {
            id: 'lesson-2-3',
            title: 'Sliding Window — Subarray/Substring Mastery',
            description: 'The pattern for all "contiguous subarray" problems',
            content: `Sliding Window is a technique for problems involving contiguous subarrays or substrings.

The key insight: Instead of recalculating from scratch for each subarray (O(n²)), maintain a "window" that slides across the array. Add the new right element, remove the old left element → O(1) per step → O(n) total.

Two types:
1. Fixed-size window: window size k is given
   → Slide window of exactly k elements

2. Variable-size window: find optimal window satisfying some condition
   → Expand right pointer, shrink left pointer when condition violated

When to use:
• "Maximum/minimum subarray of length k" → fixed window
• "Longest subarray/substring with at most k distinct elements" → variable window
• "Minimum window containing all characters" → variable window
• Any problem mentioning "contiguous" + "maximum/minimum/at least/at most"`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// Fixed Window: Max sum subarray of size k
int maxSumK(vector<int>& arr, int k) {
    int n = arr.size();
    if (n < k) return -1;

    // Initial window
    int windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += arr[i];

    int maxSum = windowSum;

    // Slide: add right, remove left
    for (int i = k; i < n; i++) {
        windowSum += arr[i];      // add new right element
        windowSum -= arr[i - k];  // remove leftmost element
        maxSum = max(maxSum, windowSum);
    }

    return maxSum;
}

// Variable Window: Longest subarray with sum <= k
int longestSubarraySum(vector<int>& arr, int k) {
    int left = 0, sum = 0, maxLen = 0;

    for (int right = 0; right < (int)arr.size(); right++) {
        sum += arr[right];  // expand window

        while (sum > k) {   // shrink until valid
            sum -= arr[left++];
        }

        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

// Variable Window: Longest substring without repeating characters
// KEY PATTERN: use hash map to track last seen index
int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> last;  // char → last index
    int left = 0, maxLen = 0;

    for (int right = 0; right < (int)s.size(); right++) {
        char c = s[right];
        if (last.count(c) && last[c] >= left) {
            left = last[c] + 1;  // move left past the duplicate
        }
        last[c] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    vector<int> arr = {2, 1, 5, 1, 3, 2};
    cout << maxSumK(arr, 3) << endl;          // 9 (5+1+3)
    cout << longestSubarraySum(arr, 6) << endl; // 3

    cout << lengthOfLongestSubstring("abcabcbb") << endl; // 3
    cout << lengthOfLongestSubstring("pwwkew")   << endl; // 3
    return 0;
}`,
                explanation: 'Three sliding window patterns: fixed size (classic), variable size with numeric constraint, and variable size with character uniqueness. The "last seen index" hash map trick is crucial for string problems.'
              }
            ],
            keyPoints: [
              'Fixed window: maintain running sum, slide by adding right and removing left element',
              'Variable window: expand right, shrink left when constraint violated',
              '"Longest subarray/substring" → almost always sliding window',
              'For character problems, track last seen index in unordered_map',
              'Window size = right - left + 1 (remember +1!)',
            ]
          }
        ],
        quizzes: [
          {
            id: 'quiz-2-1',
            question: 'What is the time complexity of finding the sum of elements in range [l,r] using prefix sums?',
            options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
            correctAnswer: 2,
            explanation: 'After O(n) preprocessing to build prefix sum array, each range query is O(1): sum(l,r) = prefix[r] - prefix[l-1].'
          },
          {
            id: 'quiz-2-2',
            question: 'When is Two Pointer technique most applicable?',
            options: [
              'Always — it always beats brute force',
              'When array is sorted and we need to find pairs/triplets',
              'Only for linked list problems',
              'When array size is small (n < 100)'
            ],
            correctAnswer: 1,
            explanation: 'Two pointer works best on sorted arrays to find pairs/triplets with target sum. The sorted order lets us decide which pointer to move, giving O(n) vs O(n²) brute force.'
          }
        ],
        problems: [
          {
            id: 'problem-2-1',
            title: 'Maximum Subarray (Kadane\'s Algorithm)',
            difficulty: 'Medium',
            description: 'Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.',
            constraints: ['1 ≤ nums.length ≤ 10^5', '-10^4 ≤ nums[i] ≤ 10^4'],
            examples: [
              { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6  (subarray [4,-1,2,1])' },
              { input: 'nums = [1]', output: '1' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];      // best answer so far
    int currSum = nums[0];     // best sum ending at current position

    for (int i = 1; i < (int)nums.size(); i++) {
        // Either extend current subarray OR start fresh from here
        currSum = max(nums[i], currSum + nums[i]);
        maxSum = max(maxSum, currSum);
    }

    return maxSum;
}

int main() {
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << maxSubArray(nums) << endl;  // 6
    return 0;
}`,
              explanation: 'Kadane\'s algorithm: at each position, decide whether to extend the current subarray or start a new one. If currSum < 0, starting fresh is always better.'
            },
            explanation: 'Kadane\'s Algorithm is a classic DP/greedy approach. The key insight: if the running sum becomes negative, there\'s no benefit to including it in future subarrays — reset to 0.',
            whySolve: 'Kadane\'s is a fundamental algorithm that introduces the core DP idea: "optimal substructure" — the best answer at position i depends only on the best answer at position i-1. This pattern appears in many DP problems. Also, this EXACT problem appears in Amazon, Google, and Meta interviews very frequently.',
            companies: ['Amazon', 'Google', 'Microsoft', 'Meta', 'Adobe'],
            hints: [
              'Try brute force first: O(n²) — check all (l, r) pairs.',
              'Can you compute the best subarray ending at position i in O(1) if you know the best ending at i-1?',
              'At each position: should you extend the previous subarray or start fresh? When is starting fresh better?',
            ],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            tags: ['Array', 'Dynamic Programming', 'Kadane\'s'],
            oaFrequency: 'Very High',
          },
          {
            id: 'problem-2-2',
            title: 'Subarray Sum Equals K',
            difficulty: 'Medium',
            description: 'Given an integer array nums and an integer k, return the total number of subarrays whose sum equals k.',
            constraints: ['1 ≤ nums.length ≤ 2 × 10^4', '-1000 ≤ nums[i] ≤ 1000', '-10^7 ≤ k ≤ 10^7'],
            examples: [
              { input: 'nums = [1,1,1], k = 2', output: '2' },
              { input: 'nums = [1,2,3], k = 3', output: '2' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;  // empty prefix with sum 0

    int runningSum = 0, count = 0;

    for (int x : nums) {
        runningSum += x;
        // If (runningSum - k) was seen, those subarrays sum to k
        count += prefixCount[runningSum - k];
        prefixCount[runningSum]++;
    }

    return count;
}

int main() {
    vector<int> nums1 = {1, 1, 1};
    cout << subarraySum(nums1, 2) << endl;  // 2

    vector<int> nums2 = {1, 2, 3};
    cout << subarraySum(nums2, 3) << endl;  // 2
    return 0;
}`,
              explanation: 'Prefix sum + hash map. For each position, track how many prefix sums equal (current - k). Those positions form subarrays ending here with sum = k.'
            },
            explanation: 'This combines prefix sums with hash maps. Key insight: sum(l..r) = prefixSum[r] - prefixSum[l-1]. So we need prefixSum[r] - prefixSum[l-1] = k, i.e., prefixSum[l-1] = prefixSum[r] - k.',
            whySolve: 'This problem is a perfect example of using prefix sums + hash maps to reduce O(n²) to O(n). The pattern "count subarrays with property X" almost always uses this technique. It appears in 40%+ of Amazon OA rounds.',
            companies: ['Amazon', 'Google', 'Meta', 'LinkedIn'],
            hints: [
              'O(n²) brute force: check all (l,r) pairs with running sum.',
              'Think about prefix sums. sum(l,r) = prefix[r] - prefix[l-1]. What equation do you need?',
              'For each r, you need to count how many l-1 satisfy prefix[l-1] = prefix[r] - k. Use a hash map!',
            ],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            tags: ['Array', 'Prefix Sum', 'Hash Map'],
            oaFrequency: 'Very High',
          },
          {
            id: 'problem-2-3',
            title: 'Longest Substring Without Repeating Characters',
            difficulty: 'Medium',
            description: 'Given a string s, find the length of the longest substring without repeating characters.',
            constraints: ['0 ≤ s.length ≤ 5 × 10^4', 's consists of English letters, digits, symbols, spaces'],
            examples: [
              { input: 's = "abcabcbb"', output: '3  (substring "abc")' },
              { input: 's = "bbbbb"', output: '1  (substring "b")' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> lastSeen;  // char → last index
    int left = 0, maxLen = 0;

    for (int right = 0; right < (int)s.size(); right++) {
        char c = s[right];

        // If c was seen and is inside our current window:
        if (lastSeen.count(c) && lastSeen[c] >= left) {
            left = lastSeen[c] + 1;  // move left past duplicate
        }

        lastSeen[c] = right;
        maxLen = max(maxLen, right - left + 1);
    }

    return maxLen;
}`,
              explanation: 'Sliding window with last-seen index tracking. When we see a duplicate inside the window, we jump the left pointer past it immediately — no need to shrink one step at a time.'
            },
            explanation: 'Classic sliding window with hash map. The trick is storing the last index of each character so we can jump the left pointer directly rather than moving it one step at a time.',
            whySolve: 'This is THE canonical sliding window problem. It appears in virtually every interview prep list. Master this, and you can solve 70% of sliding window problems by adapting this template.',
            companies: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Adobe', 'Apple'],
            hints: [
              'Brute force: check every possible substring — O(n²) or O(n³).',
              '"Contiguous" + "without repeating" → sliding window.',
              'What do you need to track as you slide? The last position each character appeared.',
            ],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(min(m, n)) where m is the character set size',
            tags: ['String', 'Sliding Window', 'Hash Map'],
            oaFrequency: 'Very High',
          }
        ]
      },
      {
        id: 'strings-patterns',
        name: 'String Algorithms & Patterns',
        description: 'Anagram detection, palindromes, character manipulation — string interview essentials',
        interviewImportance: 'High',
        companyFocus: ['Google', 'Meta', 'Amazon'],
        interviewTips: [
          'Use array<int,26> for lowercase English letter frequency — faster than unordered_map.',
          'Anagram: same character frequencies. Check by sorting both or comparing frequency arrays.',
          'Palindrome: compare s[i] and s[n-1-i]. Skip non-alphanumeric if problem says so.',
          '"Valid" in problem title usually means bracket matching → stack.',
          'String concatenation in a loop is O(n²) — use += or stringstream for O(n).',
        ],
        lessons: [
          {
            id: 'lesson-2-4',
            title: 'String Problem Patterns — Anagrams, Palindromes & More',
            description: 'Core string manipulation patterns used in 80% of string interview problems',
            content: `String problems follow very predictable patterns. Learn these and you can solve most of them.

PATTERN 1 — Character Frequency:
Count occurrences of each character. Use: array<int,26> for lowercase, unordered_map<char,int> for general.

PATTERN 2 — Anagram:
Two strings are anagrams if they have the same character frequencies. Compare frequency arrays directly (much faster than sorting).

PATTERN 3 — Palindrome:
Use two pointers from both ends. Or reverse and compare. For numbers: convert to string first.

PATTERN 4 — Sliding Window on String:
"Find longest/shortest substring with property X" → sliding window.

PATTERN 5 — Stack for Validation:
Valid brackets, valid HTML — any "must close what you opened" problem.`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// Pattern 1: Character frequency with array
bool isAnagram(string s, string t) {
    if (s.size() != t.size()) return false;
    array<int, 26> freq = {};
    for (char c : s) freq[c - 'a']++;
    for (char c : t) freq[c - 'a']--;
    for (int f : freq) if (f != 0) return false;
    return true;
}

// Pattern 2: Find all anagram positions in a string
// Sliding window of size pattern.length() over s
vector<int> findAnagrams(string s, string p) {
    vector<int> result;
    if (s.size() < p.size()) return result;

    array<int,26> need = {}, window = {};
    for (char c : p) need[c-'a']++;

    int k = p.size();
    for (int i = 0; i < (int)s.size(); i++) {
        window[s[i]-'a']++;            // add right
        if (i >= k) window[s[i-k]-'a']--;  // remove left
        if (window == need) result.push_back(i - k + 1);
    }
    return result;
}

// Pattern 3: Valid palindrome (skip non-alphanumeric)
bool isPalindrome(string s) {
    int l = 0, r = s.size() - 1;
    while (l < r) {
        while (l < r && !isalnum(s[l])) l++;
        while (l < r && !isalnum(s[r])) r--;
        if (tolower(s[l]) != tolower(s[r])) return false;
        l++; r--;
    }
    return true;
}

// Pattern 4: Valid brackets — Stack
bool isValidBrackets(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top(); st.pop();
            if (c == ')' && top != '(') return false;
            if (c == ']' && top != '[') return false;
            if (c == '}' && top != '{') return false;
        }
    }
    return st.empty();
}

int main() {
    cout << isAnagram("listen", "silent") << endl;  // 1

    auto positions = findAnagrams("cbaebabacd", "abc");
    for (int p : positions) cout << p << " ";  // 0 6
    cout << endl;

    cout << isPalindrome("A man, a plan, a canal: Panama") << endl;  // 1
    cout << isValidBrackets("()[]{}")  << endl;  // 1
    cout << isValidBrackets("([)]")    << endl;  // 0
    return 0;
}`,
                explanation: 'Four essential string patterns: frequency arrays for anagrams, fixed sliding window for anagram positions, two-pointer palindrome check, and stack for bracket validation. Memorize these templates.'
              }
            ],
            keyPoints: [
              'array<int,26> is faster than unordered_map for lowercase letter frequency',
              'Anagram check: compare frequency arrays in O(n) — no sorting needed',
              'isalnum(c) and tolower(c) are your friends for palindrome problems',
              'Stack is perfect for "matching pairs" problems (brackets, tags, etc.)',
              'Sliding window on string: use fixed-size window when pattern length is known',
            ]
          }
        ],
        quizzes: [],
        problems: [
          {
            id: 'problem-2-4',
            title: 'Valid Anagram',
            difficulty: 'Easy',
            description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
            constraints: ['1 ≤ s.length, t.length ≤ 5 × 10^4', 's and t consist of lowercase English letters'],
            examples: [
              { input: 's = "anagram", t = "nagaram"', output: 'true' },
              { input: 's = "rat", t = "car"', output: 'false' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

bool isAnagram(string s, string t) {
    if (s.size() != t.size()) return false;
    array<int, 26> freq = {};
    for (char c : s) freq[c - 'a']++;
    for (char c : t) freq[c - 'a']--;
    return freq == array<int,26>{};  // all zeros?
}`,
              explanation: 'Use frequency array of 26 chars. Increment for s, decrement for t. If all zeros at end, they\'re anagrams.'
            },
            explanation: 'Classic frequency counting. O(n) time, O(1) space (fixed-size array). Alternative: sort both strings and compare — O(n log n) but simpler to remember.',
            whySolve: 'This problem introduces the character frequency technique, which is the building block for harder string problems like "Group Anagrams", "Find All Anagrams", "Minimum Window Substring".',
            companies: ['Amazon', 'Google', 'Facebook', 'Microsoft'],
            hints: ['If lengths differ, immediately return false.', 'Count frequency of each character in both strings.'],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            tags: ['String', 'Hash Map', 'Sorting'],
            oaFrequency: 'High',
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Level 3: Sorting, Binary Search & Search Mastery',
    description: 'Binary search is not just for finding elements — it\'s a general technique for any problem where you can define a monotone condition. Master sorting algorithms and binary search on answers.',
    topics: [
      {
        id: 'sorting-deep',
        name: 'Sorting — Know ALL of Them',
        description: 'From O(n²) basics to O(n log n) advanced — understand when to use which sort',
        interviewImportance: 'High',
        companyFocus: ['Google', 'Amazon', 'Microsoft'],
        interviewTips: [
          'In interviews, always use std::sort() — O(n log n), introsort under the hood. Never implement bubble sort.',
          'Custom sort: sort by second element of pair, sort by string length, sort by custom struct field — know the comparator lambda syntax.',
          'Merge sort is used when you need stable sort or sorting linked lists.',
          'Counting sort / radix sort when elements are in small range (0-1000) → O(n).',
          'If asked "what is the fastest sort?", answer depends: introsort for general, counting sort for small range, merge sort for linked lists.',
        ],
        lessons: [
          {
            id: 'lesson-3-1',
            title: 'Sorting Algorithms — The Complete Picture',
            description: 'Understand every sorting algorithm, its complexity, and when each is appropriate',
            content: `Sorting is fundamental. You MUST understand the complexity of all major sorting algorithms cold.

COMPARISON SORTS (O(n log n) lower bound):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Bubble Sort     — O(n²) time, O(1) space — educational only, never use
2. Selection Sort  — O(n²) time, O(1) space — educational only
3. Insertion Sort  — O(n²) worst, O(n) best (nearly sorted) — good for small/nearly sorted
4. Merge Sort      — O(n log n) always, O(n) space — stable, good for linked lists, large data
5. Quick Sort      — O(n log n) avg, O(n²) worst, O(log n) space — fastest in practice
6. Heap Sort       — O(n log n) always, O(1) space — guaranteed but slow in practice
7. Introsort       — O(n log n) always — std::sort() uses this!

NON-COMPARISON SORTS (beat O(n log n) with constraints):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. Counting Sort   — O(n + k), O(k) space — when range k is small
9. Radix Sort      — O(d × n) — for integers with fixed digits

PRACTICAL RULES:
• In interviews: use std::sort() (O(n log n))
• For custom ordering: sort with lambda comparator
• For linked lists: merge sort (or convert to vector, sort, convert back)
• For small range [0-k]: counting sort → O(n)`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// Merge Sort — stable, O(n log n), O(n) space
// UNDERSTAND THIS — it's asked conceptually in interviews
void mergeSort(vector<int>& arr, int l, int r) {
    if (l >= r) return;

    int mid = l + (r - l) / 2;
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, r);

    // Merge two sorted halves
    vector<int> temp;
    int i = l, j = mid + 1;
    while (i <= mid && j <= r) {
        if (arr[i] <= arr[j]) temp.push_back(arr[i++]);
        else                  temp.push_back(arr[j++]);
    }
    while (i <= mid) temp.push_back(arr[i++]);
    while (j <= r)   temp.push_back(arr[j++]);

    for (int k = l; k <= r; k++) arr[k] = temp[k - l];
}

// std::sort with custom comparators
void demonstrateSort() {
    // Sort pairs by second element descending
    vector<pair<int,int>> v = {{1,5},{3,2},{2,8},{4,1}};
    sort(v.begin(), v.end(), [](auto& a, auto& b) {
        return a.second > b.second;  // descending by second
    });
    // Result: {2,8},{1,5},{3,2},{4,1}

    // Sort strings by length, then lexicographically
    vector<string> words = {"banana","apple","fig","cherry"};
    sort(words.begin(), words.end(), [](const string& a, const string& b) {
        if (a.size() != b.size()) return a.size() < b.size();
        return a < b;
    });
    // Result: fig, apple, banana, cherry

    // Sort structs by a field
    struct Student { string name; int grade; };
    vector<Student> students = {{"Alice",90},{"Bob",85},{"Charlie",92}};
    sort(students.begin(), students.end(), [](const Student& a, const Student& b) {
        return a.grade > b.grade;  // highest grade first
    });
}

// Counting Sort — O(n+k) — use when range is small
void countingSort(vector<int>& arr, int maxVal) {
    vector<int> count(maxVal + 1, 0);
    for (int x : arr) count[x]++;

    int idx = 0;
    for (int val = 0; val <= maxVal; val++)
        while (count[val]-- > 0)
            arr[idx++] = val;
}

int main() {
    vector<int> arr = {5, 2, 8, 1, 9, 3};
    mergeSort(arr, 0, arr.size()-1);
    for (int x : arr) cout << x << " ";  // 1 2 3 5 8 9
    cout << endl;

    vector<int> small = {4, 2, 2, 8, 3, 3, 1};
    countingSort(small, 8);
    for (int x : small) cout << x << " ";  // 1 2 2 3 3 4 8
    return 0;
}`,
                explanation: 'Merge sort implementation (understand divide-and-conquer recursion), custom comparators for std::sort (lambda syntax is essential), and counting sort for small integer ranges.'
              }
            ],
            keyPoints: [
              'std::sort is O(n log n) introsort — use it in all interviews',
              'Lambda comparator: sort(v.begin(), v.end(), [](auto& a, auto& b){ return a.x < b.x; })',
              'Merge sort = stable, O(n) space, good for linked lists and external sorting',
              'Counting sort = O(n+k) — only when values are in a small known range',
              'Stable sort preserves order of equal elements — use std::stable_sort when needed',
            ]
          }
        ],
        quizzes: [
          {
            id: 'quiz-3-1',
            question: 'Which sorting algorithm does std::sort() use internally?',
            options: ['Quicksort', 'Merge Sort', 'Introsort (hybrid of quicksort, heapsort, insertion sort)', 'Bubble Sort'],
            correctAnswer: 2,
            explanation: 'std::sort uses introsort — it starts with quicksort, switches to heapsort when recursion depth is too deep (to avoid O(n²) worst case), and uses insertion sort for small subarrays. This gives O(n log n) guaranteed with excellent constants.'
          }
        ],
        problems: [
          {
            id: 'problem-3-1',
            title: 'Merge Sort Inversion Count',
            difficulty: 'Hard',
            description: 'Count the number of inversions in an array. An inversion is a pair (i, j) where i < j but arr[i] > arr[j].',
            constraints: ['1 ≤ n ≤ 5 × 10^4', '1 ≤ arr[i] ≤ 10^9'],
            examples: [
              { input: '[2, 4, 1, 3, 5]', output: '3  (pairs: (2,1), (4,1), (4,3))' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

long long mergeCount(vector<int>& arr, int l, int r) {
    if (l >= r) return 0;

    int mid = l + (r - l) / 2;
    long long inversions = 0;

    inversions += mergeCount(arr, l, mid);
    inversions += mergeCount(arr, mid+1, r);

    // Merge and count cross-inversions
    vector<int> temp;
    int i = l, j = mid + 1;
    while (i <= mid && j <= r) {
        if (arr[i] <= arr[j]) {
            temp.push_back(arr[i++]);
        } else {
            // arr[i..mid] are all > arr[j] (since left half is sorted)
            inversions += (mid - i + 1);
            temp.push_back(arr[j++]);
        }
    }
    while (i <= mid) temp.push_back(arr[i++]);
    while (j <= r)   temp.push_back(arr[j++]);

    for (int k = l; k <= r; k++) arr[k] = temp[k - l];

    return inversions;
}

int main() {
    vector<int> arr = {2, 4, 1, 3, 5};
    cout << mergeCount(arr, 0, arr.size()-1) << endl;  // 3
    return 0;
}`,
              explanation: 'Modify merge sort to count inversions during merge. When taking from right half, all remaining left elements are inversions. O(n log n) vs O(n²) brute force.'
            },
            explanation: 'Classic merge sort application. Shows how to augment divide-and-conquer to gather additional information during the merge step.',
            whySolve: 'Inversion count demonstrates that sorting algorithms can do more than just sort. This pattern of "augmenting divide-and-conquer" appears in many advanced problems. Also directly related to measuring how "unsorted" an array is.',
            companies: ['Google', 'Amazon'],
            hints: ['Count inversions in left half, right half, then cross-inversions during merge.', 'During merge: if arr[i] > arr[j], then arr[i], arr[i+1], ..., arr[mid] all form inversions with arr[j].'],
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(n)',
            tags: ['Array', 'Sorting', 'Merge Sort', 'Divide and Conquer'],
            oaFrequency: 'Medium',
          }
        ]
      },
      {
        id: 'binary-search-deep',
        name: 'Binary Search — Beyond Array Lookup',
        description: 'Binary search on answers, on monotone functions — the generalized superpower',
        interviewImportance: 'Critical',
        companyFocus: ['Google', 'Amazon', 'Meta', 'Microsoft'],
        interviewTips: [
          'ALWAYS use mid = left + (right - left) / 2 to avoid integer overflow!',
          'Template: left <= right with return inside. OR left < right with answer = left at end.',
          '"Binary search on answer": when answer is a number in some range and you can check feasibility in O(n). This gives O(n log(range)) overall.',
          'Recognize the monotone function: "is this condition true for all values >= X?" — if yes, binary search.',
          'lower_bound and upper_bound from STL implement binary search — use them instead of writing your own!',
        ],
        lessons: [
          {
            id: 'lesson-3-2',
            title: 'Binary Search — The Template You Must Know',
            description: 'Standard binary search + lower_bound/upper_bound + binary search on answers',
            content: `Binary search works on any SORTED structure where you can determine which half to discard.

THE GOLDEN RULE: Use mid = left + (right - left) / 2
NEVER: mid = (left + right) / 2  ← integer overflow for large values!

PATTERN 1 — Standard (find exact value):
• left = 0, right = n-1
• Loop while left <= right
• if arr[mid] == target: found!
• if arr[mid] < target: left = mid + 1
• if arr[mid] > target: right = mid - 1

PATTERN 2 — Find leftmost (lower_bound equivalent):
• Find first index where arr[i] >= target
• left = 0, right = n (note: n not n-1)
• ans = n (default "not found")
• if arr[mid] >= target: ans = mid, right = mid
• else: left = mid + 1

PATTERN 3 — Binary Search on Answer:
The MOST POWERFUL pattern. Use when:
• You're looking for minimum/maximum value satisfying some condition
• The condition is monotone: if feasible(x), then feasible(x+1) (or vice versa)
Example: "minimum speed to eat all bananas in h hours" → binary search on speed

Steps for BS on Answer:
1. Define search space [lo, hi]
2. Define a boolean function check(mid) — is this value feasible?
3. Binary search to find minimum/maximum feasible value`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// PATTERN 1: Standard binary search
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = (int)arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;  // SAFE from overflow

        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// PATTERN 2: Find first occurrence (leftmost)
int lowerBound(vector<int>& arr, int target) {
    int left = 0, right = arr.size(), ans = arr.size();

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] >= target) { ans = mid; right = mid; }
        else left = mid + 1;
    }
    return ans;
}

// PATTERN 3: Binary Search on Answer
// Problem: Koko eating bananas
// Given piles of bananas and h hours, find minimum speed k (bananas/hour)
// to eat all bananas within h hours.
int minEatingSpeed(vector<int>& piles, int h) {
    // Search space: [1, max(piles)]
    int lo = 1, hi = *max_element(piles.begin(), piles.end());

    // Can Koko finish at speed k?
    auto canFinish = [&](int k) {
        long long hours = 0;
        for (int p : piles) hours += (p + k - 1) / k;  // ceil(p/k)
        return hours <= h;
    };

    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (canFinish(mid)) hi = mid;   // try to go lower
        else lo = mid + 1;              // need higher speed
    }
    return lo;
}

int main() {
    vector<int> arr = {2, 5, 8, 12, 16, 23, 38, 45};
    cout << binarySearch(arr, 23) << endl;    // 5

    // STL versions (preferred in interviews):
    auto it1 = lower_bound(arr.begin(), arr.end(), 16);  // first >= 16
    auto it2 = upper_bound(arr.begin(), arr.end(), 16);  // first > 16
    cout << (it1 - arr.begin()) << endl;  // index 4
    cout << (it2 - arr.begin()) << endl;  // index 5

    vector<int> piles = {3, 6, 7, 11};
    cout << minEatingSpeed(piles, 8) << endl;  // 4

    return 0;
}`,
                explanation: 'Three binary search patterns. Most important: ALWAYS use mid = left + (right-left)/2. The "binary search on answer" pattern (Koko bananas) is a Google/Amazon favorite — it appears in ~20% of hard array problems.'
              },
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// Binary Search on Answer: More examples

// Find minimum number of days to make m bouquets
// Each bouquet needs k adjacent bloomed flowers
// flowers[i] = day when flower i blooms
bool canMake(vector<int>& b, int m, int k, int day) {
    int bouquets = 0, consecutive = 0;
    for (int bloom : b) {
        if (bloom <= day) {
            consecutive++;
            if (consecutive == k) { bouquets++; consecutive = 0; }
        } else {
            consecutive = 0;
        }
    }
    return bouquets >= m;
}

int minDays(vector<int>& bloomDay, int m, int k) {
    if ((long long)m * k > bloomDay.size()) return -1;

    int lo = 1, hi = *max_element(bloomDay.begin(), bloomDay.end());
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (canMake(bloomDay, m, k, mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}

// Classic: Search in Rotated Sorted Array
int searchRotated(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return mid;

        // Left half is sorted
        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}

int main() {
    vector<int> bloomDay = {1, 10, 3, 10, 2};
    cout << minDays(bloomDay, 3, 1) << endl;  // 3

    vector<int> rotated = {4, 5, 6, 7, 0, 1, 2};
    cout << searchRotated(rotated, 0) << endl;  // 4
    return 0;
}`,
                explanation: 'More binary search on answer examples. The rotated sorted array problem is a classic — identify which half is sorted, then check if target is in that half.'
              }
            ],
            keyPoints: [
              'ALWAYS: mid = left + (right - left) / 2 — never use (left+right)/2',
              'lower_bound finds first element >= target; upper_bound finds first > target',
              'Binary search on answer: define check(mid), search for min/max feasible value',
              'Rotated sorted array: one half is always sorted — use that to decide which way to go',
              'STL lower_bound and upper_bound are O(log n) on sorted vectors/arrays',
            ]
          }
        ],
        quizzes: [
          {
            id: 'quiz-3-2',
            question: 'Why use mid = left + (right - left) / 2 instead of (left + right) / 2?',
            options: [
              'They are equivalent',
              'To avoid integer overflow when left + right exceeds INT_MAX',
              'For better performance',
              'It\'s just a style preference'
            ],
            correctAnswer: 1,
            explanation: 'When left and right are both large (close to INT_MAX = 2.1 billion), left + right can overflow. For example, left = 2×10^9, right = 2×10^9 would overflow. left + (right - left) / 2 is always safe.'
          }
        ],
        problems: [
          {
            id: 'problem-3-2',
            title: 'Find First and Last Position in Sorted Array',
            difficulty: 'Medium',
            description: 'Given a sorted array, find the starting and ending position of a target value. Return [-1,-1] if not found.',
            constraints: ['0 ≤ nums.length ≤ 10^5', 'nums is sorted ascending', '-10^9 ≤ nums[i], target ≤ 10^9'],
            examples: [
              { input: 'nums = [5,7,7,8,8,10], target = 8', output: '[3, 4]' },
              { input: 'nums = [5,7,7,8,8,10], target = 6', output: '[-1, -1]' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

vector<int> searchRange(vector<int>& nums, int target) {
    // Use lower_bound (first >= target)
    // and upper_bound (first > target)
    auto left  = lower_bound(nums.begin(), nums.end(), target);
    auto right = upper_bound(nums.begin(), nums.end(), target);

    if (left == nums.end() || *left != target)
        return {-1, -1};

    return {(int)(left - nums.begin()),
            (int)(right - nums.begin()) - 1};
}`,
              explanation: 'Use lower_bound for first occurrence, upper_bound-1 for last occurrence. Clean O(log n) solution using STL.'
            },
            explanation: 'Two binary searches: first for lower bound, second for upper bound. Using STL lower_bound and upper_bound is cleaner than writing your own.',
            whySolve: 'This problem reinforces lower_bound and upper_bound from STL — two of the most useful binary search variants. These functions appear constantly in interval problems, merge sort, and more complex algorithms.',
            companies: ['Facebook', 'Microsoft', 'Amazon'],
            hints: ['Two separate binary searches: one for first, one for last.', 'lower_bound finds first >= target. upper_bound finds first > target. Last position = upper_bound - 1.'],
            timeComplexity: 'O(log n)',
            spaceComplexity: 'O(1)',
            tags: ['Array', 'Binary Search'],
            oaFrequency: 'High',
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Level 4: Linked Lists, Stacks, Queues & STL Containers',
    description: 'The pointer-based data structures. Critical for understanding memory, interviewing at top companies, and using STL containers like stack, queue, deque, and priority_queue.',
    topics: [
      {
        id: 'linked-lists-deep',
        name: 'Linked Lists — Pointer Mastery',
        description: 'Master linked list operations with the pointer techniques top companies love to test',
        interviewImportance: 'Critical',
        companyFocus: ['Amazon', 'Microsoft', 'Meta', 'Apple'],
        interviewTips: [
          'Always check for null before dereferencing: if (!head) return nullptr;',
          'Dummy/sentinel node trick: add a fake head node to avoid edge cases on first node.',
          'Two-pointer (slow/fast) technique detects cycles, finds middle, finds nth from end.',
          'Reverse a linked list: the most fundamental linked list operation. Must do it iteratively AND recursively.',
          'In interviews, draw the list and trace your pointer changes visually before coding.',
        ],
        lessons: [
          {
            id: 'lesson-4-1',
            title: 'Linked Lists — Every Operation You Need',
            description: 'Traversal, insertion, deletion, reversal — with the pointer tricks that make it clean',
            content: `A linked list is a chain of nodes. Each node contains data and a pointer to the next node.

WHY learn linked lists?
• Interviewers use them to test pointer manipulation and edge-case thinking
• Linked list problems have beautiful O(n) solutions using fast/slow pointers
• std::list, std::forward_list are built on this — knowing the underlying structure helps

KEY PATTERNS:
1. Dummy Head Node — add a fake node before head → eliminates edge cases
2. Fast/Slow Pointers — detect cycles, find middle, find nth from end
3. Reverse — iterative (3 pointers: prev, curr, next) or recursive
4. Merge — pointer manipulation to weave two lists together

MENTAL MODEL: Think of each node as a box with an address written on it. Pointers are just those addresses. "Redirect a pointer" = change the address in the box.`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

// ── Create list from vector (for testing) ─────────────────────
ListNode* makeList(vector<int> v) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    for (int x : v) {
        tail->next = new ListNode(x);
        tail = tail->next;
    }
    return dummy.next;
}

// ── Print list ────────────────────────────────────────────────
void print(ListNode* head) {
    while (head) { cout << head->val << " -> "; head = head->next; }
    cout << "null" << endl;
}

// ── REVERSE — Iterative ───────────────────────────────────────
// The #1 most asked linked list question
ListNode* reverse(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;

    while (curr) {
        ListNode* next = curr->next;  // save next
        curr->next = prev;            // redirect
        prev = curr;                  // advance prev
        curr = next;                  // advance curr
    }
    return prev;  // prev is now the new head
}

// ── FIND MIDDLE (Fast/Slow pointers) ─────────────────────────
// When fast reaches end, slow is at middle
ListNode* findMiddle(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

// ── DETECT CYCLE (Floyd's Algorithm) ─────────────────────────
bool hasCycle(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;  // they met — cycle exists!
    }
    return false;
}

// ── REMOVE Nth NODE FROM END ──────────────────────────────────
// One-pass: advance fast n steps, then move both until fast reaches end
ListNode* removeNthFromEnd(ListNode* head, int n) {
    ListNode dummy(0);
    dummy.next = head;
    ListNode* fast = &dummy;
    ListNode* slow = &dummy;

    for (int i = 0; i <= n; i++) fast = fast->next;

    while (fast) {
        slow = slow->next;
        fast = fast->next;
    }

    slow->next = slow->next->next;  // skip the target node
    return dummy.next;
}

int main() {
    ListNode* list = makeList({1, 2, 3, 4, 5});
    print(list);               // 1 -> 2 -> 3 -> 4 -> 5 -> null

    ListNode* rev = reverse(list);
    print(rev);                // 5 -> 4 -> 3 -> 2 -> 1 -> null

    ListNode* list2 = makeList({1, 2, 3, 4, 5, 6});
    cout << findMiddle(list2)->val << endl;  // 4

    ListNode* list3 = makeList({1, 2, 3, 4, 5});
    ListNode* result = removeNthFromEnd(list3, 2);
    print(result);  // 1 -> 2 -> 3 -> 5 -> null

    return 0;
}`,
                explanation: 'Essential linked list operations: reversal (3-pointer technique), finding middle (fast/slow), cycle detection (Floyd\'s), and removing Nth from end (one-pass with gap technique). These 4 operations cover 80% of linked list interview questions.'
              }
            ],
            keyPoints: [
              'Reverse: use 3 pointers (prev, curr, next). Save next, redirect, advance.',
              'Fast/slow pointers: when fast reaches end, slow is at middle.',
              'Floyd\'s cycle detection: slow moves 1, fast moves 2. If they meet, there\'s a cycle.',
              'Dummy head node: add ListNode(0) before head to avoid edge case on first node.',
              'Most linked list problems: O(n) time, O(1) space (pointer manipulation only).',
            ]
          }
        ],
        quizzes: [],
        problems: [
          {
            id: 'problem-4-1',
            title: 'Merge Two Sorted Lists',
            difficulty: 'Easy',
            description: 'Merge two sorted linked lists and return it as a single sorted list.',
            constraints: ['The number of nodes in both lists is in [0, 50]', '-100 ≤ Node.val ≤ 100'],
            examples: [
              { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
            ],
            solution: {
              language: 'cpp',
              code: `ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);  // dummy head trick
    ListNode* tail = &dummy;

    while (l1 && l2) {
        if (l1->val <= l2->val) { tail->next = l1; l1 = l1->next; }
        else                    { tail->next = l2; l2 = l2->next; }
        tail = tail->next;
    }

    tail->next = l1 ? l1 : l2;  // attach remaining
    return dummy.next;
}`,
              explanation: 'Dummy head eliminates edge cases. Whichever list has the smaller current value, append it to result. After loop, attach remaining.'
            },
            explanation: 'Classic merge operation using dummy head node. O(n+m) time, O(1) space.',
            whySolve: 'Merge Two Sorted Lists is the base case of merge sort and appears in many harder problems. The dummy head trick is a fundamental linked list pattern that eliminates annoying null checks.',
            companies: ['Amazon', 'Microsoft', 'Google', 'Meta'],
            hints: ['Use a dummy head node to avoid edge cases.', 'Whichever list has the smaller value, take from that one and advance.', 'After the loop ends, one list may still have elements — attach it directly.'],
            timeComplexity: 'O(n + m)',
            spaceComplexity: 'O(1)',
            tags: ['Linked List', 'Merge', 'Two Pointers'],
            oaFrequency: 'High',
          }
        ]
      },
      {
        id: 'stacks-queues-deep',
        name: 'Stacks, Queues & Priority Queue (Heap)',
        description: 'LIFO/FIFO structures plus the heap — critical for scheduling, BFS, and optimization problems',
        interviewImportance: 'Critical',
        companyFocus: ['Amazon', 'Google', 'Meta', 'Microsoft'],
        interviewTips: [
          'Monotonic stack: maintain a stack where elements are always increasing (or decreasing). Solves "Next Greater Element" family instantly.',
          'Priority queue (min-heap/max-heap) replaces manual sorting in many problems.',
          'max-heap: priority_queue<int>. Min-heap: priority_queue<int, vector<int>, greater<int>>.',
          'BFS always uses queue. DFS always uses stack (or recursion stack).',
          'deque (double-ended queue) is used for sliding window maximum — O(n) solution.',
        ],
        lessons: [
          {
            id: 'lesson-4-2',
            title: 'Stack, Queue, Deque & Priority Queue — With Interview Patterns',
            description: 'Master all four STL sequential containers and their interview applications',
            content: `STACK (Last In First Out):
std::stack<int> st;
• push(x)  — add to top   O(1)
• pop()    — remove top   O(1) (does NOT return value!)
• top()    — peek at top  O(1)
• empty()  — check empty  O(1)

QUEUE (First In First Out):
std::queue<int> q;
• push(x)  — add to back  O(1)
• pop()    — remove front O(1)
• front()  — peek front   O(1)
• back()   — peek back    O(1)

DEQUE (Double-Ended Queue):
std::deque<int> dq;
• push_front(x), push_back(x)  — add to either end O(1)
• pop_front(), pop_back()       — remove from either end O(1)
• front(), back()               — peek either end O(1)
• operator[]                    — random access O(1)
• KEY USE: Sliding Window Maximum problem

PRIORITY QUEUE (Heap):
std::priority_queue<int> pq;             // max-heap
std::priority_queue<int, vector<int>, greater<int>> mpq;  // min-heap
• push(x)  — insert       O(log n)
• pop()    — remove top   O(log n)
• top()    — peek max/min O(1)

MONOTONIC STACK — the powerful pattern:
Maintain a stack that is always increasing OR always decreasing.
Used for: Next Greater Element, Daily Temperatures, Stock Span, Largest Rectangle in Histogram`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// Monotonic Stack: Next Greater Element
// For each element, find the next element greater than it
vector<int> nextGreaterElement(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, -1);
    stack<int> st;  // stores indices

    for (int i = 0; i < n; i++) {
        // While stack not empty and current > stack top
        while (!st.empty() && nums[i] > nums[st.top()]) {
            result[st.top()] = nums[i];  // current is the answer for top
            st.pop();
        }
        st.push(i);
    }
    return result;  // remaining in stack have no next greater (-1)
}

// Priority Queue: K Largest Elements
vector<int> kLargest(vector<int>& nums, int k) {
    // Min-heap of size k: always keep k largest
    priority_queue<int, vector<int>, greater<int>> minHeap;

    for (int x : nums) {
        minHeap.push(x);
        if ((int)minHeap.size() > k) minHeap.pop();  // remove smallest
    }

    vector<int> result;
    while (!minHeap.empty()) {
        result.push_back(minHeap.top());
        minHeap.pop();
    }
    return result;  // k largest (in ascending order)
}

// Deque: Sliding Window Maximum
// Find max in every window of size k
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;  // stores indices, maintains decreasing order
    vector<int> result;

    for (int i = 0; i < (int)nums.size(); i++) {
        // Remove elements outside window
        while (!dq.empty() && dq.front() <= i - k)
            dq.pop_front();

        // Remove smaller elements from back (they can never be max)
        while (!dq.empty() && nums[dq.back()] <= nums[i])
            dq.pop_back();

        dq.push_back(i);

        // Window has k elements
        if (i >= k - 1) result.push_back(nums[dq.front()]);
    }
    return result;
}

int main() {
    vector<int> nums = {4, 1, 2, 3};
    auto nge = nextGreaterElement(nums);
    for (int x : nge) cout << x << " ";  // -1 2 3 -1
    cout << endl;

    vector<int> arr = {3, 2, 1, 5, 6, 4};
    auto kl = kLargest(arr, 2);
    for (int x : kl) cout << x << " ";   // 5 6
    cout << endl;

    vector<int> window = {1, 3, -1, -3, 5, 3, 6, 7};
    auto maxW = maxSlidingWindow(window, 3);
    for (int x : maxW) cout << x << " ";  // 3 3 5 5 6 7
    return 0;
}`,
                explanation: 'Three key patterns: monotonic stack for next greater element (used in many "next/previous element" problems), min-heap for K largest elements, and deque for sliding window maximum. These solve entire categories of interview problems.'
              }
            ],
            keyPoints: [
              'stack::pop() does NOT return value — call top() first, then pop()',
              'Monotonic stack: when element pops something, that\'s the "answer" for the popped element',
              'Min-heap + size limit = find K largest/smallest elements in O(n log k)',
              'Deque sliding window: maintain decreasing deque, front is always the window max',
              'Priority queue custom: priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> for min-heap of pairs',
            ]
          }
        ],
        quizzes: [],
        problems: [
          {
            id: 'problem-4-2',
            title: 'Valid Parentheses',
            difficulty: 'Easy',
            description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
            constraints: ['1 ≤ s.length ≤ 10^4', 's consists of parentheses only'],
            examples: [
              { input: 's = "()"', output: 'true' },
              { input: 's = "()[]{}"', output: 'true' },
              { input: 's = "(]"', output: 'false' },
            ],
            solution: {
              language: 'cpp',
              code: `bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top(); st.pop();
            if (c == ')' && top != '(') return false;
            if (c == ']' && top != '[') return false;
            if (c == '}' && top != '{') return false;
        }
    }
    return st.empty();  // all opened must be closed
}`,
              explanation: 'Stack perfectly models "last opened must be first closed". Push open brackets, pop when seeing close brackets and verify match.'
            },
            explanation: 'The classic stack application. Any "matching pairs" problem follows this exact template.',
            whySolve: 'Valid Parentheses is THE canonical stack problem — it appears in virtually every beginner interview. More importantly, it demonstrates WHY stacks exist: LIFO order perfectly models "last opened, first closed" relationships. This pattern extends to XML parsing, calculator evaluation, and more.',
            companies: ['Google', 'Amazon', 'Meta', 'Microsoft', 'Apple'],
            hints: ['Draw the stack state as you process each character.', 'When you see a closing bracket, what must be on top of the stack?', 'After processing all characters, the stack should be empty.'],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            tags: ['String', 'Stack'],
            oaFrequency: 'Very High',
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Level 5: Trees, Graphs & Hash Maps',
    description: 'The most complex data structures — and the most tested in senior/FAANG roles. Master BST, tree traversals, BFS/DFS on graphs, unordered_map, and unordered_set.',
    topics: [
      {
        id: 'trees-deep',
        name: 'Binary Trees & BST — All Traversals & Key Problems',
        description: 'Inorder/preorder/postorder, BFS level-order, BST operations, and tree DP patterns',
        interviewImportance: 'Critical',
        companyFocus: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Apple'],
        interviewTips: [
          'Every tree problem is either: traversal (DFS/BFS), path problem (max/min path sum), or structural question (balanced? same? mirror?).',
          'Inorder traversal of BST gives sorted sequence — use this property constantly.',
          'Height/depth problems: use recursion returning height, compute answer at each node.',
          'For "all paths" problems: use backtracking (add to path, recurse, remove from path).',
          'Level-order traversal: BFS with queue. Track level by processing queue in batches.',
        ],
        lessons: [
          {
            id: 'lesson-5-1',
            title: 'Binary Tree Traversals — DFS & BFS with Patterns',
            description: 'All tree traversal methods with the recursive AND iterative implementations',
            content: `A binary tree is a hierarchy of nodes where each node has at most two children: left and right.

TRAVERSAL TYPES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DFS (Depth-First Search) — uses recursion or explicit stack:
• Inorder    (L → Root → R): gives sorted order for BST
• Preorder   (Root → L → R): copy tree, serialize tree
• Postorder  (L → R → Root): delete tree, evaluate expression tree

BFS (Breadth-First Search / Level-order) — uses queue:
• Process level by level
• Used for: level averages, right side view, zigzag traversal

KEY INSIGHT: Most tree problems = do something at each node + combine results from children.
The recursive structure mirrors the tree structure — let recursion do the work.

BST PROPERTY: left < root < right (for ALL nodes, not just immediate children)
• Search: O(log n) average, O(n) worst (unbalanced tree)
• Insert, Delete: O(log n) average
• Inorder traversal → sorted array`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

// ── DFS Traversals ──────────────────────────────────────────
void inorder(TreeNode* root, vector<int>& res) {
    if (!root) return;
    inorder(root->left, res);
    res.push_back(root->val);      // ← process at different points
    inorder(root->right, res);
}

void preorder(TreeNode* root, vector<int>& res) {
    if (!root) return;
    res.push_back(root->val);      // root first
    preorder(root->left, res);
    preorder(root->right, res);
}

void postorder(TreeNode* root, vector<int>& res) {
    if (!root) return;
    postorder(root->left, res);
    postorder(root->right, res);
    res.push_back(root->val);      // root last
}

// ── BFS Level-Order ──────────────────────────────────────────
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;

    queue<TreeNode*> q;
    q.push(root);

    while (!q.empty()) {
        int levelSize = q.size();  // process exactly this many nodes
        vector<int> level;

        for (int i = 0; i < levelSize; i++) {
            TreeNode* node = q.front(); q.pop();
            level.push_back(node->val);
            if (node->left)  q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}

// ── Max Depth ────────────────────────────────────────────────
int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}

// ── Diameter of Binary Tree ──────────────────────────────────
// Diameter = longest path between any two nodes
int diameterHelper(TreeNode* root, int& diameter) {
    if (!root) return 0;
    int left = diameterHelper(root->left, diameter);
    int right = diameterHelper(root->right, diameter);
    diameter = max(diameter, left + right);  // path through this node
    return 1 + max(left, right);             // height of this subtree
}

int diameter(TreeNode* root) {
    int d = 0;
    diameterHelper(root, d);
    return d;
}

// ── Lowest Common Ancestor ───────────────────────────────────
// LCA of p and q in a binary tree
TreeNode* lca(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root || root == p || root == q) return root;
    TreeNode* left  = lca(root->left,  p, q);
    TreeNode* right = lca(root->right, p, q);
    if (left && right) return root;  // p and q on different sides
    return left ? left : right;       // both on same side
}

int main() {
    //        1
    //       / \\
    //      2   3
    //     / \\
    //    4   5
    TreeNode* root = new TreeNode(1);
    root->left      = new TreeNode(2);
    root->right     = new TreeNode(3);
    root->left->left  = new TreeNode(4);
    root->left->right = new TreeNode(5);

    vector<int> inRes;
    inorder(root, inRes);
    for (int x : inRes) cout << x << " ";  // 4 2 5 1 3
    cout << endl;

    auto levels = levelOrder(root);
    for (auto& level : levels) {
        for (int x : level) cout << x << " ";
        cout << endl;
    }
    // Level 0: 1
    // Level 1: 2 3
    // Level 2: 4 5

    cout << "Max depth: " << maxDepth(root) << endl;  // 3
    cout << "Diameter: " << diameter(root)  << endl;  // 3

    return 0;
}`,
                explanation: 'All traversal types + key problems: max depth (height), diameter, and LCA. These 4 patterns solve ~60% of binary tree interview questions. Note how each uses the same recursive skeleton.'
              }
            ],
            keyPoints: [
              'Inorder BST traversal gives sorted sequence — key BST property',
              'Level-order BFS: use queue. Process levelSize nodes at a time to separate levels.',
              'Most tree recursion: process node + return something useful upward (height, etc.)',
              'Diameter pattern: track global max as a reference variable, return local max (height)',
              'LCA: if both p and q found in subtrees, current node is LCA',
            ]
          }
        ],
        quizzes: [],
        problems: [
          {
            id: 'problem-5-1',
            title: 'Maximum Path Sum in Binary Tree',
            difficulty: 'Hard',
            description: 'A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. Return the maximum path sum.',
            constraints: ['1 ≤ number of nodes ≤ 3 × 10^4', '-1000 ≤ Node.val ≤ 1000'],
            examples: [
              { input: 'root = [-10, 9, 20, null, null, 15, 7]', output: '42  (path: 15 → 20 → 7)' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;
struct TreeNode { int val; TreeNode *left, *right; TreeNode(int x):val(x),left(nullptr),right(nullptr){} };

int maxPathSum(TreeNode* root) {
    int maxSum = INT_MIN;

    function<int(TreeNode*)> dfs = [&](TreeNode* node) -> int {
        if (!node) return 0;

        // Max gain from left/right — ignore negative (take 0 instead)
        int leftGain  = max(dfs(node->left),  0);
        int rightGain = max(dfs(node->right), 0);

        // Path through this node (can't extend upward after this)
        maxSum = max(maxSum, node->val + leftGain + rightGain);

        // Return max gain extending upward (only one branch)
        return node->val + max(leftGain, rightGain);
    };

    dfs(root);
    return maxSum;
}`,
              explanation: 'At each node, compute the path sum if we make this node the "peak" of the path (taking both branches). But when returning upward, we can only take one branch (otherwise it\'s not a path). The global maxSum tracks the answer.'
            },
            explanation: 'Classic "tree DP" problem. The key insight: at each node, compute two things: (1) can this node be the "turn point"? → update global answer. (2) what\'s the max sum extending upward from this node? → return to parent.',
            whySolve: 'This problem teaches the fundamental tree DP pattern: maintain a global variable for the answer, but return a different, more restricted value upward. This pattern appears in dozens of tree problems.',
            companies: ['Google', 'Amazon', 'Meta'],
            hints: ['At each node, consider: what if this node is the "highest" point of the best path?', 'For extending upward, you can only take one child branch.', 'Use max(gain, 0) to avoid taking negative paths.'],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(h) — recursion stack, h = height',
            tags: ['Tree', 'DFS', 'Dynamic Programming'],
            oaFrequency: 'Medium',
          }
        ]
      },
      {
        id: 'graphs-deep',
        name: 'Graphs — BFS, DFS & Essential Algorithms',
        description: 'Graph representation, BFS/DFS with all applications, and cycle detection',
        interviewImportance: 'Critical',
        companyFocus: ['Google', 'Meta', 'Amazon', 'Uber', 'LinkedIn'],
        interviewTips: [
          'Always ask: directed or undirected? Weighted or unweighted? These change the algorithm.',
          'BFS = shortest path in unweighted graph. Dijkstra = shortest path in weighted graph.',
          'DFS = cycle detection, topological sort, connected components.',
          '"Grid problems" (2D matrix) are just graphs — think of each cell as a node with up to 4 neighbors.',
          'Represent graphs as: adjacency list (sparse — most interview problems) or adjacency matrix (dense).',
        ],
        lessons: [
          {
            id: 'lesson-5-2',
            title: 'Graphs — Representation, BFS & DFS',
            description: 'Build and traverse graphs, solve connected components, shortest paths',
            content: `A graph is a collection of nodes (vertices) connected by edges.

REPRESENTATION:
1. Adjacency List: vector<vector<int>> adj(n) — best for sparse graphs
2. Adjacency Matrix: vector<vector<int>> adj(n, vector<int>(n, 0)) — for dense/weight

KEY ALGORITHMS:
• BFS (Breadth-First): Level-by-level. Uses queue. Finds shortest path in unweighted graphs.
• DFS (Depth-First): Goes deep before backtracking. Uses recursion or stack.
  Applications: cycle detection, topological sort, connected components, flood fill

GRID AS GRAPH:
Matrix problems (number of islands, flood fill, word search) = graph where cells are nodes.
4-directional: int dx[] = {0,0,1,-1}; int dy[] = {1,-1,0,0};
Visited tracking: bool visited[ROWS][COLS] or modify grid in-place (mark visited cells)

CYCLE DETECTION:
• Undirected: during DFS, if we reach a visited node that isn't parent → cycle
• Directed: track nodes in current DFS path (state = 0:unvisited, 1:in-path, 2:done)`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// BFS — shortest path in unweighted graph
vector<int> bfsShortestPath(vector<vector<int>>& adj, int start, int n) {
    vector<int> dist(n, -1);
    queue<int> q;

    dist[start] = 0;
    q.push(start);

    while (!q.empty()) {
        int node = q.front(); q.pop();
        for (int neighbor : adj[node]) {
            if (dist[neighbor] == -1) {
                dist[neighbor] = dist[node] + 1;
                q.push(neighbor);
            }
        }
    }
    return dist;  // dist[i] = shortest path from start to i, -1 if unreachable
}

// DFS — connected components count
int dfs(vector<vector<int>>& adj, vector<bool>& visited, int node) {
    visited[node] = true;
    for (int neighbor : adj[node])
        if (!visited[neighbor]) dfs(adj, visited, neighbor);
    return 1;
}

int countComponents(int n, vector<vector<int>>& adj) {
    vector<bool> visited(n, false);
    int count = 0;
    for (int i = 0; i < n; i++)
        if (!visited[i]) count += dfs(adj, visited, i);
    return count;
}

// Grid BFS — Number of Islands (classic)
// Count connected components of '1's in a grid
int numIslands(vector<vector<char>>& grid) {
    int rows = grid.size(), cols = grid[0].size();
    int islands = 0;
    int dx[] = {0,0,1,-1};
    int dy[] = {1,-1,0,0};

    function<void(int,int)> dfs = [&](int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != '1') return;
        grid[r][c] = '0';  // mark visited by sinking the island
        for (int d = 0; d < 4; d++) dfs(r + dx[d], c + dy[d]);
    };

    for (int r = 0; r < rows; r++)
        for (int c = 0; c < cols; c++)
            if (grid[r][c] == '1') { dfs(r, c); islands++; }

    return islands;
}

int main() {
    // Graph: 0-1-2-3-4, edges: 0-1, 0-2, 1-3, 2-4
    int n = 5;
    vector<vector<int>> adj(n);
    auto addEdge = [&](int u, int v) { adj[u].push_back(v); adj[v].push_back(u); };
    addEdge(0,1); addEdge(0,2); addEdge(1,3); addEdge(2,4);

    auto dist = bfsShortestPath(adj, 0, n);
    for (int i = 0; i < n; i++) cout << "dist[" << i << "] = " << dist[i] << endl;

    // Grid problem
    vector<vector<char>> grid = {
        {'1','1','0','0','0'},
        {'1','1','0','0','0'},
        {'0','0','1','0','0'},
        {'0','0','0','1','1'}
    };
    cout << "Islands: " << numIslands(grid) << endl;  // 3

    return 0;
}`,
                explanation: 'BFS for shortest paths (level-by-level), DFS for connected components, and grid DFS (Number of Islands). The grid pattern with dx/dy arrays is extremely common in Google/Meta interviews.'
              }
            ],
            keyPoints: [
              'BFS uses queue and finds shortest path in unweighted graphs',
              'DFS uses recursion and is used for connectivity, cycles, topological sort',
              'Grid problems: cells are nodes, use dx/dy arrays for 4-directional movement',
              'Mark visited BEFORE adding to queue (not after) to avoid duplicates',
              'Component count: iterate over all nodes, DFS each unvisited one',
            ]
          }
        ],
        quizzes: [],
        problems: [
          {
            id: 'problem-5-2',
            title: 'Number of Islands',
            difficulty: 'Medium',
            description: 'Given an m×n 2D binary grid of \'1\'s (land) and \'0\'s (water), return the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.',
            constraints: ['m, n ≥ 1', 'grid[i][j] is \'0\' or \'1\''],
            examples: [
              { input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1' },
              { input: '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3' },
            ],
            solution: {
              language: 'cpp',
              code: `int numIslands(vector<vector<char>>& grid) {
    int rows = grid.size(), cols = grid[0].size(), islands = 0;

    function<void(int,int)> sink = [&](int r, int c) {
        if (r<0 || r>=rows || c<0 || c>=cols || grid[r][c]!='1') return;
        grid[r][c] = '0';  // sink (mark visited)
        sink(r+1,c); sink(r-1,c); sink(r,c+1); sink(r,c-1);
    };

    for (int r = 0; r < rows; r++)
        for (int c = 0; c < cols; c++)
            if (grid[r][c] == '1') { sink(r,c); islands++; }

    return islands;
}`,
              explanation: 'DFS flood-fill: when we find an island cell, "sink" the entire island (mark all connected cells as water) to avoid counting it again. Each call to sink() from the outer loop = one island.'
            },
            explanation: 'Classic connected components problem on a grid. DFS flood-fill marks each island as visited. Count = number of times we start a new DFS from an unvisited \'1\'.',
            whySolve: 'Number of Islands is one of the most asked graph problems at Google and Meta. It introduces the pattern of treating 2D grids as graphs, which extends to dozens of problems: word search, shortest path in maze, rotting oranges, pacific atlantic water flow.',
            companies: ['Google', 'Amazon', 'Meta', 'Microsoft', 'Bloomberg'],
            hints: ['A 2D grid is a graph where each cell can have up to 4 neighbors.', 'DFS from any land cell: mark all connected land as visited.', 'Count how many times you start a new DFS — that\'s the island count.'],
            timeComplexity: 'O(m × n)',
            spaceComplexity: 'O(m × n) — recursion stack',
            tags: ['Array', 'DFS', 'BFS', 'Graph', 'Matrix'],
            oaFrequency: 'Very High',
          }
        ]
      },
      {
        id: 'hash-maps-sets',
        name: 'Hash Maps & Sets — The O(1) Lookup Superpower',
        description: 'unordered_map and unordered_set deep dive with interview patterns',
        interviewImportance: 'Critical',
        companyFocus: ['Google', 'Amazon', 'Meta', 'Microsoft'],
        interviewTips: [
          'unordered_map vs map: unordered = O(1) avg, O(n) worst; map = O(log n) always. Use unordered unless you need sorted order.',
          'Common pattern: count elements → unordered_map<T, int> freq;  freq[x]++;',
          '"Have I seen this before?" → unordered_set<T> seen;  seen.count(x) > 0',
          'Collision gotcha: unordered_map can be O(n) in adversarial inputs. In contests, use custom hash.',
          'Iterating: for (auto& [key, val] : map) — structured bindings are much cleaner.',
        ],
        lessons: [
          {
            id: 'lesson-5-3',
            title: 'unordered_map & unordered_set — Hash Table Mastery',
            description: 'When and how to use hash containers for O(1) lookup, frequency counting, deduplication',
            content: `Hash tables give O(1) average time for insert, delete, and lookup — this is what makes many O(n²) problems solvable in O(n).

unordered_map<Key, Value>:
• map[key]                 — access (creates default if not exists!)
• map[key] = val           — insert/update
• map.count(key) or map.find(key) != map.end() — check existence
• map.erase(key)           — delete
• for (auto& [k, v] : map) — iterate

unordered_set<Value>:
• set.insert(val)          — add
• set.count(val)           — check existence (0 or 1)
• set.erase(val)           — remove

CRITICAL: map[key] for non-existent key inserts a default value!
Use map.count(key) or map.find(key) to check existence without creating entry.

ORDERED vs UNORDERED:
• map<K,V>           — sorted by key, O(log n) operations
• unordered_map<K,V> — unsorted, O(1) avg operations
• set<V>             — sorted, unique, O(log n)
• unordered_set<V>   — unsorted, unique, O(1) avg`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // ── Frequency counting ────────────────────────────
    string s = "hello world";
    unordered_map<char, int> freq;
    for (char c : s) freq[c]++;

    // Find most frequent character
    char maxChar = ' '; int maxFreq = 0;
    for (auto& [c, f] : freq) {
        if (f > maxFreq) { maxFreq = f; maxChar = c; }
    }
    cout << "Most frequent: " << maxChar << " (" << maxFreq << " times)" << endl;

    // ── Deduplication ─────────────────────────────────
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    unordered_set<int> seen(nums.begin(), nums.end());
    cout << "Unique elements: " << seen.size() << endl;  // 8

    // ── Two Sum pattern (most common hash map use) ────
    vector<int> arr = {2, 7, 11, 15};
    int target = 9;
    unordered_map<int, int> complement;
    for (int i = 0; i < (int)arr.size(); i++) {
        if (complement.count(target - arr[i])) {
            cout << "Found: " << complement[target - arr[i]] << " + " << i << endl;
        }
        complement[arr[i]] = i;
    }

    // ── Group Anagrams pattern ────────────────────────
    vector<string> words = {"eat","tea","tan","ate","nat","bat"};
    map<string, vector<string>> groups;
    for (string& w : words) {
        string key = w;
        sort(key.begin(), key.end());  // sorted form = canonical anagram key
        groups[key].push_back(w);
    }
    for (auto& [key, group] : groups) {
        cout << "[";
        for (int i = 0; i < (int)group.size(); i++) {
            cout << group[i];
            if (i < (int)group.size()-1) cout << ",";
        }
        cout << "] ";
    }
    cout << endl;

    // ── Sliding window + hash map ─────────────────────
    // Find longest substring with at most K distinct characters
    int k = 2;
    string str = "eceba";
    unordered_map<char, int> window;
    int left = 0, maxLen = 0;
    for (int right = 0; right < (int)str.size(); right++) {
        window[str[right]]++;
        while ((int)window.size() > k) {
            window[str[left]]--;
            if (window[str[left]] == 0) window.erase(str[left]);
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    cout << "Longest with at most " << k << " distinct: " << maxLen << endl;  // 3 ("ece")

    return 0;
}`,
                explanation: 'Four essential hash map patterns: frequency counting, deduplication, Two Sum (complement checking), Group Anagrams (sorted key), and sliding window with character tracking. These patterns solve dozens of interview problems.'
              }
            ],
            keyPoints: [
              'unordered_map[key]++ is the canonical frequency counting idiom',
              'Check existence with .count(key) — NOT map[key] which creates a default entry',
              'Group Anagrams trick: sort the word to get a canonical key',
              'Sliding window + map: erase entries when count reaches 0 to track distinct elements',
              'map<K,V> maintains sorted order (use when you need min/max key efficiently)',
            ]
          }
        ],
        quizzes: [],
        problems: []
      }
    ]
  },
  {
    id: 6,
    title: 'Level 6: Dynamic Programming — The Ultimate Guide',
    description: 'DP is the hardest topic and the biggest differentiator in FAANG interviews. Learn the 7 DP patterns that cover 90% of all DP problems.',
    topics: [
      {
        id: 'dp-foundations',
        name: 'DP Foundations — Memoization & Tabulation',
        description: 'The two ways to implement DP and how to identify DP problems',
        interviewImportance: 'Critical',
        companyFocus: ['Google', 'Amazon', 'Meta', 'Microsoft', 'Goldman Sachs'],
        interviewTips: [
          'DP applies when: (1) overlapping subproblems + (2) optimal substructure.',
          'Start with a recursive solution, then add memoization. This is always the clearest path.',
          'State identification: "what information do I need to uniquely define a subproblem?"',
          'Transition: "given the answer to smaller subproblems, how do I compute the current one?"',
          'Space optimization: 2D DP can often be reduced to 1D (use previous row only).',
          'In interviews: say "let me think about this recursively first" — shows structured thinking.',
        ],
        lessons: [
          {
            id: 'lesson-6-1',
            title: 'What is Dynamic Programming? The Mental Model',
            description: 'Understand DP deeply — not just how to implement it but WHY it works',
            content: `Dynamic Programming = Smart Recursion + Caching

The core insight: if a recursive solution solves the SAME subproblem multiple times, cache the results. This transforms exponential time to polynomial time.

WHY does this work?
Regular recursion on Fibonacci(40): computes fib(1) ~1 billion times
With DP (memoization): computes fib(1) exactly ONCE, reuses it everywhere

DP requirements:
1. OVERLAPPING SUBPROBLEMS: Same subproblem is solved multiple times
2. OPTIMAL SUBSTRUCTURE: Optimal solution = constructed from optimal solutions of subproblems

HOW TO IDENTIFY DP PROBLEMS:
✓ "How many ways..." → counting DP
✓ "Maximum/minimum..." → optimization DP
✓ "Can you..." → existence DP (often simplified optimization)
✓ Subsequence/substring problems with "longest/shortest"
✓ Grid traversal problems (unique paths, minimum path sum)
✓ Partition problems (divide array/string into parts)
✓ Game theory (two players, optimal play)

TWO APPROACHES:
1. Top-Down (Memoization): recursive + cache
   + Easier to write (just add memo to recursion)
   + Only solves needed subproblems
   - Recursion stack overhead

2. Bottom-Up (Tabulation): iterative, fill DP table
   + No recursion stack
   + Often easier to optimize space
   - Must determine correct order to fill table`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// WHY DP? Let's see the problem with plain recursion first:
// Fibonacci — plain recursion (EXPONENTIAL — don't do this!)
// fib(40) takes ~3 billion calls!
long long fibNaive(int n) {
    if (n <= 1) return n;
    return fibNaive(n-1) + fibNaive(n-2);  // O(2^n)!!
}

// ─── APPROACH 1: Top-Down (Memoization) ───────────────────────
// Just add a cache to recursion
vector<long long> memo(100, -1);

long long fibMemo(int n) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];  // cached!
    memo[n] = fibMemo(n-1) + fibMemo(n-2);
    return memo[n];
}
// Now fib(40) = 40 unique calls. O(n) time!

// ─── APPROACH 2: Bottom-Up (Tabulation) ───────────────────────
long long fibDP(int n) {
    if (n <= 1) return n;
    vector<long long> dp(n+1);
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++)
        dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}

// ─── APPROACH 3: Space Optimized ──────────────────────────────
// We only need the previous 2 values!
long long fibOpt(int n) {
    if (n <= 1) return n;
    long long a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        long long c = a + b;
        a = b; b = c;
    }
    return b;
}

// ─── Climbing Stairs (DP on 1D) ───────────────────────────────
// HOW MANY ways to climb n stairs (1 or 2 steps at a time)?
// WHY SOLVE: teaches "counting DP" — same as Fibonacci!
// dp[i] = ways to reach step i = dp[i-1] + dp[i-2]
int climbStairs(int n) {
    if (n <= 2) return n;
    int a = 1, b = 2;
    for (int i = 3; i <= n; i++) {
        int c = a + b; a = b; b = c;
    }
    return b;
}

int main() {
    cout << "Fib(10) = " << fibDP(10) << endl;  // 55
    cout << "Ways to climb 10 stairs = " << climbStairs(10) << endl;  // 89
    return 0;
}`,
                explanation: 'Three approaches to Fibonacci: naive exponential (don\'t!), memoization (add cache to recursion), tabulation (bottom-up table), and space-optimized (only 2 variables). Always show the interviewer you can optimize space. Climbing Stairs is the "Hello World" of DP.'
              }
            ],
            keyPoints: [
              'DP = overlapping subproblems + optimal substructure',
              'Memoization: add cache to recursion — easiest to write, sometimes suboptimal',
              'Tabulation: fill dp[] bottom-up — no recursion overhead, easy to space-optimize',
              'State: what uniquely identifies a subproblem?',
              'Transition: dp[i] = f(dp[j] for j < i) — the recurrence relation',
            ]
          }
        ],
        quizzes: [],
        problems: [
          {
            id: 'problem-6-1',
            title: 'Coin Change (Minimum Coins)',
            difficulty: 'Medium',
            description: 'Given coin denominations and a target amount, return the fewest number of coins needed to make up that amount. Return -1 if impossible.',
            constraints: ['1 ≤ coins.length ≤ 12', '1 ≤ coins[i] ≤ 2^31 - 1', '0 ≤ amount ≤ 10^4'],
            examples: [
              { input: 'coins = [1,5,6,9], amount = 11', output: '2  (5 + 6)' },
              { input: 'coins = [2], amount = 3', output: '-1' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    // dp[i] = minimum coins to make amount i
    vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;  // 0 coins needed for amount 0

    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i && dp[i - coin] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] == INT_MAX ? -1 : dp[amount];
}

int main() {
    vector<int> coins = {1, 5, 6, 9};
    cout << coinChange(coins, 11) << endl;  // 2
    coins = {2};
    cout << coinChange(coins, 3) << endl;   // -1
    return 0;
}`,
              explanation: 'Classic unbounded knapsack DP. For each amount, try all coins. If we can make (amount - coin), then (amount - coin + 1 coin) is also achievable.'
            },
            explanation: 'This is the unbounded knapsack variant — you can use each coin multiple times. The DP state: dp[i] = minimum coins for amount i. Transition: try all coins, take the minimum.',
            whySolve: 'Coin Change is THE canonical DP problem for interviews. It appears in virtually every company\'s interview bank. More importantly, it demonstrates the difference between greedy (which fails here) and DP (which works). Understanding why greedy fails is as important as the DP solution.',
            companies: ['Amazon', 'Google', 'Microsoft', 'Meta', 'Goldman Sachs'],
            hints: ['Greedy (take largest coin first) doesn\'t always work. Why? Try coins=[1,5,6,9], amount=11.', 'Define dp[i] = minimum coins to make amount i.', 'For each amount i, try all coins c. If i >= c: dp[i] = min(dp[i], dp[i-c] + 1)'],
            timeComplexity: 'O(amount × coins)',
            spaceComplexity: 'O(amount)',
            tags: ['Dynamic Programming', 'Array', 'BFS'],
            oaFrequency: 'Very High',
          }
        ]
      },
      {
        id: 'classic-dp',
        name: 'Classic DP Patterns — Must Know All 7',
        description: '7 DP patterns that cover 90% of all DP interview problems',
        interviewImportance: 'Critical',
        companyFocus: ['Google', 'Amazon', 'Meta', 'Microsoft'],
        interviewTips: [
          '0/1 Knapsack: for each item, choose to include or not. dp[i][w] = best with first i items, weight ≤ w.',
          'LCS/LIS: string comparison DP. dp[i][j] = LCS of first i chars of s1 and first j of s2.',
          'Grid DP: dp[r][c] = value at cell, transition from dp[r-1][c] and dp[r][c-1].',
          'Interval DP: dp[i][j] = answer for interval [i,j]. Fill diagonally.',
          'DP on trees: solve for subtrees, combine at root. Usually post-order traversal.',
        ],
        lessons: [
          {
            id: 'lesson-6-2',
            title: 'The 7 DP Patterns — With Examples',
            description: 'Master every DP pattern with concrete examples and templates',
            content: `PATTERN 1: Linear DP (1D array, simple transitions)
Example: Climbing Stairs, House Robber, Jump Game
Template: for i in range: dp[i] = f(dp[i-1], dp[i-2], ...)

PATTERN 2: 0/1 Knapsack
Choose each item at most once. 2D state: dp[item][capacity]
Example: 0/1 Knapsack, Subset Sum, Partition Equal Subset Sum

PATTERN 3: Unbounded Knapsack
Can use each item multiple times.
Example: Coin Change, Minimum Coin Change, Rod Cutting

PATTERN 4: LCS/LIS/Edit Distance (String DP)
Compare two strings/sequences.
Example: LCS, LIS, Edit Distance, Wildcard Matching

PATTERN 5: Grid DP
Move through a 2D grid from top-left to bottom-right.
Example: Unique Paths, Minimum Path Sum, Dungeon Game

PATTERN 6: Interval DP
Answer for interval [i,j] from answers for sub-intervals.
Example: Matrix Chain Multiplication, Burst Balloons, Palindrome Partitioning

PATTERN 7: DP on Trees
Recursive DP on tree structure.
Example: House Robber III, Binary Tree Maximum Path Sum`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// ── PATTERN 1: House Robber (Linear DP) ───────────────────────
// Rob houses along a street. Adjacent houses have alarm.
// Max money without robbing adjacent houses.
// WHY: intro to "skip one" DP. Appears in Amazon OA frequently!
int rob(vector<int>& nums) {
    int n = nums.size();
    if (n == 1) return nums[0];
    // dp[i] = max money robbing houses 0..i
    // dp[i] = max(dp[i-1], dp[i-2] + nums[i])
    int a = nums[0], b = max(nums[0], nums[1]);
    for (int i = 2; i < n; i++) {
        int c = max(b, a + nums[i]);
        a = b; b = c;
    }
    return b;
}

// ── PATTERN 2: 0/1 Knapsack ───────────────────────────────────
// n items with weights and values. Max value with weight ≤ capacity.
int knapsack(vector<int>& w, vector<int>& v, int cap) {
    int n = w.size();
    // dp[j] = max value with capacity j
    vector<int> dp(cap + 1, 0);

    for (int i = 0; i < n; i++) {
        // Traverse BACKWARDS to ensure each item used at most once
        for (int j = cap; j >= w[i]; j--) {
            dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
        }
    }
    return dp[cap];
}

// ── PATTERN 4: Longest Common Subsequence ─────────────────────
// LCS("ABCBDAB", "BDCABA") = 4 ("BCBA" or "BDAB")
int lcs(string s1, string s2) {
    int m = s1.size(), n = s2.size();
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1[i-1] == s2[j-1])
                dp[i][j] = dp[i-1][j-1] + 1;  // match!
            else
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);  // skip one
        }
    }
    return dp[m][n];
}

// ── PATTERN 4: Longest Increasing Subsequence ─────────────────
// LIS([10,9,2,5,3,7,101,18]) = 4 ([2,3,7,101] or [2,5,7,101])
// O(n²) DP version
int lisDP(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, 1);  // dp[i] = LIS ending at i

    for (int i = 1; i < n; i++)
        for (int j = 0; j < i; j++)
            if (nums[j] < nums[i])
                dp[i] = max(dp[i], dp[j] + 1);

    return *max_element(dp.begin(), dp.end());
}

// ── PATTERN 5: Unique Paths (Grid DP) ─────────────────────────
// Count paths from top-left to bottom-right (only right/down)
int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    for (int r = 1; r < m; r++)
        for (int c = 1; c < n; c++)
            dp[r][c] = dp[r-1][c] + dp[r][c-1];
    return dp[m-1][n-1];
}

int main() {
    vector<int> houses = {2, 7, 9, 3, 1};
    cout << "Max rob: " << rob(houses) << endl;  // 12

    vector<int> w = {1,3,4,5}, v = {1,4,5,7};
    cout << "Knapsack: " << knapsack(w, v, 7) << endl;  // 9

    cout << "LCS: " << lcs("ABCBDAB", "BDCABA") << endl;  // 4

    vector<int> nums = {10,9,2,5,3,7,101,18};
    cout << "LIS: " << lisDP(nums) << endl;  // 4

    cout << "Unique paths 3x7: " << uniquePaths(3, 7) << endl;  // 28

    return 0;
}`,
                explanation: 'Five DP patterns in one: linear (House Robber), 0/1 Knapsack (1D optimization trick), LCS (string comparison), LIS (subsequence), and Grid DP. Study the transitions — that\'s where the DP insight lives.'
              }
            ],
            keyPoints: [
              'House Robber: dp[i] = max(dp[i-1], dp[i-2] + nums[i]) — skip or take',
              '0/1 Knapsack: iterate weights BACKWARDS to ensure each item used once',
              'LCS: if chars match → dp[i][j] = dp[i-1][j-1]+1; else max of two skips',
              'Grid DP: dp[r][c] = dp[r-1][c] + dp[r][c-1] for counting paths',
              'Always ask: can I reduce 2D DP to 1D? Most 0/1 Knapsack problems can!',
            ]
          }
        ],
        quizzes: [
          {
            id: 'quiz-6-1',
            question: 'In 0/1 Knapsack 1D DP, why must we iterate weights from HIGH to LOW?',
            options: [
              'For better cache performance',
              'To avoid using the same item twice in the same iteration',
              'The order doesn\'t matter',
              'To handle negative weights'
            ],
            correctAnswer: 1,
            explanation: 'In 1D knapsack, dp[j] depends on dp[j - weight[i]]. If we iterate left-to-right, dp[j-weight[i]] might have already been updated with item i in this same pass, causing item i to be used multiple times. Right-to-left ensures we only use each item once.'
          }
        ],
        problems: [
          {
            id: 'problem-6-2',
            title: 'Longest Increasing Subsequence',
            difficulty: 'Medium',
            description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
            constraints: ['1 ≤ nums.length ≤ 2500', '-10^4 ≤ nums[i] ≤ 10^4'],
            examples: [
              { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4  (e.g., [2,3,7,101])' },
            ],
            solution: {
              language: 'cpp',
              code: `#include <bits/stdc++.h>
using namespace std;

// O(n²) DP solution
int lisDP(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, 1);  // dp[i] = LIS ending at index i
    for (int i = 1; i < n; i++)
        for (int j = 0; j < i; j++)
            if (nums[j] < nums[i])
                dp[i] = max(dp[i], dp[j] + 1);
    return *max_element(dp.begin(), dp.end());
}

// O(n log n) solution using patience sort / binary search
int lisOptimal(vector<int>& nums) {
    vector<int> tails;  // tails[i] = smallest tail of LIS of length i+1
    for (int x : nums) {
        auto pos = lower_bound(tails.begin(), tails.end(), x);
        if (pos == tails.end()) tails.push_back(x);
        else *pos = x;
    }
    return tails.size();
}

int main() {
    vector<int> nums = {10, 9, 2, 5, 3, 7, 101, 18};
    cout << lisDP(nums)      << endl;  // 4
    cout << lisOptimal(nums) << endl;  // 4
    return 0;
}`,
              explanation: 'Two solutions: O(n²) DP where dp[i] = LIS ending at i, and O(n log n) patience sort using binary search on a maintained "tails" array. The O(n log n) uses lower_bound — a beautiful application of binary search.'
            },
            explanation: 'LIS has both O(n²) and O(n log n) solutions. Know both — interviewers may ask for the optimal. The O(n log n) approach uses binary search: maintain a sorted array where tails[i] is the smallest ending element of any LIS of length i+1.',
            whySolve: 'LIS is a classic DP pattern that also has a beautiful O(n log n) solution using binary search — two for the price of one. It models the patience card-sorting algorithm and appears in problems like Russian Doll Envelopes, Box Stacking, and more.',
            companies: ['Google', 'Amazon', 'Microsoft'],
            hints: [
              'dp[i] = length of LIS ending exactly at index i (starts at 1, every element alone is an LIS).',
              'For each i, look at all j < i where nums[j] < nums[i]. dp[i] = max(dp[j]+1).',
              'For O(n log n): use binary search to find where to place each element in a sorted "active sequences" array.',
            ],
            timeComplexity: 'O(n²) or O(n log n)',
            spaceComplexity: 'O(n)',
            tags: ['Array', 'Binary Search', 'Dynamic Programming'],
            oaFrequency: 'High',
          }
        ]
      },
    ]
  },
  {
    id: 7,
    title: 'Level 7: Advanced Algorithms, Greedy & Competitive Programming',
    description: 'The final frontier: weighted graphs (Dijkstra), topological sort, greedy proofs, bit manipulation, and the competitive programming mindset that gets you through the hardest rounds.',
    topics: [
      {
        id: 'advanced-graphs',
        name: 'Advanced Graphs — Dijkstra, Topological Sort & Union-Find',
        description: 'Weighted shortest paths, DAG ordering, and disjoint set — the algorithms that power real systems',
        interviewImportance: 'High',
        companyFocus: ['Google', 'Uber', 'LinkedIn', 'Meta', 'Amazon'],
        interviewTips: [
          'Dijkstra: priority_queue (min-heap) + dist array + relaxation. Only for non-negative weights.',
          'Topological sort: BFS Kahn\'s algorithm (count in-degrees) OR DFS reverse postorder.',
          'Union-Find (DSU): near-O(1) connectivity queries. Master path compression + union by rank.',
          'Cycle detection in directed graph: use 3-color DFS (0=unvisited, 1=in-stack, 2=done).',
          '"Can you reach X from Y?" → BFS/DFS. "Shortest path with weights?" → Dijkstra.',
        ],
        lessons: [
          {
            id: 'lesson-7-1',
            title: 'Dijkstra & Topological Sort — Essential Graph Algorithms',
            description: 'Weighted shortest path and dependency ordering — used in maps, schedulers, compilers',
            content: `DIJKSTRA'S ALGORITHM (Weighted Shortest Path):
Works for: non-negative edge weights
Uses: priority_queue (min-heap) + dist[] array

Algorithm:
1. Init dist[start] = 0, all others = ∞
2. Push (0, start) to min-heap
3. Pop minimum. If already processed, skip.
4. For each neighbor: if dist[node] + edge < dist[neighbor], update and push

Time: O((V + E) log V)
Space: O(V)

TOPOLOGICAL SORT (Ordering DAG nodes):
Works for: Directed Acyclic Graphs (DAGs)
Uses: queue + in-degree array (Kahn's BFS algorithm)

Algorithm:
1. Compute in-degree of all nodes
2. Push all nodes with in-degree 0 to queue
3. Process queue: for each node, reduce neighbor's in-degree by 1
4. If neighbor's in-degree = 0, add to queue
5. If result size != n, graph has a cycle

UNION-FIND (Disjoint Set Union):
Efficiently answers: "are nodes A and B connected?"
Supports: union (merge sets), find (which set)
With path compression + union by rank: near O(1) per operation`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// ── DIJKSTRA ──────────────────────────────────────────────────
// adj[u] = {(v, weight), ...}
vector<long long> dijkstra(int src, int n, vector<vector<pair<int,int>>>& adj) {
    vector<long long> dist(n, LLONG_MAX);
    priority_queue<pair<long long,int>,
                   vector<pair<long long,int>>,
                   greater<>> pq;  // min-heap: (dist, node)

    dist[src] = 0;
    pq.push({0, src});

    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();

        if (d > dist[u]) continue;  // already found shorter path

        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;  // dist[i] = shortest distance from src to i
}

// ── TOPOLOGICAL SORT (Kahn's BFS) ────────────────────────────
// Returns topological order, or empty vector if cycle exists
vector<int> topoSort(int n, vector<vector<int>>& adj) {
    vector<int> inDeg(n, 0);
    for (int u = 0; u < n; u++)
        for (int v : adj[u]) inDeg[v]++;

    queue<int> q;
    for (int i = 0; i < n; i++)
        if (inDeg[i] == 0) q.push(i);

    vector<int> order;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        order.push_back(u);
        for (int v : adj[u])
            if (--inDeg[v] == 0) q.push(v);
    }

    return (order.size() == n) ? order : vector<int>{};  // empty = cycle
}

// ── UNION-FIND ────────────────────────────────────────────────
struct DSU {
    vector<int> parent, rank;

    DSU(int n) : parent(n), rank(n, 0) {
        iota(parent.begin(), parent.end(), 0);  // parent[i] = i
    }

    int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);  // path compression
        return parent[x];
    }

    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;  // already same set
        if (rank[px] < rank[py]) swap(px, py);
        parent[py] = px;
        if (rank[px] == rank[py]) rank[px]++;
        return true;  // successfully united
    }

    bool connected(int x, int y) {
        return find(x) == find(y);
    }
};

int main() {
    // Dijkstra example: 4 nodes, edges: 0-1(1), 0-2(4), 1-2(2), 1-3(5), 2-3(1)
    int n = 4;
    vector<vector<pair<int,int>>> adj(n);
    auto addEdge = [&](int u, int v, int w) {
        adj[u].push_back({v, w}); adj[v].push_back({u, w});
    };
    addEdge(0,1,1); addEdge(0,2,4); addEdge(1,2,2); addEdge(1,3,5); addEdge(2,3,1);

    auto dist = dijkstra(0, n, adj);
    cout << "Shortest distances from 0: ";
    for (auto d : dist) cout << d << " ";  // 0 1 3 4
    cout << endl;

    // Topo sort: course schedule
    // Courses 0,1,2,3 with prerequisites: 1→0, 2→0, 3→1, 3→2
    vector<vector<int>> prereq(4);
    prereq[1].push_back(0); prereq[2].push_back(0);
    prereq[3].push_back(1); prereq[3].push_back(2);
    auto order = topoSort(4, prereq);
    for (int x : order) cout << x << " ";  // 0 1 2 3 (or 0 2 1 3)
    cout << endl;

    // DSU: detect cycles, count components
    DSU dsu(5);
    dsu.unite(0,1); dsu.unite(1,2); dsu.unite(3,4);
    cout << dsu.connected(0,2) << endl;  // 1 (same component)
    cout << dsu.connected(0,3) << endl;  // 0 (different components)

    return 0;
}`,
                explanation: 'Three essential advanced graph algorithms: Dijkstra (min-heap relaxation), topological sort (Kahn\'s BFS with in-degree), and Union-Find (path compression + union by rank). Dijkstra and topo sort appear in ~30% of hard graph problems at FAANG.'
              }
            ],
            keyPoints: [
              'Dijkstra: min-heap + dist array + skip-if-stale. Only for non-negative weights.',
              'Topological sort: start from in-degree 0 nodes. If output size != n, there\'s a cycle.',
              'DSU path compression: makes find() near O(1) amortized.',
              'Course Schedule II problem = topological sort — very common interview problem.',
              'For negative weights: use Bellman-Ford (O(VE)) instead of Dijkstra.',
            ]
          }
        ],
        quizzes: [],
        problems: [
          {
            id: 'problem-7-1',
            title: 'Course Schedule (Cycle Detection in Directed Graph)',
            difficulty: 'Medium',
            description: 'There are n courses (0 to n-1). Some courses have prerequisites: [a,b] means to take a, you must first take b. Return true if it\'s possible to finish all courses.',
            constraints: ['1 ≤ n ≤ 2000', '0 ≤ prerequisites.length ≤ 5000'],
            examples: [
              { input: 'n = 2, prerequisites = [[1,0]]', output: 'true  (take 0, then 1)' },
              { input: 'n = 2, prerequisites = [[1,0],[0,1]]', output: 'false  (circular dependency)' },
            ],
            solution: {
              language: 'cpp',
              code: `bool canFinish(int n, vector<vector<int>>& prereqs) {
    vector<vector<int>> adj(n);
    vector<int> inDeg(n, 0);

    for (auto& p : prereqs) {
        adj[p[1]].push_back(p[0]);  // p[1] → p[0]
        inDeg[p[0]]++;
    }

    queue<int> q;
    for (int i = 0; i < n; i++)
        if (inDeg[i] == 0) q.push(i);

    int taken = 0;
    while (!q.empty()) {
        int course = q.front(); q.pop();
        taken++;
        for (int next : adj[course])
            if (--inDeg[next] == 0) q.push(next);
    }

    return taken == n;  // all courses taken = no cycle
}`,
              explanation: 'Topological sort: if we can process all n nodes, no cycle exists → all courses can be taken. If cycle exists, topological sort can\'t complete all nodes.'
            },
            explanation: 'This is topological sort / cycle detection in a directed graph. If a topological ordering exists (Kahn\'s algorithm processes all n nodes), then no cycle exists and all courses can be taken.',
            whySolve: 'Course Schedule is one of the most frequently asked graph problems at Amazon and Google. It directly models real-world dependency resolution (package managers, build systems, task schedulers). Mastering this problem teaches both cycle detection and topological ordering.',
            companies: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Bloomberg'],
            hints: [
              'Represent as directed graph: prerequisite b → course a.',
              'Can we take all courses = Does a valid ordering exist = No cycles in graph.',
              'Topological sort with Kahn\'s algorithm: nodes with no prerequisites first.',
            ],
            timeComplexity: 'O(V + E)',
            spaceComplexity: 'O(V + E)',
            tags: ['Graph', 'Topological Sort', 'BFS', 'Cycle Detection'],
            oaFrequency: 'Very High',
          }
        ]
      },
      {
        id: 'greedy-advanced',
        name: 'Greedy Algorithms — When to Use & When Not To',
        description: 'Greedy works when locally optimal = globally optimal. Learn to recognize and PROVE greedy correctness.',
        interviewImportance: 'High',
        companyFocus: ['Google', 'Amazon', 'Meta'],
        interviewTips: [
          'Greedy works when: exchange argument shows swapping any two adjacent elements doesn\'t improve the solution.',
          'Common greedy patterns: interval scheduling (sort by end time), fractional knapsack (sort by value/weight ratio), Huffman coding.',
          'Red flag: if greedy fails on a simple case, switch to DP.',
          'Activity selection: always take the task that ends earliest (leaves maximum room for others).',
          'Jump Game: greedy (track max reach) vs DP — greedy is simpler and faster here.',
        ],
        lessons: [
          {
            id: 'lesson-7-2',
            title: 'Greedy Algorithms — The Exchange Argument',
            description: 'How to identify greedy problems and verify greedy correctness',
            content: `A greedy algorithm makes the locally optimal choice at each step, hoping it leads to the global optimum.

HOW TO KNOW IF GREEDY WORKS:
The "Exchange Argument": Assume some optimal solution doesn't use your greedy choice. Show that you can swap the non-greedy choice for the greedy choice and the result is at least as good. This proves greedy is optimal.

CLASSIC GREEDY PROBLEMS:
1. Activity Selection: maximize number of activities
   → Sort by end time, greedily take the one that ends earliest

2. Interval Scheduling / Merge Intervals:
   → Sort by start time, merge overlapping intervals

3. Jump Game I & II:
   → Track maximum reachable position, greedily jump as far as possible

4. Meeting Rooms / Minimum Platforms:
   → Sort events by start time, use min-heap for end times

5. Gas Station:
   → Total gas >= total cost iff solution exists. Find start by tracking cumulative deficit.

WHEN GREEDY FAILS: Use DP instead.
Example: Coin Change with arbitrary coins → DP
Example: 0/1 Knapsack → DP (can't fractionally take items)`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// Greedy 1: Non-overlapping Intervals
// Remove minimum intervals to make rest non-overlapping
// Key insight: sort by END time, greedily keep the one that ends earliest
int eraseOverlapIntervals(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end(), [](auto& a, auto& b) {
        return a[1] < b[1];  // sort by end time
    });

    int removed = 0;
    int lastEnd = INT_MIN;

    for (auto& interval : intervals) {
        if (interval[0] >= lastEnd) {
            lastEnd = interval[1];  // keep this interval
        } else {
            removed++;  // overlap! remove it
        }
    }
    return removed;
}

// Greedy 2: Jump Game II (minimum jumps to reach end)
// Greedy: at each position, find the farthest we can reach
int jump(vector<int>& nums) {
    int jumps = 0, currEnd = 0, farthest = 0;

    for (int i = 0; i < (int)nums.size() - 1; i++) {
        farthest = max(farthest, i + nums[i]);

        if (i == currEnd) {  // must jump now
            jumps++;
            currEnd = farthest;
            if (currEnd >= (int)nums.size() - 1) break;
        }
    }
    return jumps;
}

// Greedy 3: Task Scheduler
// Given tasks with frequencies, find min time needed
// Schedule tasks with cooldown n between same tasks
int leastInterval(vector<char>& tasks, int n) {
    array<int, 26> freq = {};
    for (char c : tasks) freq[c - 'A']++;

    int maxFreq = *max_element(freq.begin(), freq.end());
    int maxCount = count(freq.begin(), freq.end(), maxFreq);

    // Formula: max of (maxFreq-1)*(n+1) + maxCount, tasks.size()
    return max((int)tasks.size(), (maxFreq - 1) * (n + 1) + maxCount);
}

int main() {
    vector<vector<int>> intervals = {{1,2},{2,3},{3,4},{1,3}};
    cout << eraseOverlapIntervals(intervals) << endl;  // 1

    vector<int> nums = {2,3,1,1,4};
    cout << jump(nums) << endl;  // 2

    vector<char> tasks = {'A','A','A','B','B','B'};
    cout << leastInterval(tasks, 2) << endl;  // 8

    return 0;
}`,
                explanation: 'Three greedy patterns: interval scheduling (sort by end time), jump game (track farthest reach), and task scheduler (mathematical formula based on most frequent task). Each uses a distinct greedy insight.'
              }
            ],
            keyPoints: [
              'Interval scheduling: sort by END time, greedily keep non-overlapping',
              'Jump Game II: track farthest reachable position, jump only when forced',
              'Greedy is wrong for 0/1 Knapsack, Edit Distance, Longest Path — use DP',
              'Exchange argument proves greedy: show swapping non-greedy choice never helps',
              'Meeting Rooms II: min-heap of end times to track simultaneous meetings',
            ]
          }
        ],
        quizzes: [],
        problems: []
      },
      {
        id: 'bit-manipulation',
        name: 'Bit Manipulation — The Interview Secret Weapon',
        description: 'Bitwise tricks that appear in 10-15% of hard interviews. Small section, huge impact.',
        interviewImportance: 'Medium',
        companyFocus: ['Google', 'Amazon', 'Qualcomm'],
        interviewTips: [
          'XOR is the most useful bit operation: n XOR n = 0, n XOR 0 = n, XOR is commutative and associative.',
          'n & (n-1) clears the lowest set bit. Use to count set bits or check power of 2.',
          'n & (-n) or n & (~n+1) isolates the lowest set bit.',
          'Left shift = multiply by 2. Right shift = divide by 2.',
          'Often asked: find the single number (XOR all), count set bits, check power of 2.',
        ],
        lessons: [
          {
            id: 'lesson-7-3',
            title: 'Bit Manipulation — Every Trick You Need',
            description: 'Master bitwise operations with the techniques that appear in interviews',
            content: `Bit manipulation uses binary representation for elegant, O(1) solutions.

ESSENTIAL BIT TRICKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• n & 1         → check if n is odd (1=odd, 0=even)
• n | 1         → make n odd
• n & (n-1)     → clear lowest set bit; = 0 if n is power of 2
• n & (-n)      → isolate lowest set bit
• n ^ n = 0     → XOR with itself = 0
• n ^ 0 = n     → XOR with 0 = itself
• a ^ b ^ b = a → XOR is self-inverse
• n << k        → multiply by 2^k
• n >> k        → divide by 2^k (integer)

CLASSIC PROBLEMS:
1. Find single number in array where all others appear twice → XOR everything
2. Count set bits (popcount) → loop or __builtin_popcount(n)
3. Check power of 2 → n > 0 && (n & (n-1)) == 0
4. Swap without temp → a ^= b; b ^= a; a ^= b;
5. Get/Set/Clear bit i:
   Get:   (n >> i) & 1
   Set:   n | (1 << i)
   Clear: n & ~(1 << i)`,
            codeExamples: [
              {
                language: 'cpp',
                code: `#include <bits/stdc++.h>
using namespace std;

// ── Single Number (XOR trick) ─────────────────────────────────
// All elements appear twice except one. Find it.
// WHY: a ^ a = 0, XOR all → pairs cancel, single remains
int singleNumber(vector<int>& nums) {
    int result = 0;
    for (int x : nums) result ^= x;
    return result;
}

// ── Count Set Bits ────────────────────────────────────────────
int countBits(int n) {
    int count = 0;
    while (n) {
        n &= (n - 1);  // clear lowest set bit
        count++;
    }
    return count;
    // OR simply: return __builtin_popcount(n);
}

// ── Power of Two ──────────────────────────────────────────────
bool isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
    // If power of 2: binary form is 10...0, n-1 is 01...1, AND = 0
}

// ── Missing Number in [0..n] ─────────────────────────────────
// XOR trick: XOR all indices with all values → duplicates cancel
int missingNumber(vector<int>& nums) {
    int missing = nums.size();  // start with n (the "extra" index)
    for (int i = 0; i < (int)nums.size(); i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}

// ── Subsets Generation (bitmask) ─────────────────────────────
// Generate all 2^n subsets using bitmask
vector<vector<int>> subsets(vector<int>& nums) {
    int n = nums.size();
    vector<vector<int>> result;

    for (int mask = 0; mask < (1 << n); mask++) {
        vector<int> subset;
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i)) subset.push_back(nums[i]);
        }
        result.push_back(subset);
    }
    return result;  // 2^n subsets
}

int main() {
    vector<int> nums1 = {4, 1, 2, 1, 2};
    cout << singleNumber(nums1) << endl;   // 4

    cout << countBits(13) << endl;         // 3  (1101)
    cout << isPowerOfTwo(16) << endl;      // 1

    vector<int> nums2 = {3, 0, 1};
    cout << missingNumber(nums2) << endl;  // 2

    vector<int> nums3 = {1, 2, 3};
    auto ss = subsets(nums3);
    cout << ss.size() << " subsets" << endl;  // 8

    return 0;
}`,
                explanation: 'Five essential bit tricks: single number (XOR), count set bits (clear lowest bit loop), power of two (n&(n-1)==0), missing number (XOR), and subset generation (bitmask). These cover nearly all bit manipulation interview questions.'
              }
            ],
            keyPoints: [
              'XOR is your best friend: self-inverse, commutative, associative',
              'n & (n-1) clears lowest set bit — use for counting set bits and power-of-2 check',
              'Bitmask DP: represent subsets as integers, iterate all 2^n possibilities',
              '__builtin_popcount(n) counts set bits in O(1) on GCC',
              'Always check for n=0 edge case in bit problems',
            ]
          }
        ],
        quizzes: [],
        problems: []
      }
    ]
  }
];

export function getLevel(levelId: number): Level | undefined {
  return curriculum.find(l => l.id === levelId);
}

export function getTopic(levelId: number, topicId: string): Topic | undefined {
  const level = getLevel(levelId);
  return level?.topics.find(t => t.id === topicId);
}

export function getLesson(levelId: number, topicId: string, lessonId: string): Lesson | undefined {
  const topic = getTopic(levelId, topicId);
  return topic?.lessons.find(l => l.id === lessonId);
}

export function getAllLevels(): Level[] {
  return curriculum;
}
