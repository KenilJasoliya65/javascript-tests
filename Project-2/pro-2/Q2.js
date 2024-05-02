function findtype()
{
    let num = parseInt(document.getElementById("value").value);
    if(num % 2 == 0)
    {
        document.getElementById("result").innerHTML += `The number is ${num} is an even.`;
    }
    else
    {
        document.getElementById("result").innerHTML = `The number is ${num} is an odd.`;
    }
}