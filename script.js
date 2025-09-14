// ------------------------------
// Part 2: Functions with parameters, return values, scope
// ------------------------------

let globalCount = 0; // global scope

function addNumbers(a, b) {
  // Local scope: a, b
  return a + b; // return value
}

function logMessage(message) {
  console.log("Message: " + message);
}

// Function to update global count
function incrementCounter(step) {
  globalCount += step;
  return globalCount; // demonstrate reuse
}

// ------------------------------
// Part 3: Combining CSS & JS
// ------------------------------

// Animate box when button clicked
const box = document.querySelector(".box");
document.getElementById("animateBtn").addEventListener("click", () => {
  box.classList.toggle("animate");
  let result = addNumbers(2, 3); // Using function with return value
  logMessage("Box animation triggered. Calculation result: " + result);
});

// Modal show/hide
const modal = document.getElementById("modal");
document.getElementById("showModalBtn").addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hidden");
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hidden");
  let clicks = incrementCounter(1);
  logMessage("Modal closed. You have closed it " + clicks + " times.");
});
