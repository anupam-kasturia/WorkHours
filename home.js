let count = 0;
const button = document.querySelector('button');
seconds = 0;
minutes = 0;
hours = 0;
let timerUpdate = function()
{
    const div = document.getElementById('timer');
    let string;
    seconds += 1;
    if (seconds == 60) 
    {
        seconds = 0;
        minutes += 1;
    }
    if (minutes == 60)
    {
        minutes = 0;
        hours += 1;
    }
    // each of them should have two places.. 
    string = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    div.textContent = string;
}
let intervalId;
let onclick = function()
{
    count += 1;
    if ((count % 2) == 0)
    {
        button.style.backgroundColor = "#4CAF50";
        button.textContent = 'Start';
        clearInterval(intervalId);
    }
    else 
    {
        button.style.backgroundColor = "red";
        button.textContent = 'Stop';
        intervalId = setInterval(timerUpdate,1000);
    }
};
button.addEventListener('click',onclick);
/*
when the button is clicked and count is odd... we can start the 
set interval function... and when count is even, we can end the 
function. 
so when we start the function.. 
count would be odd at first. 

*/