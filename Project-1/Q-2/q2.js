function findswap() {
    let value1 = parseInt(document.getElementById("value1").value);
    let value2 = parseInt(document.getElementById("value2").value);

    let temp = value1;
    value1 = value2;
    value2 = temp;

    document.getElementById("result").innerHTML += "after swap value 1:- " + value1 + "<br>"; 
    document.getElementById("result").innerHTML += "after swap value 2:- " + value2;

}
