//{ Driver Code Starts
//Initial Template for Java

import java.util.Scanner;
import java.io.*;
import java.lang.Math;
class cls1
{
    void add(int p,int q)
    {
        System.out.println(p+q);
    }
}

public class Sol{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
        cls2 obj=new cls2();
        int a=sc.nextInt();
        int b=sc.nextInt();
        //String tilde=sc.next();
        obj.add(a,b);
        obj.mul(a,b);
        obj.task(a,b);
        //System.out.println("~");
        
System.out.println("~");
}
    }
}


// } Driver Code Ends

class cls2 extends cls1 {
    // Method to multiply two numbers
    void mul(int p, int q) {
        System.out.println(p * q);
    }

    // Method to calculate and print the sum of squares of two numbers
    void task(int p, int q) {
        // Sum of squares of p and q
        System.out.println(p * p + q * q);
    }
}


//{ Driver Code Starts.

// } Driver Code Ends