!function(){function e(){var e=!1;e&&u("keydown",o),v.keyboardSupport&&!e&&c("keydown",o)}function t(){if(document.body){var t=document.body,a=document.documentElement,n=window.innerHeight,o=t.scrollHeight;if(H=document.compatMode.indexOf("CSS")>=0?a:t,w=t,e(),k=!0,top!=self)b=!0;else if(o>n&&(t.offsetHeight<=n||a.offsetHeight<=n)){var r=!1,i=function(){r||a.scrollHeight==document.height||(r=!0,setTimeout(function(){a.style.height=document.height+"px",r=!1},500))};if(a.style.height="auto",setTimeout(i,10),H.offsetHeight<=n){var l=document.createElement("div");l.style.clear="both",t.appendChild(l)}}v.fixedBackground||g||(t.style.backgroundAttachment="scroll",a.style.backgroundAttachment="scroll")}}function a(e,t,a,n){if(n||(n=1e3),d(t,a),1!=v.accelerationMax){var o=+new Date-C;if(o<v.accelerationDelta){var r=(1+30/o)/2;r>1&&(r=Math.min(r,v.accelerationMax),t*=r,a*=r)}C=+new Date}if(S.push({NaN:t,NaN:a,NaN:t<0?.99:-.99,NaN:a<0?.99:-.99,NaN:+new Date}),!M){var i=e===document.body,l=function(){for(var o=+new Date,r=0,c=0,u=0;u<S.length;u++){var s=S[u],d=o-s.start,f=d>=v.animationTime,N=f?1:d/v.animationTime;v.pulseAlgorithm&&(N=m(N));var h=s.x*N-s.lastX>>0,w=s.y*N-s.lastY>>0;r+=h,c+=w,s.lastX+=h,s.lastY+=w,f&&(S.splice(u,1),u--)}i?window.scrollBy(r,c):(r&&(e.scrollLeft+=r),c&&(e.scrollTop+=c)),t||a||(S=[]),S.length?K(l,e,n/v.frameRate+1):M=!1};K(l,e,0),M=!0}}function n(e){k||t();var n=e.target,o=l(n);if(!o||e.defaultPrevented||s(w,"embed")||s(n,"embed")&&/\.pdf/i.test(n.src))return!0;var r=e.wheelDeltaX||0,i=e.wheelDeltaY||0;if(r||i||(i=e.wheelDelta||0),!v.touchpadSupport&&f(i))return!0;Math.abs(r)>1.2&&(r*=v.stepSize/120),Math.abs(i)>1.2&&(i*=v.stepSize/120),a(o,-r,-i),e.preventDefault()}function o(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==x.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n)return!0;if(s(t,"button")&&e.keyCode===x.spacebar)return!0;var o=0,r=0,i=l(w),c=i.clientHeight;switch(i==document.body&&(c=window.innerHeight),e.keyCode){case x.up:r=-v.arrowScroll;break;case x.down:r=v.arrowScroll;break;case x.spacebar:r=-(e.shiftKey?1:-1)*c*.9;break;case x.pageup:r=.9*-c;break;case x.pagedown:r=.9*c;break;case x.home:r=-i.scrollTop;break;case x.end:var u=i.scrollHeight-i.scrollTop-c;r=u>0?u+10:0;break;case x.left:o=-v.arrowScroll;break;case x.right:o=v.arrowScroll;break;default:return!0}a(i,o,r),e.preventDefault()}function r(e){w=e.target}function i(e,t){for(var a=e.length;a--;)T[z(e[a])]=t;return t}function l(e){var t=[],a=H.scrollHeight;do{var n=T[z(e)];if(n)return i(t,n);if(t.push(e),a===e.scrollHeight){if(!b||H.clientHeight+10<a)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function c(e,t,a){window.addEventListener(e,t,a||!1)}function u(e,t,a){window.removeEventListener(e,t,a||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,y.x===e&&y.y===t||(y.x=e,y.y=t,S=[],C=0)}function f(e){if(e)return e=Math.abs(e),D.push(e),D.shift(),clearTimeout(A),!(N(D[0],120)&&N(D[1],120)&&N(D[2],120))}function N(e,t){return Math.floor(e/t)==e/t}function h(e){var t,a;return(e*=v.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(a=Math.exp(-1))+(1-Math.exp(-e))*(1-a)),t*v.pulseNormalize}function m(e){return e>=1?1:e<=0?0:(1==v.pulseNormalize&&(v.pulseNormalize/=h(1)),h(e))}var w,p={NaN:150,NaN:1200,NaN:120,NaN:!0,NaN:8,NaN:1,NaN:20,NaN:1,NaN:!0,NaN:50,NaN:!0,NaN:!0,NaN:""},v=p,g=!1,b=!1,y={NaN:0,NaN:0},k=!1,H=document.documentElement,D=[120,120,120],x={NaN:37,NaN:38,NaN:39,NaN:40,NaN:32,NaN:33,NaN:34,NaN:35,NaN:36},S=(v=p,[]),M=!1,C=+new Date,T={};setInterval(function(){T={}},1e4);var E,A,z=(E=0,function(e){return e.uniqueID||(e.uniqueID=E++)}),K=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,a){window.setTimeout(e,a||1e3/60)},L=/chrome/i.test(window.navigator.userAgent),q=null;"onwheel"in document.createElement("div")?q="wheel":"onmousewheel"in document.createElement("div")&&(q="mousewheel"),q&&L&&(c(q,n),c("mousedown",r),c("load",t))}();