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
                    var cs = w.wreg.widgets[i][0];
                    console.warn(cs);
                    var wUrl = w.wreg.widgets[i][2] === 'contactform' ? 'forms/widget.contactform.min.js' : 'widget.js'

                    var x = d.createElement('script');
                    x.type = 'text/javascript';
                    x.async = 1;
                    x.charset = 'utf-8';
                    x.src = p + '?url=' + encodeURIComponent('https://slon.biz/' + wUrl + '?promoId=' + w.wreg.widgets[i][1]);

                    cs.parentNode.insertBefore(x, cs)
                }
            });
        })(window, document, 'https://tbpage.com/proxy.php');
