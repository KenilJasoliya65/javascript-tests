function findbill()
{
    const a = document.getElementById("units").value;
    let totalbill = 0;

    if(a<=50)
    {
        totalbill = a * 0.50;
    }
    else if(a>50 && a<=150)
    {
        totalbill = (50 * 0.50)+((a-50)*0.75);
    }
    else if(a>150 && a<=250)
    {
        totalbill = (50 * 0.50)+(100 * 0.75)+((a-150)*1.20);
    }
    else if(a>250)
    {
        totalbill = (50 * 0.50)+(100 * 0.75)+(100 * 1.20)+((a-250)*1.50);
    }
    totalbill *= 1.20;
    document.getElementById("result").innerHTML = `<p>electricity bill is: ${totalbill.toFixed(2)}</p>`;
} 