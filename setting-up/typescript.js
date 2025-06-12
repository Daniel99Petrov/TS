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
