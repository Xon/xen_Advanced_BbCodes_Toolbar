typeof Sedo=="undefined"&&(Sedo={}),!function(n,t,i){Sedo.AdvBbcodes={Spoilerbb:function(i){var r=i.attr("data-easing"),u=i.attr("data-duration"),f="adv_spoilerbb_content_noscript",e=i.children(".adv_spoilerbb_title").children("input.adv_spoiler_display").show().addClass("active");$boxhidden=i.children(".adv_spoilerbb_title").children("input.adv_spoiler_hidden").hide(),i.children(".adv_spoilerbb_content_box").children("div."+f).hide().removeClass(f),e.click(function(f){var e=n(this);e.hasClass("active")&&(i.find("img, iframe").each(function(){var t=n(this);t.data("spoilerSrc")&&(t.attr("src",t.data("spoilerSrc")),t.data("spoilerSrc",""))}),e.hide().removeClass("active"),e.next().show().addClass("active"),e.parent().next().children("div").show(u,r,function(){var i=n.Event("sedoRebuild",{$container:e,originalEvent:f});n(t).trigger(i)}))}),$boxhidden.click(function(){var t=n(this);t.hasClass("active")&&(t.hide().removeClass("active"),t.prev().show().addClass("active"),t.parent().next().children("div").hide(u,r))})},Accordion:function(i){var r=i.attr("data-easing"),u=i.attr("data-duration");i.children("dd:not(.AdvSlideOpen)").hide(),i.children("dt").click(function(i){var o=n(this),s=o.parent().attr("id"),e=o.next(),f="AdvSlideActive";e.hasClass(f)?e.hasClass(f)&&(o.removeClass(f),e.removeClass(f).slideUp(u,r)):(n("#"+s+".adv_accordion > dt").removeClass(f),o.addClass(f),n("#"+s+".adv_accordion > dd").removeClass(f).slideUp(u,r),e.addClass(f).slideDown(u,r,function(){var r=n.Event("sedoRebuild",{$container:e,originalEvent:i});n(t).trigger(r)}))})},FieldsetFix:function(n){var t=n.children("fieldset"),i=t.children("legend"),r=t.width(),u=i.width();u>r&&i.width(r)},Tabs:function(i){function c(){var t=0;return r.children().each(function(){t=t+n(this).width()}),t}function l(n){return n.parent().is(":visible")?n.parent():l(n.parent())}var r=i.children(".advtabs"),u=i.children(".advpanes").children("div"),f,o;r.tabs(u),r.find(".openMe").trigger("click"),i.find(".adv_tabs_link").click(function(){return!1});var s=i.width(),a=i.css("width").indexOf("%")!=-1,h=u.height(),e=c(),v=r.first().height(),y=r.children().length,p=v*(y-1);f=function(){var t=l(i),n=t.width()-2;e||(e=c()),a||(s>n?i.width(n):i.width(s)),e>n?(i.addClass("alter"),u.height(h-p)):(i.removeClass("alter"),u.height(h))},n(t).resize(function(){f()}),i.data("autoResize",f),r.click(function(){u.find(".adv_tabs_wrapper").each(function(){var t=n(this),i=t.data("autoResize");t.is(":visible")&&typeof i=="function"&&i()})}),r.children().click(function(i){var r=u.eq(n(this).index()),f=n.Event("sedoRebuild",{$container:r,originalEvent:i});n(t).trigger(f)}),o=i.is(":visible"),i.parentsUntil(".messageText").click(function(){var n=i.is(":visible");!o&&n&&f(),o=n}),f()},Slider:function(i){var f=Sedo.AdvBbcodes,r=[],e=[],u;i.each(function(t){var f=n(this),e=f.children(".advslidestabs"),o=f.children(".advslides").children("div"),s=o.find(".advSliderImage"),c=!f.data("noclick"),h,u;if(o.length==0)return!1;h=parseInt(i.attr("data-autoplay"))==1?1:0,u=parseInt(i.attr("data-interval")),u=isNaN(u)?3e3:u,s.length>0&&s.load(function(){var t=n(this),i,r;i=t.parents(".imageMode").hasClass("outside")?t.parents(".advslides"):t.parents(".adv_slider_wrapper"),r=new Image,r.src=t.attr("src"),t.parent().siblings(".adv_slide_mask").hide();var f=r.height,e=r.width,o=i.height(),s=i.width(),u,h,c;e>s&&(u=s/e,c=s,h=f*u),f>o&&(u=o/f,h=o,t.hasClass("full")||(c=e*u)),t.css({width:c,height:h})}).error(function(){f=n(this)}),e.tabs(o,{effect:"fade",fadeOutSpeed:"fast",rotate:!0,onBeforeClick:function(n,t){this.getCurrentPane().hide(),this.getPanes().removeClass("active").eq(t).addClass("active");var i=this.getPanes().eq(t);$w=this.getTabs().parent(),i.hasClass("imageMode")?$w.addClass("imageMenu"):$w.removeClass("imageMenu")}}).slideshow({prev:".adv_backward",next:".adv_forward",interval:u,clickable:c}),e.children(".open").trigger("click"),h===1&&(r[t]=e.get(0))}),f.SliderAutoWidth(),n(t).resize(function(){f.SliderAutoWidth()}),n(t).load(function(){r.length!=0&&n(r).data("slideshow").play()}),u=i.children(".advslidestabs"),u.children(".play").click(function(){n(this).parent().data("slideshow").play()}),u.children(".pause").click(function(){n(this).parent().data("slideshow").stop()})},SliderAutoWidth:function(){var i=n(".adv_slider_wrapper"),r=i.attr("data-autodiff");i.each(function(){var t=n(this),i;t.hasClass("inner")||(i=t.width()-r,t.find(".advAutoWidth, .imageMode").width(i))})},Bimg:function(i){function u(){var n=i.width(),t=r.width(),u=r.data("maxResize");t>=n?r.width(n):t!=u&&r.width(u)}var r=i.children();r.data("maxResize",r.width());n(t).on("resize",function(){u()})}};var u=function(n,t){XenForo.register(n,"Sedo.AdvBbcodes."+t)};u(".AdvFieldsetTrigger","FieldsetFix"),u(".adv_accordion","Accordion"),u(".adv_bimg_block","Bimg"),u(".AdvSpoilerbbCommand","Spoilerbb"),u(".adv_tabs_wrapper","Tabs"),u(".adv_slider_wrapper","Slider"),n(i).bind("AutoValidationComplete",Sedo.AdvBbcodes.SliderAutoWidth)}(jQuery,this,document);