CNVS.RoundedSkills=function(){function s(e,t){e.easyPieChart({size:t.size,animate:t.speed,scaleColor:!1,trackColor:t.trackcolor,lineWidth:t.width,lineCap:"square",barColor:t.color})}var a=SEMICOLON.Core;return{init:function(t){if(a.getSelector(t,!1,!1).length<1)return!0;a.loadJS({file:"plugins.piechart.js",id:"canvas-piechart-js",jsFolder:!0}),a.isFuncTrue(function(){return"undefined"!=typeof jQuery&&jQuery().easyPieChart}).then(function(e){return!!e&&(a.initFunction({class:"has-plugin-piechart",event:"pluginRoundedSkillReady"}),(t=a.getSelector(t)).length<1||void t.each(function(){var a=jQuery(this),e=a.attr("data-size")||140,t=a.attr("data-speed")||2e3,i=a.attr("data-width")||4,r=a.attr("data-color")||"#0093BF",n=a.attr("data-trackcolor")||"rgba(0,0,0,0.04)",o={size:Number(e),speed:Number(t),width:Number(i),color:r,trackcolor:n};a.css({width:e+"px",height:e+"px","line-height":e+"px"}),jQuery("body").hasClass("device-up-lg")?(a.animate({opacity:0},10),new IntersectionObserver(function(e,t){e.forEach(function(e){e.isIntersecting&&(a.hasClass("skills-animated")||(setTimeout(function(){a.css({opacity:1})},100),s(a,o),a.addClass("skills-animated")),t.unobserve(e.target))})},{rootMargin:"0px 0px 50px"}).observe(a[0])):s(a,o)}))})}}}();