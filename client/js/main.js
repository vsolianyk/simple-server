//https://codeinterview.io/XBCTEEDZHR

(function() {

    function getImage(callback) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
        
        xhr.onload = function () {
            callback(JSON.parse(xhr.response));
        };
        xhr.send();
    }
    function getUsers(callback) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', '/api/users');
        
        xhr.onload = function () {
            callback(JSON.parse(xhr.response));
        };
        xhr.send();
    }

    function saveUser(data, callback) {
        var xhr = new XMLHttpRequest();

        xhr.open('POST', '/api/users');
        
        xhr.onload = function () {
            callback();
        };
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    }

    function renderUsers(list) {
        var template = '';

        for(var i = 0; i < list.length; i++) {
            template += '<li class="list-group-item">' + list[i].firstName +
                ' ' + list[i].lastName + '</li>';
        }

        document.getElementById('users-list').innerHTML = template;
    }

    getUsers(renderUsers);

    getImage(function (data) {
        document.getElementById('img').innerHTML =
            '<img src="' + data.message +'" />';
        console.log(data);
    });

    document.querySelector('form')
        .addEventListener('submit', function(e) {
            e.preventDefault();
            var user = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value
            };
            saveUser(user, function () {
                getUsers(renderUsers);
            });
        });
})();