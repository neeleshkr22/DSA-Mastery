// ──────────────────────────────────────────────────────────────────────────────
// C++ STL Complete Guide
// Deep explanations of every important STL container and algorithm
// ──────────────────────────────────────────────────────────────────────────────

export interface STLSection {
  id: string;
  name: string;
  category: 'Container' | 'Algorithm' | 'Utility';
  emoji: string;
  description: string;
  whenToUse: string[];
  operations: STLOperation[];
  codeExample: string;
  codeExplanation: string;
  gotchas: string[];
  interviewTips: string[];
  timeComplexities: { operation: string; complexity: string; note?: string }[];
}

export interface STLOperation {
  name: string;
  syntax: string;
  description: string;
  complexity: string;
}

export const STL_SECTIONS: STLSection[] = [
  // ── VECTOR ──────────────────────────────────────────────────────────────────
  {
    id: 'vector',
    name: 'vector<T>',
    category: 'Container',
    emoji: '📦',
    description: 'Dynamic array backed by contiguous memory. Random access in O(1), auto-resizes. The most used STL container by far.',
    whenToUse: [
      'Default choice for any sequential collection',
      'When you need random access by index',
      'When collection size changes dynamically',
      'For matrix representation: vector<vector<int>>',
    ],
    operations: [
      { name: 'push_back', syntax: 'v.push_back(x)', description: 'Add element to end', complexity: 'O(1) amortized' },
      { name: 'pop_back', syntax: 'v.pop_back()', description: 'Remove last element', complexity: 'O(1)' },
      { name: 'access', syntax: 'v[i] or v.at(i)', description: 'Access by index (at() bounds-checks)', complexity: 'O(1)' },
      { name: 'front/back', syntax: 'v.front(), v.back()', description: 'First/last element', complexity: 'O(1)' },
      { name: 'size', syntax: 'v.size()', description: 'Number of elements (returns size_t!)', complexity: 'O(1)' },
      { name: 'empty', syntax: 'v.empty()', description: 'True if size == 0', complexity: 'O(1)' },
      { name: 'clear', syntax: 'v.clear()', description: 'Remove all elements', complexity: 'O(n)' },
      { name: 'reserve', syntax: 'v.reserve(n)', description: 'Pre-allocate capacity', complexity: 'O(n)' },
      { name: 'resize', syntax: 'v.resize(n)', description: 'Change size (fills with 0)', complexity: 'O(n)' },
      { name: 'insert', syntax: 'v.insert(it, x)', description: 'Insert at iterator position', complexity: 'O(n)' },
      { name: 'erase', syntax: 'v.erase(it)', description: 'Erase at iterator position', complexity: 'O(n)' },
    ],
    codeExample: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Creation
    vector<int> v1;                      // empty
    vector<int> v2(5, 0);               // {0,0,0,0,0}
    vector<int> v3 = {3,1,4,1,5,9};     // from list
    vector<int> v4(v3.begin(), v3.begin()+3); // {3,1,4}

    // Add and remove
    v1.push_back(10);
    v1.push_back(20);
    v1.pop_back();  // removes 20

    // Iteration
    for (int x : v3) cout << x << " ";  // range-based
    for (int i = 0; i < (int)v3.size(); i++) cout << v3[i];  // index

    // Algorithms
    sort(v3.begin(), v3.end());         // sort ascending
    reverse(v3.begin(), v3.end());      // reverse
    int s = accumulate(v3.begin(), v3.end(), 0);  // sum
    int mn = *min_element(v3.begin(), v3.end());  // minimum
    int mx = *max_element(v3.begin(), v3.end());  // maximum

    // 2D vector (matrix)
    int rows = 3, cols = 4;
    vector<vector<int>> mat(rows, vector<int>(cols, 0));
    mat[1][2] = 42;

    // GOTCHA: size() is unsigned! Always cast when subtracting
    if (!v3.empty()) {
        cout << v3[(int)v3.size() - 1];  // safe last element
    }

    return 0;
}`,
    codeExplanation: 'Vector is your everyday array with superpowers. The most critical gotcha: v.size() returns unsigned type, so v.size()-1 on empty vector = huge number, not -1. Always check v.empty() or cast: (int)v.size().',
    gotchas: [
      'v.size() returns size_t (unsigned) — v.size()-1 on empty vector = ~18 quintillion!',
      'v.insert() and v.erase() are O(n) — avoid in tight inner loops',
      'After push_back, iterators may be invalidated (reallocation!) — don\'t store them across modifications',
      'vector<bool> is a special case — it\'s bit-packed and doesn\'t behave like vector<int>',
    ],
    interviewTips: [
      'Always use vector<int> instead of raw arrays int[] in interviews — cleaner and safer',
      'v.reserve(n) before push_back in a loop of known size — prevents reallocation',
      'Erase-remove idiom: v.erase(remove(v.begin(),v.end(),x), v.end()) — removes all occurrences',
      'sort(v.rbegin(), v.rend()) for descending sort',
    ],
    timeComplexities: [
      { operation: 'push_back', complexity: 'O(1) amortized', note: 'O(n) on resize, but amortized O(1)' },
      { operation: 'pop_back', complexity: 'O(1)' },
      { operation: 'operator[]', complexity: 'O(1)' },
      { operation: 'insert at end', complexity: 'O(1) amortized' },
      { operation: 'insert at position', complexity: 'O(n)' },
      { operation: 'erase at position', complexity: 'O(n)' },
      { operation: 'sort', complexity: 'O(n log n)' },
    ],
  },

  // ── UNORDERED_MAP ────────────────────────────────────────────────────────────
  {
    id: 'unordered_map',
    name: 'unordered_map<K,V>',
    category: 'Container',
    emoji: '🗺️',
    description: 'Hash table implementation of key-value mapping. O(1) average for insert/find/delete. Most powerful tool for interview problems.',
    whenToUse: [
      'Frequency counting: count occurrences of each element',
      '"Have I seen this before?" — O(1) lookup vs O(n) scan',
      'Caching/memoization during DP',
      'Group items by a key (group anagrams, group by first letter, etc.)',
    ],
    operations: [
      { name: 'insert', syntax: 'map[key] = val', description: 'Insert or update (creates with default if new)', complexity: 'O(1) avg' },
      { name: 'access', syntax: 'map[key]', description: 'Access value — CREATES default if key not found!', complexity: 'O(1) avg' },
      { name: 'check', syntax: 'map.count(key)', description: 'Returns 0 or 1 — use to check existence', complexity: 'O(1) avg' },
      { name: 'find', syntax: 'map.find(key)', description: 'Returns iterator — end() if not found', complexity: 'O(1) avg' },
      { name: 'erase', syntax: 'map.erase(key)', description: 'Remove key-value pair', complexity: 'O(1) avg' },
      { name: 'size', syntax: 'map.size()', description: 'Number of key-value pairs', complexity: 'O(1)' },
      { name: 'iterate', syntax: 'for(auto& [k,v]: map)', description: 'Structured binding iteration (C++17)', complexity: 'O(n)' },
    ],
    codeExample: `#include <bits/stdc++.h>
using namespace std;

int main() {
    unordered_map<string, int> scores;

    // Insert
    scores["Alice"] = 95;
    scores["Bob"]   = 87;
    scores["Charlie"] = 92;

    // Access (DANGER: creates 0 if not exists)
    cout << scores["Alice"] << endl;  // 95

    // SAFE check before access
    if (scores.count("Dave")) {
        cout << scores["Dave"] << endl;
    } else {
        cout << "Dave not found" << endl;
    }

    // Frequency counting (most common interview use)
    string text = "hello world";
    unordered_map<char, int> freq;
    for (char c : text) freq[c]++;  // auto-creates with 0 then increments

    // Iterate over key-value pairs
    for (auto& [key, val] : freq) {
        cout << key << ": " << val << endl;
    }

    // Group anagrams pattern
    vector<string> words = {"eat","tea","tan","ate","nat","bat"};
    unordered_map<string, vector<string>> groups;
    for (string& w : words) {
        string key = w;
        sort(key.begin(), key.end());  // canonical form
        groups[key].push_back(w);
    }

    // Erase
    scores.erase("Bob");

    // Two Sum pattern
    unordered_map<int, int> seen;
    vector<int> nums = {2,7,11,15};
    int target = 9;
    for (int i = 0; i < (int)nums.size(); i++) {
        if (seen.count(target - nums[i])) {
            cout << seen[target-nums[i]] << " " << i << endl;
        }
        seen[nums[i]] = i;
    }

    return 0;
}`,
    codeExplanation: 'unordered_map is the workhorse of interview problems. The key insight: instead of searching O(n), use a hash map for O(1) lookup. The gotcha: map[key] creates an entry with default value if key doesn\'t exist — use .count() to check first.',
    gotchas: [
      'map[key] CREATES a default entry if key doesn\'t exist! Use map.count(key) to check first.',
      'Worst case O(n) due to hash collisions — adversarial inputs can break performance.',
      'unordered_map does NOT maintain insertion order. Use map<K,V> if you need sorted keys.',
      'Custom hash needed for pair<int,int> or other complex keys.',
    ],
    interviewTips: [
      'freq[c]++ is idiomatic for counting — auto-initializes to 0',
      'if (map.count(key)) is cleaner than if (map.find(key) != map.end())',
      'Structured binding: for(auto& [k,v] : m) — much cleaner than .first/.second',
      'For guaranteed O(log n) instead of O(1) avg: use ordered map<K,V>',
    ],
    timeComplexities: [
      { operation: 'insert', complexity: 'O(1) avg, O(n) worst' },
      { operation: 'find/count', complexity: 'O(1) avg, O(n) worst' },
      { operation: 'erase', complexity: 'O(1) avg, O(n) worst' },
      { operation: 'iterate', complexity: 'O(n)' },
    ],
  },

  // ── SET ──────────────────────────────────────────────────────────────────────
  {
    id: 'set',
    name: 'set<T> / unordered_set<T>',
    category: 'Container',
    emoji: '🔵',
    description: 'Ordered (set) or unordered (unordered_set) collection of UNIQUE values. Perfect for deduplication and existence checks.',
    whenToUse: [
      'Deduplication: remove duplicate values',
      '"Is X in the collection?" with fast lookup',
      'Maintaining sorted unique elements',
      'Tracking visited nodes in graph traversal',
    ],
    operations: [
      { name: 'insert', syntax: 's.insert(x)', description: 'Add element (no duplicates)', complexity: 'O(log n) for set, O(1) for unordered' },
      { name: 'count', syntax: 's.count(x)', description: 'Returns 0 or 1 — existence check', complexity: 'O(log n) for set, O(1) for unordered' },
      { name: 'find', syntax: 's.find(x)', description: 'Iterator to element, or end()', complexity: 'O(log n) for set, O(1) for unordered' },
      { name: 'erase', syntax: 's.erase(x)', description: 'Remove element', complexity: 'O(log n) for set, O(1) for unordered' },
      { name: 'begin/end', syntax: '*s.begin(), *s.rbegin()', description: 'Smallest/largest element (set only)', complexity: 'O(1)' },
      { name: 'lower_bound', syntax: 's.lower_bound(x)', description: 'Iterator to first element >= x (set only)', complexity: 'O(log n)' },
    ],
    codeExample: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // unordered_set: fast, no order
    unordered_set<int> seen;
    vector<int> nums = {1,2,3,2,1,4,5,4};

    // Deduplication
    for (int x : nums) seen.insert(x);
    cout << "Unique: " << seen.size() << endl;  // 5

    // Fast existence check O(1)
    if (seen.count(3)) cout << "3 is present" << endl;

    // Create from vector (dedup)
    unordered_set<int> s(nums.begin(), nums.end());

    // ordered set: sorted unique elements
    set<int> orderedSet = {5, 3, 1, 4, 1, 5};  // {1,3,4,5}

    // Min and max in O(1)
    cout << *orderedSet.begin()  << endl;  // 1 (smallest)
    cout << *orderedSet.rbegin() << endl;  // 5 (largest)

    // Lower/upper bound on set
    auto it = orderedSet.lower_bound(3);  // first >= 3
    cout << *it << endl;  // 3

    auto it2 = orderedSet.upper_bound(3);  // first > 3
    cout << *it2 << endl;  // 4

    // Find kth smallest: iterator arithmetic
    // (set doesn't support random access, must use std::advance)
    auto it3 = orderedSet.begin();
    advance(it3, 2);  // 3rd element (0-indexed)
    cout << *it3 << endl;  // 4

    // Erase range
    orderedSet.erase(orderedSet.begin(), it);  // removes elements < 3

    // Track visited in graph
    unordered_set<int> visited;
    // DFS or BFS: visited.insert(node); if (visited.count(node)) continue;

    return 0;
}`,
    codeExplanation: 'Use unordered_set for O(1) existence checks. Use ordered set when you need to iterate in sorted order or need lower_bound/upper_bound (like sorted unique window). The set equivalent of lower_bound/upper_bound is a member function (not std::lower_bound) — this is a common mistake.',
    gotchas: [
      'set.lower_bound(x) is a MEMBER FUNCTION — O(log n). std::lower_bound on set is O(n) because it uses linear scan!',
      'unordered_set has no ordering — don\'t iterate expecting sorted order',
      'Erasing while iterating: use it = s.erase(it) pattern',
      'multiset allows duplicates — set does not',
    ],
    interviewTips: [
      'Use set<int> when you need sorted order + O(log n) operations (like "find next greater")',
      'Use unordered_set when you only need O(1) insert/check (like "visited" in BFS)',
      'Convert vector to set for deduplication: set<int> s(v.begin(), v.end())',
      'Check if all elements unique: set<T>(v.begin(),v.end()).size() == v.size()',
    ],
    timeComplexities: [
      { operation: 'insert (set)', complexity: 'O(log n)' },
      { operation: 'find (set)', complexity: 'O(log n)' },
      { operation: 'insert (unordered_set)', complexity: 'O(1) avg' },
      { operation: 'find (unordered_set)', complexity: 'O(1) avg' },
      { operation: 'lower_bound (set member)', complexity: 'O(log n)' },
    ],
  },

  // ── PRIORITY QUEUE ──────────────────────────────────────────────────────────
  {
    id: 'priority_queue',
    name: 'priority_queue<T>',
    category: 'Container',
    emoji: '🔺',
    description: 'Heap-based container. Max-heap by default (largest element on top). Use greater<T> for min-heap. Essential for "K smallest/largest" problems and Dijkstra.',
    whenToUse: [
      'Find K largest/smallest elements efficiently',
      'Dijkstra\'s shortest path algorithm',
      'Merge K sorted lists',
      'Median of a stream (two heaps)',
      'Job scheduling by priority',
    ],
    operations: [
      { name: 'push', syntax: 'pq.push(x)', description: 'Insert element', complexity: 'O(log n)' },
      { name: 'pop', syntax: 'pq.pop()', description: 'Remove top element (does NOT return!)', complexity: 'O(log n)' },
      { name: 'top', syntax: 'pq.top()', description: 'Peek at top element', complexity: 'O(1)' },
      { name: 'empty', syntax: 'pq.empty()', description: 'Check if empty', complexity: 'O(1)' },
      { name: 'size', syntax: 'pq.size()', description: 'Number of elements', complexity: 'O(1)' },
    ],
    codeExample: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // MAX-HEAP (default) — largest element on top
    priority_queue<int> maxHeap;
    maxHeap.push(3); maxHeap.push(1); maxHeap.push(4); maxHeap.push(1);

    while (!maxHeap.empty()) {
        cout << maxHeap.top() << " ";  // 4 3 1 1
        maxHeap.pop();
    }
    cout << endl;

    // MIN-HEAP — smallest element on top
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int x : {3,1,4,1,5,9}) minHeap.push(x);
    cout << minHeap.top() << endl;  // 1

    // K LARGEST ELEMENTS — use min-heap of size k
    // Key insight: keep k largest, discard smaller ones
    vector<int> nums = {3,2,1,5,6,4};
    int k = 2;
    priority_queue<int, vector<int>, greater<int>> kLargest;
    for (int x : nums) {
        kLargest.push(x);
        if ((int)kLargest.size() > k) kLargest.pop();  // remove smallest
    }
    // kLargest now has the 2 largest: {5, 6}
    cout << "kth largest: " << kLargest.top() << endl;  // 5

    // PAIRS in priority queue (for Dijkstra)
    // priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>>
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    pq.push({5, 0});   // {distance, node}
    pq.push({2, 1});
    pq.push({8, 2});
    auto [dist, node] = pq.top();  // {2, 1} — nearest node
    cout << "Nearest: node " << node << " dist " << dist << endl;

    // CUSTOM COMPARATOR (via lambda — requires wrapper)
    // For complex custom ordering, use struct with operator()
    struct Compare {
        bool operator()(pair<int,string>& a, pair<int,string>& b) {
            return a.first > b.first;  // min-heap by first element
        }
    };
    priority_queue<pair<int,string>, vector<pair<int,string>>, Compare> custom;
    custom.push({3, "C"}); custom.push({1, "A"}); custom.push({2, "B"});
    cout << custom.top().second << endl;  // "A" (lowest priority number first)

    return 0;
}`,
    codeExplanation: 'priority_queue is a heap — the top is always the max (or min for min-heap). Critical: pop() does NOT return the value — always call top() first, then pop(). For K largest: counterintuitively, use a MIN-heap of size k. When a new element > heap top, pop the minimum and insert the new element.',
    gotchas: [
      'pq.pop() does NOT return the value! Call pq.top() first.',
      'Default is MAX-heap. For min-heap: priority_queue<int, vector<int>, greater<int>>',
      'No way to update/decrease a key in STL priority_queue — this is a limitation (Dijkstra workaround: push again and skip stale entries)',
      'priority_queue does NOT support iteration without destroying the heap',
    ],
    interviewTips: [
      'K largest elements → min-heap of size k. K smallest → max-heap of size k.',
      'Dijkstra: priority_queue<pair<dist,node>> with min-heap (greater<>)',
      'Merge K sorted arrays: push first element of each array with array index. Pop min, push next.',
      '"Find median of stream" → two heaps: max-heap for lower half, min-heap for upper half',
    ],
    timeComplexities: [
      { operation: 'push', complexity: 'O(log n)' },
      { operation: 'pop', complexity: 'O(log n)' },
      { operation: 'top', complexity: 'O(1)' },
      { operation: 'build from array', complexity: 'O(n)' },
    ],
  },

  // ── MAP (ordered) ────────────────────────────────────────────────────────────
  {
    id: 'map',
    name: 'map<K,V>',
    category: 'Container',
    emoji: '🗝️',
    description: 'Balanced BST (Red-Black Tree) implementation of key-value mapping. Keys are always sorted. O(log n) operations. Use when sorted order matters.',
    whenToUse: [
      'Need key-value storage WITH sorted key iteration',
      'Need lower_bound/upper_bound on keys (find nearest key)',
      'Guaranteed O(log n) (not O(1) average like unordered_map)',
      'Key type doesn\'t support hashing (use map)',
    ],
    operations: [
      { name: 'insert', syntax: 'map[key] = val', description: 'Insert or update', complexity: 'O(log n)' },
      { name: 'find', syntax: 'map.find(key)', description: 'Returns iterator', complexity: 'O(log n)' },
      { name: 'lower_bound', syntax: 'map.lower_bound(key)', description: 'First key >= given key', complexity: 'O(log n)' },
      { name: 'upper_bound', syntax: 'map.upper_bound(key)', description: 'First key > given key', complexity: 'O(log n)' },
      { name: 'begin', syntax: '*map.begin()', description: 'Smallest key entry', complexity: 'O(1)' },
      { name: 'rbegin', syntax: '*map.rbegin()', description: 'Largest key entry', complexity: 'O(1)' },
    ],
    codeExample: `#include <bits/stdc++.h>
using namespace std;

int main() {
    map<int, string> m;
    m[1] = "one"; m[3] = "three"; m[2] = "two"; m[5] = "five";

    // Iterates in SORTED key order
    for (auto& [k, v] : m) cout << k << ":" << v << " ";
    // 1:one 2:two 3:three 5:five
    cout << endl;

    // lower_bound and upper_bound — MEMBER FUNCTIONS, O(log n)
    auto it = m.lower_bound(3);  // first key >= 3
    cout << it->first << ":" << it->second << endl;  // 3:three

    auto it2 = m.upper_bound(3);  // first key > 3
    cout << it2->first << ":" << it2->second << endl;  // 5:five

    // Min and Max key
    cout << m.begin()->first   << endl;  // 1 (smallest)
    cout << m.rbegin()->first  << endl;  // 5 (largest)

    // "Find next/previous key" pattern
    auto pos = m.find(3);
    auto nextKey = next(pos);
    auto prevKey = prev(pos);
    cout << nextKey->first << " " << prevKey->first << endl;  // 5 2

    // Sliding window maximum using ordered map
    // Each key = value, value = count (for duplicates)
    map<int, int> window;
    vector<int> nums = {1,3,1,2,0,5};
    int k = 3;
    for (int i = 0; i < k; i++) window[nums[i]]++;
    cout << window.rbegin()->first << " ";  // max of first window: 3

    for (int i = k; i < (int)nums.size(); i++) {
        window[nums[i]]++;
        window[nums[i-k]]--;
        if (window[nums[i-k]] == 0) window.erase(nums[i-k]);
        cout << window.rbegin()->first << " ";
    }
    // Output: 3 3 2 5

    return 0;
}`,
    codeExplanation: 'map keeps keys sorted — iterating gives them in order. The lower_bound/upper_bound member functions let you find the nearest key in O(log n). Use map when you need sorted iteration or nearest-key queries. For pure O(1) access without ordering, prefer unordered_map.',
    gotchas: [
      'map[key] creates default value if key doesn\'t exist! Use map.count(key) or map.find(key) first.',
      'map is O(log n) for all operations — much slower than unordered_map O(1) for large datasets',
      'std::lower_bound(m.begin(), m.end(), key) on map is O(n)! Use m.lower_bound(key) which is O(log n).',
    ],
    interviewTips: [
      'Use map when problem says "next greater/smaller key" or "sorted iteration"',
      'Sliding window maximum: use ordered map tracking element counts',
      'map.rbegin()->first gives maximum key in O(1)',
      'Erase correctly: if (map[key]-- == 1) map.erase(key) — for frequency maps',
    ],
    timeComplexities: [
      { operation: 'insert', complexity: 'O(log n)' },
      { operation: 'find', complexity: 'O(log n)' },
      { operation: 'lower_bound (member)', complexity: 'O(log n)' },
      { operation: 'iterate', complexity: 'O(n)' },
    ],
  },

  // ── SORT + ALGORITHMS ────────────────────────────────────────────────────────
  {
    id: 'sort-algorithms',
    name: 'sort() & Algorithm Functions',
    category: 'Algorithm',
    emoji: '⚡',
    description: 'The <algorithm> header contains powerful functions: sort, find, count, lower_bound, upper_bound, next_permutation, and more.',
    whenToUse: [
      'Sort any container (sort)',
      'Binary search on sorted array (lower_bound, upper_bound)',
      'Generate permutations (next_permutation)',
      'Numeric operations: min, max, accumulate, iota',
    ],
    operations: [
      { name: 'sort', syntax: 'sort(begin, end, comp?)', description: 'Sort range, optional comparator', complexity: 'O(n log n)' },
      { name: 'stable_sort', syntax: 'stable_sort(begin, end)', description: 'Sort preserving equal element order', complexity: 'O(n log² n)' },
      { name: 'lower_bound', syntax: 'lower_bound(begin, end, val)', description: 'First element >= val (sorted!)', complexity: 'O(log n)' },
      { name: 'upper_bound', syntax: 'upper_bound(begin, end, val)', description: 'First element > val (sorted!)', complexity: 'O(log n)' },
      { name: 'binary_search', syntax: 'binary_search(begin, end, val)', description: 'Returns bool if val exists', complexity: 'O(log n)' },
      { name: 'reverse', syntax: 'reverse(begin, end)', description: 'Reverse range in-place', complexity: 'O(n)' },
      { name: 'unique', syntax: 'unique(begin, end)', description: 'Remove consecutive duplicates (sort first!)', complexity: 'O(n)' },
      { name: 'accumulate', syntax: 'accumulate(begin, end, init)', description: 'Sum of range', complexity: 'O(n)' },
      { name: 'iota', syntax: 'iota(begin, end, start)', description: 'Fill with consecutive values', complexity: 'O(n)' },
      { name: 'next_permutation', syntax: 'next_permutation(begin, end)', description: 'Advance to next permutation', complexity: 'O(n)' },
      { name: 'max_element', syntax: '*max_element(begin, end)', description: 'Iterator to maximum', complexity: 'O(n)' },
      { name: 'count', syntax: 'count(begin, end, val)', description: 'Count occurrences of val', complexity: 'O(n)' },
    ],
    codeExample: `#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> v = {5,3,8,1,9,2,7};

    // Sort ascending
    sort(v.begin(), v.end());
    // v = {1,2,3,5,7,8,9}

    // Sort descending
    sort(v.rbegin(), v.rend());
    // v = {9,8,7,5,3,2,1}

    // Custom sort: by absolute value
    vector<int> w = {-5, 3, -1, 8, -2};
    sort(w.begin(), w.end(), [](int a, int b) {
        return abs(a) < abs(b);
    });
    // w = {-1, -2, 3, -5, 8}

    // Sort pairs: by second, then first
    vector<pair<int,int>> pairs = {{1,3},{2,1},{3,2},{1,1}};
    sort(pairs.begin(), pairs.end(), [](auto& a, auto& b) {
        return a.second != b.second ? a.second < b.second : a.first < b.first;
    });

    // Binary search on sorted array
    sort(v.begin(), v.end());
    auto lb = lower_bound(v.begin(), v.end(), 5);  // first >= 5
    auto ub = upper_bound(v.begin(), v.end(), 5);  // first > 5
    cout << "Index of 5: " << (lb - v.begin()) << endl;
    cout << "Count of 5s: " << (ub - lb) << endl;

    // Unique: remove consecutive duplicates (must sort first!)
    vector<int> dup = {3,1,2,1,3,2,3};
    sort(dup.begin(), dup.end());  // {1,1,2,2,3,3,3}
    dup.erase(unique(dup.begin(), dup.end()), dup.end());
    // dup = {1,2,3}

    // iota: fill with sequence
    vector<int> idx(5);
    iota(idx.begin(), idx.end(), 0);  // idx = {0,1,2,3,4}

    // Sort by index (to get sorted indices)
    vector<int> vals = {50,20,80,10,60};
    sort(idx.begin(), idx.end(), [&](int a, int b) {
        return vals[a] < vals[b];
    });
    // idx = {3,1,0,4,2}  — indices in sorted value order

    // Permutations
    vector<int> perm = {1,2,3};
    do {
        for (int x : perm) cout << x << " ";
        cout << endl;
    } while (next_permutation(perm.begin(), perm.end()));

    return 0;
}`,
    codeExplanation: 'std::sort is your primary workhorse. Lambda comparators are essential for custom sorting. The unique trick (sort then unique then erase) removes duplicates efficiently. The iota + custom sort pattern gives you sorted indices — crucial for problems where you need to sort while preserving original positions.',
    gotchas: [
      'lower_bound/upper_bound require SORTED input — undefined behavior on unsorted!',
      'unique() only removes CONSECUTIVE duplicates — must sort first',
      'std::lower_bound on a set/map is O(n)! Use the member function s.lower_bound() which is O(log n)',
      'next_permutation must start from SORTED array to generate ALL permutations',
    ],
    interviewTips: [
      'Lambda comparator: [](auto& a, auto& b){ return a.val < b.val; }',
      'Count occurrences in sorted array: upper_bound - lower_bound in O(log n)',
      'Sorted indices: iota then sort by value — preserves original indices',
      'rotate(v.begin(), v.begin()+k, v.end()) rotates array by k positions',
    ],
    timeComplexities: [
      { operation: 'sort', complexity: 'O(n log n)' },
      { operation: 'lower_bound/upper_bound (on sorted array)', complexity: 'O(log n)' },
      { operation: 'unique', complexity: 'O(n)' },
      { operation: 'next_permutation', complexity: 'O(n)' },
      { operation: 'accumulate', complexity: 'O(n)' },
    ],
  },

  // ── STACK ────────────────────────────────────────────────────────────────────
  {
    id: 'stack',
    name: 'stack<T> & deque<T>',
    category: 'Container',
    emoji: '📚',
    description: 'stack = LIFO container (push/pop from top). deque = double-ended queue (push/pop from both ends). deque is used for sliding window maximum.',
    whenToUse: [
      'stack: valid brackets, function call simulation, DFS iteratively, monotonic stack patterns',
      'deque: sliding window maximum/minimum, BFS (though queue is simpler)',
    ],
    operations: [
      { name: 'stack push', syntax: 'st.push(x)', description: 'Add to top', complexity: 'O(1)' },
      { name: 'stack pop', syntax: 'st.pop()', description: 'Remove from top (no return!)', complexity: 'O(1)' },
      { name: 'stack top', syntax: 'st.top()', description: 'Peek at top', complexity: 'O(1)' },
      { name: 'deque push_front', syntax: 'dq.push_front(x)', description: 'Add to front', complexity: 'O(1)' },
      { name: 'deque push_back', syntax: 'dq.push_back(x)', description: 'Add to back', complexity: 'O(1)' },
      { name: 'deque pop_front', syntax: 'dq.pop_front()', description: 'Remove from front', complexity: 'O(1)' },
      { name: 'deque pop_back', syntax: 'dq.pop_back()', description: 'Remove from back', complexity: 'O(1)' },
      { name: 'deque front/back', syntax: 'dq.front(), dq.back()', description: 'Peek front/back', complexity: 'O(1)' },
    ],
    codeExample: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // ── STACK ──────────────────────────────────────────────
    stack<int> st;
    st.push(1); st.push(2); st.push(3);
    cout << st.top() << endl;  // 3
    st.pop();
    cout << st.top() << endl;  // 2

    // Valid brackets using stack
    auto isValid = [](string s) {
        stack<char> st;
        for (char c : s) {
            if (c=='(' || c=='[' || c=='{') st.push(c);
            else {
                if (st.empty()) return false;
                char top = st.top(); st.pop();
                if ((c==')' && top!='(') ||
                    (c==']' && top!='[') ||
                    (c=='}' && top!='{')) return false;
            }
        }
        return st.empty();
    };

    // ── DEQUE ──────────────────────────────────────────────
    deque<int> dq;
    dq.push_back(1);
    dq.push_front(0);   // {0, 1}
    dq.push_back(2);    // {0, 1, 2}
    dq.pop_front();     // {1, 2}
    cout << dq.front() << " " << dq.back() << endl;  // 1 2

    // Random access (unlike queue!)
    cout << dq[0] << " " << dq[1] << endl;

    // MONOTONIC DEQUE: Sliding Window Maximum
    vector<int> nums = {1,3,-1,-3,5,3,6,7};
    int k = 3;
    deque<int> mono;  // stores indices, maintains decreasing values
    vector<int> result;

    for (int i = 0; i < (int)nums.size(); i++) {
        // Remove indices outside window
        while (!mono.empty() && mono.front() <= i - k)
            mono.pop_front();

        // Maintain decreasing order: remove elements smaller than current
        while (!mono.empty() && nums[mono.back()] <= nums[i])
            mono.pop_back();

        mono.push_back(i);

        if (i >= k - 1)
            result.push_back(nums[mono.front()]);  // front = max of window
    }

    for (int x : result) cout << x << " ";  // 3 3 5 5 6 7

    return 0;
}`,
    codeExplanation: 'Stack is for LIFO scenarios — valid brackets, DFS, expression evaluation. Deque shines in sliding window maximum: maintain a monotone decreasing deque of indices. Front = window max. This gives O(n) vs O(n log n) for the heap approach.',
    gotchas: [
      'stack.pop() does NOT return the element! Always call top() first.',
      'Both stack and deque do NOT support iteration — if you need to iterate, use vector or deque directly',
      'Deque has O(1) random access but is slower than vector due to memory fragmentation',
    ],
    interviewTips: [
      'Sliding window max/min: monotonic deque is O(n) — much better than priority_queue O(n log n)',
      'Use stack to convert recursive DFS to iterative',
      'Monotonic stack pattern: for NGE, span, histogram — one of the most powerful patterns',
    ],
    timeComplexities: [
      { operation: 'push/pop (both)', complexity: 'O(1)' },
      { operation: 'top/front/back', complexity: 'O(1)' },
      { operation: 'deque random access', complexity: 'O(1)' },
    ],
  },
];

export function getSTLSection(id: string): STLSection | undefined {
  return STL_SECTIONS.find(s => s.id === id);
}
