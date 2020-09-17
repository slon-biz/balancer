(function (w, d, p) {
    'use strict';

    function load() {
        for (var i = 0; i < w.wreg.widgets.length; i++) {
            if (w.wreg.widgets[i][3] === true) {
                continue;
            }

            var x = d.createElement('script');
            x.async = 1;
            x.charset = 'utf-8';
            x.src = p + '?url=' + encodeURIComponent('https://slon.biz/forms/widget.min.js?promoId=' + w.wreg.widgets[i][1]);

            var cs = w.wreg.widgets[i][0];
            cs.parentNode.insertBefore(x, cs);

            w.wreg.widgets[i][3] = true;
        }
    }

    function init() {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(load, { timeout: 3000 });
        } else {
            setTimeout(load, 3000);
        }
    }

    if (d.readyState !== 'loading') {
        init();
    } else {
        d.addEventListener('DOMContentLoaded', init);
    }
})(window, document, 'https://unioin.com/php/proxy.php');
