<h2><a href="https://www.geeksforgeeks.org/problems/find-length-of-longest-subsequence4905/1?page=1&difficulty=Medium&status=unsolved,attempted&sortBy=accuracy">Find length of longest subsequence</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size:18px">Given two string&nbsp;<strong>X</strong>&nbsp;and&nbsp;<strong>Y </strong>of length <strong>N </strong>and<strong> M </strong>respectively. The task is to find the length of the longest subsequence of string X which is a substring in sequence Y.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 4, M = 8
X = "abcd"
Y = "bacdbdcd"<strong>
Output: </strong>3
<strong>Explanation: </strong>"acd" is the longest subsequence
&nbsp;            from string X present as a
&nbsp;            substring in string Y.</span></pre>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 1, M = 1
X = 'a'
Y = 'a'
<strong>Output: </strong>1
<strong>Explanation: </strong>'a' is the answer.</span></pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything.</span>&nbsp;<span style="font-size:18px">Your task is to complete the function&nbsp;<strong>maxSubsequenceSubstring()&nbsp;</strong>which takes 4 arguments(string X, string Y, N and M) and returns the answer.&nbsp;</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:&nbsp;</strong>O(N*M).<br>
<strong>Expected Auxiliary Space:&nbsp;</strong>O(N*M).</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1&lt;= N, M &lt;=10<sup>3</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Dynamic Programming</code>&nbsp;<code>Data Structures</code>&nbsp;<code>Algorithms</code>&nbsp;