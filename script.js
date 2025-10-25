let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

// Set the target date for New Year 2026 (January 1st, 2026, 00:00:00)
// NOTE: Months are 0-indexed in JavaScript Date (0 is January, 11 is December).
// So '0' is correct for January.
let endDate = new Date(2026, 0, 1, 0, 0, 0); // Added seconds (0) for completeness
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;

  // Time calculations (constants should ideally be outside the function, 
  // but it works fine here too)
  const oneSec = 1000;
  const oneMin = 60 * oneSec;
  const oneHr = 60 * oneMin;
  const oneDay = 24 * oneHr;

  // Helper function to add leading zero
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  // Check if the countdown has finished
  if (remainingTime < oneSec) { 
    clearInterval(i);
    // You need to ensure an element with the class ".countdown" exists in your HTML
    const countdownContainer = document.querySelector(".countdown");
    if (countdownContainer) {
        countdownContainer.innerHTML = `<h1>🎉 Happy New Year 2026! 🎉</h1>`;
    }
    
    // Also clear the boxes
    dayBox.textContent = "00";
    hrBox.textContent = "00";
    minBox.textContent = "00";
    secBox.textContent = "00";
    
  } else {
    // Calculate remaining days, hours, minutes, and seconds
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    // Calculate remaining seconds: (remainingTime % oneMin) is milliseconds left in the minute
    let secsLeft = Math.floor((remainingTime % oneMin) / oneSec); 

    // Update the HTML elements
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}

// Set up the interval to run the countdown function every 1000 milliseconds (1 second)
let i = setInterval(countdown, 1000); 

// Run the function once immediately to avoid a 1-second delay at start
countdown();