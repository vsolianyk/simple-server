requirejs.config({
    paths:{
        'jquery': 'https://code.jquery.com/jquery-2.2.4.min'
    },
    shim: {
        'jquery': {
            exports: 'jQuery',
        }
    }
});

require(["timer", "jquery"], function(timer, $) {
    var renderTimer;

    function run() {

        renderTimer = setInterval(function() {
            $('#time').html(timer.getTime());
        }, 1000);
    }

    function stop() {
        clearInterval(renderTimer);
    }

    $('.btn-success').on('click', function() {
        timer.start();
        run();
    });
    $('.btn-primary').on('click', function() {
        timer.stop();
        stop();
    });
    $('.btn-danger').on('click', function() {
        timer.reset();
        stop();
        $('#time').html(timer.getTime());
    });
});