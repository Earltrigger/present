console.log("hello world!");
//window.alert("hello world!");
document.getElementById("fruit").textContent = "i like pizza"
let age = 25;
console.log(age);
let course = "geology";
console.log(`you are a ${course} student`);
let budget = 2000;
if (budget <= 3000) { console.log("false") } else { console.log("true") }

let students=37
students = students + 2
students %=2
console.log(students);

let username;
document.getElementById("btn").onclick = function(){ 
    username = document.getElementById("user").value; 
    console.log(username);}

    let password;

    document.getElementById("btn2").onclick = function(){ 
    password = document.getElementById("pass").value; 
    console.log(password);}

    const increaseBtn = document.getElementById("increaseBtn").onclick = function()
    { 
        count++;
        Counting.textContent = count;
    }
    const decreaseBtn = document.getElementById("decreaseBtn").onclick = function()
    {
         count--; 
         Counting.textContent = count;
    }
    const resetBtn = document.getElementById("resetBtn").onclick = function()
    {
        count = 0;
        Counting.textContent = count;
    }
    const Counting = document.getElementById("Counting")
    let count = 0;

    const min =1;
    const max = 6;
    let randomNumber;

const myLabel = document.getElementById("myLabel")
const myButton = document.getElementById("myButton").onclick = function()
{
    randomNumber = Math.floor(Math.random() * max) + min;
    myLabel.textContent =  randomNumber;
}

const State = document.getElementById("State");
const subbtn = document.getElementById("subbtn");
const display = document.getElementById("display");

let state;
subbtn.onclick = function() {
     state = State.value;
     if (state === "AkwaiState" || state === "bayelsa" || state === "Rivers")
     { display.textContent = "you are from south of Nigeria";} 
     else if (state === "Imo" || state === "Owerri" || state === "Edo")
    {display.textContent = "you are from east of Nigeria";}
    else if (state === "Jigawa" || state === "Borno" || state === "Plateau")
    {display.textContent = "you are from North of Nigeria";}
    else { display.textContent = "you are not from Nigeria";}
        }


const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const verveBtn = document.getElementById("verveBtn");
const masterBtn = document.getElementById("masterBtn");
const subBtn = document.getElementById("subBtn");
const feedBack = document.getElementById("feedBack");
const paymentResult = document.getElementById("paymentResult");

subBtn.onclick = function() { 

if (myCheckbox.checked){ feedBack.textContent = " Successfully subscribed"}
else { feedBack.textContent = "Failed to subscribe"}

if (visaBtn.checked){ paymentResult.textContent = "you are paying with VISA CARD" }
else if (verveBtn.checked){ paymentResult.textContent = "you are paying with VERVE CARD" }
else if (masterBtn.checked){ paymentResult.textContent = "you are paying with MASTER CARD" }
else { paymentResult.textContent = "please select a payment method" }
}

let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);

/*for random number between 1 and 100*/

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() *(maxNum - minNum + 1));
console.log(answer);

const textBox = document.getElementById("textBox");
const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convertBtn");
const conResult = document.getElementById("conResult");
let temp;

convertBtn.onclick = function(){ 
if(fahrenheit.checked) {
    temp = parseInt(textBox.value);
    temp = temp * 9/5 +32;
    conResult.textContent = temp.toFixed(1) + "°F";

}

else if(celcius.checked) {
    temp = parseInt(textBox.value);
    temp = (temp -32) * 5/9;
    conResult.textContent = temp.toFixed(1) + "°C";
}

else {conResult.textContent = "select a unit"}}

    
