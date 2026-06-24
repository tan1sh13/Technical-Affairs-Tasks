
const eventDate = new Date("January 15, 2026 09:00:00").getTime();

setInterval(()=>{
let now=new Date().getTime();
let distance=eventDate-now;
let days=Math.floor(distance/(1000*60*60*24));
let hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
let minutes=Math.floor((distance%(1000*60*60))/(1000*60));
document.getElementById("countdown").innerHTML=`${days} Days ${hours} Hours ${minutes} Minutes`;
},1000);

document.getElementById("registrationForm").addEventListener("submit",function(e){
e.preventDefault();

const email=document.getElementById("email").value;
const roll=document.getElementById("roll").value.toUpperCase();

const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const rollPattern=/^[A-Z]{2}[0-9]{2}[A-Z][0-9]{4}$/;

if(!emailPattern.test(email)){
document.getElementById("message").innerText="Invalid email format";
return;
}

if(!rollPattern.test(roll)){
document.getElementById("message").innerText="Invalid roll number format";
return;
}

console.log({
name:document.getElementById("name").value,
email:email,
roll:roll
});

document.getElementById("message").innerText="Registration Successful!";
});
