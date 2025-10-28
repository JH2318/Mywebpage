document.getElementById("contactForm").addEventListener("submit"), function (e) {
    e.preventDefault(); //Prevent the page from  reloading when the user clicks "submit"
}

//collect all field values
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const phone = document.getElementById("phone").value;
const website = document.getElementById("website").value;
const age = document.getElementById("age").value;
const dob = document.getElementById("dob").value;
const time = document.getElementById("time").value;
const color = document.getElementById("color").value;
const range = document.getElementById("range").value;
const topic = document.getElementById("topic").value;
const message = document.getElementById("message").value;

// get selected radio
const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value

// get selected checkboxes
const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
.map (cb => cb.value)
.join(", ") || "None";

// Display everything in an alert
alert(
    `--- CONTACT FORM DATA --- \n\n`+
    `Name: ${name}\n
    Email ${email}\n
    Password ${password}\n
    Age: ${age}\n
    Date of Birth ${dob}\n
    Preffered Time ${time}\n 
    Favorite Color: ${color}\n
    Interest Level: ${contactMethod}\n
    Services Interest In ${services}\n
    Topic: ${topic}\n
    Message: ${message}`
);