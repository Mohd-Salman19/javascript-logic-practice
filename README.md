# Day 37 - Palindrome String

## Problem
Check whether a string is palindrome or not.

A palindrome reads the same forward and backward.

Example:
Input: madam
Output: Palindrome

## Concepts Used
- for loop
- string indexing
- conditional statements

- # Day 40 - Remove Duplicates from Array

## Problem
Write a JavaScript program to remove duplicate elements from an array.

## Example

Input:
[1, 2, 3, 2, 4, 1, 5]

Output:
[1, 2, 3, 4, 5]

## Approach

1. Create an empty array called `unique`.
2. Loop through the original array.
3. Check if the element is already in `unique`.
4. If not present, push it into `unique`.
5. Return the `unique` array.

## Concepts Used

- Arrays
- for loop
- includes() method
- push() method



Day 38: Find largest number in array using loop

javascript-dsa-practice
│
├ Day-36-reverse-string
├ Day-37-palindrome
├ Day-38-largest-number
└ Day-39-second-largest



# Day 41 - Factorial (Loop and Recursion)

## Problem
Write a JavaScript program to calculate factorial of a number.

## Example

Input:
5

Output:
120

## Approach 1 (Loop)
1. Initialize result = 1
2. Multiply numbers from 1 to n
3. Return result

## Approach 2 (Recursion)
1. Base case: if n is 0 or 1 return 1
2. Return n * factorial(n-1)

## Concepts Used

- for loop
- recursion
- functions
- conditional statements

- # Day 42 - Fibonacci Series

## Problem
Write a JavaScript program to print Fibonacci series.

## Example

Output:
0 1 1 2 3 5 8 13 21 34

## Approach

1. Initialize two numbers a = 0 and b = 1
2. Print both numbers
3. Loop from 2 to n
4. next = a + b
5. Print next
6. Update values (a = b, b = next)

## Concepts Used

- Variables
- Loop
- Functions
- Mathematical logic

# Day 43 - Prime Number Check

## Problem
Write a JavaScript program to check whether a number is prime or not.

## Example

Input:
7

Output:
7 is a Prime Number

## Approach

1. If number ≤ 1 → not prime
2. Loop from 2 to number-1
3. If number is divisible by any value → not prime
4. If no divisors found → prime


# Day 44 - Count Vowels in a String

## Problem
Write a JavaScript program to count the number of vowels in a string.

## Example

Input:
javascript

Output:
3

## Approach

1. Create a variable to store vowel count.
2. Define vowels (a, e, i, o, u).
3. Loop through the string.
4. Check if the character is a vowel.
5. Increase count if true.

## Concepts Used

- Strings
- Loop
- includes() method
- Functi

## Concepts Used

- Functions
- Loop
- Modulus operator (%)
- Conditional statements

- Day 45 count number

# Day 46 - Smallest Number in Array

## Problem
Find the smallest number in an array.

## Example
Input:
[2, 5, 1, 3, 0]

Output:
0

## Approach
1. Assume the first element is the smallest.
2. Loop through the array.
3. Compare each element with the current smallest value.
4. Update the smallest value if a smaller number is found.

## Concepts Used
- Arrays
- For loop
- Conditional statements
# Day 47 - Check Anagram

## Problem
Check whether two strings are anagrams.

## Example

Input:
listen, silent

Output:
Anagram

## Approach

1. Convert strings to arrays using split()
2. Sort both arrays
3. Join them back into strings
4. Compare the two strings

## Concepts Used

- Strings
- Arrays
- split()
- sort()
- join()

# Day 48 - Remove Spaces from String

## Problem
Write a JavaScript program to remove all spaces from a string.

## Example

Input:
Hello World JavaScript

Output:
HelloWorldJavaScript

## Approach

1. Take a string input.
2. Use replaceAll() method to remove spaces.
3. Return the modified string.

## Concepts Used

- Strings
- replaceAll() method
- Functions

# Day 49 - First Non-Repeating Character

## Problem
Find the first non-repeating character in a string.

## Example

Input:
javascript

Output:
j

## Approach

1. Loop through each character.
2. Count how many times it appears.
3. If count is 1, return that character.
4. Stop the loop.

## Concepts Used

- Strings
- Nested loops
- Conditional statements

- # Day 50 - Character Frequency in String

## Problem
Count how many times each character appears in a string.

## Example

Input:
hello

Output:
h:1
e:1
l:2
o:1

## Approach

1. Create an empty object.
2. Loop through each character.
3. If the character exists in object, increase count.
4. Otherwise set count = 1.

## Concepts Used

- Strings
- Objects
- Loops
- Condition statements
