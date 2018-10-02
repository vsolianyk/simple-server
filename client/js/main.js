//https://codeinterview.io/XBCTEEDZHR

(function() {

    function getQuestions(callback) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', '/data/questions.json');

        xhr.send();

        xhr.onload = function() {
            callback(JSON.parse(xhr.response));
        };
    }

    function getAnswerTpl(question, index) {
        var tpl = '';
        switch(question.type) {
            case 'input': 
                tpl = '<input class="form-control" type="text" name="question' + index + '" id="question' + index + '">';
                break;
            case 'select': 
                tpl = '<select class="form-control" name="question' + index + '" id="question' + index + '">';
                for(var i = 0; i < question.options.length; i++) {
                    tpl += '<option value="' + question.options[i] + '">' + question.options[i] + '</option>';
                }
                tpl += '</select>';
                break;
            case 'radio': 
                for(var i = 0; i < question.options.length; i++) {
                    tpl += 
                    '<div class="radio">' +
                        '<label>' +
                            '<input type="radio" ' +
                                'name="question'+ index +'answer'+i+'" ' +
                                'id="question'+ index +'answer'+i+'" ' +
                                'value="'+question.options[i]+'">' +
                            question.options[i] +
                        '</label>' +
                    '</div>';
                }
                break;
        }
        return tpl;
    }

    function renderQuestions(questions) {
        var tpl = '';

        for(var i = 0; i < questions.length; i++) {
            tpl += 
            '<div class="form-group">' +
                '<label>' + (i + 1) + '. ' + questions[i].question + '</label>' +
                getAnswerTpl(questions[i], i) +
            '</div>';
        }

        document.getElementById('quiz').innerHTML = tpl;
    }

    getQuestions(renderQuestions);
    

})();