<h2><a href="https://www.geeksforgeeks.org/problems/the-celebrity-problem/1?page=1&company=Google&difficulty=Basic,Easy,Medium,Hard&status=unsolved&sortBy=submissions">The Celebrity Problem</a></h2><h3>Difficulty Level : Difficulty: Medium</h3><hr><div class="problems_problem_content__Xm_eO"><p><span style="font-size: 14pt;">A celebrity is a person who is known to all but <strong>does not know</strong> anyone at a party. A party is being organized by some people.&nbsp; A square matrix <strong>mat </strong>(n*n)&nbsp;is used to represent people at the party such that if an element of row i and column j is set to 1 it means ith person knows jth person.&nbsp;You need to return the index of the celebrity in the party, if the celebrity does not exist, return&nbsp;<strong>-1</strong>.</span></p>
<p><span style="font-size: 14pt;"><strong>Note:</strong> Follow 0-based indexing.</span></p>
<p><span style="font-size: 14pt;"><strong>Examples:</strong></span></p>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>mat[][] = [[0 1 0], [0 0 0], [0 1 0]]
<strong>Output:</strong> 1
<strong>Explanation: </strong>0th and 2nd person both know 1. Therefore, 1 is the celebrity. </span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>mat[][] = [[0 1], [1 0]]
<strong>Output:</strong> -1
<strong>Explanation: </strong>The two people at the party both know each other. None of them is a celebrity.</span></pre>
<pre><span style="font-size: 14pt;"><strong>Input: </strong>mat[][] = [[0]]
<strong>Output:</strong> 0</span></pre>
<p><span style="font-size: 14pt;"><strong>Constraints:</strong><br>1 &lt;= mat.size()&lt;= 3000<br>0 &lt;= mat[i][j]&lt;= 1</span></p></div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Zoho</code>&nbsp;<code>Flipkart</code>&nbsp;<code>Amazon</code>&nbsp;<code>Microsoft</code>&nbsp;<code>Google</code>&nbsp;<code>Fab.com</code>&nbsp;<code>One97</code>&nbsp;<code>United Health Group</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Stack</code>&nbsp;<code>Data Structures</code>&nbsp;