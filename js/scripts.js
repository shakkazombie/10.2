// scripts.js 

$(function() {
    $("span:even").css('color', 'red');
    $('p').each(function(index, element) {
        var button = '<button class="btn btn-info" data-tmp="' + index + '">Click me</button>';
        $(element).append(button);
    });

    $('button').click(function() {
        alert($(this).attr('data-tmp'));
    });

});