define('timer', function() {
    var startTime = 0;
    var stopTime = 0;
    var time = 0;
    var timer = null;

    function start() {
        if(timer) return;
        if (!startTime) {
            startTime = Date.now();
        } else {
            startTime = Date.now() - (stopTime - startTime);
            stopTime = 0;
        }
        timer = setInterval(function() {
            time = (Date.now() - startTime) / 1000;
            console.log(time);
        }, 100);
    }

    function stop() {
        if(!timer) return;
        clearInterval(timer);
        stopTime = Date.now();
        timer = null;
    }

    function reset() {
        stop();
        stopTime = 0;
        startTime = 0;
        time = 0;
    }

    function getTime() {
        var hours = Math.floor(time / 60 / 60);
        var minutes = Math.floor((time / 60) % 60);
        var seconds = Math.floor(time % 60);
        return (hours <= 9 ? '0' : '') + hours + ':' +
            (minutes <= 9 ? '0' : '') + minutes + ':' +
            (seconds <= 9 ? '0' : '') + seconds;
    }

    return {
        start: start,
        stop: stop,
        reset: reset,
        getTime: getTime
    };
});