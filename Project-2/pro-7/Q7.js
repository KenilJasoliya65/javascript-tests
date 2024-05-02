function checknum()
{
    let a = document.getElementById("value1").value;
    let b = document.getElementById("value2").value;

    if(a==b)
    {
        document.getElementById("result").innerText = `numbers is same`;
    }
    else if(a>b)
    {
        document.getElementById("result").innerText = `a is grater than b`;
    }
    else
    {
        document.getElementById("result").innerText = `b is less than a`;
    }
}