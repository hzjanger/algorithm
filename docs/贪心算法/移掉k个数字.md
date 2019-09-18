# 移掉k个数字

题目来源：力扣（LeetCode）

链接：[https://leetcode-cn.com/problems/remove-k-digits/](https://leetcode-cn.com/problems/remove-k-digits/)

给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

**注意:**

- num 的长度小于 10002 且 ≥ k。

- num 不会包含任何前导零。

**示例 1 :**

> 输入: num = "1432219", k = 3  
>
> 输出: "1219"
>
> 解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。

**示例 2 :**

> 输入: num = "1432219", k = 3
>
> 输出: "1219"
>
> 解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。

**示例 3 :**

> 输入: num = "10", k = 2
>
> 输出: "0"
>
> 解释: 从原数字移除所有的数字，剩余为空就是0。

## 思路

使用**贪心算法**,让较小的数在高位，优先从最高为开始考虑

数据结构：单调栈，压栈规则，如果比当前元素小，就向外弹；如果比当前元素大，就直接压

## 代码实现

```java
package com.hzj.xiaohui;

import java.util.Scanner;
import java.util.Stack;

public class RemoveKdigits {
    public String removeKdigits(String num, int k) {
        Stack<Integer> stack = new Stack<>();
        //如果需要移除的个数大于等于数的长度
        if (k >= num.length()) {
            return "0";
        }
        //数的长度
        int n = num.length();
        //跳出的下标
        int breakIndex = -1;
        for (int i = 0; i < n; i++) {
            //如果移除的个数等于k,就跳出,不在移除
            if (k == 0) {
                breakIndex = i;
                break;
            }
            int temp = num.charAt(i) - '0';
            //如果栈非空并且栈顶元素大于当前元素,出栈
            while (!stack.isEmpty() && stack.peek() > temp && k > 0) {
                k--;
                stack.pop();
            }
            //如果栈为空并且为0是不能添加的
            if (!stack.isEmpty() || temp != 0) {
                stack.push(temp);
            }
        }
        //如果还没有移除完,继续出栈
        while (k > 0) {
            stack.pop();
            k--;
        }

        StringBuilder str = new StringBuilder();
        while (!stack.isEmpty()) {
            //从头部添加
            str.insert(0, stack.pop());
        }
        //如果是中途跳出循环
        if (breakIndex != -1) {
            str.append(num.substring(breakIndex));
        }
        //这是因为 (10 , 1)这样的类似案例
        return str.length() == 0 ? "0" : str.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        int k = scanner.nextInt();
        String result = new RemoveKdigits().removeKdigits(str, k);
        System.out.println(result);
    }
}
```