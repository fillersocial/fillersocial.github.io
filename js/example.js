/**
 * This tiny script just helps us demonstrate
 * what the various example callbacks are doing
 */
var Example = (function() {
    "use strict";

    var elem = $('#superspan'),
        hideHandler,
        that = {};

    that.init = function(options) {
        elem = $(options.selector);
    };

    that.show = function(text) {
        clearTimeout(hideHandler);

        elem.find("span").html(text);
        elem.delay(200).fadeIn().delay(20000).fadeOut();
    };

    return that;
}());