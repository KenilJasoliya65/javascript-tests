function checksalary()
{
    let a = parseInt(document.getElementById("value").value);
    let increment = 0;
    if(a=>1000 && a<=5000)
    {
        increment = 1000;
    }
    else if(a=>5000 && a<=10000)
    {
        increment = 2000;
    }
    else if(a=>10000 && a<=20000) 
    {
        increment = 3000;
    } 
    else if(a > 20000 && a <= 50000) 
    {
        increment = 4000;
    }
    document.getElementById("result").innerText += `increment is ${increment}`
}
