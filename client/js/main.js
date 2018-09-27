//https://codeinterview.io/XBCTEEDZHR

(function() {
    function getUsers(callback) {
        $.get({
            method: 'GET',
            url: '/api/users',
            success: function (data) {
                callback(data);
            }
        });
    }

    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    function renderUsers(list) {
        var template = '';
        for(var i = 0; i < list.length; i++) {
            template += 
                '<tr tabindex="' + i + 2 + '" data-id="'+list[i].id+'">' +
                    '<td><img src="' + list[i].picture +'" alt="' + list[i].lastName +'" ></td>' +
                    '<td>' + list[i].firstName + '</td>' +
                    '<td>' + list[i].lastName + '</td>' +
                    '<td>' + list[i].email + '</td>' +
                    '<td>' + list[i].phone + '</td>' +
                    '<td>' + list[i].company + '</td>' +
                    '<td>' + capitalize(list[i].gender) + '</td>' +
                '</tr>';
                    
        }

        $table.find('tbody').html(template);
    }

    var $table = $('#users-table');

    $table.on('click', function(e) {
        var $tr = $(e.target).closest('tr');
        window.location.href = '/user.html?id=' + $tr.data('id');
    });

    $table.on('keyup', function(e) {
        if(e.keyCode !== 13) return;
        var $tr = $(e.target);
        if($tr[0].tagName !== 'tr') {
            $tr = $tr.closest('tr');
        }
        window.location.href = '/user.html?id=' + $tr.data('id');
    });

    getUsers(renderUsers);

})();