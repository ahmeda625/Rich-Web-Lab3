import {
    takeWhile,
    takeUntil,
    scan,
    mapTo,
    startWith,
    repeat,
    switchMapTo
} from 'rxjs/operators';

function startCountdown(duration, display) 
{
    var c = 0;
    var c1 = 0;
    var countdown = duration, mins, secs;
    setInterval(function() 
    {
        mins = parseInt(countdown / 60, 10);
        secs = parseInt(countdown % 60, 10);
        if (mins == 0 && secs == 30) 
        {
            if (confirm("Do you want to continue the countdown")) 
            {
                if (c > 2) 
                {
                    alert("too many attempts to restart")
                } 
                else 
                {
                    countdown = countdown + 60 * 1;
                    c++;
                }
            }
        }

        mins = mins < 10 ? "0" + mins : mins;
        secs = secs < 10 ? "0" + secs : secs;
        display.textContent = mins + ":" + secs;
        if (--countdown < 0) 
        {
            countdown = 0;
        }
    }, 1000);
}

window.onload = function() 
{
    var fivemins = 60 * 5;
    display = document.querySelector('#time');
    startCountdown(fivemins, display);
};
