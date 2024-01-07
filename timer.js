let sec = 0;
let min = 0;
let hr = 0;

function seconds()
{
    if(sec >= 59)
    {
        sec = 0;
    }
    sec++;
    console.log(
        (hr < 10 ? "0":"" )+ hr + ":" +
        (min < 10 ? "0":"")+ min + ":"+
        (sec < 10 ? "0":"")+ sec);
}

function minutes()
{
    if( min >= 59)
    {
        min = 0;
    }
    min++;
}

function hours()
{
    if(hr >= 23)
    {
        hr = 0;
    }
    hr++;
}

setInterval(hours,3600*1000);
setInterval(minutes,60*1000);
setInterval(seconds,1000);
