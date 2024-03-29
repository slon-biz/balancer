(function (w, d, p) {
    'use strict';

    function load() {
        for (var i = 0; i < w.wreg.widgets.length; i++) {
            if (w.wreg.widgets[i][3] === true) {
                continue;
            }

            w.wreg.widgets[i][3] = true;

            var cs = w.wreg.widgets[i][0];
            var channelId = w.wreg.widgets[i][1];
            var options = w.wreg.widgets[i][2] || {};

            var x = d.createElement('script');
            x.async = 1;
            x.charset = 'utf-8';
            x.src = 'https://slon.biz/forms/widget.min.js?channelId=' + channelId + (options.lang ? '&culture=' + options.lang : '');
            x.onerror = function () {
                var newX = d.createElement('script');
                newX.async = 1;
                newX.charset = 'utf-8';
                newX.src = p + '?url=' + encodeURIComponent(this.src);
                this.parentNode.replaceChild(newX, this);
            };
            cs.parentNode.insertBefore(x, cs);
        }
    }

    if (d.readyState !== 'loading') {
        load();
    } else {
        d.addEventListener('DOMContentLoaded', load);
    }
})(window, document, 'https://slon.voxtel.org/_slon/main.php');
