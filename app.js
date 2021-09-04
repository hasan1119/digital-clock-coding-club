var hourText = document.getElementById('hour')
var minuteText = document.getElementById('minute')
var secondText = document.getElementById('second')


var hour = 0
var minute = 0
var second = 0
setInterval(function () {
    second++


    if (second == 60) {
        if (minute == 60) {
            minute = 0
            hour++;
            if ((hour + '').length == 1) {

                hourText.innerText = "0" + hour;
            } else {
                hourText.innerText = hour;
            }
        }
        if ((minute + '').length == 1) {
            minuteText.innerText = '0' + minute;
        } else {
            minuteText.innerText = minute;
        }

        minute++
        second = 0
    }

    if ((second + '').length == 1) {
        secondText.innerHTML = '0' + second;
    } else {
        secondText.innerHTML = second;
    }


}, 1000)
