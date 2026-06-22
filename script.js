let eventDate = new Date("January 1, 2027 09:00:00");

function updateCountdown(){

    let currentDate = new Date();

    let difference = eventDate - currentDate;

    let days = Math.floor(difference/(1000*60*60*24));

    let hours = Math.floor((difference%(1000*60*60*24))/(1000*60*60));

    let minutes = Math.floor((difference%(1000*60*60))/(1000*60));

    let seconds = Math.floor((difference%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";
}

updateCountdown();
setInterval(updateCountdown,1000);

let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let roll = document.getElementById("roll").value.toUpperCase();
    let branch = document.getElementById("branch").value;

    let rollPattern = /^CS\d{2}B\d{4}$/;
    console.log(roll);
    if (!rollPattern.test(roll)) {
        alert("Roll number must be in the format CSxxBxxxx");
        return;
    }

    console.log("Registration Details");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Roll Number:", roll);
    console.log("Branch:", branch);

    alert("Registration Successful!");
});