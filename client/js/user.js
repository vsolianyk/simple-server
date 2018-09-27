//https://codeinterview.io/XBCTEEDZHR

(function() {
    function getUser(id, success, error) {
        $.ajax({
            method: 'GET',
            url: '/api/users/' + id,
            success: success
        });
    }

    function createUser(data, success) {
        $.ajax({
            method: 'POST',
            data: JSON.stringify(data),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            url: '/api/users',
            success: success
        });
    }

    function updateUser(id, data, success) {
        $.ajax({
            method: 'PUT',
            data: JSON.stringify(data),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            url: '/api/users/' + id,
            success: success
        });
    }

    function fillUserForm(user) {
        for(var key in user) {
            var $field = $userForm.find('[name="' + key + '"]');
            if($field) {
                if($field.attr('type') === 'radio') {
                    $field.filter('[value="' + user[key] + '"]')
                        .prop('checked', true);
                } else {
                    $field.val(user[key]);
                }
            }
        }
        setUserImage(user.picture);
    }

    function setUserImage(url) {
        $('img').attr('src', url);
    }

    function getFormData() {
        var user = {};
        $userForm.find('input').each(function(index, item) {
            var val = $(item).val();
            var prop = $(item).attr('name');
            var type = $(item).attr('type');
            if (type === 'radio') {
                if ($(item).is(':checked')) {
                    user[prop] = val;
                }
            } else {
                if (val) {
                    user[prop] = val;
                }
            }
        });
        return user;
    }

    var $userForm = $('#user-form');
    var queryParams = window.location.search.slice(1)
        .split('&')
        .reduce(function (params, item) {
            var parts = item.split('=');
            params[parts[0]] = parts[1];
            return params;
        }, {});

    if (queryParams.id) {
        getUser(queryParams.id, fillUserForm);
    }

    $userForm.find('[name="picture"]')
        .on('change', function (e) {
            setUserImage($(this).val());
        });

    $userForm.submit(function(e) {
        e.preventDefault();
        var user = getFormData();
        if(queryParams.id) {
            updateUser(queryParams.id, user, fillUserForm);
        } else {
            createUser(user, function (user) {
                window.location.href = '/user.html?id=' + user.id;
            });
        }
    });



})();