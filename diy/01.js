(function ($) {
    $.fn.say = function () {
        this.each(function () {
            $(this).text("Hello, World!");
        });
    }
    $.fn.demo = function (options) {
        this.each(function () {
            $(this).text(options.text);
            $(this).css('color', options.color)
        });
    }
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

$('#title').say();

$('h3').demo({
    text: 'Salut, le monde!',
    color: '#005dff'
});

$('h3').demo2({
    text: 'Salut, le monde!',
    color: '#005dff',
    complete: function () { alert('Done!') }
});