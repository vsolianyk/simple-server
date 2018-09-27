//https://codeinterview.io/XBCTEEDZHR

(function() {
    function getBreedImage(breedName, callback, count) {
        $.ajax({
            url: 'https://dog.ceo/api/breed/'+breedName+'/images/random',
            method: 'GET',
            async: true,
            statusCode: {
                200: function(data) {
                    callback(data.message);
                },
                503: function() {
                    if(count === 0) return;
                    getBreedImage(breedName, callback, --count || 5);
                }
            }
        });
    }

    function getBreedsList(callback) {
        $.ajax({
            url: 'https://dog.ceo/api/breeds/list/all',
            method: 'GET',
            success: function (data) {
                callback(data.message);
            }
        });
    }

    function getRandomBreeds(num) {
        var result = [];

        for (var i = 0; i < num; i++) {
           var index = Math.floor(Math.random() * breeds.length);
           result.push(breeds[index]);
        }
        return result;
    }

    function renderRandomBreeds() {
        var forRender = getRandomBreeds(6);
        forRender.forEach(function(item) {
            getBreedImage(item, function (url) {
                renderImage(url, item);
            });
        });
    }

    function renderImage(url, title) {
        var container = $('#breeds');
        var item = $('<div></div>');
        item.addClass('col-sm-6 col-md-4');
        item.html('<div class="thumbnail">' +
            '<img src="'+url+'" alt="...">' +
            '<div class="caption">' +
                '<h3>'+title+'</h3>' +
            '</div>' +
        '</div>');
        container.append(item);
    }

    var breeds = [];
    getBreedsList(function(breedObj) {
        breeds = Object.keys(breedObj);
        
        renderRandomBreeds();
    });

    $('#reload').on('click', function() {
        if(breeds.length) {
            $('#breeds').html('');
            renderRandomBreeds();
        }
    });

})();