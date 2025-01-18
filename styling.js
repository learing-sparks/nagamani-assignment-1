let inputField = document.getElementById("calcInput");
let historyList = document.getElementById("historyList");
function appendInput(value) {
    inputField.value += value;
}
function clearInput() {
    inputField.value = "";
}
function calculate() {
    try {
        let result = eval(inputField.value); 
        if (result !== undefined) {
            saveToHistory(inputField.value + " = " + result);
            inputField.value = result; 
        }
    } catch (error) {
        alert("Invalid calculation!");
        inputField.value = "";
    }
}
function saveToHistory(calculation) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    history.push(calculation);
    localStorage.setItem("calcHistory", JSON.stringify(history));
    updateHistory();
}
function updateHistory() {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    historyList.innerHTML = ""; 
    history.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
window.onload = function () {
    updateHistory();
};