!function(a,e){try{a("#skin-colorpicker").ace_colorpicker({auto_pos:!1})}catch(s){}a("#skin-colorpicker").on("change",function(){function e(e){var s=a(document.body);s.removeClass("no-skin skin-1 skin-2 skin-3"),s.addClass(e),ace.data.set("skin",e);var r=["red","blue","green",""];a(".ace-nav > li.grey").removeClass("dark"),a(".ace-nav > li").removeClass("no-border margin-1"),a(".ace-nav > li:not(:last-child)").removeClass("light-pink").find("> a > "+ace.vars[".icon"]).removeClass("pink").end().eq(0).find(".badge").removeClass("badge-warning"),a(".sidebar-shortcuts .btn").removeClass("btn-pink btn-white").find(ace.vars[".icon"]).removeClass("white"),a(".ace-nav > li.grey").removeClass("red").find(".badge").removeClass("badge-yellow"),a(".sidebar-shortcuts .btn").removeClass("btn-primary btn-white");var t=0;a(".sidebar-shortcuts .btn").each(function(){a(this).find(ace.vars[".icon"]).removeClass(r[t++])});var i=["btn-success","btn-info","btn-warning","btn-danger"];if("no-skin"==e){var t=0;a(".sidebar-shortcuts .btn").each(function(){a(this).attr("class","btn "+i[t++%4])}),a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle",""),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle","no-track scroll-thin")}else if("skin-1"==e){a(".ace-nav > li.grey").addClass("dark");var t=0;a(".sidebar-shortcuts").find(".btn").each(function(){a(this).attr("class","btn "+i[t++%4])}),a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle","scroll-white no-track"),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle","no-track scroll-thin scroll-white")}else if("skin-2"==e)a(".ace-nav > li").addClass("no-border margin-1"),a(".ace-nav > li:not(:last-child)").addClass("light-pink").find("> a > "+ace.vars[".icon"]).addClass("pink").end().eq(0).find(".badge").addClass("badge-warning"),a(".sidebar-shortcuts .btn").attr("class","btn btn-white btn-pink").find(ace.vars[".icon"]).addClass("white"),a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle","scroll-white no-track"),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle","no-track scroll-thin scroll-white");else if("skin-3"==e){s.addClass("no-skin"),a(".ace-nav > li.grey").addClass("red").find(".badge").addClass("badge-yellow");var t=0;a(".sidebar-shortcuts .btn").each(function(){a(this).attr("class","btn btn-primary btn-white"),a(this).find(ace.vars[".icon"]).addClass(r[t++])}),a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("updateStyle","scroll-dark no-track"),a(".sidebar[data-sidebar-hover=true]").ace_sidebar_hover("updateStyle","no-track scroll-thin")}a(".sidebar[data-sidebar-scroll=true]").ace_sidebar_scroll("reset"),ace.vars.old_ie&&ace.helper.redraw(document.body,!0)}var s=a(this).find("option:selected").data("skin");e(s)})}(jQuery);