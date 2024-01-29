const d = new Date();

let sec = d.getSeconds();
let min = d.getMinutes();
let hr = d.getHours();

const seconds = () =>{
    if(hr >= 23)
    {
        hr = 0;
    }
    if(min >= 59)
    {
        min = 0;
        hr++;
    }
    if(sec >= 59)
    {
        sec = 0;
        min++;
    }
    else{
        sec++;
    }
    console.log("Format 1: " +
    (hr < 10 ? "0":"" )+ hr + ":" +
    (min < 10 ? "0":"")+ min + ":"+
    (sec < 10 ? "0":"")+ sec);
    console.log("Format 2: " +
    (hr < 10 ? "0":"" )+ hr + ":" +
    (min < 10 ? "0":"")+ min + ":"+
    (sec < 10 ? "0":"")+ sec+ (hr > 12 ?" PM":" AM"));
    setTimeout(seconds,1000);
}

seconds();
