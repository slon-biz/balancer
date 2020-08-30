(function (w, d, p) {
    'use strict';

    (function (fn) {
        if (d.readyState !== 'loading') {
            fn();
        } else {
            d.addEventListener('DOMContentLoaded', fn);
        }
    })(function () {
        for (var i = 0; i < w.wreg.widgets.length; i++) {
            var x = d.createElement('script');
            x.async = 1;
            x.charset = 'utf-8';
            x.src = p + '?url=' + encodeURIComponent('https://slon.biz/forms/widget.min.js?promoId=' + w.wreg.widgets[i][1]);

            var cs = w.wreg.widgets[i][0];
            cs.parentNode.insertBefore(x, cs)
        }
    });
})(window, document, 'https://unioin.com/php/proxy.php');
