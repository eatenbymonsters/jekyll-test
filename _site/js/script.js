function hasScrolled(){var a=$(this).scrollTop();Math.abs(lastScrollTop-a)<=delta||(a>lastScrollTop&&a>navbarHeight?$("header").removeClass("nav-down").addClass("nav-up"):a+$(window).height()<$(document).height()&&$("header").removeClass("nav-up").addClass("nav-down"),lastScrollTop=a)}$(document).ready(function(){function a(a){return a.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}function b(){for(var a=0,b=arguments.length;b>a;a++){var c=arguments[a],d=$(c);if(d.scrollTop()>0)return c;d.scrollTop(1);var e=d.scrollTop()>0;if(d.scrollTop(0),e)return c}return[]}var c=a(location.pathname),d=b("html","body");$("a[href*=#]").each(function(){var b=a(this.pathname)||c;if(c==b&&(location.hostname==this.hostname||!this.hostname)&&this.hash.replace(/#/,"")){var e=$(this.hash),f=this.hash;if(f){var g=e.offset().top;$(this).click(function(a){a.preventDefault(),$(d).animate({scrollTop:g},400,function(){location.hash=f})})}}})}),function(a){a.fn.fitText=function(b,c){var d=b||1,e=a.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},c);return this.each(function(){var b=a(this),c=function(){b.css("font-size",Math.max(Math.min(b.width()/(10*d),parseFloat(e.maxFontSize)),parseFloat(e.minFontSize)))};c(),a(window).on("resize.fittext orientationchange.fittext",c)})}}(jQuery),$(window).resize(function(){"absolute"==$(".topNav ul").css("position")&&$(".topNav ul").removeClass("down")}),$(document).ready(function(){$(".menuTitle").click(function(){$(".topNav ul").toggleClass("down")})}),$(document).ready(function(){var a=$(".big-drop-cap"),b=a.text(),c="</span>";firstLetter=b.charAt(0),firstLetterClass=firstLetter.toLowerCase(),openSpanCap='<span class="dropcap '+firstLetterClass+'">',openSpanRunIn='</span><span class="runIn '+firstLetterClass+'">',spannedFirstLetter=openSpanCap+firstLetter+openSpanRunIn,textShifted=b.substr(1,b.length),cappedText=spannedFirstLetter+textShifted,runInText=cappedText.split(" "),runInText.splice(9,0,c),runInText=runInText.join(" "),a.html(runInText)}),$(document).ready(function(){var a=$("blockquote"),b=a.text(),c='<p><span class="runIn">';closeSpan="</span>",runInText=b.split(" "),runInText.splice(0,0,c),runInText.splice(9,0,closeSpan),runInText=runInText.join(" "),a.html(runInText)});var didScroll,lastScrollTop=0,delta=5,navbarHeight=$("header").outerHeight();$(window).scroll(function(){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250);