/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_per_day = 40;

let number_of_days_selected = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let monday = document.getElementById("monday");
function monday_clicked() {
    monday.classList.add("clicked");

    calculate();
}
monday.addEventListener("click", monday_clicked);

let tuesday = document.getElementById("tuesday");
function tuesday_clicked() {
    tuesday.classList.add("clicked");

    calculate();
}
tuesday.addEventListener("click", tuesday_clicked);

let wednesday = document.getElementById("wednesday");
function wednesday_clicked() {
    wednesday.classList.add("clicked");

    calculate();
}
wednesday.addEventListener("click", wednesday_clicked);

let thursday = document.getElementById("thursday");
function thursday_clicked() {
    thursday.classList.add("clicked");

    calculate();
}
thursday.addEventListener("click", thursday_clicked);

let friday = document.getElementById("friday");
function friday_clicked() {
    friday.classList.add("clicked");

    calculate();
}
friday.addEventListener("click", friday_clicked);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clear_button = document.getElementById("clear-button");
function clear_button_clicked() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    cost_per_day = 0;
    number_of_days_selected = 0;

    calculate();
}

clear_button.addEventListener("click", clear_button_clicked);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let half_day_button = document.getElementById("half");
function half_day_clicked() {
    cost_per_day = 25;
    half_day_button.classList.add("clicked");
    full_day_button.classList.remove("clicked");

    calculate();
}

half_day_button.addEventListener("click", half_day_clicked);

// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let full_day_button = document.getElementById("full");
function full_day_clicked() {
    cost_per_day = 40; 
    full_day_button.classList.add("clicked");
    half_day_button.classList.remove("clicked");

    calculate();
}
full_day_button.addEventListener("click", full_day_clicked);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let display_total_cost = document.getElementById("calculated-cost");

    let number_of_days_selected = 0;
    if (monday.classList.contains("clicked")) {
        number_of_days_selected += 1;
    }

    if (tuesday.classList.contains("clicked")) {
        number_of_days_selected += 1;
    }

    if (wednesday.classList.contains("clicked")) {
        number_of_days_selected += 1;
    }

    if (thursday.classList.contains("clicked")) {
        number_of_days_selected += 1;
    }
    
    if (friday.classList.contains("clicked")) {
        number_of_days_selected += 1;
    }

    let total_cost = number_of_days_selected * cost_per_day;
    display_total_cost.innerHTML = total_cost; 
}

