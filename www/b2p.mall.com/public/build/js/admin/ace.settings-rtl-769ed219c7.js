!function(e,t){e("#ace-settings-rtl").removeAttr("checked").on("click",function(){a()});var a=function(){function t(t){function a(e,t){r.find("."+e).removeClass(e).addClass("tmp-rtl-"+e).end().find("."+t).removeClass(t).addClass(e).end().find(".tmp-rtl-"+e).removeClass("tmp-rtl-"+e).addClass(t)}var l=e(document.body);t||l.toggleClass("rtl"),t=t||document.body;var r=e(t);r.find(".dropdown-menu:not(.datepicker-dropdown,.colorpicker)").toggleClass("dropdown-menu-right").end().find(".pull-right:not(.dropdown-menu,blockquote,.profile-skills .pull-right)").removeClass("pull-right").addClass("tmp-rtl-pull-right").end().find(".pull-left:not(.dropdown-submenu,.profile-skills .pull-left)").removeClass("pull-left").addClass("pull-right").end().find(".tmp-rtl-pull-right").removeClass("tmp-rtl-pull-right").addClass("pull-left").end().find(".chosen-select").toggleClass("chosen-rtl").next().toggleClass("chosen-rtl"),a("align-left","align-right"),a("no-padding-left","no-padding-right"),a("arrowed","arrowed-right"),a("arrowed-in","arrowed-in-right"),a("tabs-left","tabs-right"),a("messagebar-item-left","messagebar-item-right"),e(".modal.aside-vc").ace_aside("flip").ace_aside("insideContainer"),r.find(".fa").each(function(){if(!(this.className.match(/ui-icon/)||e(this).closest(".fc-button").length>0))for(var t=this.attributes.length,a=0;a<t;a++){var l=this.attributes[a].value;l.match(/fa\-(?:[\w\-]+)\-left/)?this.attributes[a].value=l.replace(/fa\-([\w\-]+)\-(left)/i,"fa-$1-right"):l.match(/fa\-(?:[\w\-]+)\-right/)&&(this.attributes[a].value=l.replace(/fa\-([\w\-]+)\-(right)/i,"fa-$1-left"))}});var s=l.hasClass("rtl");s?(r.find(".scroll-hz").addClass("make-ltr").find(".scroll-content").wrapInner('<div class="make-rtl" />'),e(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("changeDir","right")):(r.find(".scroll-hz").removeClass("make-ltr").find(".make-rtl").children().unwrap(),e(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("changeDir","left")),e.fn.ace_scroll&&r.find(".scroll-hz").ace_scroll("reset");try{var i=e("#piechart-placeholder");if(i.length>0){var n=l.hasClass("rtl")?"nw":"ne";i.data("draw").call(i.get(0),i,i.data("chart"),n)}}catch(d){}ace.helper.redraw(t,!0)}t(),e(".page-content-area[data-ajax-content=true]").on("ajaxscriptsloaded.rtl",function(){e("body").hasClass("rtl")&&t(this)})}}(jQuery);