!function(n){XenForo.Adv_Template_Fieldset={AjaxResponse:!1,init:function(t){var u=XenForo.Adv_Template_Fieldset,i,f;if(t.hasClass("isMiu"))var e=t.attr("data-streched-width"),o=t.attr("data-normal-width"),r=t.attr("data-auto"),f=XenForo.MiuFramework.miu.selection;else{i=typeof tinyMCEPopup!="undefined"?tinyMCEPopup.editor:XenForo.tinymce.ed;var e=i.getParam("advtoolbar_template_strechedtitlewidth"),o=i.getParam("advtoolbar_template_normaltitlewidth"),r=i.getParam("advtoolbar_template_phrase_auto"),f=i.selection.getContent()}if(f.length!=0){if(u.AjaxResponse===!1)return u.globalElement=t,XenForo.ajax("index.php?editor/to-bb-code",{html:f},u.html2bbcode),!1;t.find("#ctrl_text").val(u.AjaxResponse)}t.find("#ctrl_title").one("focus",function(){data_ctrl_title_width=n(this).css("width"),n(this).val("")}).focus(function(){n(this).animate({width:e},"fast"),n(this).val()==r&&n(this).val("")}).focusout(function(){(n(this).val().length==0||n(this).val()==r)&&(n(this).val(r),n(this).animate({width:o},"fast"))}),$widthtype=t.find("#ctrl_widthtype").hide(),t.find("#ctrl_width").one("focus",function(){n(this).val("")}).focus(function(){$widthtype.show("fast"),n(this).val()==r&&n(this).val("")}).focusout(function(){var t=n(this).val(),i=new RegExp("[０-９]+");i.test(t)&&(t=u.zen2han(t),n(this).val(t)),(n(this).val().length==0||isNaN(n(this).val()))&&(n(this).val(r),$widthtype.hide("fast"))}),$widthtype.click(function(){n(this).val()=="%"?n(this).val("px"):n(this).val("%")}),t.find("#block_align li").click(function(){if($target=t.find("#ctrl_blockalign"),$active=t.find("#block_align li.active"),!n(this).hasClass("active")){var r=n(this).children("div").attr("id");$active.removeClass("active"),n(this).addClass("active"),$target.val(r)}})},zen2han:function(n){for(var t,r="",i=0,u=n.length;i<u;i++)t=n.charCodeAt(i),t=t>=65281&&t<=65392?t-65248:t,t=t===12540?45:t,r=r+String.fromCharCode(t);return r},unescapeHtml:function(n,t){n=n.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'"),t=="space"&&(n=n.replace(/    /g,"\t").replace(/&nbsp;/g,"  ").replace(/<\/p>\n<p>/g,"\n"));var i=new RegExp("^<p>([\\s\\S]+)</p>$","i");return i.test(n)&&(n=n.match(i),n=n[1]),n},html2bbcode:function(n){if(!XenForo.hasResponseError(n)){var t=XenForo.Adv_Template_Fieldset;return t.AjaxResponse=n.bbCode,t.init(t.globalElement),!1}}},XenForo.register("#adv_fieldset","XenForo.Adv_Template_Fieldset.init")}(jQuery,this,document);