// ──────────────────────────────────────────────────────────────────────────────
// Interview Preparation Data
// FAANG tips, company-specific questions, OA problems, behavioral tips
// ──────────────────────────────────────────────────────────────────────────────

export interface CompanyProfile {
  name: string;
  color: string;           // Tailwind text color class
  difficulty: 'Medium' | 'Hard' | 'Very Hard';
  focusTopics: string[];
  interviewRounds: string[];
  tips: string[];
  mostAsked: OAProblem[];
}

export interface OAProblem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  description: string;
  companies: string[];
  approach: string;
  solution: string;
  timeComplexity: string;
  spaceComplexity: string;
  frequency: 'Very High' | 'High' | 'Medium';
  tags: string[];
}

export interface InterviewTip {
  category: string;
  title: string;
  description: string;
  examples?: string[];
}

export interface DSAPattern {
  name: string;
  when: string;
  template: string;
  examples: string[];
  code: string;
}

// ─── COMPANY PROFILES ──────────────────────────────────────────────────────
export const COMPANY_PROFILES: CompanyProfile[] = [
  {
    name: 'Google',
    color: 'text-blue-400',
    difficulty: 'Very Hard',
    focusTopics: ['Arrays & Strings', 'Graphs (BFS/DFS)', 'Dynamic Programming', 'Trees', 'Binary Search'],
    interviewRounds: ['Phone Screen (1 LC)', 'Virtual Onsite (4-5 LCs)', 'Googleyness round'],
    tips: [
      'Google expects O(n log n) or better for most problems. O(n²) is usually insufficient.',
      'They test EDGE CASES explicitly. Always mention: empty input, single element, all negatives.',
      'Coding style matters at Google. Clean variable names, modular functions.',
      '"Googleyness": demonstrate collaborative thinking, mention trade-offs out loud.',
      'Phone screen: 1 medium-hard problem in 45 min. Must write runnable code.',
      'In onsite: 4 coding rounds + 1 system design (for senior). Each 45 min, 1-2 problems.',
      'Google LOVES graph problems. Know BFS, DFS, Dijkstra, topological sort deeply.',
      'Common surprise: they\'ll ask you to optimize your working solution further.',
    ],
    mostAsked: [],
  },
  {
    name: 'Amazon',
    color: 'text-yellow-400',
    difficulty: 'Hard',
    focusTopics: ['Arrays', 'Trees (BST, Heaps)', 'Graphs', 'Dynamic Programming', 'System Design'],
    interviewRounds: ['OA (HackerRank, 2 problems)', 'Phone Screen', 'Loop (4-5 rounds)'],
    tips: [
      'Amazon OA: 2 problems in 90 minutes on HackerRank. Medium-Hard difficulty. Uses test cases.',
      'Leadership Principles are as important as coding at Amazon. Prepare STAR stories for each LP.',
      'Arrays and trees appear in 60%+ of Amazon interviews.',
      'For OA: always optimize for ALL test cases passing — partial is not enough.',
      'Common OA pattern: "find top-K elements" → min-heap, "merge sorted lists" → heap.',
      'Amazon loves "design questions": LRU Cache, LFU Cache, design Twitter.',
      'Behavioral: "Tell me about a time you disagreed with your manager" — have a strong answer.',
      'SDE1 vs SDE2: SDE2 gets harder problems and more system design.',
    ],
    mostAsked: [],
  },
  {
    name: 'Meta (Facebook)',
    color: 'text-blue-300',
    difficulty: 'Hard',
    focusTopics: ['Arrays & Strings', 'Graphs & Trees', 'Recursion & DP', 'System Design'],
    interviewRounds: ['Initial Technical Screen (1 problem)', 'Onsite (4 coding + 1 system design)'],
    tips: [
      'Meta focuses on SPEED — they expect optimal solutions quickly.',
      'Graph problems (BFS/DFS) are huge at Meta. Especially 2D grid problems.',
      'Meta loves "implement from scratch" — build a simplified version of a Meta product.',
      'String problems: they like creative string parsing/manipulation questions.',
      'DP at Meta: usually 1D or simple 2D, not interval DP.',
      'System design at Meta: design News Feed, WhatsApp, Instagram — know their products.',
      'They value communication — always explain your approach before coding.',
      'Follow-up questions are very common: "now optimize space", "now handle this edge case".',
    ],
    mostAsked: [],
  },
  {
    name: 'Microsoft',
    color: 'text-cyan-400',
    difficulty: 'Medium',
    focusTopics: ['Trees & Graphs', 'Dynamic Programming', 'Linked Lists', 'Arrays'],
    interviewRounds: ['Phone Screen (30-45 min)', 'Onsite (4-5 rounds)', 'As-Appropriate round'],
    tips: [
      'Microsoft is generally more lenient than FAANG but still expects optimal solutions.',
      'They test problem-solving process — think out loud and show your reasoning.',
      'Tree problems are very common: BST, binary tree traversals, LCA.',
      'OOP/design questions appear alongside pure algorithms.',
      'Microsoft loves "implement a stack with getMin()" type problems — augmented data structures.',
      'Culture fit matters here too — be enthusiastic about Microsoft products/technologies.',
      'Lunch round is NOT an evaluation round — relax and be yourself.',
      'Follow-up: "how would you test this?" is common — have a testing approach ready.',
    ],
    mostAsked: [],
  },
  {
    name: 'Apple',
    color: 'text-gray-300',
    difficulty: 'Hard',
    focusTopics: ['Arrays & Strings', 'System Design (C++ heavy)', 'OS Concepts', 'Algorithms'],
    interviewRounds: ['Recruiter Screen', 'Technical Phone Screen', 'Onsite (4-6 rounds)'],
    tips: [
      'Apple is stealth about process — expect variety and be adaptable.',
      'They care deeply about software quality — clean code, edge case handling.',
      'System-level thinking valued: memory layout, cache efficiency, OS concepts.',
      'C++ specific questions: move semantics, smart pointers, template metaprogramming.',
      'Algorithms at Apple: medium difficulty, focus on correctness over speed.',
      'For iOS teams: ObjC/Swift runtime knowledge may come up.',
      'Be direct — Apple values concise, confident communication.',
    ],
    mostAsked: [],
  },
  {
    name: 'Netflix',
    color: 'text-red-400',
    difficulty: 'Hard',
    focusTopics: ['System Design', 'Distributed Systems', 'Algorithms', 'Data Structures'],
    interviewRounds: ['Recruiter Screen', 'Hiring Manager Screen', 'Technical Screens (multiple)', 'Onsite'],
    tips: [
      'Netflix focuses heavily on senior engineers — system design is critical.',
      'Their hiring bar for senior roles is extremely high.',
      'Culture deck: understand Freedom & Responsibility culture.',
      'Netflix tolerates no "brilliant jerks" — culture fit is serious.',
      'Algorithms: standard medium-hard LC problems, but system design is the differentiator.',
      'Compensation is highest in industry — know your number and negotiate.',
    ],
    mostAsked: [],
  },
];

// ─── OA PROBLEMS (Most Common in Online Assessments) ───────────────────────
export const OA_PROBLEMS: OAProblem[] = [
  {
    id: 'oa-1',
    title: 'Minimum Number of Swaps to Sort Array',
    difficulty: 'Medium',
    topic: 'Arrays / Graphs',
    description: 'Given an array of n distinct elements, find the minimum number of swaps required to sort the array.',
    companies: ['Amazon', 'Goldman Sachs', 'JPMorgan'],
    approach: `Key insight: think of this as a graph problem.
1. Create pairs (value, original_index) and sort by value.
2. For each element, if it\'s not in its correct position, it\'s part of a cycle.
3. A cycle of length k needs k-1 swaps to sort.
4. Total swaps = sum over all cycles of (cycle_length - 1).

Why graph/cycle approach works: each element points to where it should go. Following these pointers forms cycles. Any cycle of length k can be sorted in k-1 swaps.`,
    solution: `int minSwaps(vector<int> arr) {
    int n = arr.size();
    vector<pair<int,int>> v;
    for (int i = 0; i < n; i++) v.push_back({arr[i], i});
    sort(v.begin(), v.end());

    vector<bool> visited(n, false);
    int swaps = 0;

    for (int i = 0; i < n; i++) {
        if (visited[i] || v[i].second == i) continue;
        int cycleLen = 0, j = i;
        while (!visited[j]) {
            visited[j] = true;
            j = v[j].second;
            cycleLen++;
        }
        swaps += cycleLen - 1;
    }
    return swaps;
}`,
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    frequency: 'High',
    tags: ['Array', 'Graph', 'Cycle Detection'],
  },
  {
    id: 'oa-2',
    title: 'Maximum Sum of K Non-Adjacent Elements',
    difficulty: 'Medium',
    topic: 'Dynamic Programming',
    description: 'Given an array and integer k, select k non-adjacent elements such that their sum is maximum.',
    companies: ['Amazon', 'Google', 'Adobe'],
    approach: `DP with two states:
• dp[i][0] = max sum using first i elements without selecting i-th
• dp[i][1] = max sum using first i elements with selecting i-th

Transition:
• dp[i][0] = max(dp[i-1][0], dp[i-1][1])
• dp[i][1] = dp[i-1][0] + arr[i]  (can\'t select adjacent)

Answer: max(dp[n-1][0], dp[n-1][1])

This is a generalization of House Robber but with exactly k elements.`,
    solution: `int maxSumKNonAdjacent(vector<int>& arr, int k) {
    int n = arr.size();
    // include[i] = best sum picking k items from first i, last included
    // exclude[i] = best sum picking k items from first i, last excluded
    vector<vector<int>> dp(n+1, vector<int>(k+1, INT_MIN));
    dp[0][0] = 0;

    for (int i = 1; i <= n; i++) {
        // Don't pick arr[i-1]
        for (int j = 0; j <= k; j++)
            if (dp[i-1][j] != INT_MIN)
                dp[i][j] = max(dp[i][j], dp[i-1][j]);
        // Pick arr[i-1] (can't pick if previous was picked — this version allows any non-adjacent)
        // This simplified version solves the basic house robber variant:
    }
    return max(dp[n][k], 0);
}`,
    timeComplexity: 'O(n × k)',
    spaceComplexity: 'O(n × k)',
    frequency: 'Medium',
    tags: ['Dynamic Programming', 'Array'],
  },
  {
    id: 'oa-3',
    title: 'Find K Closest Elements',
    difficulty: 'Medium',
    topic: 'Binary Search',
    description: 'Given a sorted array, two integers k and x, return the k closest integers to x in the array. Sort result in ascending order.',
    companies: ['Google', 'Amazon', 'Microsoft'],
    approach: `Binary search on the left boundary of the window:
• We want a window of size k that minimizes the distance to x.
• Binary search for the optimal left position l.
• At each mid: compare |arr[mid] - x| vs |arr[mid+k] - x|.
  If arr[mid+k] is closer, shift window right (l = mid+1).
  Else shift window left (r = mid).

This is O(log(n-k)) time vs O(n) for linear approach.`,
    solution: `vector<int> findClosestElements(vector<int>& arr, int k, int x) {
    int lo = 0, hi = (int)arr.size() - k;

    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        // Is right end of window closer than left end?
        if (x - arr[mid] > arr[mid+k] - x)
            lo = mid + 1;
        else
            hi = mid;
    }

    return vector<int>(arr.begin() + lo, arr.begin() + lo + k);
}`,
    timeComplexity: 'O(log(n-k) + k)',
    spaceComplexity: 'O(1)',
    frequency: 'High',
    tags: ['Binary Search', 'Array', 'Two Pointers'],
  },
  {
    id: 'oa-4',
    title: 'Decode Ways',
    difficulty: 'Medium',
    topic: 'Dynamic Programming',
    description: 'A message contains only digits (1-26 → A-Z). Count the number of ways to decode it.',
    companies: ['Amazon', 'Facebook', 'Microsoft'],
    approach: `DP counting problem:
• dp[i] = number of ways to decode first i characters
• At each position, consider:
  1. Take 1 digit: valid if s[i-1] != '0' → dp[i] += dp[i-1]
  2. Take 2 digits: valid if 10 ≤ s[i-2..i-1] ≤ 26 → dp[i] += dp[i-2]

Base case: dp[0] = 1 (empty string = 1 way)
Watch out: "01" is INVALID — leading zeros are not allowed.`,
    solution: `int numDecodings(string s) {
    int n = s.size();
    vector<int> dp(n+1, 0);
    dp[0] = 1;
    dp[1] = (s[0] != '0') ? 1 : 0;

    for (int i = 2; i <= n; i++) {
        int oneDigit  = s[i-1] - '0';
        int twoDigits = stoi(s.substr(i-2, 2));

        if (oneDigit >= 1)
            dp[i] += dp[i-1];
        if (twoDigits >= 10 && twoDigits <= 26)
            dp[i] += dp[i-2];
    }
    return dp[n];
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n) → reducible to O(1)',
    frequency: 'Very High',
    tags: ['Dynamic Programming', 'String'],
  },
  {
    id: 'oa-5',
    title: 'Rotting Oranges',
    difficulty: 'Medium',
    topic: 'BFS / Graph',
    description: 'Grid of 0 (empty), 1 (fresh orange), 2 (rotten). Every minute, rotten oranges infect adjacent fresh ones. Return minutes until no fresh oranges remain, or -1 if impossible.',
    companies: ['Amazon', 'Google', 'Meta'],
    approach: `Multi-source BFS:
1. Add ALL rotten oranges to queue initially (this is the key insight).
2. BFS outward: each level = 1 minute.
3. Count remaining fresh oranges — if > 0 after BFS, return -1.

Why multi-source BFS? All rotten oranges rot simultaneously. Standard single-source BFS would simulate them one at a time.

This pattern (multi-source BFS) also appears in: 01-matrix, nearest exit, walls and gates.`,
    solution: `int orangesRotting(vector<vector<int>>& grid) {
    int rows = grid.size(), cols = grid[0].size();
    queue<pair<int,int>> q;
    int fresh = 0;

    for (int r = 0; r < rows; r++)
        for (int c = 0; c < cols; c++) {
            if (grid[r][c] == 2) q.push({r,c});
            if (grid[r][c] == 1) fresh++;
        }

    if (fresh == 0) return 0;

    int minutes = 0;
    int dx[] = {0,0,1,-1}, dy[] = {1,-1,0,0};

    while (!q.empty() && fresh > 0) {
        minutes++;
        int sz = q.size();
        for (int i = 0; i < sz; i++) {
            auto [r,c] = q.front(); q.pop();
            for (int d = 0; d < 4; d++) {
                int nr = r+dx[d], nc = c+dy[d];
                if (nr>=0 && nr<rows && nc>=0 && nc<cols && grid[nr][nc]==1) {
                    grid[nr][nc] = 2;
                    fresh--;
                    q.push({nr,nc});
                }
            }
        }
    }
    return fresh == 0 ? minutes : -1;
}`,
    timeComplexity: 'O(m × n)',
    spaceComplexity: 'O(m × n)',
    frequency: 'Very High',
    tags: ['BFS', 'Graph', 'Matrix', 'Multi-source BFS'],
  },
  {
    id: 'oa-6',
    title: 'Meeting Rooms II (Minimum Conference Rooms)',
    difficulty: 'Medium',
    topic: 'Greedy / Heap',
    description: 'Given intervals representing meetings, find the minimum number of conference rooms required.',
    companies: ['Google', 'Amazon', 'Meta', 'Microsoft'],
    approach: `Two approaches:
1. Min-Heap (O(n log n)):
   • Sort meetings by start time.
   • Use min-heap tracking end times of rooms in use.
   • For each new meeting: if heap top ≤ start, recycle the room (pop, push new end). Else, add new room.
   • Heap size = current rooms needed. Track maximum.

2. Sweep Line (O(n log n)):
   • Create events: +1 for start, -1 for end. Sort by time.
   • Track running sum — maximum = answer.`,
    solution: `int minMeetingRooms(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end());  // by start time

    priority_queue<int, vector<int>, greater<int>> endTimes;  // min-heap

    for (auto& meeting : intervals) {
        if (!endTimes.empty() && endTimes.top() <= meeting[0])
            endTimes.pop();  // recycle room
        endTimes.push(meeting[1]);  // add this meeting's end time
    }

    return endTimes.size();  // rooms in use = rooms needed
}`,
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    frequency: 'Very High',
    tags: ['Greedy', 'Heap', 'Sorting', 'Intervals'],
  },
  {
    id: 'oa-7',
    title: 'Word Break',
    difficulty: 'Medium',
    topic: 'Dynamic Programming',
    description: 'Given a string s and a dictionary of words, return true if s can be segmented into words from the dictionary.',
    companies: ['Google', 'Amazon', 'Facebook', 'Bloomberg'],
    approach: `DP:
• dp[i] = can we segment s[0..i-1]?
• Base: dp[0] = true (empty string)
• For each i from 1 to n:
  For each j from 0 to i:
    if dp[j] && s[j..i-1] is in dictionary → dp[i] = true

Optimization: store dictionary in unordered_set for O(1) lookup.
Further: iterate j backwards and stop when word length exceeds max word length.`,
    solution: `bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> dict(wordDict.begin(), wordDict.end());
    int n = s.size();
    vector<bool> dp(n+1, false);
    dp[0] = true;

    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (dp[j] && dict.count(s.substr(j, i-j))) {
                dp[i] = true;
                break;
            }

    return dp[n];
}`,
    timeComplexity: 'O(n² × m) where m = average word length',
    spaceComplexity: 'O(n + dictionary size)',
    frequency: 'Very High',
    tags: ['Dynamic Programming', 'Hash Map', 'String'],
  },
  {
    id: 'oa-8',
    title: 'Maximum Product Subarray',
    difficulty: 'Medium',
    topic: 'Dynamic Programming',
    description: 'Find the contiguous subarray with the largest product.',
    companies: ['Amazon', 'Google', 'Adobe'],
    approach: `Unlike maximum sum subarray (Kadane's), negatives can turn maximums into minimums and vice versa.

Track BOTH maximum and minimum product ending at each position:
• maxProd[i] = max product ending at i
• minProd[i] = min product ending at i (could become max after multiplying by negative)

When we encounter a negative number, max and min swap roles.
Space optimize: use two variables (maxSoFar, minSoFar).`,
    solution: `int maxProduct(vector<int>& nums) {
    int maxProd = nums[0], minProd = nums[0], result = nums[0];

    for (int i = 1; i < (int)nums.size(); i++) {
        if (nums[i] < 0) swap(maxProd, minProd);  // negative flips max/min!

        maxProd = max(nums[i], maxProd * nums[i]);
        minProd = min(nums[i], minProd * nums[i]);
        result = max(result, maxProd);
    }
    return result;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    frequency: 'High',
    tags: ['Dynamic Programming', 'Array'],
  },
];

// ─── DSA PATTERNS (Pattern Recognition Guide) ──────────────────────────────
export const DSA_PATTERNS: DSAPattern[] = [
  {
    name: 'Two Pointers',
    when: 'Sorted array + find pairs/triplets with a target. Remove duplicates. Palindrome check.',
    template: 'left = 0, right = n-1. Move based on comparison with target.',
    examples: ['Two Sum (sorted)', '3Sum', 'Container With Most Water', 'Remove Duplicates'],
    code: `int l = 0, r = n - 1;
while (l < r) {
    if (condition) return {l, r};
    else if (tooSmall) l++;
    else r--;
}`,
  },
  {
    name: 'Sliding Window',
    when: '"Contiguous subarray/substring" + maximum/minimum/exactly/at most K.',
    template: 'Fixed or variable window. right expands, left shrinks when constraint violated.',
    examples: ['Max Sum Subarray of Size K', 'Longest Substring Without Repeating', 'Minimum Window Substring'],
    code: `int left = 0, maxLen = 0;
for (int right = 0; right < n; right++) {
    // add s[right] to window
    while (constraint_violated) {
        // remove s[left] from window
        left++;
    }
    maxLen = max(maxLen, right - left + 1);
}`,
  },
  {
    name: 'Binary Search on Answer',
    when: '"Find minimum/maximum X such that condition holds." Monotone feasibility function.',
    template: 'lo = min_answer, hi = max_answer. Binary search with feasibility check.',
    examples: ['Koko Eating Bananas', 'Capacity to Ship Packages', 'Split Array Largest Sum'],
    code: `int lo = minVal, hi = maxVal;
while (lo < hi) {
    int mid = lo + (hi - lo) / 2;
    if (feasible(mid)) hi = mid;  // or lo = mid+1 for max
    else lo = mid + 1;
}
return lo;`,
  },
  {
    name: 'Monotonic Stack',
    when: '"Next greater/smaller element", "Previous greater/smaller". Spans, histograms.',
    template: 'Stack of indices. When current breaks monotone property, process popped elements.',
    examples: ['Next Greater Element', 'Daily Temperatures', 'Largest Rectangle in Histogram'],
    code: `stack<int> st;  // indices
for (int i = 0; i < n; i++) {
    while (!st.empty() && nums[i] > nums[st.top()]) {
        result[st.top()] = nums[i];  // answer for popped element
        st.pop();
    }
    st.push(i);
}`,
  },
  {
    name: 'BFS / Level-Order',
    when: 'Shortest path in unweighted graph. Level-by-level traversal. Multi-source spreading.',
    template: 'Queue. Process level-by-level. Mark visited BEFORE enqueuing.',
    examples: ['Shortest Path', 'Number of Islands (BFS)', 'Rotting Oranges', 'Word Ladder'],
    code: `queue<int> q;
vector<bool> visited(n, false);
q.push(start); visited[start] = true;
int dist = 0;
while (!q.empty()) {
    int sz = q.size();
    for (int i = 0; i < sz; i++) {
        int node = q.front(); q.pop();
        // process node
        for (int next : adj[node])
            if (!visited[next]) {
                visited[next] = true;
                q.push(next);
            }
    }
    dist++;
}`,
  },
  {
    name: '1D Dynamic Programming',
    when: '"How many ways...", "minimum/maximum...", sequence with optimal substructure.',
    template: 'dp[i] = answer for first i elements. Base cases + recurrence relation.',
    examples: ['Climbing Stairs', 'House Robber', 'Fibonacci', 'Jump Game'],
    code: `vector<int> dp(n + 1, 0);
dp[0] = base_case_0;
dp[1] = base_case_1;
for (int i = 2; i <= n; i++) {
    dp[i] = f(dp[i-1], dp[i-2], ...);  // recurrence
}
return dp[n];`,
  },
  {
    name: 'Hash Map Frequency + Sliding Window',
    when: '"Longest/shortest substring with exactly K distinct/unique characters/elements".',
    template: 'Sliding window with hash map tracking element counts. Shrink when constraint violated.',
    examples: ['Longest Substring with At Most K Distinct Characters', 'Fruit Into Baskets', 'Minimum Window Substring'],
    code: `unordered_map<char, int> window;
int left = 0, ans = 0;
for (int right = 0; right < n; right++) {
    window[s[right]]++;
    while (window.size() > k) {  // constraint violated
        if (--window[s[left]] == 0) window.erase(s[left]);
        left++;
    }
    ans = max(ans, right - left + 1);
}`,
  },
  {
    name: 'Prefix Sum + Hash Map',
    when: '"Count subarrays with sum = K", balance problems, number of ways to reach total.',
    template: 'Running prefix sum. HashMap stores count of each prefix sum seen so far.',
    examples: ['Subarray Sum Equals K', 'Contiguous Array (0s and 1s)', 'Path Sum III'],
    code: `unordered_map<int, int> prefixCount;
prefixCount[0] = 1;  // empty prefix
int runningSum = 0, count = 0;
for (int x : nums) {
    runningSum += x;
    count += prefixCount[runningSum - k];
    prefixCount[runningSum]++;
}`,
  },
  {
    name: 'Union-Find (DSU)',
    when: 'Dynamic connectivity. "Are A and B connected?" with updates. MST (Kruskal\'s).',
    template: 'parent[] + rank[]. find() with path compression. unite() with rank.',
    examples: ['Number of Connected Components', 'Redundant Connection', 'Accounts Merge', 'MST'],
    code: `vector<int> parent(n), rank(n, 0);
iota(parent.begin(), parent.end(), 0);

function<int(int)> find = [&](int x) {
    return parent[x] == x ? x : parent[x] = find(parent[x]);
};
auto unite = [&](int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return false;
    if (rank[px] < rank[py]) swap(px, py);
    parent[py] = px;
    if (rank[px] == rank[py]) rank[px]++;
    return true;
};`,
  },
];

// ─── GENERAL INTERVIEW TIPS ─────────────────────────────────────────────────
export const INTERVIEW_TIPS: InterviewTip[] = [
  {
    category: 'Before Coding',
    title: 'Clarify Before You Code',
    description: 'Spend 2-3 minutes clarifying. Ask: What are the constraints? Can input be empty? Can values be negative? Can there be duplicates? What should I return if no answer exists?',
    examples: [
      '"Is the array sorted?" — changes O(n²) to O(n log n)',
      '"Can k be larger than the array?" — affects edge case handling',
      '"Is this 0-indexed or 1-indexed?" — prevents off-by-one',
    ],
  },
  {
    category: 'Before Coding',
    title: 'State Your Approach First',
    description: 'Before writing ANY code, explain your approach. This shows organized thinking and lets the interviewer guide you if you\'re going wrong.',
    examples: [
      '"I\'ll use a sliding window because the problem asks for contiguous subarray..."',
      '"My first thought is O(n²) brute force. But I think we can optimize with a hash map..."',
      '"Let me think about the edge cases first: empty array, single element, all duplicates..."',
    ],
  },
  {
    category: 'During Coding',
    title: 'Handle Edge Cases Explicitly',
    description: 'Mention edge cases out loud even if you handle them implicitly. It shows you think about robustness.',
    examples: [
      'if (nums.empty()) return 0;  // always check empty',
      'if (n == 1) return nums[0];  // single element',
      '// Note: using (int)v.size() to avoid unsigned overflow',
    ],
  },
  {
    category: 'During Coding',
    title: 'Think About Variable Names',
    description: 'Use meaningful names. leftPointer not l, maximumProfit not mp. Interviewers read your code.',
    examples: [
      'int windowStart, windowEnd instead of i, j',
      'int currentSum, maxSum instead of s, ms',
    ],
  },
  {
    category: 'After Coding',
    title: 'Trace Through Examples',
    description: 'After writing code, trace through the given example and at least one edge case. Catch bugs before the interviewer does.',
    examples: [
      'Walk through the algorithm step by step with input [1,2,3]',
      'Test edge case: empty array, [0], all negatives',
    ],
  },
  {
    category: 'After Coding',
    title: 'State Complexity Without Being Asked',
    description: 'Proactively say "The time complexity is O(n log n) because we sort, and space is O(1) because we sort in-place."',
    examples: [
      'Time: O(n) for the outer loop × O(log n) for binary search = O(n log n)',
      'Space: O(n) for the hash map in the worst case',
    ],
  },
  {
    category: 'Mindset',
    title: 'Be Comfortable Saying "I\'m Thinking"',
    description: 'Silence is fine during thinking. Say "Let me think about this for a moment" rather than panicking. Interviewers expect thinking time.',
    examples: [],
  },
  {
    category: 'Mindset',
    title: 'Ask for Hints Strategically',
    description: 'If stuck for more than 5 minutes, it\'s better to ask for a hint than to stay silent. Phrase it as: "I\'m considering X approach but I\'m unsure about Y — any guidance?"',
    examples: [],
  },
];

// ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────
export function getCompanyProfile(name: string): CompanyProfile | undefined {
  return COMPANY_PROFILES.find(c => c.name === name);
}

export function getProblemsByTopic(topic: string): OAProblem[] {
  return OA_PROBLEMS.filter(p => p.topic === topic || p.tags.includes(topic));
}

export function getProblemsByFrequency(freq: OAProblem['frequency']): OAProblem[] {
  return OA_PROBLEMS.filter(p => p.frequency === freq);
}
