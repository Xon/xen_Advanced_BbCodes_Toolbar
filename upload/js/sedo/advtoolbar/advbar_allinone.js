!function(n,t,i){n(function(){n(".AdvSpoilerbbCommand").find("img, iframe").each(function(){var t=n(this);t.data("spoilerSrc",t.attr("src")).attr("src",XenForo._baseUrl+"styles/default/xenforo/clear.png")})}),XenForo.AdvBbcodes={Spoilerbb:function(t){var u=t.attr("data-easing"),r=t.attr("data-duration"),i="adv_spoilerbb_content_noscript",f=t.children(".adv_spoilerbb_title").children("input.adv_spoiler_display").show().addClass("active");$boxhidden=t.children(".adv_spoilerbb_title").children("input.adv_spoiler_hidden").hide(),t.children(".adv_spoilerbb_content_box").children("div."+i).hide().removeClass(i),f.click(function(){var i=n(this);i.hasClass("active")&&(t.find("img, iframe").each(function(){var t=n(this);t.data("spoilerSrc")&&(t.attr("src",t.data("spoilerSrc")),t.data("spoilerSrc",""))}),i.hide().removeClass("active"),i.next().show().addClass("active"),i.parent().next().children("div").show(r,u))}),$boxhidden.click(function(){var t=n(this);t.hasClass("active")&&(t.hide().removeClass("active"),t.prev().show().addClass("active"),t.parent().next().children("div").hide(r,u))})},Accordion:function(t){var r=t.attr("data-easing"),i=t.attr("data-duration");t.children("dd:not(.AdvSlideOpen)").hide(),t.children("dt").click(function(){var e=n(this),o=e.parent().attr("id"),f=e.next(),u="AdvSlideActive";f.hasClass(u)?f.hasClass(u)&&(e.removeClass(u),f.removeClass(u).slideUp(i,r)):(n("#"+o+".adv_accordion > dt").removeClass(u),e.addClass(u),n("#"+o+".adv_accordion > dd").removeClass(u).slideUp(i,r),f.addClass(u).slideDown(i,r))})},FieldsetFix:function(n){var r=n.children("fieldset"),i=r.children("legend"),t=r.width(),u=i.width();u>t&&i.width(t)},Tabs:function(n){var t=n.children(".advtabs"),i=n.children(".advpanes").children("div");t.tabs(i),t.find(".openMe").trigger("click"),n.find(".adv_tabs_link").click(function(){return!1})},Slider:function(i){var f=XenForo.AdvBbcodes,u=[],e=[],r;i.each(function(t){var f=n(this),o=f.children(".advslidestabs"),e=f.children(".advslides").children("div"),h=e.find(".advSliderImage"),c=!f.data("noclick"),s,r;if(e.length==0)return!1;s=parseInt(i.attr("data-autoplay"))==1?1:0,r=parseInt(i.attr("data-interval")),r=isNaN(r)?3e3:r,h.length>0&&h.load(function(){var t=n(this),u,r;u=t.parents(".imageMode").hasClass("outside")?t.parents(".advslides"):t.parents(".adv_slider_wrapper"),r=new Image,r.src=t.attr("src"),t.parent().siblings(".adv_slide_mask").hide();var s=r.height,h=r.width,c=u.height(),o=u.width(),i,e,f;h>o&&(i=o/h,f=o,e=s*i),s>c&&(i=c/s,e=c,t.hasClass("full")||(f=h*i)),t.css({width:f,height:e})}).error(function(){f=n(this)}),o.tabs(e,{effect:"fade",fadeOutSpeed:"fast",rotate:!0,onBeforeClick:function(n,t){this.getCurrentPane().hide(),this.getPanes().removeClass("active").eq(t).addClass("active");var i=this.getPanes().eq(t);$w=this.getTabs().parent(),i.hasClass("imageMode")?$w.addClass("imageMenu"):$w.removeClass("imageMenu")}}).slideshow({prev:".adv_backward",next:".adv_forward",interval:r,clickable:c}),o.children(".open").trigger("click"),s===1&&(u[t]=o.get(0))}),f.SliderAutoWidth(),n(t).resize(function(){f.SliderAutoWidth()}),n(t).load(function(){u.length!=0&&n(u).data("slideshow").play()}),r=i.children(".advslidestabs"),r.children(".play").click(function(){n(this).parent().data("slideshow").play()}),r.children(".pause").click(function(){n(this).parent().data("slideshow").stop()})},SliderAutoWidth:function(){var i=n(".adv_slider_wrapper"),r=i.attr("data-autodiff");i.each(function(){var t=n(this),i;t.hasClass("inner")||(i=t.width()-r,t.find(".advAutoWidth, .imageMode").width(i))})}};var u=function(n,t){XenForo.register(n,"XenForo.AdvBbcodes."+t)};u(".AdvFieldsetTrigger","FieldsetFix"),u(".adv_accordion","Accordion"),u(".AdvSpoilerbbCommand","Spoilerbb"),u(".adv_tabs_wrapper","Tabs"),u(".adv_slider_wrapper","Slider"),n(i).bind("AutoValidationComplete",XenForo.AdvBbcodes.SliderAutoWidth)}(jQuery,this,document);