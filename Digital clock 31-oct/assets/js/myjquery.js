$(document).ready(function () {
    function updateTime() {
        const d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        hours = hours % 12 || 12;
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        $(".time").text(hours + "  :  " + minutes + "  :   " + seconds);

        if (d> 12) {
            $(".meridiem").text("PM");
        }
        else {
            $(".meridiem").text("AM");
        }

    }

    setInterval(updateTime, 1000);
});
