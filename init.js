(function (w, d, p) {
    'use strict';

    function load() {
        for (var i = 0; i < w.wreg.widgets.length; i++) {
            if (w.wreg.widgets[i][3] === true) {
                continue;
            }

            var cs = w.wreg.widgets[i][0];
            var channelId = w.wreg.widgets[i][1];

            var x = d.createElement('script');
            x.async = 1;
            x.charset = 'utf-8';
            x.src = 'https://slon.biz/forms/widget.min.js?channelId=' + channelId;
            x.onerror = function () {
                var newX = d.createElement('script');
                newX.async = 1;
                newX.charset = 'utf-8';
                newX.src = p + '?url=' + encodeURIComponent(x.src);
                x.parentNode.replaceChild(newX, x);
            };
            cs.parentNode.insertBefore(x, cs);

            w.wreg.widgets[i][3] = true;
        }
    }

    function init() {
        if ('requestIdleCallback' in w) {
            w.requestIdleCallback(load, { timeout: 1000 });
        } else {
            setTimeout(load, 1000);
        }
    }

    if (d.readyState !== 'loading') {
        init();
    } else {
        d.addEventListener('DOMContentLoaded', init);
    }
})(window, document, 'https://maintext.ru/proxy_slon/main.php');
