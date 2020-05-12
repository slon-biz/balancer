(function (w, d, p) {
    "use strict";
    console.warn('balancer start');
    d.addEventListener("DOMContentLoaded", function () {
        console.warn('balancer DOMContentLoaded');
        var cs = d.currentScript || d.scripts[d.scripts.length - 1];
        console.warn('balancer cs', cs);
        for (var i = 0; i < w.wreg.widgets.length; i++) {
            var wUrl = w.wreg.widgets[i][1] === 'contactform' ? 'forms/widget.contactform.min.js' : 'widget.js'

            var x = d.createElement('script');
            x.type = 'text/javascript';
            x.async = 1;
            x.charset = 'utf-8';
            x.src = p + '?url=' + encodeURIComponent('https://cdn.slon.biz/' + wUrl + '?promoId=' + w.wreg.widgets[i][0]);
            console.warn(x.src);
            cs.parentNode.insertBefore(x, cs)
        }
    });
})(window, document, 'https://tbpage.com/proxy.php');
