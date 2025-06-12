function greet(_a) {
    var name = _a.name;
    console.log("Hello, " + name.toUpperCase());
}
var button = document.getElementById("greet-btn");
var input = document.getElementById("name-input");
button.addEventListener("click", function () {
    var name = input.value.trim();
    if (name) {
        greet({ name: name });
    }
    else {
        console.log("Please enter a name.");
    }
});
var variable = 32;
variable = 33;
// variable = "hey";
variable = "hey";
var constant = 32;
// greet({name: constant});
// Array of numbers
var scores = [90, 85, 70];
var scoresInference = [90, 85, 70];
// Tuple: fixed length & types
var user = ["Alice", 30];
var userInference = ["Alice", 30];
