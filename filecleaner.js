// Removes the extra white spaces from a file in JavaScript.
const fs = require('fs');
let fileInfo = '';
fs.readFile('a.txt','utf-8',(err,data) =>{
    if(err)
    {
        console.error("Error found",err)
    }
    else{
    fileInfo = data;
    newStr = fileInfo.replace(/\s+/g,' ');
    fs.writeFile('a.txt',newStr,(err) =>
    {
        if(err)
        {
            console.err;
            return;
        }
    })};
})
