//https://codeinterview.io/XBCTEEDZHR

(function() {
    function getBreedImage(breedName, callback) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://dog.ceo/api/breed/'+breedName+'/images/random');
        
        xhr.onload = function () {
            callback(JSON.parse(xhr.response).message);
        };
        xhr.send();
    }

    function getBreedsList(callback) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
        
        xhr.onload = function () {
            callback(JSON.parse(xhr.response).message);
        };
        xhr.send();
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
        var container = document.getElementById('breeds');
        var item = document.createElement('div');
        item.className = 'col-sm-6 col-md-4';
        item.innerHTML = '<div class="thumbnail">' +
            '<img src="'+url+'" alt="...">' +
            '<div class="caption">' +
                '<h3>'+title+'</h3>' +
            '</div>' +
        '</div>';
        container.appendChild(item);
    }

    var breeds = [];

    getBreedsList(function(breedObj) {
        breeds = Object.keys(breedObj);
        
        renderRandomBreeds();
    });

    document.getElementById('reload').addEventListener('click', function() {
        if(breeds.length) {
            document.getElementById('breeds').innerHTML = '';
            renderRandomBreeds();
        }
    });

})();