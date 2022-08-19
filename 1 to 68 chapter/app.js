// ======================= 1 chapter ===============================

let alt = "Thanks for your input!";
alert(alt);

// ======================= 2 chapter ===============================

let nationality;
nationality = "";
let names = "My name is mark" + "\n" + "My nationality is U.S.";
alert(names, nationality);


// ======================= 3 chapter ===============================

let originalNum = 23;
let addednum = 7;
let add = originalNum + addednum;
alert(add);


let originalNum2 = 90;
let originalNums = originalNum2 + 10;
alert(originalNums);

// ======================= 4 chapter ===============================

let legel = "Legel OR Illegel letiables" + "\n" + "\n" + "userResponse" + "\n" + "userResponseTime" + "\n" + "userResponseTimeLimit" + "\n" + "response";
alert(legel);


// ======================= 5 chapter ===============================


let popularNumber = 2 + 2;
alert(popularNumber);

let num = 10;
let anotherNum = 1;
let popularNumbers = num + anotherNum;
alert(popularNumbers);


// ======================= 6 chapter ===============================

let num1 = prompt("enter any num ruturen + 1");
let addNum = num1 + 1;
alert(addNum);

let num2 = 1;
let newNum = num2++;
alert(newNum);

let num3 = 1;
let newNum1 = num3--;
alert(newNum1);


// ======================= 7 chapter ===============================

let totalCost = 1 + (3 * 4);
alert(totalCost);

let totalCost1 = (1 + 3) * 4;
alert(totalCost1);

let resultOfComputation = (2 * 4) * 4 + 2;
alert(resultOfComputation);

let resultOfComputation1 = ((2 * 4) * 4) + 2;
alert(resultOfComputation1);

let resultOfComputation2 = (2 * 4) * (4 + 2);
alert(resultOfComputation2);

// ======================= 8 chapter ===============================



let message1 = "Thanks, ";
let banger1 = "!";
let userName1 = "Aahad";
let msg = message1 + userName1 + banger1;
alert(msg);

let message = "Thanks, ";
let banger = "!";
let userName = prompt("PLZ enter any msg ");
alert(message + userName + banger);

alert("2 plus 2 equals " + 2 + 2);

// ======================= 9 chapter ===============================

let question = "Your species?";
let defaultAnswer = "human";
let spec = prompt(question, defaultAnswer);

let numberOfCats = prompt("How many cats?");
let tooManyCats = numberOfCats + 1;
alert(tooManyCats);

// ======================= 10 chapter ===============================

let x = prompt("Which city you live?");
if (x === "karachi") {
    alert("Correct!");
}

let y = prompt("Which country you live? 'PLZ enter capital words");
if (y === "PAKISTAN") {
    // score++;
    userIQ = "genius";

    alert("Correct!" + "\n" + userIQ);
}

// ======================= 11 chapter ===============================

alert("VOTE casting Web App");
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let age = prompt("Enter your age");
if (age >= 18) {
    alert(firstName + " " + lastName + " " + "you are eligible to casting vote");
}
else {
    alert(firstName + " " + lastName + " " + "you are not eligible to casting vote");
}

// ======================= 12 chapter ===============================


let country = prompt("Enter your country name")
let city = prompt("Enter the capital of PAKISTAN")
if (country === "pakistan") {
    alert("Correct!");
}
else if (city === "islamabad") {
    alert("correct");
}
else {
    alert("Incorrect");
}

// ======================= 13 chapter ===============================

let weight = prompt("Enter your waight");
let age1 = prompt("Enter your age");
let gender = prompt("Enter your gender");

if (weight > 300 && age1 > 17 && gender === "male") {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}


let avg = prompt("Enter your avrage marks in metric");
let GPA = prompt("Enter your GPA");
let sport = prompt("Enter your Sport");

if (avg > 500 || GPA > 2.5 || sport === "football") {
    alert("Welcome to Bubba State!");
}
else {
    alert("Have you looked into appliance repair?");
}


let age2 = prompt("Enter your age");
let resident = prompt("Enter your resident");

if (age2 > 65 || age2 < 21 && res === "pakistan") {
    alert("Welcome to PAKISTAN");
}
else {
    alert("You are not a PAKISTANI");
}


// ======================= 14 chapter ===============================

let x1 = prompt("enter your country name");
let c = prompt("enter your city  name");

if (x1 === "pakistan") {
    if (c === "karachi") {
        alert("Welcome to the city of light")
    }
    else if (c === "lahore") {
        alert("Are you donkey")
    }
    else {
        alert("You are not a PAKISTANI")
    }
}

// ======================= 15 chapter ===============================

let cities = ["Karachi", "lahore", "islamabad", "kpk",];


// ======================= 16 chapter ===============================
let pets = [];

pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";

pets.pop("lizard");

pets.push("crocodial");


// ======================= 17 chapter ===============================

pets.shift();

pets.unshift("fish", "ferret");

pets.splice(2, 2, "pig", "duck", "emu");

pets.splice(2, 0, "pig", "duck", "emu");

let noPets = pets.slice(2, 4);


// ======================= 18 chapter ===============================

let cityToCheck = prompt("enter any number '0 to 3")
let cite = ["Karachi", "lahore", "islamabad", "kpk",];

if (cityToCheck === [0]) {
    alert("It's one of the cleanest cities");
}
else if (cityToCheck === [1]) {
    alert("It's one of the cleanest cities");
}
else if (cityToCheck === [2]) {
    alert("It's one of the cleanest cities");
}
else if (cityToCheck === [3]) {
    alert("It's one of the cleanest cities");
}

else {
    alert("It's not on the list");
}


let cleanestCities = ["Karachi", "lahore", "islamabad", "kpk",];
for (let i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}

// ======================= 19 chapter ===============================

let matchFound = "no";
for (let i = 0; i <= 4; i++);
if (cityToCheck === cleanestCities[i]) {
    matchFound = "yes";
    alert("It's one of the cleanest cities");
}
if (matchFound === "no") {
    alert("It's not on the list");
}

// =======================================boleans========================================


let matchFound2 = false;
for (let i = 0; i <= 4; i++);
if (cityToCheck === cleanestCities[i]) {
    matchFound2 = true;
    alert("It's one of the cleanest cities");
}
if (matchFound2 === false) {
    alert("It's not on the list");
}


let matchFound1 = false;
for (let i = 0; i <= 4; i++);
if (cityToCheck === cleanestCities[i]) {
    matchFound1 = true;
    alert("It's one of the cleanest cities");

}
if (matchFound1 === false) {
    alert("It's not on the list");
}


let numElements = cleanestCities.length;
let matchFound3 = false;
for (let i = 0; i < numElements; i++);
if (cityToCheck === cleanestCities[i]) {
    matchFound3 = true;
    alert("It's one of the cleanest cities");

}

if (matchFound3 === false) {
    alert("It's not on the list");
}



// ======================= 20 chapter ===============================

let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
let fullNames = [];
for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);

    }
}


// ======================= 21 chapter ===============================


let cleanestCities2 = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls", "great falls", "Honolulu", "honolulu"];

let cityToCheck1 = prompt("Enter your city");
cityToCheck1 = cityToCheck1.toLowerCase();
let cleanestCities1 = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
for (let i = 0; i <= 4; i++) {
    if (cityToCheck1 === cleanestCities1[i]) {
        alert("It's one of the cleanest cities");
    }
}


cityToCheck = cityToCheck.toLowerCase();

cityToCheck = cityToCheck.toUpperCase();


// ======================= 22 chapter ===============================

let firstChar3 = cityToCheck2.slice(0, 1);
let someChars = cityToCheck2.slice(2, 5);

let firstChar = cityToCheck.slice(0, 1);
let otherChars = cityToCheck.slice(1);
firstChar2 = firstChar2.toUpperCase();
otherChars = otherChars.toLowerCase();
let cappedCity = firstChar2 + otherChars;



let str = prompt("Enter some text");
let numChars = str.length;
for (let i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
        alert("No double spaces!");
        break;
    }
}

// ======================= 23 chapter ===============================


for (let i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}


let firstChar4 = text1.indexOf("World War II");
if (firstChar4 !== -1) {
    text1 = text1.slice(0, firstChar4) + "the Second World War" + text1.slice(firstChar4 + 12);
}

let text = "To be or not to be.";
let segIndex = text.lastIndexOf("be");

// ======================= 24 chapter ===============================


for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        alert("Exclamation point found!");
        break;
    }
}


// ======================= 25 chapter ===============================

for (let i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
    }
}

let firstCha = text.indexOf("World War II");
if (firstCha !== -1) {
    text = text.slice(0, firstCha) + "the Second World War" + text.slice(firstCha + 12);
}

text = text.replace("World War II", "the Second World War");


// ======================= 26 chapter ===============================

let numberOfStars1 = Math.round(scoreAvg);

scoreAvg = Math.round(scoreAvg);

let scoreAvg1 = Math.round(.0678437);

let scoreAvg2 = Math.ceil(.000001);

let scoreAv3 = Math.floor(.999999);

// ======================= 27 chapter ===============================

let bigDecimal = Math.random();
let improvedNum = (bigDecimal * 6) + 1;
let numberOfStars = Math.floor(improvedNum);


// ======================= 28 chapter ===============================

let currentAg = prompt("Enter your age.");

let currentAge = prompt("Enter your age.");
let yearsEligibleToVote = currentAge - 18;

let currentAge1 = prompt("Enter your age.");
let qualifyingAge = currentAge1 + 1;

let currentAge2 = prompt("Enter your age.");
let qualifyingAge1 = parseInt(currentAge2) + 1;

let myInteger = parseInt("1.9999");

let myFractional = parseFloat("1.9999");

// ======================= 29 chapter ===============================

let integerString = "24"
let number = Number(integerString);

let floatingNumString = "24.9876";
let num4 = Number(floatingNumString);

let numberAsNumber = 1234;
let numberAsString = numberAsNumber.toString();

// ======================= 30 chapter ===============================

let total = price + (price * taxRate);

let prettyTotal = total.toFixed(2);
let currencyTotal = "$" + prettyTotal;

let str1 = num.toString();
if (str.charAt(str1.length - 1) === "5") {
    str1 = str1.slice(0, str1.length - 1) + "6";
}
num = Number(str1);
prettyNum = num.toFixed(2);


// ======================= 31 chapter ===============================

let rightNow = new Date();
let theDay = rightNow.getDay();

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let now = new Date();
let theDay1 = now.getDay();
let nameOfToday = dayNames[theDay1];

// ======================= 32 chapter ===============================

let d = new Date();
let currentMonth = d.getMonth();

let dayOfMonth = d.getDate();
let currentHrs = d.getHours();
let currMins = d.getMinutes();
let currSecs = d.getSeconds()
let currMills = d.getMilliseconds();
let millsSince = d.getTime();

// ======================= 33 chapter ===============================

let b = new Date();
b.setFullYear(2001);

let e = new Date();
e.setMonth(11);

let f = new Date();
f.setDate(15);

let g = new Date();
g.setHours(13);

let k = new Date();
k.setMinutes(05);

let h = new Date();
h.setSeconds(55);

let i = new Date();
i.setMilliseconds(867);

// ======================= 35 chapter ===============================

function tellTime() {
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    alert("Current time: " + theHr + ":" + theMin);
}


// ======================= 36 chapter ===============================

function greetUser() {
    alert("Hello, there.");
}

function greetUser(greeting) {
    alert(greeting);
}

let whatever = "Hello, there.";
greetUser(whatever);

function showMessage(m, string, num) {
    alert(m + string + num);
}

// ======================= 37 chapter ===============================

let orderTot;
if (merchTot >= 100) {
    orderTot = merchTot;
}
else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
}
else {
    orderTot = merchTot + 5 + (.03 * (merchTot - 50));
}


function calcutot(merchTot) {
    let orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot = merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }
    return orderTot;
}

function calcTot(price) {
    return price + calcShip(price);
}

// ======================= 38 chapter ===============================


// =====Globel letiables=======
let theSum
addNumbers();

// =====local letiables=======

function addNumbers() {
    theSum = 2 + 2;
}

function addNumbers() {
    let theSum = 2 + 2;
}


let theSum1 = addNumbers();

function addNumbers() {
    let theSum1 = 2 + 2;
    return theSum1;
}

// ======================= 39 chapter ===============================
let dayOfWk = prompt("Enter the weekend dy of week");

if (dayOfWk === "Sat" || dayOfWk === "Sun") {
    alert("Whoopee!");
}
else if (dayOfWk === "Fri") {
    alert("TGIF!");
}
else {
    alert("Shoot me now!");
}

// ======this is in switch satatement========

switch (dayOfWk) {
    case "Sat":
        alert("Whoopee");
        break;
    case "Sun":
        alert("Whoopee");
        break;
    case "Fri":
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}


// ======================= 40 chapter ===============================

switch (dayOfWk) {
    case "Sat":
        alert("Whoopee");
        break;
    case "Sun":
        alert("Whoopee");
        break;
    case "Fri":
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}

//==========this is new============

// default : 
//     alert("Shoot me now!");


// ======================= 41 chapter ===============================


for (let j = 0; j <= 3; j++) {
    alert(j);
}

let k1 = 0;
while (k1 <= 3) {
    alert(k1)
    k1++;
}


// ======================= 42 chapter ===============================

let i1 = 0;
while (i1 <= 3) {
    alert(i1);
    i1++;
}

let i2 = 0;
do {
    alert(i2);
    i2++;
} while (i2 <= 3);

let i3 = 0;
while (i3 < 0) {
    alert(i3);
    i3++;
}

// ======================= 43 chapter ===============================

/* <script>
    function sayHi() {
        alert("Hello world!");
 }
    function sayBye() {
        alert("Buh-bye!");
 }
</script> */

// second Method===

<script src="whatever.js"></script>

// ======================= 44 chapter ===============================

// This is single line comment


/*This is multi line comment
This is multi line comment
This is multi line comment
This is multi line comment*/


// ======================= 45 chapter ===============================


/* <a href="#" onClick="alert('Hi');">Click</a> */

// for refresh page / form==========

/* <a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a> */

/* <a href="JavaScript:void(0)" onClick="let greet="hi'; alert(greet);">Click</a> */

function popup(message) {
    alert(message);
}

<a href="JavaScript:void(0)" onClick="popup('Hi');">Click</a>

// ======================= 46 chapter ===============================

/* <input type="button" value="Click" onClick="alert('Hello world!');"> */

/* <img src="button-greet.png" onClick="alert('Hello world!');"> */

/* <img src="button-greet.png" onClick="greetTheUser();"></img> */


// ======================= 47 chapter ===============================

/* <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"></img>

<h1 onMouseover="alert('Be sure to get your shopping done today.');">World Ends Tomorrow</h1>

<a href="index.html" onMouseover="this.style.color='green';">Home Page</a>

<p id="loris" onMouseover="expand();">Slow Loris: Mouse over for more info</p>

<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"onMouseout="src='before-pic.jpg'"> */


// ======================= 48 chapter ===============================


/* <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"> */

/* <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"onBlur="this.style.backgroundColor='white';"> */

/* <input type="text" size="30" onFocus="makeFieldYellow();" onBlur="makeFieldWhite();"> */


// ======================= 49 chapter ===============================

/* <form>

<input type="text" id="email">
<input type="submit" value="Submit">
</form> */

/* <form onSubmit="checkAddress('email');">

<input type="text" id="email">
<input type="submit" value="Submit">
</form> */

function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("Email address required.");
    }
}

function checkAddress(fieldId) {
    let val = document.getElementById(fieldId).value;
    if (val === "") {
        alert("Email address required.");
    }
}

// ======================= 50 chapter ===============================


function fillCity() {
    let cityName;
    let zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;
        case "68114":
            cityName = "Omaha";
            break;
        case "53212":
            cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}

// ======================= 51 chapter ===============================

function expandLoris() {
    let expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates whichmake up the genus Nycticebu They have a round head, narrow snout, large eyes, and a letiety ofdistinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have severaladaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function placeAList() {
    let listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
    document.getElementById("lorisList").innerHTML = listToPlace;
}

// ======================= 52 chapter ===============================



function makeInvisible() {
    document.getElementById("ugly").className = "hidden";
}

function makeBig() {
    document.getElementById("p1").className += " big";
}

// ======================= 53 chapter ===============================

function swapPic() {
    document.getElementById("before").src = "after-pic.jpg";
}

function swapPic(eId, newPic) {
    document.getElementById(eId).src = newPic;
}


// ======================= 54 chapter ===============================

function swapPic() {
    document.getElementById("before").src = "after-pic.jpg";
}

function swapPic1() {
    let pic = document.getElementById("before1");
    pic.src = "after-pic.jpg";
}

function getAddress() {
    let link = document.getElementById("link1");
    let address = link.href;
}

function enlargeForm() {
    let frm = document.getElementById("link")
    frm.className = "jumbo";

}

// ======================= 55 chapter ===============================

function makeBig() {
    document.getElementById("p1").className += " big";
}

function makeBig() {
    document.getElementById("p1").style.fontSize = "2em";
}

document.getElementById("pic99").style.cssFloat = "left";

document.getElementById("div9").style.visibility = "hidden";

document.getElementById("mainPic").style.margin = "0 10px 0 10px;";

let m = document.getComputedStyle("mainPic").margin;


// ======================= 56 chapter ===============================

let par = document.getElementsByTagName("p");

for (let l = 0; l < par.length; l++) {
    par[l].style.fontFamily = "Verdana, Geneva, sans-serif";
}

let pics = document.getElementsByTagName("img");

let divs = document.getElementsByTagName("div");

let ulists = document.getElementsByTagName("ul");


// ======================= 57 chapter ===============================

let pars = document.getElementsByTagName("p");

let textInMiddleParagraph = pars[1].innerHTML;

let v = document.getElementByID("rules");
let paragraphs = v.getElementsByTagName("p");


let t = document.getElementById("table9");
let cells = t.getElementsByTagName("td");
for (let z = 0; z < cells.length; z++) {
    cells[z].style.backgroundColor = "pink";
}

// ======================= 58 chapter ===============================

// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <p>
// 5th level There's not much to this.
// </p>
// </body>
// </html>

// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <div>
// 5th level <p>
// 6th level There's not much to this.
// </p>
// 5th level <p>
// 6th level Nor to this.
// </p>
// </div>
// </body>
// </html>


// ======================= 59 chapter ===============================

// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <div>
// 5th level <p>
// 6th level There's not much to this.
// </p>
// 5th level <p>
// 6th level Nor to this.
// </p>
// </div>
// </body

// ======================= 60 chapter ===============================

let Field = document.getElementById("email");

let eField = document.getElementsByTagName("p");

let u = document.getElementById("div3");
let p = u.getElementsByTagName("p");
let contents = p[2].innerHTML;

//  <body>
// <div id="cal">
// <p>Southern Cal is sunny.</p>
// <p>Northern Cal is rainy.</p>
// <p>Eastern Cal is desert.</p>
// </div>
// <div id="ny">
// <p>Urban NY is crowded.</p>
// <p>Rural NY is sparse.</p>
// </div>
// </body>

let div = document.getElementById("ny");
let q = div.getElementsByTagName("p");
let content = q[1].innerHTML;


// 1. document.childNodes[0].childNodes[1].childNodes[1].childNodes[1]; is the
// first child of the document, <html>
// 2. document.childNodes[0].childNodes[1].childNodes[1].childNodes[1]; is the
// second child of <html>, <body>
// 3. document.childNodes[0].childNodes[1].childNodes[1].childNodes[1]; is the
// second child of <body>, <div> with the id "ny"
// 4. document.childNodes[0].childNodes[1].childNodes[1].childNodes[1]; is the
// second child of <div> with the id "ny", the second <p> within the div


{/* <body>
<div id="cal">
<p>Southern Cal is sunny.</p>
<p>Northern Cal is rainy.</p>
<p>Eastern Cal is desert.</p>
</div>
<div id="ny">
<p>Urban NY is crowded.</p>
<p>Rural NY is sparse.</p>
</div>
</body> */}

let s = document.getElementById("ny");
let o = d.childNodes[1];
let contentss = s.innerHTML;


// ======================= 61 chapter ===============================

// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <div>
// 5th level <p>
// 6th level There's not much to this.
// </p>
// 5th level <p>
// 6th level Nor to this.
// </p>
// </div>
// </body>
// </html>


// element and of the two paragraph elements.
// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <div>
// 5th level <p>
// 6th level There's not much to this.
// </p>
// 5th level <p>
// 6th level Nor to this.
// </p>
// </div>
// </body>
// </html>


{/* <html
><head
><title
>Simple document
</title
></head
><body
><div
><p

>There's not much to this.
</p
><p
>Nor to this.
</p
></div
></body
></html> */}

let nType = targetNode.nodeType;

let w = document.getElementById("humpty");

let pCounter = 0;
for (let i = 0; i < w.childNodes.length; i++) {
    if (w.childNodes[i].nodeType === 1) {
        pCounter++;
    }
    if (pCounter === 2) {
        w.childNodes[i].innerHTML = "All his men.";
        break;
    }
}

let x2 = document.getElementById("p2").innerHTML;



// ======================= 62 chapter ===============================


let targetNode1 = parentNode.childNodes[0];

let targetNode2 = parentNode.firstChild;

let targetNode = parentNode.lastChild;

let kidNode = document.getElementById("div2");
let pNode = kidNode.parentNode;

let firstEl1 = document.getElementById("div1");
secondEl = firstEl.nextSibling;


let firstEl = document.getElementById("div1");
let nonexistentEl = firstEl.previousSibling;

// ======================= 63 chapter ===============================

let nType1 = targetNode.nodeType;

let parent1 = document.getElementById("div1");
let target4 = parent.firstChild;
nName = target.nodeName;


let parent = document.getElementById("div1");
let target = parent.firstChild;
let nTextContent = target.nodeValue;

if (targetNode.nodeName.toLowerCase === "img") { }

// ======================= 64 chapter ===============================

let liElements = getElementsByTagName("li");
let howManyLi = liElements.length;

for (let ik = 0; ik < howManyLi; ik++) {
    if (liElements[ik].innerHTML === "") {
        liElements[ik].innerHTML = "coming soon";
    }
}

let parentNode = document.getElementById("d1");
let nodeList = parentNode.childNodes;


let numberPics = 0;
for (let ii = 0; ii < howManyKids; ii++) {

    if (nodelist[ii].nodeName.toLowerCase() === "img") {
        numberPics++;
    }
}


// ======================= 65 chapter ===============================

let target1 = document.getElementById("p1");
let hasClass = target.hasAttribute("class");


let target12 = document.getElementById("div1");
let attVal = target.getAttribute("class");


let target3 = document.getElementById("div1");
target.setAttribute("class", "special")


// ======================= 66 chapter ===============================

let list = document.getElementsByTagName("p");

let list1 = document.getElementById("p1").childNodes;

let list2 = document.getElementById("p1").attributes;

let numOfItems = list2.length;

let nName = list[2].nodeName;

let nValue = list[2].nodeValue;

// ======================= 67 chapter ===============================

let nodeToAdd = document.createElement("p");

let imgNodeToAdd = document.createElement("img");

nodeToAdd.setAttribute("class", "regular");

imgNodeToAdd.setAttribute("border", "1");

let newTxt = document.createTextNode("Hello!");

nodeToAdd.appendChild(newTxt);


// ======================= 68 chapter ===============================

let parentDiv1 = document.getElementById("div1");
let newParagraph1 = document.createElement("p");
let te = document.createTextNode("Hello world!");
newParagraph1.appendChild(te);
parentDiv1.appendChild(newParagraph1);


let parentDiv2 = document.getElementById("div1");
let newParagraph = document.createElement("p");
let tr = document.createTextNode("Hello world!");
newParagraph.appendChild(tr);
paragraph1 = parentDiv.firstChild;
parentDiv.insertBefore(newParagraph, paragraph1);


let target5 = parentDiv.childNodes[1];
parentDiv.insertBefore(newE, target.nextSibling);


let parentDiv = document.getElementById("div1");
let nodeToRemove = parentDiv.childNodes[2];
parentDiv.removeChild(nodeToRemove);
