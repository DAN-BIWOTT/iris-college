/*!
* jQuery Cookie Plugin v1.4.0
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2013 Klaus Hartl
* Released under the MIT license
*/
!function(e,n,o){function r(e){return e}function t(e){return decodeURIComponent(e.replace(i," "))}var i=/\+/g,u=e.cookie=function(i,a,s){if(a!==o){if(s=e.extend({},u.defaults,s),null===a&&(s.expires=-1),"number"==typeof s.expires){var p=s.expires,c=s.expires=new Date;c.setDate(c.getDate()+p)}return a=u.json?JSON.stringify(a):String(a),n.cookie=[encodeURIComponent(i),"=",u.raw?a:encodeURIComponent(a),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var f,l=u.raw?r:t,d=n.cookie.split("; "),m=0;f=d[m]&&d[m].split("=");m++)if(l(f.shift())===i){var x=l(f.join("="));return u.json?JSON.parse(x):x}return null};u.defaults={},e.removeCookie=function(n,o){return null!==e.cookie(n)&&(e.cookie(n,null,o),!0)}}(jQuery,document);