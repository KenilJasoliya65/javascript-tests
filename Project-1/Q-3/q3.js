function converted() 
{
    let value1 = parseFloat(document.getElementById("value1").value);

    let fahrenheit = (value1 * 9/5) + 32;

    document.getElementById("result").innerHTML += "fahrenheit is : " + fahrenheit.toFixed(2) + "<br>"; 

}
