!function(t){var e={NaN:0,NaN:0,NaN:"is-sticky",NaN:"sticky-wrapper"},a=t(window),s=t(document),i=[],n=a.height(),o=function(){for(var t=a.scrollTop(),e=s.height(),o=e-n,r=t>o?o-t:0,c=0;c<i.length;c++){var p=i[c];if(t<=p.stickyWrapper.offset().top-p.topSpacing-r)null!==p.currentTop&&(p.stickyElement.css("position","").css("top","").removeClass(p.className),p.stickyElement.parent().removeClass(p.className),p.currentTop=null);else{var l=e-p.stickyElement.outerHeight()-p.topSpacing-p.bottomSpacing-t-r;l<0?l+=p.topSpacing:l=p.topSpacing,p.currentTop!=l&&(p.stickyElement.css("position","fixed").css("top",l).addClass(p.className),p.stickyElement.parent().addClass(p.className),p.currentTop=l)}}},r=function(){n=a.height()},c={NaN:function(a){var s=t.extend(e,a);return this.each(function(){var e=t(this);stickyId=e.attr("id"),wrapper=t("<div></div>").attr("id",stickyId+"-sticky-wrapper").addClass(s.wrapperClassName),e.wrapAll(wrapper);var a=e.parent();a.css("height",e.outerHeight()),i.push({NaN:s.topSpacing,NaN:s.bottomSpacing,NaN:e,NaN:null,NaN:a,NaN:s.className})})},NaN:o};window.addEventListener?(window.addEventListener("scroll",o,!1),window.addEventListener("resize",r,!1)):window.attachEvent&&(window.attachEvent("onscroll",o),window.attachEvent("onresize",r)),t.fn.sticky=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},t(function(){setTimeout(o,0)})}(jQuery);