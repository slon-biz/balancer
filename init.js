"use strict";

(function (w, d, p) {
    d.addEventListener("DOMContentLoaded", function () {
        var cs = d.currentScript || d.scripts[d.scripts.length - 1];
        for (var i = 0; i < w.wreg.widgets.length; i++) {
            var wUrl = w.wreg.widgets[i][1] === 'contactform' ? 'forms/widget.contactform.min.js' : 'widget.js'

            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = 1;
            s.charset = 'utf-8';
            s.src = p + '?url=' + encodeURIComponent('https://cdn.slon.biz/' + wUrl + '?promoId=' + w.wreg.widgets[i][0]);
            cs.parentNode.insertBefore(s, cs)
        }
    });
})(window, document, 'https://tbpage.com/proxy.php');
