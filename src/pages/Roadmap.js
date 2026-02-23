import React, { useState } from "react";
import { Link } from "react-router-dom";

function Roadmap() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const correctPassword = "PYTHON49";

  const handlePayment = () => {
    window.location.href =
      "upi://pay?pa=sinchanapoojary102004@okhdfcbank&pn=Sinchana&am=30&cu=INR";
  };

  const handleUnlock = () => {
    if (password === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>📘 Most Asked Python Theoretical Interview Questions</h1>

      {!isUnlocked ? (
        <>
          <h3>Free Preview:</h3>

          <p><strong>1. What is Python?</strong></p>
          <p>Python is a high-level, interpreted programming language known for its readability and simplicity. It supports object-oriented, procedural, and functional programming paradigms.</p>

          <p><strong>2. What is GIL in Python?</strong></p>
          <p>The Global Interpreter Lock (GIL) is a mechanism in CPython that allows only one thread to execute Python bytecode at a time. It ensures memory safety but limits CPU-bound multi-threading.</p>

          <p><strong>3. What is the difference between List and Tuple?</strong></p>
          <p>Lists are mutable and can be modified after creation, whereas tuples are immutable and cannot be changed once created.</p>

          <p><strong>4. What are the four pillars of OOP?</strong></p>
          <p>The four pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism. They help in designing modular and reusable code.</p>

          <p><strong>5. What are decorators in Python?</strong></p>
          <p>Decorators are functions that modify the behavior of another function without changing its actual code.</p>

          <h3>Pay and unlock the 25+ Questions</h3>
          <button
            onClick={handlePayment}
            style={{
              padding: "12px 25px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "20px",
              cursor: "pointer"
            }}
          >
            Pay ₹30 via UPI
          </button>

          <p style={{ marginTop: "20px" }}>
            After payment, fill this form:
          </p>

          <a
            href="https://forms.gle/MGYZq1iUXfbk5of79"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", fontWeight: "bold" }}
          >
            👉 Submit Payment Confirmation Form
          </a>

          <p style={{ marginTop: "20px" }}>
            After verification, you will receive a password.
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
          <h3>🎉 Full Interview Theory Answers</h3>

          <p><strong>1. What is Python?</strong></p>
          <p>Python is a high-level, interpreted programming language known for clean syntax and readability.</p>

          <p><strong>2. What is GIL?</strong></p>
          <p>GIL allows only one thread to execute Python bytecode at a time in CPython.</p>

          <p><strong>3. What is the difference between List and Tuple?</strong></p>
          <p>Lists are mutable. Tuples are immutable.</p>

          <p><strong>4. What is mutable and immutable?</strong></p>
          <p>Mutable objects can be modified after creation, immutable objects cannot.</p>

          <p><strong>5. What are OOP principles?</strong></p>
          <p>Encapsulation, Abstraction, Inheritance, and Polymorphism.</p>

          <p><strong>6. What is Inheritance?</strong></p>
          <p>Inheritance allows one class to acquire properties and methods of another class.</p>

          <p><strong>7. What is Polymorphism?</strong></p>
          <p>Polymorphism allows the same method name to behave differently based on the object.</p>

          <p><strong>8. What is Encapsulation?</strong></p>
          <p>Encapsulation binds data and methods together and restricts direct access.</p>

          <p><strong>9. What is Abstraction?</strong></p>
          <p>Abstraction hides implementation details and shows only essential features.</p>

          <p><strong>10. What is a Generator?</strong></p>
          <p>A generator uses yield to return values one at a time instead of all at once.</p>

          <p><strong>11. What is a Lambda Function?</strong></p>
          <p>A lambda is an anonymous one-line function defined using the lambda keyword.</p>

          <p><strong>12. What is Exception Handling?</strong></p>
          <p>Exception handling uses try, except, else, and finally blocks to handle errors.</p>

          <p><strong>13. What is the use of self?</strong></p>
          <p>Self represents the instance of the class and is used to access variables and methods.</p>

          <p><strong>14. What is __init__ method?</strong></p>
          <p>__init__ is a constructor method automatically called when an object is created.</p>

          <p><strong>15. What is Multithreading?</strong></p>
          <p>Multithreading allows multiple threads to run concurrently within a process.</p>

          <p><strong>16. What is Multiprocessing?</strong></p>
          <p>Multiprocessing allows multiple processes to run in parallel using multiple CPUs.</p>

          <p><strong>17. What is a Dictionary?</strong></p>
          <p>A dictionary stores key-value pairs and allows fast data retrieval.</p>

          <p><strong>18. What is List Comprehension?</strong></p>
          <p>List comprehension provides a concise way to create lists using a single line of code.</p>

          <p><strong>19. What is Deep Copy vs Shallow Copy?</strong></p>
          <p>Shallow copy copies references, deep copy copies actual objects recursively.</p>

          <p><strong>20. What is a Module?</strong></p>
          <p>A module is a file containing Python code that can be imported and reused.</p>

          <p><strong>21. What is a Package?</strong></p>
          <p>A package is a collection of related Python modules.</p>

          <p><strong>22. What is __name__ == "__main__"?</strong></p>
          <p>It ensures that certain code runs only when the file is executed directly.</p>

          <p><strong>23. What is Iteration?</strong></p>
          <p>Iteration is repeating a block of code using loops like for and while.</p>

          <p><strong>24. What is Recursion?</strong></p>
          <p>Recursion is when a function calls itself to solve smaller parts of a problem.</p>

          <p><strong>25. What is Memory Management in Python?</strong></p>
          <p>Python uses automatic memory management with reference counting and garbage collection.</p>
          <p><strong>26. What is a Module?</strong></p>
          <p>A module is a single Python file containing functions, classes, or variables that can be imported and reused in other programs.</p>

          <p><strong>27. What is the Difference Between List and Tuple?</strong></p>
          <p>Lists are mutable (can be changed), whereas tuples are immutable (cannot be changed after creation).</p>

          <p><strong>28. What is a Dictionary in Python?</strong></p>
          <p>A dictionary is a collection of key-value pairs stored in curly braces {} and allows fast lookups using keys.</p>

          <p><strong>29. What is a Set in Python?</strong></p>
          <p>A set is an unordered collection of unique elements used to remove duplicates and perform set operations.</p>

          <p><strong>30. What is Exception Handling?</strong></p>
          <p>Exception handling allows you to manage runtime errors using try, except, else, and finally blocks.</p>

          <p><strong>31. What is the Difference Between == and is?</strong></p>
          <p>== compares values, while is compares memory locations (object identity).</p>

          <p><strong>32. What are Lambda Functions?</strong></p>
          <p>Lambda functions are small anonymous functions defined using the lambda keyword.</p>

          <p><strong>33. What is List Comprehension?</strong></p>
          <p>List comprehension is a concise way to create lists using a single line of code.</p>

          <p><strong>34. What is a Generator?</strong></p>
          <p>A generator is a function that yields values one at a time using the yield keyword instead of returning all at once.</p>

          <p><strong>35. What is the Difference Between append() and extend()?</strong></p>
          <p>append() adds a single element to a list, while extend() adds multiple elements from another iterable.</p>

          <p><strong>36. What is the Use of pass Statement?</strong></p>
          <p>The pass statement is a placeholder that does nothing but allows empty blocks of code without errors.</p>

          <p><strong>37. What is the Difference Between Shallow Copy and Deep Copy?</strong></p>
          <p>A shallow copy copies references of objects, while a deep copy creates completely independent copies of nested objects.</p>

          <p><strong>38. What are *args and **kwargs?</strong></p>
          <p>*args allows passing multiple positional arguments, while **kwargs allows passing multiple keyword arguments.</p>

          <p><strong>39. What is Method Overriding?</strong></p>
          <p>Method overriding occurs when a child class provides a specific implementation of a method already defined in its parent class.</p>

          <p><strong>40. What is Method Overloading?</strong></p>
          <p>Python does not support traditional method overloading, but it can be simulated using default arguments.</p>

          <p><strong>41. What is Encapsulation?</strong></p>
          <p>Encapsulation is wrapping data and methods together inside a class and restricting direct access to variables.</p>

          <p><strong>42. What is Abstraction?</strong></p>
          <p>Abstraction hides implementation details and shows only essential features using abstract classes or interfaces.</p>

          <p><strong>43. What is Inheritance?</strong></p>
          <p>Inheritance allows one class to acquire properties and methods of another class.</p>

          <p><strong>44. What is Polymorphism?</strong></p>
          <p>Polymorphism allows the same method name to behave differently based on the object calling it.</p>

          <p><strong>45. What is a Virtual Environment?</strong></p>
          <p>A virtual environment is an isolated Python environment used to manage project-specific dependencies.</p>

          <p><strong>46. What is PIP?</strong></p>
          <p>PIP is Python’s package manager used to install, update, and remove libraries.</p>

          <p><strong>47. What is Multithreading?</strong></p>
          <p>Multithreading allows multiple threads to run concurrently within a single process.</p>

          <p><strong>48. What is Multiprocessing?</strong></p>
          <p>Multiprocessing runs multiple processes simultaneously to achieve parallel execution.</p>

          <p><strong>49. What is the Global Interpreter Lock (GIL)?</strong></p>
          <p>The GIL ensures that only one thread executes Python bytecode at a time in CPython.</p>

          <p><strong>50. What is Garbage Collection?</strong></p>
          <p>Garbage collection automatically frees memory occupied by unused objects.</p>

          {/* All other questions 26-50 included exactly as in your original content */}
          {/* You can just paste the rest of your 26-50 questions here as in your original code */}

        </>
      )}

      <br /><br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Roadmap;