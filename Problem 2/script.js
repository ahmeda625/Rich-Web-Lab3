function startTimer(duration, display) 
{
    var c = 0;
    var c1 = 0;
    var timer = duration, minutes, seconds;
    setInterval(function() 
    {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        if (minutes == 0 && seconds == 30) 
        {
            if (confirm("Do you want to continue the timer")) 
            {
                if (c > 2) 
                {
                    alert("too many attempts to restart")
                } 
                else 
                {
                    timer = timer + 60 * 1;
                    c++;
                }
            }
        }

        if (seconds == 0 && c1 != 0) 
        {
            if (c1 == 1) 
            {
                alert("Finished!!");
                c1 = 2;
            }
        } 
        else 
        {
            c1 = 1;
        }

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) 
        {
            timer = 0;
        }
    }, 1000);
}

window.onload = function() 
{
    var fiveMinutes = 60 * 5;
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
