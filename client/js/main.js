//https://codeinterview.io/XBCTEEDZHR

(function() {
    function getBase64(file, callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            callback(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }

    document.getElementById('quiz')
        .querySelector('[type="file"]')
        .addEventListener('change', function(e) {
            var file = e.target.files[0];
            getBase64(file, function(data) {
                document.getElementById('image-container').innerHTML =
                '<object type="application/pdf" ' +
                'data="'+data+'" width="400" height="300"></object>';
            });
        });
    

})();