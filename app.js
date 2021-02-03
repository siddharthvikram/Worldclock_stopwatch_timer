window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var stopwatchSeconds = document.getElementById("seconds");
    var stopwatchTens = document.getElementById("tens");
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        stopwatchSeconds.innerHTML = seconds;
        stopwatchTens.innerHTML = tens;
    }

    function startTimer() {
        tens++;

        if (tens < 9) {
            stopwatchTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            stopwatchTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            console.log(seconds)
            stopwatchSeconds.innerHTML = "0" + seconds;
            tens = 0;
            stopwatchTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            stopwatchSeconds.innerHTML = seconds;
        }
    }

    var tMinutes = 05;
    var tSeconds = 00;
    var userSeconds = document.getElementById("userSeconds");
    var userMinutes = document.getElementById("userMinutes");
    var timerMinutes = document.getElementById("timerMinutes");
    var timerSeconds = document.getElementById("timerSeconds");
    var setTimer = document.getElementById("setTimer");
    var tStart = document.getElementById("tStart");
    var tStop = document.getElementById("tStop");
    var tReset = document.getElementById("tReset");
    var tInterval;


    setTimer.onclick = function () {
        userMinutes = prompt("enter minutes");
        if (userMinutes > 9) {
            timerMinutes.innerHTML = userMinutes;
        } else {
            timerMinutes.innerHTML = "0" + userMinutes;
        }

        while (true) {
            userSeconds = prompt("Enter Second");

            if (userSeconds > 59) {
                alert("Second must be less than 60")
            } else {
                break;
            }
        }

        if (userSeconds > 9) {
            timerSeconds.innerHTML = userSeconds;
        } else {
            timerSeconds.innerHTML = "0" + userSeconds;
        }

        tMinutes = userMinutes;
        tSeconds = userSeconds;
    }

    tStart.onclick = function () {
        clearInterval(tInterval);
        tInterval = setInterval(timer, 1000);
    }

    tStop.onclick = function () {
        clearInterval(tInterval);
    }

    tReset.onclick = function () {
        clearInterval(tInterval);
        tMinutes = 05;
        tSeconds = 00;
        timerMinutes.innerHTML = "0" + tMinutes;
        timerSeconds.innerHTML = "0" + tSeconds;
    }

    function timer() {
        tSeconds--;
        if (tSeconds < 9) {
            timerSeconds.innerHTML = "0" + tSeconds;
        }

        if (tSeconds > 9) {
            timerSeconds.innerHTML = tSeconds;
        }

        if (tSeconds < 0) {
            tMinutes--;
            tSeconds = 59;
            timerMinutes.innerHTML = "0" + tMinutes;
            timerSeconds.innerHTML = tSeconds;
        }

        if (tMinutes > 9) {
            timerMinutes.innerHTML = tMinutes;
        }
    }

    var nyRef = document.getElementById("newYork");
    var parisRef = document.getElementById("paris");
    var lonRef = document.getElementById("london");
    var ndRef = document.getElementById("newDelhi");
    var tokRef = document.getElementById("tokyo");
    var hkRef = document.getElementById("hongKong");
    var dubRef = document.getElementById("dubai");
    var nyTime = document.getElementById("nyTime");
    var parisTime = document.getElementById("parisTime");
    var lonTime = document.getElementById("lonTime");
    var ndTime = document.getElementById("ndTime");
    var tokTime = document.getElementById("tokTime");
    var hkTime = document.getElementById("hkTime");
    var dubTime = document.getElementById("dubTime");

    // nyRef.onclick = function () {
    //     timeFetcher("http://worldtimeapi.org/api/timezone/America/New_York", nyTime)
    // }

    // parisRef.onclick = function () {
    //     timeFetcher("http://worldtimeapi.org/api/timezone/Europe/Paris", parisTime)
    // }

    // lonRef.onclick = function () {
    //     timeFetcher("http://worldtimeapi.org/api/timezone/Europe/London", lonTime)
    // }

    // ndRef.onclick = function () {
    //     timeFetcher("http://worldtimeapi.org/api/timezone/Asia/Kolkata", ndTime)
    // }

    // tokRef.onclick = function () {
    //     timeFetcher("http://worldtimeapi.org/api/timezone/Asia/Tokyo", tokTime)
    // }

    // hkRef.onclick = function () {
    //     timeFetcher("http://worldtimeapi.org/api/timezone/Asia/Hong_Kong", hkTime)
    // }

    // dubRef.onclick = function () {
    //     timeFetcher("http://worldtimeapi.org/api/timezone/Asia/Dubai", dubTime)
    // }

    function timeRefresh(){
    timeFetcher("http://worldtimeapi.org/api/timezone/America/New_York", nyTime)
    timeFetcher("http://worldtimeapi.org/api/timezone/Europe/Paris", parisTime)
    timeFetcher("http://worldtimeapi.org/api/timezone/Europe/London", lonTime)
    timeFetcher("http://worldtimeapi.org/api/timezone/Asia/Kolkata", ndTime)
    timeFetcher("http://worldtimeapi.org/api/timezone/Asia/Tokyo", tokTime)
    timeFetcher("http://worldtimeapi.org/api/timezone/Asia/Hong_Kong", hkTime)
    timeFetcher("http://worldtimeapi.org/api/timezone/Asia/Dubai", dubTime)
    }

    setInterval(timeRefresh, 1000)

    function timeFetcher(area, timeDis) {
        fetch(area)
            .then(response => response.json())
            .then(data => {
                let time = data.datetime;
                var timeString = "";
                for (i = 11; i < 19; i++) {
                    var ch = time.charAt(i);
                    timeString = timeString + ch;
                }
                timeDis.innerHTML = timeString;
            });
    }
}