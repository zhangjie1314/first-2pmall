!function(e,a){function s(a,s){var t=a.find(".widget-main").eq(0);e(window).off("resize.widget.scroll");var i=ace.vars.old_ie||ace.vars.touch;if(s){var l=t.data("ace_scroll");l&&t.data("save_scroll",{size:l.size,lock:l.lock,lock_anyway:l.lock_anyway});var o=a.height()-a.find(".widget-header").height()-10;o=parseInt(o),t.css("min-height",o),i?(l&&t.ace_scroll("disable"),t.css("max-height",o).addClass("overflow-scroll")):(l?t.ace_scroll("update",{size:o,mouseWheelLock:!0,lockAnyway:!0}):t.ace_scroll({size:o,mouseWheelLock:!0,lockAnyway:!0}),t.ace_scroll("enable").ace_scroll("reset")),e(window).on("resize.widget.scroll",function(){var e=a.height()-a.find(".widget-header").height()-10;e=parseInt(e),t.css("min-height",e),i?t.css("max-height",e).addClass("overflow-scroll"):t.ace_scroll("update",{size:e}).ace_scroll("reset")})}else{t.css("min-height","");var n=t.data("save_scroll");n&&t.ace_scroll("update",{size:n.size,mouseWheelLock:n.lock,lockAnyway:n.lock_anyway}).ace_scroll("enable").ace_scroll("reset"),i?t.css("max-height","").removeClass("overflow-scroll"):n||t.ace_scroll("disable")}}var t=function(a,t){this.$box=e(a);this.reload=function(){var e=this.$box,a=!1;"static"==e.css("position")&&(a=!0,e.addClass("position-relative")),e.append('<div class="widget-box-overlay"><i class="'+ace.vars.icon+'loading-icon fa fa-spinner fa-spin fa-2x white"></i></div>'),e.one("reloaded.ace.widget",function(){e.find(".widget-box-overlay").remove(),a&&e.removeClass("position-relative")})},this.closeFast=function(){this.close(0)},this.close=function(e){var a=this.$box,e="undefined"==typeof e?300:e;a.fadeOut(e,function(){a.trigger("closed.ace.widget"),a.remove()})},this.toggleFast=function(){this.toggle(null,null,0,0)},this.toggle=function(e,a,s,t){var i=this.$box,l=i.find(".widget-body").eq(0),o=null,n=e||(i.hasClass("collapsed")?"show":"hide"),r="show"==n?"shown":"hidden";if(a||(a=i.find("> .widget-header a[data-action=collapse]").eq(0),0==a.length&&(a=null)),a){o=a.find(ace.vars[".icon"]).eq(0);var c,d=null,g=null;(d=o.attr("data-icon-show"))?g=o.attr("data-icon-hide"):(c=o.attr("class").match(/fa\-(.*)\-(up|down)/))&&(d="fa-"+c[1]+"-down",g="fa-"+c[1]+"-up")}var s="undefined"==typeof s?250:s,t="undefined"==typeof t?200:t;"show"==n?(o&&o.removeClass(d).addClass(g),l.hide(),i.removeClass("collapsed"),l.slideDown(s,function(){i.trigger(r+".ace.widget")})):(o&&o.removeClass(g).addClass(d),l.slideUp(t,function(){i.addClass("collapsed"),i.trigger(r+".ace.widget")})),i.trigger("toggled.ace.widget",[n])},this.hide=function(){this.toggle("hide")},this.show=function(){this.toggle("show")},this.hideFast=function(){this.toggle("hide",null,0,0)},this.showFast=function(){this.toggle("show",null,0,0)},this.fullscreen=function(e){var a=this.$box.find("> .widget-header a[data-action=fullscreen]").find(ace.vars[".icon"]).eq(0),t=null,i=null;(t=a.attr("data-icon1"))?i=a.attr("data-icon2"):(t="fa-expand",i="fa-compress");var l=this.$box.hasClass("fullscreen"),o=e!==!0&&e!==!1;e===!0||o&&!l?(a.removeClass(t).addClass(i),this.$box.addClass("fullscreen"),s(this.$box,!0)):(e===!1||o&&l)&&(a.addClass(t).removeClass(i),this.$box.removeClass("fullscreen"),s(this.$box,!1)),this.$box.trigger("fullscreened.ace.widget")}};e.fn.widget_box=function(s,i){var l,o=this.each(function(){var a=e(this),o=a.data("widget_box"),n="object"==typeof s&&s;o||a.data("widget_box",o=new t(this,n)),"string"==typeof s&&(l=o[s](i))});return l===a?o:l},e(document).on(ace.click_event+".ace.widget",".widget-header a[data-action]",function(a){a.preventDefault();var s=e(this),i=s.closest(".widget-box");if(0!=i.length&&!i.hasClass("ui-sortable-helper")){var l=i.data("widget_box");l||i.data("widget_box",l=new t(i.get(0)));var o=s.data("action");if("collapse"==o){var n,r=i.hasClass("collapsed")?"show":"hide";if(i.trigger(n=e.Event(r+".ace.widget")),n.isDefaultPrevented())return;i.trigger(n=e.Event("toggle.ace.widget"),[r]),l.toggle(r,s)}else if("close"==o){var n;if(i.trigger(n=e.Event("close.ace.widget")),n.isDefaultPrevented())return;l.close()}else if("reload"==o){s.blur();var n;if(i.trigger(n=e.Event("reload.ace.widget")),n.isDefaultPrevented())return;l.reload()}else if("fullscreen"==o){var n;if(i.trigger(n=e.Event("fullscreen.ace.widget")),n.isDefaultPrevented())return;l.fullscreen()}else"settings"==o&&i.trigger("setting.ace.widget")}})}(window.jQuery);