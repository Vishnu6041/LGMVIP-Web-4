const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = "Error";
            }
        } else if (button.textContent === "C") {
            result.value = "";
        } else {
            result.value += button.textContent;
        }
    });
});
