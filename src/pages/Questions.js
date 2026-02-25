import React, { useState } from "react";
import { Link } from "react-router-dom";

function Questions() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const correctPassword = "PYTHON49";

  const handleUnlock = () => {
    if (password === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>💻 Python Coding Questions To Practice</h1>

      {!isUnlocked ? (
        <>
          <h3>Free Preview</h3>
          <hr />

          {/* Question 1 */}
          <p><strong>1️⃣ QUESTION: Two Sum</strong></p>
          <p>
            Given an array of integers nums and a target,
            return indices of two numbers such that they add up to target.
          </p>

          <p><strong>✅ SOLUTION:</strong></p>
          <p>
            Use a dictionary to store visited numbers.
            For each number, check if target - number exists.
            Time Complexity: O(n)
          </p>

          <p><strong>💻 FULL RUNNABLE CODE:</strong></p>
          <pre>
{`def two_sum(nums, target):
    hashmap = {}

    for i, num in enumerate(nums):
        complement = target - num

        if complement in hashmap:
            return [hashmap[complement], i]

        hashmap[num] = i


nums = [2, 7, 11, 15]
target = 9

print(two_sum(nums, target))`}
          </pre>

          <hr />

          {/* Question 2 */}
          <p><strong>2️⃣ QUESTION: Valid Palindrome</strong></p>
          <p>
            Check whether a string is palindrome
            ignoring non-alphanumeric characters.
          </p>

          <p><strong>✅ SOLUTION:</strong></p>
          <p>
            Clean the string and compare with reversed version.
            Time Complexity: O(n)
          </p>

          <p><strong>💻 FULL RUNNABLE CODE:</strong></p>
          <pre>
{`def is_palindrome(s):
    cleaned = ""

    for char in s:
        if char.isalnum():
            cleaned += char.lower()

    return cleaned == cleaned[::-1]


text = "A man, a plan, a canal: Panama"
print(is_palindrome(text))`}
          </pre>

          <hr />

          {/* Question 3 */}
          <p><strong>3️⃣ QUESTION: Reverse a String</strong></p>
          <p>Write a function to reverse a string.</p>

          <p><strong>✅ SOLUTION:</strong></p>
          <p>
            Use slicing or two pointer technique.
            Time Complexity: O(n)
          </p>

          <p><strong>💻 FULL RUNNABLE CODE:</strong></p>
          <pre>
{`def reverse_string(s):
    return s[::-1]


text = "Python"
print(reverse_string(text))`}
          </pre>

          <p style={{ marginTop: "20px", fontWeight: "bold", color: "red" }}>
            🔐 Unlock to access more complete Python programs with detailed explanations.
          </p>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "8px", marginTop: "10px" }}
          />

          <br /><br />

          <button
            onClick={handleUnlock}
            style={{
              padding: "8px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Unlock Content
          </button>
        </>
      ) : (
        <>
          <h3>🎉More Coding Questions</h3>

<hr />

<p><strong>1️⃣ QUESTION: Check Prime Number</strong></p>
<p>Determine whether a given number is prime.</p>

<p><strong>💻 FULL RUNNABLE CODE:</strong></p>
<pre>
{`def is_prime(n):
    if n <= 1:
        return False

    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False

    return True


number = 29
print(is_prime(number))`}
</pre>

<hr />

<p><strong>2️⃣ QUESTION: Find Second Largest Number</strong></p>
<p>Find the second largest number in a list.</p>

<pre>
{`def second_largest(nums):
    first = second = float('-inf')

    for num in nums:
        if num > first:
            second = first
            first = num
        elif first > num > second:
            second = num

    return second


numbers = [10, 20, 4, 45, 99]
print(second_largest(numbers))`}
</pre>

<hr />

<p><strong>3️⃣ QUESTION: Remove Duplicates from List</strong></p>

<pre>
{`def remove_duplicates(nums):
    unique = []

    for num in nums:
        if num not in unique:
            unique.append(num)

    return unique


numbers = [1, 2, 2, 3, 4, 4, 5]
print(remove_duplicates(numbers))`}
</pre>

<hr />

<p><strong>4️⃣ QUESTION: Factorial of a Number</strong></p>

<pre>
{`def factorial(n):
    result = 1

    for i in range(1, n + 1):
        result *= i

    return result


number = 5
print(factorial(number))`}
</pre>

<hr />

<p><strong>5️⃣ QUESTION: Fibonacci Series (First N Terms)</strong></p>

<pre>
{`def fibonacci(n):
    a, b = 0, 1
    sequence = []

    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b

    return sequence


print(fibonacci(10))`}
</pre>

<hr />

<p><strong>6️⃣ QUESTION: Count Vowels in a String</strong></p>

<pre>
{`def count_vowels(s):
    vowels = "aeiouAEIOU"
    count = 0

    for char in s:
        if char in vowels:
            count += 1

    return count


text = "Python Programming"
print(count_vowels(text))`}
</pre>

<hr />

<p><strong>7️⃣ QUESTION: Find Maximum Element in List</strong></p>

<pre>
{`def find_max(nums):
    maximum = nums[0]

    for num in nums:
        if num > maximum:
            maximum = num

    return maximum


numbers = [3, 5, 7, 2, 8]
print(find_max(numbers))`}
</pre>

<hr />

<p><strong>8️⃣ QUESTION: Check Anagram</strong></p>

<pre>
{`def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)


word1 = "listen"
word2 = "silent"
print(is_anagram(word1, word2))`}
</pre>

<hr />

<p><strong>9️⃣ QUESTION: Linear Search</strong></p>

<pre>
{`def linear_search(nums, target):
    for i in range(len(nums)):
        if nums[i] == target:
            return i
    return -1


numbers = [10, 20, 30, 40]
print(linear_search(numbers, 30))`}
</pre>

<hr />

<p><strong>🔟 QUESTION: Bubble Sort</strong></p>

<pre>
{`def bubble_sort(nums):
    n = len(nums)

    for i in range(n):
        for j in range(0, n - i - 1):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]

    return nums


numbers = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(numbers))`}
</pre>
<hr />

<p><strong>1️⃣1️⃣ QUESTION: Binary Search</strong></p>
<p>Search for a target element in a sorted list.</p>

<pre>
{`def binary_search(nums, target):
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1


numbers = [1, 3, 5, 7, 9, 11]
print(binary_search(numbers, 7))`}
</pre>

<hr />

<p><strong>1️⃣2️⃣ QUESTION: Check Armstrong Number</strong></p>
<p>Check if a number is an Armstrong number.</p>

<pre>
{`def is_armstrong(n):
    digits = str(n)
    power = len(digits)
    total = 0

    for digit in digits:
        total += int(digit) ** power

    return total == n


print(is_armstrong(153))`}
</pre>

<hr />

<p><strong>1️⃣3️⃣ QUESTION: Reverse a Number</strong></p>

<pre>
{`def reverse_number(n):
    reversed_num = 0

    while n > 0:
        digit = n % 10
        reversed_num = reversed_num * 10 + digit
        n //= 10

    return reversed_num


print(reverse_number(1234))`}
</pre>

<hr />

<p><strong>1️⃣4️⃣ QUESTION: Count Words in a Sentence</strong></p>

<pre>
{`def count_words(sentence):
    words = sentence.split()
    return len(words)


text = "Python is very powerful"
print(count_words(text))`}
</pre>

<hr />

<p><strong>1️⃣5️⃣ QUESTION: Find GCD of Two Numbers</strong></p>

<pre>
{`def find_gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a


print(find_gcd(48, 18))`}
</pre>

<hr />

<p><strong>1️⃣6️⃣ QUESTION: Find LCM of Two Numbers</strong></p>

<pre>
{`def find_gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def find_lcm(a, b):
    return (a * b) // find_gcd(a, b)


print(find_lcm(12, 18))`}
</pre>

<hr />

<p><strong>1️⃣7️⃣ QUESTION: Sum of Digits</strong></p>

<pre>
{`def sum_of_digits(n):
    total = 0

    while n > 0:
        total += n % 10
        n //= 10

    return total


print(sum_of_digits(1234))`}
</pre>

<hr />

<p><strong>1️⃣8️⃣ QUESTION: Check Even or Odd</strong></p>

<pre>
{`def is_even(n):
    return n % 2 == 0


print(is_even(10))`}
</pre>

<hr />

<p><strong>1️⃣9️⃣ QUESTION: Find Minimum Element in List</strong></p>

<pre>
{`def find_min(nums):
    minimum = nums[0]

    for num in nums:
        if num < minimum:
            minimum = num

    return minimum


numbers = [8, 3, 5, 1, 9]
print(find_min(numbers))`}
</pre>

<hr />

<p><strong>2️⃣0️⃣ QUESTION: Check Leap Year</strong></p>

<pre>
{`def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    return False


print(is_leap_year(2024))`}
</pre>
        </>
      )}

      <br /><br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Questions;