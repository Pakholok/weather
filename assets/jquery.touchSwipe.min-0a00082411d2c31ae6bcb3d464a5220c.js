!function(n){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],n):n(jQuery)}(function(n){function e(e){return!e||void 0!==e.allowPageScroll||void 0===e.swipe&&void 0===e.swipeStatus||(e.allowPageScroll=c),void 0!==e.click&&void 0===e.tap&&(e.tap=e.click),e||(e={}),e=n.extend({},n.fn.swipe.defaults,e),this.each(function(){var r=n(this),i=r.data(P);i||(i=new t(this,e),r.data(P,i))})}function t(e,t){function L(e){if(!(ce()||n(e.target).closest(t.excludedElements,We).length>0)){var r,i=e.originalEvent?e.originalEvent:e,o=O?i.touches[0]:i;return Fe=S,O?Ve=i.touches.length:e.preventDefault(),Ue=0,He=null,Ye=null,je=0,_e=0,Qe=0,Ce=1,Xe=0,ze=de(),qe=ve(),le(),!O||Ve===t.fingers||t.fingers===T||q()?(he(0,o),Ge=Me(),2==Ve&&(he(1,i.touches[1]),_e=Qe=Se(ze[0].start,ze[1].start)),(t.swipeStatus||t.pinchStatus)&&(r=U(i,Fe))):r=!1,r===!1?(Fe=y,U(i,Fe),r):(t.hold&&(nt=setTimeout(n.proxy(function(){We.trigger("hold",[i.target]),t.hold&&(r=t.hold.call(We,i,i.target))},this),t.longTapThreshold)),se(!0),null)}}function D(n){var e=n.originalEvent?n.originalEvent:n;if(Fe!==m&&Fe!==y&&!ae()){var r,i=O?e.touches[0]:e,o=pe(i);if(Ze=Me(),O&&(Ve=e.touches.length),t.hold&&clearTimeout(nt),Fe=E,2==Ve&&(0==_e?(he(1,e.touches[1]),_e=Qe=Se(ze[0].start,ze[1].start)):(pe(e.touches[1]),Qe=Se(ze[0].end,ze[1].end),Ye=me(ze[0].end,ze[1].end)),Ce=Ee(_e,Qe),Xe=Math.abs(_e-Qe)),Ve===t.fingers||t.fingers===T||!O||q()){if(He=xe(o.start,o.end),X(n,He),Ue=ye(o.start,o.end),je=be(),ge(He,Ue),(t.swipeStatus||t.pinchStatus)&&(r=U(e,Fe)),!t.triggerOnTouchEnd||t.triggerOnTouchLeave){var u=!0;if(t.triggerOnTouchLeave){var l=Pe(this);u=Le(o.end,l)}!t.triggerOnTouchEnd&&u?Fe=N(E):t.triggerOnTouchLeave&&!u&&(Fe=N(m)),(Fe==y||Fe==m)&&U(e,Fe)}}else Fe=y,U(e,Fe);r===!1&&(Fe=y,U(e,Fe))}}function R(n){var e=n.originalEvent;return O&&e.touches.length>0?(ue(),!0):(ae()&&(Ve=Je),Ze=Me(),je=be(),_()||!j()?(Fe=y,U(e,Fe)):t.triggerOnTouchEnd||0==t.triggerOnTouchEnd&&Fe===E?(n.preventDefault(),Fe=m,U(e,Fe)):!t.triggerOnTouchEnd&&B()?(Fe=m,H(e,Fe,f)):Fe===E&&(Fe=y,U(e,Fe)),se(!1),null)}function k(){Ve=0,Ze=0,Ge=0,_e=0,Qe=0,Ce=1,le(),se(!1)}function A(n){var e=n.originalEvent;t.triggerOnTouchLeave&&(Fe=N(m),U(e,Fe))}function I(){We.unbind(Re,L),We.unbind(Ne,k),We.unbind(ke,D),We.unbind(Ae,R),Ie&&We.unbind(Ie,A),se(!1)}function N(n){var e=n,r=C(),i=j(),o=_();return!r||o?e=y:!i||n!=E||t.triggerOnTouchEnd&&!t.triggerOnTouchLeave?!i&&n==m&&t.triggerOnTouchLeave&&(e=y):e=m,e}function U(n,e){var t=void 0;return z()||V()?t=H(n,e,h):(W()||q())&&t!==!1&&(t=H(n,e,p)),ie()&&t!==!1?t=H(n,e,d):oe()&&t!==!1?t=H(n,e,g):re()&&t!==!1&&(t=H(n,e,f)),e===y&&k(n),e===m&&(O?0==n.touches.length&&k(n):k(n)),t}function H(e,c,s){var w=void 0;if(s==h){if(We.trigger("swipeStatus",[c,He||null,Ue||0,je||0,Ve,ze]),t.swipeStatus&&(w=t.swipeStatus.call(We,e,c,He||null,Ue||0,je||0,Ve,ze),w===!1))return!1;if(c==m&&F()){if(We.trigger("swipe",[He,Ue,je,Ve,ze]),t.swipe&&(w=t.swipe.call(We,e,He,Ue,je,Ve,ze),w===!1))return!1;switch(He){case r:We.trigger("swipeLeft",[He,Ue,je,Ve,ze]),t.swipeLeft&&(w=t.swipeLeft.call(We,e,He,Ue,je,Ve,ze));break;case i:We.trigger("swipeRight",[He,Ue,je,Ve,ze]),t.swipeRight&&(w=t.swipeRight.call(We,e,He,Ue,je,Ve,ze));break;case o:We.trigger("swipeUp",[He,Ue,je,Ve,ze]),t.swipeUp&&(w=t.swipeUp.call(We,e,He,Ue,je,Ve,ze));break;case u:We.trigger("swipeDown",[He,Ue,je,Ve,ze]),t.swipeDown&&(w=t.swipeDown.call(We,e,He,Ue,je,Ve,ze))}}}if(s==p){if(We.trigger("pinchStatus",[c,Ye||null,Xe||0,je||0,Ve,Ce,ze]),t.pinchStatus&&(w=t.pinchStatus.call(We,e,c,Ye||null,Xe||0,je||0,Ve,Ce,ze),w===!1))return!1;if(c==m&&Y())switch(Ye){case l:We.trigger("pinchIn",[Ye||null,Xe||0,je||0,Ve,Ce,ze]),t.pinchIn&&(w=t.pinchIn.call(We,e,Ye||null,Xe||0,je||0,Ve,Ce,ze));break;case a:We.trigger("pinchOut",[Ye||null,Xe||0,je||0,Ve,Ce,ze]),t.pinchOut&&(w=t.pinchOut.call(We,e,Ye||null,Xe||0,je||0,Ve,Ce,ze))}}return s==f?(c===y||c===m)&&(clearTimeout($e),clearTimeout(nt),J()&&!ne()?(Ke=Me(),$e=setTimeout(n.proxy(function(){Ke=null,We.trigger("tap",[e.target]),t.tap&&(w=t.tap.call(We,e,e.target))},this),t.doubleTapThreshold)):(Ke=null,We.trigger("tap",[e.target]),t.tap&&(w=t.tap.call(We,e,e.target)))):s==d?(c===y||c===m)&&(clearTimeout($e),Ke=null,We.trigger("doubletap",[e.target]),t.doubleTap&&(w=t.doubleTap.call(We,e,e.target))):s==g&&(c===y||c===m)&&(clearTimeout($e),Ke=null,We.trigger("longtap",[e.target]),t.longTap&&(w=t.longTap.call(We,e,e.target))),w}function j(){var n=!0;return null!==t.threshold&&(n=Ue>=t.threshold),n}function _(){var n=!1;return null!==t.cancelThreshold&&null!==He&&(n=we(He)-Ue>=t.cancelThreshold),n}function Q(){return null!==t.pinchThreshold?Xe>=t.pinchThreshold:!0}function C(){var n;return n=t.maxTimeThreshold&&je>=t.maxTimeThreshold?!1:!0}function X(n,e){if(t.allowPageScroll===c||q())n.preventDefault();else{var l=t.allowPageScroll===s;switch(e){case r:(t.swipeLeft&&l||!l&&t.allowPageScroll!=w)&&n.preventDefault();break;case i:(t.swipeRight&&l||!l&&t.allowPageScroll!=w)&&n.preventDefault();break;case o:(t.swipeUp&&l||!l&&t.allowPageScroll!=v)&&n.preventDefault();break;case u:(t.swipeDown&&l||!l&&t.allowPageScroll!=v)&&n.preventDefault()}}}function Y(){var n=G(),e=Z(),t=Q();return n&&e&&t}function q(){return!!(t.pinchStatus||t.pinchIn||t.pinchOut)}function W(){return!(!Y()||!q())}function F(){var n=C(),e=j(),t=G(),r=Z(),i=_(),o=!i&&r&&t&&e&&n;return o}function V(){return!!(t.swipe||t.swipeStatus||t.swipeLeft||t.swipeRight||t.swipeUp||t.swipeDown)}function z(){return!(!F()||!V())}function G(){return Ve===t.fingers||t.fingers===T||!O}function Z(){return 0!==ze[0].end.x}function B(){return!!t.tap}function J(){return!!t.doubleTap}function K(){return!!t.longTap}function $(){if(null==Ke)return!1;var n=Me();return J()&&n-Ke<=t.doubleTapThreshold}function ne(){return $()}function ee(){return(1===Ve||!O)&&(isNaN(Ue)||Ue<t.threshold)}function te(){return je>t.longTapThreshold&&b>Ue}function re(){return!(!ee()||!B())}function ie(){return!(!$()||!J())}function oe(){return!(!te()||!K())}function ue(){Be=Me(),Je=event.touches.length+1}function le(){Be=0,Je=0}function ae(){var n=!1;if(Be){var e=Me()-Be;e<=t.fingerReleaseThreshold&&(n=!0)}return n}function ce(){return!(We.data(P+"_intouch")!==!0)}function se(n){n===!0?(We.bind(ke,D),We.bind(Ae,R),Ie&&We.bind(Ie,A)):(We.unbind(ke,D,!1),We.unbind(Ae,R,!1),Ie&&We.unbind(Ie,A,!1)),We.data(P+"_intouch",n===!0)}function he(n,e){var t=void 0!==e.identifier?e.identifier:0;return ze[n].identifier=t,ze[n].start.x=ze[n].end.x=e.pageX||e.clientX,ze[n].start.y=ze[n].end.y=e.pageY||e.clientY,ze[n]}function pe(n){var e=void 0!==n.identifier?n.identifier:0,t=fe(e);return t.end.x=n.pageX||n.clientX,t.end.y=n.pageY||n.clientY,t}function fe(n){for(var e=0;e<ze.length;e++)if(ze[e].identifier==n)return ze[e]}function de(){for(var n=[],e=0;5>=e;e++)n.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0});return n}function ge(n,e){e=Math.max(e,we(n)),qe[n].distance=e}function we(n){return qe[n]?qe[n].distance:void 0}function ve(){var n={};return n[r]=Te(r),n[i]=Te(i),n[o]=Te(o),n[u]=Te(u),n}function Te(n){return{direction:n,distance:0}}function be(){return Ze-Ge}function Se(n,e){var t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.round(Math.sqrt(t*t+r*r))}function Ee(n,e){var t=e/n*1;return t.toFixed(2)}function me(){return 1>Ce?a:l}function ye(n,e){return Math.round(Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2)))}function Oe(n,e){var t=n.x-e.x,r=e.y-n.y,i=Math.atan2(r,t),o=Math.round(180*i/Math.PI);return 0>o&&(o=360-Math.abs(o)),o}function xe(n,e){var t=Oe(n,e);return 45>=t&&t>=0?r:360>=t&&t>=315?r:t>=135&&225>=t?i:t>45&&135>t?u:o}function Me(){var n=new Date;return n.getTime()}function Pe(e){e=n(e);var t=e.offset(),r={left:t.left,right:t.left+e.outerWidth(),top:t.top,bottom:t.top+e.outerHeight()};return r}function Le(n,e){return n.x>e.left&&n.x<e.right&&n.y>e.top&&n.y<e.bottom}var De=O||M||!t.fallbackToMouseEvents,Re=De?M?x?"MSPointerDown":"pointerdown":"touchstart":"mousedown",ke=De?M?x?"MSPointerMove":"pointermove":"touchmove":"mousemove",Ae=De?M?x?"MSPointerUp":"pointerup":"touchend":"mouseup",Ie=De?null:"mouseleave",Ne=M?x?"MSPointerCancel":"pointercancel":"touchcancel",Ue=0,He=null,je=0,_e=0,Qe=0,Ce=1,Xe=0,Ye=0,qe=null,We=n(e),Fe="start",Ve=0,ze=null,Ge=0,Ze=0,Be=0,Je=0,Ke=0,$e=null,nt=null;try{We.bind(Re,L),We.bind(Ne,k)}catch(et){n.error("events not supported "+Re+","+Ne+" on jQuery.swipe")}this.enable=function(){return We.bind(Re,L),We.bind(Ne,k),We},this.disable=function(){return I(),We},this.destroy=function(){I(),We.data(P,null),We=null},this.option=function(e,r){if(void 0!==t[e]){if(void 0===r)return t[e];t[e]=r}else n.error("Option "+e+" does not exist on jQuery.swipe.options");return null}}var r="left",i="right",o="up",u="down",l="in",a="out",c="none",s="auto",h="swipe",p="pinch",f="tap",d="doubletap",g="longtap",w="horizontal",v="vertical",T="all",b=10,S="start",E="move",m="end",y="cancel",O="ontouchstart"in window,x=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,M=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,P="TouchSwipe",L={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};n.fn.swipe=function(t){var r=n(this),i=r.data(P);if(i&&"string"==typeof t){if(i[t])return i[t].apply(this,Array.prototype.slice.call(arguments,1));n.error("Method "+t+" does not exist on jQuery.swipe")}else if(!(i||"object"!=typeof t&&t))return e.apply(this,arguments);return r},n.fn.swipe.defaults=L,n.fn.swipe.phases={PHASE_START:S,PHASE_MOVE:E,PHASE_END:m,PHASE_CANCEL:y},n.fn.swipe.directions={LEFT:r,RIGHT:i,UP:o,DOWN:u,IN:l,OUT:a},n.fn.swipe.pageScroll={NONE:c,HORIZONTAL:w,VERTICAL:v,AUTO:s},n.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:T}});