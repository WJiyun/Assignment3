// contact.js

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submit_button = document.getElementById("submit-button");

function submit_clicked(){
    let thank_you_message = document.createElement('p');
    let new_page = document.getElementById("contact-page");

    thank_you_message.textContent = "Thank you for your message!";

    thank_you_message.style.fontSize = "24px"; 

    new_page.innerHTML = "";

    new_page.append(thank_you_message);
}

submit_button.addEventListener("click", submit_clicked);

