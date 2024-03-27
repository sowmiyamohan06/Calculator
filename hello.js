function dis(val) {
    document.getElementById("result").value += val;
}
function clr() {
    document.getElementById("result").value = "";
}
function solve() {
    let expression = document.getElementById("result").value;
    let result;
    try {
        result = eval(expression); 
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid input");
        }

        
        document.getElementById("result").value = result;
    } catch (error) {
        
        alert("Error: " + error.message);
        clr(); 
}
}