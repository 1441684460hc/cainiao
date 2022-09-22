package com.nowcoder.community.controller;

/**
 * @author hc
 * @version 1.0
 */
import java.util.Date;
import java.util.Stack;


public class test {
    public static void main(String[] args){

    }
}

 class ListNode {
    int val;
    ListNode next = null;

    ListNode(int val) {
        this.val = val;
    }
}

 class Solution {
    public ListNode ReverseList(ListNode head) {
        if (head == null) {
            return null;
        }
        Stack<ListNode> stack = new Stack();
        while (head != null) {
            stack.push(head);
            head = head.next;
        }
        ListNode res = stack.pop();
        while (!stack.isEmpty()) {
            res = res.next;
            System.out.print(res.val);
            res = stack.pop();
        }
        return res;
    }
}
