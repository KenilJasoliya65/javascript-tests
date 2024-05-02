function checknumber()
{
    let a = document.getElementById("value").value;

    if(a>0)
    {
        document.getElementById("result").innerHTML = `number ${a}  is positive`;
    }
    else if(a<0)
    {
        document.getElementById("result").innerHTML = `number ${a} is negative`;
    }
    else
    {
        document.getElementById("result").innerHTML = `number ${a} is zero`;
    }
}