#User function Template for python3
import heapq

class Solution:
    def kLargest(self, arr, k):
        # Create a min-heap of size k for the k largest elements
        return heapq.nlargest(k, arr)


#{ 
 # Driver Code Starts
#Initial Template for Python 3
if __name__ == '__main__':
    tc = int(input())
    while tc > 0:
        arr = list(map(int, input().strip().split()))
        k = int(input().strip())
        ob = Solution()
        ans = ob.kLargest(arr, k)

        print(" ".join(map(str, ans)))
        tc -= 1
        print("~")

# } Driver Code Ends