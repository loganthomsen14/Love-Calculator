var name = prompt("What's your name?");
var crush = prompt("What's their name?");

var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1; // 1-100

if (n > 70) {
    alert("There is a " + n + " percent chance of love between " + name + " and " + crush + ". You love each other like Kanye loves Kanye.");
} else if (n > 30 && n <= 70) {
    alert("There is a " + n + " percent chance of love between " + name + " and " + crush + ".")
} else {
    alert("There is a " + n + " percent chance of love between " + name + " and " + crush + ". You go together like oil and water.")
}
