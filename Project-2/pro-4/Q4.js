function findweek()
{
    let a = document.getElementById("keyword").value;
    let day;
    switch(a)
{
    case 's':
        day = 'sunday';
        break;
    case 'm':
        day = 'monday';
        break;
    case 't':
        day = 'tuesday';
        break;
    case 'w':
        day = 'wednesday';
        break;
    case 'th':
        day = 'thursday';
        break;
    case 'f':
        day = 'friday';
        break;
    case 'sa':
        day = 'saturday';
        break;
    default:
        day = 'invalid';
}
document.getElementById("result").textContent = `the day name is : ${day}`;
}