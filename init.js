var LVM = (function (LVM) {
    "use strict";

    /* ----------------------------------------------------------- */
    /* == initiator */
    /* ----------------------------------------------------------- */

    LVM.initiator = function (promoId, options) {
      options = options || {};
      
      (function(d, w, p) {
          var cs = d.currentScript || d.scripts[d.scripts.length - 1];
          (function a(u, c) {
              var s = d.createElement('script');
              s.type = 'text/javascript';
              s.async = !0;
              s.charset = 'utf-8';
              s.src = u;
              s.onerror = c ? function() {
                  a(c)
              } : null;
              cs.parentNode.insertBefore(s, cs)
          })(w, p + '?url=' + encodeURIComponent(w))
      })(document, 'https://cdn.slon.biz/forms/widget.contactform.min.js?promoId=1042', '/proxy.php');
    };

    /* ----------------------------------------------------------- */
    /* == return */
    /* ----------------------------------------------------------- */

    return LVM;

}(LVM || {}));
