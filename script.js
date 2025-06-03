//TODO 📚 Module 4 - Lesson 08.02: Arrow Functions - Challenge


//TODO  🛠️ Step 4: Project Challenge – "Quick Filter UI"

// 🧠 Goal: - Build a small app that lets users type in a keyword and filters a list of items in real time, using arrow functions to power the filtering logic.

//* 📋 Requirements

// 🔹 1. Create an array of sample items (e.g., products, names, tasks)
const items = ["apple", "banana", "grape", "orange", "pineapple"];

//  🔹 2. Create an input field and a container to display the filtered results
//  in HTML:
//  <input type="text" id="filterInput" placeholder="Search..." />
//  <ul id="resultList"></ul>

//  🔹 3. On each input change:
//  • Use an arrow function to filter items
//  • Only show items that include the typed keyword (case-insensitive)
//  • Update the DOM using the filtered results

//! Solution

//  Step. 1

// Reference DOM elements
const filterInput = document.getElementById("filterInput");
const resultList = document.getElementById("resultList");
const searchBtn = document.getElementById("searchBtn");

// Use the sample array you've already declared

const sample = [ "soap", "newspaper", "milk", "bread", "detergent", "magazine", "tissue", "cereal", "toothpaste", "candy", "snack", "shampoo", "deodorant", "flower", "vitamins", "vegetable", "fruit", "book", "ticket", "puzzle", "flashlight", "rice", "wipes", "batteries", "coffee", "tape", "pen", "sugar", "pasta", "crayon", "marker", "shake", "headphone", "mints", "tea", "tire" ];

//  Step. 2 - completed in HTML

//  Step. 3

searchBtn.addEventListener("click", () => {
    // Get actual input value from user
    const keyword = filterInput.value.toLowerCase();

    //  Filter using an arrow function and case-insensitive comparison
    const filtered = sample.filter(item => item.toLowerCase().includes(keyword));

    //  Clear previous results
    resultList.innerHTML = "";

    // Display filtered results or  show "no matches"
    if (filtered.length === 0) {
        
        // If no results
        resultList.innerHTML = "<li>No matches found.</li>";
    } else {
        filtered.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            resultList.appendChild(li);
        });
    }
});

































