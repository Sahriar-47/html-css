function calculate() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    if(isNaN(a) || isNaN(b) || a === "" || b === "") {
        document.getElementById("message").innerHTML = "invalid number";
        document.getElementById("message").className="error";
    }
    else {
        var sum = Number(a) + Number(b);
        document.getElementById("message").innerHTML = "The sum is: " + sum;
        document.getElementById("message").className="";
    }
}
