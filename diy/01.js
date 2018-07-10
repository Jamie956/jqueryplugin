(function ($) {
    $.fn.demo2 = function (options) {
        var settings = $.extend({
            text: 'Hello, World!',
            color: null
        }, options);
        this.each(function () {
            $(this).text(settings.text);
            $(this).css('color', settings.color);
            settings.complete()
        });
    }
}(jQuery));

$('h3').demo2({
    text: 'Salut, le monde!',
    color: '#005dff',
    complete: function () { alert('Done!') }
});