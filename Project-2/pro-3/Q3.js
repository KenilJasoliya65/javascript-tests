function findmax()
{
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = parseInt(document.getElementById("value3").value);
    let d = parseInt(document.getElementById("value4").value);

    if(a>b && a>c && a>d)
    {
        document.getElementById('result').innerText = "max = " + a;
    }
    else if(b>a && b>c && b>d)
    {
        document.getElementById('result').innerText = "max = " + b;
    }
    else if(c>a && c>b && c>d)
    {
        document.getElementById('result').innerText = "max = " + c;
    }
    else
    {
        document.getElementById('result').innerText = "max = " + d;
    }
}