jQuery.extend({
    print: function (text) {
        return '* ' + text;
    },
});
jQuery.print('Oops');

//==
var settings = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
jQuery.extend(settings, options);

//==
(function ($) {
    jQuery.extend({
        minValue: function (a, b) {
            return a < b ? a : b;
        },
        maxValue: function (a, b) {
            return a > b ? a : b;
        }
    });
})(jQuery)
$.maxValue(1, 100)
$.minValue(1, 100)